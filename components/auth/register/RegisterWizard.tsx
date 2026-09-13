"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { api, TENANT_ID } from "@/lib/api";
import { RegisterOnboardingShell } from "@/components/auth/register/RegisterOnboardingShell";
import {
  DEFAULT_DIAL_CODE,
  dialCodeForApi,
  findRowBySelection,
  nationalPhoneForApi,
} from "@/lib/countryCodes";
import { conciergeWhatsAppUrl, leadWhatsAppSummary } from "@/lib/leadWhatsApp";
import {
  REGISTER_TOTAL_STEPS,
  buildLeadBody,
  defaultRegisterWizardState,
  RegisterWizardState,
} from "@/lib/registerApiMapping";
import {
  Step10Review,
  Step11Legal,
  Step12Submit,
  Step1NameEmail,
  Step2Vitals,
  Step3Gender,
  Step4Goals,
  Step5BmiRecap,
  Step6TargetWeight,
  Step7Activity,
  Step8Health,
  Step9Nutrition,
} from "@/components/auth/register/WizardSteps";

const STORAGE_KEY = "hm-lead-wizard-v1";

type Draft = { step: number; state: RegisterWizardState };

function loadDraft(): Draft | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Draft>;
    if (!parsed?.state || typeof parsed.state !== "object") return null;
    const base = defaultRegisterWizardState();
    const step =
      typeof parsed.step === "number"
        ? Math.min(REGISTER_TOTAL_STEPS, Math.max(1, Math.floor(parsed.step)))
        : 1;
    return { step, state: { ...base, ...parsed.state } };
  } catch {
    return null;
  }
}

function saveDraft(draft: Draft) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
  } catch {
    /* quota / private mode */
  }
}

