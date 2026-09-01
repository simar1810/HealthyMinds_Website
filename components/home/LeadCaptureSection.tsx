"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTenant } from "@/contexts/TenantContext";
import { whatsappLink } from "@/lib/site-config";

const GOAL_OPTIONS = [
  "Eat healthy",
  "Lose weight",
  "Gain muscle",
  "Maintain weight",
];

export function LeadCaptureSection() {
  const router = useRouter();
  const { whatsappPhone, leadsEnabled } = useTenant();
  const [name, setName] = useState("");
  const [goal, setGoal] = useState(GOAL_OPTIONS[0]);
  const [mealsPerWeek, setMealsPerWeek] = useState("10");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  if (!leadsEnabled) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    if (!trimmedName || !trimmedPhone) {
      setError("Please enter your name and WhatsApp number.");
      return;
    }
    setError("");

    const message = [
      "Hi HealthyMinds, I'd like a meal plan quote.",
      `Name: ${trimmedName}`,
      `WhatsApp: ${trimmedPhone}`,
      `Goal: ${goal}`,
      `Meals per week: ${mealsPerWeek}`,
    ].join("\n");

    window.open(whatsappLink(message, whatsappPhone), "_blank", "noopener,noreferrer");

    const params = new URLSearchParams({
      goal: goal.toLowerCase().replace(/\s+/g, "-"),
      meals: mealsPerWeek,
      name: trimmedName,
    });
    router.push(`/plans?${params.toString()}`);
  };

  const inputClass =
    "h-12 w-full min-h-[44px] rounded-xl border border-border-subtle bg-surface px-4 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <section
      id="lead-form"
      className="border-y border-border-subtle bg-[#F7F7F8] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary-text">
              Get started
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#2F3337] sm:text-4xl">
              Tell us your goal. We&apos;ll WhatsApp your plan.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-secondary-text sm:text-lg">
              Name, number, and meals per week — our concierge replies on WhatsApp
              in minutes.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border-subtle bg-white p-6 shadow-sm sm:p-8 lg:col-span-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-foreground">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                  className={inputClass}
                  placeholder="Your first name"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-foreground">
                  Goal
                </span>
                <select
                  name="goal"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className={inputClass}
                >
                  {GOAL_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-foreground">
                  Meals per week
                </span>
                <input
                  type="number"
                  name="mealsPerWeek"
                  min={5}
                  max={21}
                  value={mealsPerWeek}
                  onChange={(e) => setMealsPerWeek(e.target.value)}
                  required
                  className={inputClass}
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-foreground">
                  WhatsApp number
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  autoComplete="tel"
                  className={inputClass}
                  placeholder="+971 50 123 4567"
                />
              </label>
            </div>

            {error ? (
              <p className="mt-4 rounded-xl bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              className="mt-6 inline-flex h-14 min-h-[44px] w-full items-center justify-center rounded-xl bg-primary text-base font-semibold text-white shadow-sm transition hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto sm:px-10"
            >
              Chat on WhatsApp
            </button>

            <p className="mt-4 text-sm text-secondary-text">
              Opens WhatsApp with your details pre-filled, then continues to plans.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