function clearDraft() {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

function validateEmail(email: string): boolean {
  if (!email.trim()) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function phoneDigitsFromState(state: RegisterWizardState): { phone: string; countryCode: string } {
  const row = findRowBySelection(state.countrySelection);
  const countryCode = dialCodeForApi(row?.dialCode ?? DEFAULT_DIAL_CODE);
  const phone = nationalPhoneForApi(state.phone, countryCode);
  return { phone, countryCode };
}

export function RegisterWizard() {
  const [step, setStep] = useState(1);
  const [state, setState] = useState<RegisterWizardState>(defaultRegisterWizardState);
  const [hydrated, setHydrated] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [whatsappHref, setWhatsappHref] = useState("");

  useEffect(() => {
    const draft = loadDraft();
    if (draft) {
      setStep(draft.step);
      setState(draft.state);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || success) return;
    saveDraft({ step, state });
  }, [hydrated, step, state, success]);

  const goToStep = useCallback((n: number) => {
    setError("");
    setStep(Math.min(REGISTER_TOTAL_STEPS, Math.max(1, n)));
  }, []);

  const validateStep = useCallback(
    (s: number): string | null => {
      switch (s) {
        case 1: {
          const { phone } = phoneDigitsFromState(state);
          if (phone.length < 6) return "Please enter a valid WhatsApp number";
          if (!state.name.trim()) return "Please enter your name";
          if (!validateEmail(state.email)) return "Please enter a valid email";
          return null;
        }
        case 3:
          if (!state.gender) return "Please select your gender";
          return null;
        case 4:
          if (!state.goal) return "Please choose a goal";
          return null;
        case 7:
          if (!state.activityLevel) return "Please select your activity level";
          return null;
        case 9:
          if (!state.dietPreference) return "Please select a dietary preference";
          return null;
        case 11:
          if (!state.termsAccepted) return "Please confirm to continue";
          return null;
        default:
          return null;
      }
    },
    [state],
  );

  const submit = useCallback(async () => {
    const v =
      validateStep(1) ||
      validateStep(3) ||
      validateStep(4) ||
      validateStep(7) ||
      validateStep(9) ||
      validateStep(11);
    if (v) {
      setError(v);
      return;
    }
    if (!TENANT_ID) {
      setError("This site is missing its brand id. Please WhatsApp us instead.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const { phone, countryCode } = phoneDigitsFromState(state);
      const body = buildLeadBody(state, phone, countryCode, TENANT_ID);
      await api.post("/leads", body, { noAuth: true });
      clearDraft();
      setWhatsappHref(
        conciergeWhatsAppUrl(
          leadWhatsAppSummary({
            name: state.name,
            countryCode,
            phone,
            goal: state.goal,
          }),
        ),
      );
      setSuccess(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Could not send your details. Please try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [state, validateStep]);

  const onContinue = () => {
    const v = validateStep(step);
    if (v) {
      setError(v);
      return;
    }
    setError("");
    if (step >= REGISTER_TOTAL_STEPS) {
      void submit();
      return;
    }
    setStep((x) => x + 1);
  };

  const onBack = () => {
    setError("");
    setStep((x) => Math.max(1, x - 1));
  };

  const primaryLabel = step >= REGISTER_TOTAL_STEPS ? "Send my details" : "Continue";

  if (success) {
    return (
      <RegisterOnboardingShell step={REGISTER_TOTAL_STEPS}>
        <div className="space-y-5 text-center">
          <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-[1.65rem]">
            We have your details
          </h1>
          <p className="text-sm font-medium leading-relaxed text-secondary-text">
            We will contact you on WhatsApp. No payment on this site — a Healthy Minds concierge
            will follow up.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-foreground py-4 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
          >
            Message us on WhatsApp
          </a>
          <Link
            href="/"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl border-2 border-border-subtle py-4 text-sm font-semibold text-foreground transition hover:border-foreground/25"
          >
            Back to home
          </Link>
        </div>
      </RegisterOnboardingShell>
    );
  }

  return (
    <RegisterOnboardingShell step={step}>
      {step === 1 ? (
        <Step1NameEmail state={state} setState={setState} goToStep={goToStep} />
      ) : null}
      {step === 2 ? (
        <Step2Vitals state={state} setState={setState} goToStep={goToStep} />
      ) : null}
      {step === 3 ? (
        <Step3Gender state={state} setState={setState} goToStep={goToStep} />
      ) : null}
      {step === 4 ? (
        <Step4Goals state={state} setState={setState} goToStep={goToStep} />
      ) : null}
      {step === 5 ? (
        <Step5BmiRecap state={state} setState={setState} goToStep={goToStep} />
      ) : null}
      {step === 6 ? (
        <Step6TargetWeight state={state} setState={setState} goToStep={goToStep} />
      ) : null}
      {step === 7 ? (
        <Step7Activity state={state} setState={setState} goToStep={goToStep} />
      ) : null}
      {step === 8 ? (
        <Step8Health state={state} setState={setState} goToStep={goToStep} />
      ) : null}
      {step === 9 ? (
        <Step9Nutrition state={state} setState={setState} goToStep={goToStep} />
      ) : null}
      {step === 10 ? (
        <Step10Review state={state} setState={setState} goToStep={goToStep} />
      ) : null}
      {step === 11 ? (
        <Step11Legal state={state} setState={setState} goToStep={goToStep} />
      ) : null}
      {step === 12 ? <Step12Submit /> : null}

      <div className="mt-10 flex flex-col gap-3">
        {error ? (
          <p className="rounded-xl bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600" role="alert">
            {error}
          </p>
        ) : null}

        <div className="flex flex-col gap-2 sm:flex-row-reverse sm:gap-3">
          <button
            type="button"
            onClick={onContinue}
            disabled={loading}
            className="w-full min-h-12 rounded-2xl bg-foreground py-4 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 disabled:pointer-events-none disabled:opacity-50"
          >
            {loading ? "Sending…" : primaryLabel}
          </button>
          {step > 1 ? (
            <button
              type="button"
              onClick={onBack}
              disabled={loading}
              className="w-full min-h-12 rounded-2xl border-2 border-border-subtle bg-transparent py-4 text-sm font-semibold text-foreground transition hover:border-foreground/25 disabled:opacity-50"
            >
              Back
            </button>
          ) : null}
        </div>

        {step === 8 ? (
          <button
            type="button"
            onClick={() => {
              setError("");
              setStep(9);
            }}
            className="w-full min-h-11 py-2 text-center text-sm font-medium text-secondary-text underline-offset-2 hover:underline"
          >
            Skip for now
          </button>
        ) : null}

        {step < 12 ? (
          <p className="text-center text-xs text-secondary-text/90">
            Don&apos;t worry, your data is secure with us.
          </p>
        ) : null}
      </div>
    </RegisterOnboardingShell>
  );
}
