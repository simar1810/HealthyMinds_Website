"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { api } from "@/lib/api";
import { useTenant } from "@/contexts/TenantContext";
import { formatMinorUnits, formatMajorUnits } from "@/lib/formatCurrency";
import {
  collectRawDurationKeysFromPricing,
  daysForDurationKey,
  planDurationListTitle,
  supportedDurationKeysPresent,
} from "@/lib/mealPlanDurationTiers";

const GOAL_EMOJIS: Record<string, string> = {
  balanced: "⚖️",
  "high-protein": "🍗",
  "high protein": "🍗",
  "low-carb": "🥑",
  "low carb": "🥑",
  vegetarian: "🥦",
  vegan: "🥦",
  "chef's picks": "👨‍🍳",
  chefs_picks: "👨‍🍳",
  custom: "🏋️",
  "custom macros": "🏋️",
  keto: "🥑",
  lose_weight: "⚖️",
  gain_muscle: "🍗",
  muscle_gain: "🍗",
  high_protein: "🍗",
  maintain: "⚖️",
};

interface BackendPlan {
  _id: string;
  title: string;
  goalType?: string;
  dietType?: string;
  structure: Record<string, unknown>;
  pricing?: {
    breakfast?: Record<string, number>;
    lunch?: Record<string, number>;
    dinner?: Record<string, number>;
    snack?: Record<string, number>;
  };
}

interface PlanType {
  id: string;
  title: string;
  desc: string;
  emoji: string;
  style: string;
}

interface Cycle {
  id: string;
  title: string;
  subtext: string;
  priceDisplay: string;
  save: string | null;
  amount: number;
}

const FALLBACK_PLAN_TYPES: PlanType[] = [
  { id: "balanced", title: "Balanced", desc: "Provides the nutrients your body needs to thrive", emoji: "⚖️", style: "default" },
  { id: "custom", title: "Custom Macros", desc: "Designed for athletes and fitness focused individuals", emoji: "🏋️", style: "custom" },
  { id: "chef", title: "Chef's Picks", desc: "Dishes crafted for your cravings, not your fitness goals", emoji: "👨‍🍳", style: "default" },
  { id: "low-carb", title: "Low-Carb", desc: "Low in carbs, but high in healthy fats, and non-starchy veggies", emoji: "🥑", style: "default" },
  { id: "high-protein", title: "High Protein", desc: "Boosts muscle strength and vitality with lean proteins", emoji: "🍗", style: "default" },
  { id: "vegetarian", title: "Vegetarian", desc: "Plant-based dishes with colorful veggies and hearty grains", emoji: "🥦", style: "default" },
];

const MEAL_TYPES = ["Breakfast", "Lunch", "Dinner", "Snack"];
const DAYS = ["S", "M", "T", "W", "T", "F", "S"];

const FALLBACK_CYCLES: Cycle[] = [
  { id: "20", title: "20 days", subtext: "Programme length", priceDisplay: "—", save: null, amount: 0 },
  { id: "24", title: "24 days", subtext: "Programme length", priceDisplay: "—", save: null, amount: 0 },
  { id: "30", title: "30 days", subtext: "Programme length", priceDisplay: "—", save: null, amount: 0 },
  { id: "90", title: "90 days", subtext: "Programme length", priceDisplay: "—", save: null, amount: 0 },
];

function formatApiLabel(value: string | undefined): string {
  if (!value?.trim()) return "";
  return value
    .replace(/[-_]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

function buildPlanDescription(goalType?: string, dietType?: string): string {
  const goal = formatApiLabel(goalType);
  const diet = formatApiLabel(dietType);
  if (goal && diet) return `${goal} • ${diet}`;
  return goal || diet || "Customized meal plan";
}

function buildCycles(
  pricing: BackendPlan["pricing"],
  selectedMeals: string[],
  currency: string
): { cycles: Cycle[]; unsupportedLegacyOnly: boolean } {
  if (!pricing) {
    return { cycles: FALLBACK_CYCLES, unsupportedLegacyOnly: false };
  }

  const mealKeys = selectedMeals.map((m) => m.toLowerCase());
  const raw = collectRawDurationKeysFromPricing(pricing, [
    "breakfast",
    "lunch",
    "dinner",
    "snack",
  ]);
  const sorted = supportedDurationKeysPresent(raw);

  if (sorted.length === 0) {
    if (raw.size > 0) {
      return { cycles: [], unsupportedLegacyOnly: true };
    }
    return { cycles: FALLBACK_CYCLES, unsupportedLegacyOnly: false };
  }

  const cycles: Cycle[] = [];
  for (const dur of sorted) {
    const days = daysForDurationKey(dur);
    if (days == null) continue;
    let total = 0;
    let pricedSlots = 0;
    for (const mk of mealKeys) {
      const tierObj = pricing[mk as keyof NonNullable<BackendPlan["pricing"]>];
      const slotPrice = tierObj?.[dur];
      if (slotPrice != null && slotPrice > 0) {
        total += slotPrice;
        pricedSlots += 1;
      }
    }
    const mealCount = pricedSlots > 0 ? pricedSlots : Math.max(mealKeys.length, 1);
    const perMeal = mealCount * days > 0 ? total / (mealCount * days) : 0;
    cycles.push({
      id: dur,
      title: planDurationListTitle(dur),
      subtext: `${formatMajorUnits(total, currency)} for ${days} days`,
      priceDisplay: `${formatMajorUnits(perMeal, currency, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })}/meal`,
      save: null,
      amount: Math.round(total * 100),
    });
  }

  if (cycles.length === 0) {
    return { cycles: [], unsupportedLegacyOnly: true };
  }

  return { cycles, unsupportedLegacyOnly: false };
}

export default function PlansPage() {
  const { currency } = useTenant();

  const [backendPlans, setBackendPlans] = useState<BackendPlan[]>([]);
  const [planTypes, setPlanTypes] = useState<PlanType[]>(FALLBACK_PLAN_TYPES);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedMeals, setSelectedMeals] = useState<string[]>(["Breakfast", "Lunch", "Dinner"]);
  const [selectedDays, setSelectedDays] = useState<number[]>([0, 1, 2, 3, 4]);
  const [selectedCycle, setSelectedCycle] = useState("");
  const [cycles, setCycles] = useState<Cycle[]>(FALLBACK_CYCLES);
  const [unsupportedDurationTiers, setUnsupportedDurationTiers] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchPlans = useCallback(async () => {
    try {
      const res = await api.get<{ templates: BackendPlan[] }>("/menu/list?type=templates", {
        noAuth: true,
      });
      const plans = Array.isArray(res.data?.templates) ? res.data.templates : [];
      if (plans.length > 0) {
        setBackendPlans(plans);
        const mapped: PlanType[] = plans.map((p) => {
          const key = (p.dietType || p.goalType || p.title || "").toLowerCase();
          return {
            id: p._id,
            title: p.title,
            desc: buildPlanDescription(p.goalType, p.dietType),
            emoji: GOAL_EMOJIS[key] || "🍽️",
            style: key.includes("custom") ? "custom" : "default",
          };
        });
        setPlanTypes(mapped);
        setSelectedPlan(mapped[0].id);
      } else {
        setSelectedPlan(FALLBACK_PLAN_TYPES[0].id);
      }
    } catch {
      setSelectedPlan(FALLBACK_PLAN_TYPES[0].id);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchPlans();
  }, [fetchPlans]);

  useEffect(() => {
    const plan = backendPlans.find((p) => p._id === selectedPlan);
    if (!plan?.pricing) {
      setCycles(FALLBACK_CYCLES);
      setUnsupportedDurationTiers(false);
      if (!FALLBACK_CYCLES.find((cy) => cy.id === selectedCycle)) {
        setSelectedCycle(FALLBACK_CYCLES[0]?.id ?? "");
      }
      return;
    }
    const { cycles: c, unsupportedLegacyOnly } = buildCycles(plan.pricing, selectedMeals, currency);
    setCycles(c);
    setUnsupportedDurationTiers(unsupportedLegacyOnly);
    if (c.length > 0 && !c.find((cy) => cy.id === selectedCycle)) {
      setSelectedCycle(c[0].id);
    }
    if (c.length === 0) {
      setSelectedCycle("");
    }
  }, [selectedPlan, selectedMeals, backendPlans, selectedCycle, currency]);

  const toggleMeal = (meal: string) => {
    setSelectedMeals((prev) =>
      prev.includes(meal) ? prev.filter((m) => m !== meal) : [...prev, meal]
    );
  };

  const toggleDay = (idx: number) => {
    setSelectedDays((prev) =>
      prev.includes(idx) ? prev.filter((d) => d !== idx) : [...prev, idx].sort()
    );
  };

  const getSelectedPlanTitle = () =>
    planTypes.find((p) => p.id === selectedPlan)?.title || "";

  const getCurrentCycle = () => cycles.find((c) => c.id === selectedCycle);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-hm-surface pb-24 pt-[calc(5.75rem+env(safe-area-inset-top,0px))] text-hm-on-surface landscape:max-lg:pt-[calc(4.75rem+env(safe-area-inset-top,0px))] sm:pt-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 rounded-2xl border border-slate-200/90 bg-white px-4 py-6 shadow-sm sm:px-6 sm:py-8 md:mb-14 md:px-10 md:py-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-hm-primary">Plans</p>
          <h1 className="font-heading mt-3 text-[1.5rem] font-black uppercase leading-snug tracking-tight break-words text-hm-on-surface sm:text-4xl md:text-5xl">
            Customize your
            <br />
            perfect meal plan
          </h1>
          <p className="mt-4 max-w-full break-words text-[15px] leading-relaxed text-slate-600 sm:text-base md:text-lg">
            Browse styles and prices. When you&apos;re ready, tell us your goals — we&apos;ll WhatsApp you. No payment on this site.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="relative flex min-w-0 flex-col gap-10 lg:flex-row lg:gap-[80px]">
          {/* Left Column */}
          <div className="flex min-w-0 flex-1 flex-col gap-10 sm:gap-14">
            {/* Section 1: Plan Preferences */}
            <section>
              <h2 className="font-heading mb-6 text-xl font-bold uppercase tracking-tight text-hm-on-surface sm:text-2xl md:text-[26px]">
                What kind of meals do you prefer?
              </h2>
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="min-h-[170px] animate-pulse rounded-[24px] border-2 border-slate-200/90 bg-hm-surface-low p-[22px]"
                    />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
                  {planTypes.map((plan) => {
                    const isActive = selectedPlan === plan.id;
                    return (
                      <div
                        key={plan.id}
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`relative flex min-h-[160px] cursor-pointer flex-col justify-between rounded-2xl border-2 p-4 transition-all sm:min-h-[170px] sm:p-[22px] ${
                          isActive
                            ? "border-hm-primary bg-red-50/80 shadow-md"
                            : "border-slate-200/90 bg-white shadow-sm hover:border-hm-primary/25"
                        }`}
                      >
                        <div className="mb-4 flex items-start justify-between gap-3 sm:mb-6">
                          <div className="min-w-0 flex-1 pr-1">
                            <h3 className="mb-1.5 break-words text-[16px] font-bold text-hm-on-surface sm:text-[17px]">
                              {plan.title}
                            </h3>
                            <p className="break-words text-[13px] font-medium leading-[1.4] text-slate-600">
                              {plan.desc}
                            </p>
                          </div>
                          <div className="shrink-0 text-3xl leading-none sm:text-[42px]" aria-hidden>
                            {plan.emoji}
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-auto pt-2">
                          <Link
                            href={`/meal-plans/${plan.id}`}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1 text-[13px] font-semibold text-primary underline-offset-2 hover:underline"
                          >
                            Learn More{" "}
                            <span className="text-[12px] font-medium">&rarr;</span>
                          </Link>
                          {isActive ? (
                            <div className="flex items-center gap-1.5 rounded-full bg-primary-hover px-3 py-[7px] text-white shadow-sm">
                              <svg
                                className="w-3 h-3 ml-0.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-[11.5px] font-[800] tracking-tight mr-1">
                                Selected
                              </span>
                            </div>
                          ) : plan.style === "custom" ? (
                            <div className="rounded-full bg-primary/10 px-[18px] py-[7px] text-primary">
                              <span className="text-[12px] font-semibold tracking-tight">
                                Build my plan
                              </span>
                            </div>
                          ) : (
                            <div className="rounded-full bg-primary/10 px-[18px] py-[7px] text-primary transition-colors hover:bg-primary/15">
                              <span className="text-[12px] font-[800] tracking-tight">
                                Select Plan
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>

            {/* Section 2: Meal Count */}
            <section>
              <h2 className="font-heading mb-2 text-xl font-semibold tracking-tight text-hm-on-surface sm:text-[26px]">
                How many meals per day?
              </h2>
              <p className="mb-6 text-[14px] font-medium text-slate-600">
                Select a minimum of 2 meals, including lunch or dinner.
              </p>
              <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
                {MEAL_TYPES.map((meal) => {
                  const isActive = selectedMeals.includes(meal);
                  return (
                    <button
                      key={meal}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => toggleMeal(meal)}
                      className={`flex min-h-12 w-full cursor-pointer items-center justify-between gap-3 rounded-[16px] border-2 px-4 py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:px-5 sm:py-[18px] ${
                        isActive
                          ? "border-primary bg-primary/10"
                          : "border-slate-200/90 bg-white shadow-sm hover:border-slate-300"
                      }`}
                    >
                      <span className="text-[15px] font-semibold text-hm-on-surface">
                        {meal}
                      </span>
                      {isActive ? (
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary" aria-hidden>
                          <svg
                            className="h-3.5 w-3.5 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                      ) : (
                        <span className="h-6 w-6 shrink-0 rounded-full border-2 border-slate-200/90 bg-white" aria-hidden />
                      )}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Section 3: Days a Week */}
            <section>
              <h2 className="font-heading mb-2 text-xl font-semibold tracking-tight text-hm-on-surface sm:text-[26px]">
                How many days a week are you eating Healthy Minds?
              </h2>
              <p className="mb-8 text-[14px] font-medium text-slate-600">
                Select a minimum of 5 days
              </p>
              <div className="grid w-full grid-cols-7 gap-1.5 sm:gap-3">
                {DAYS.map((day, idx) => {
                  const isActive = selectedDays.includes(idx);
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => toggleDay(idx)}
                      className={`flex min-h-11 w-full items-center justify-center rounded-full text-[14px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:min-h-[46px] sm:text-[15px] ${
                        isActive
                          ? "bg-primary text-white shadow-sm"
                          : "bg-hm-surface-low text-slate-600 hover:bg-slate-200/50"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Section 4: Plan duration (API tiers: 20 / 24 / 30 / 90 days) */}
            <section>
              <h2 className="font-heading mb-5 text-xl font-semibold tracking-tight text-hm-on-surface sm:mb-[26px] sm:text-[26px]">
                Plan duration
              </h2>
              {unsupportedDurationTiers ? (
                <p
                  className="mb-6 rounded-2xl border border-amber-200/80 bg-amber-50 px-4 py-3 text-[13px] font-medium leading-relaxed text-amber-950"
                  role="status"
                >
                  This plan&apos;s pricing is still on an older format we no longer support here. Please refresh
                  later or pick another plan. Once plans are re-saved in admin, the 20, 24, 30, and 90-day
                  programmes will appear.
                </p>
              ) : null}
              <div
                className="mb-6 flex flex-col gap-[14px] sm:mb-[24px] sm:gap-[18px]"
                role="radiogroup"
                aria-label="Plan duration"
              >
                {cycles.map((cycle) => {
                  const isActive = selectedCycle === cycle.id;
                  return (
                    <button
                      key={cycle.id}
                      type="button"
                      role="radio"
                      aria-checked={isActive}
                      onClick={() => setSelectedCycle(cycle.id)}
                      className={`flex min-h-14 w-full min-w-0 cursor-pointer items-center justify-between gap-3 rounded-[16px] border-2 px-4 py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:gap-[14px] sm:px-6 sm:py-5 ${
                        isActive
                          ? "border-primary bg-primary/10"
                          : "border-slate-200/90 bg-white shadow-sm hover:border-slate-300"
                      }`}
                    >
                      <div className="flex min-w-0 flex-1 flex-col">
                        <span className="mb-1 text-[15px] font-semibold text-hm-on-surface">
                          {cycle.title}
                        </span>
                        <span className="break-words text-[12px] font-semibold tracking-tight text-slate-600">
                          {cycle.subtext}
                        </span>
                      </div>
                      <div className="flex shrink-0 items-center gap-2 sm:gap-[14px]">
                        <span className="whitespace-nowrap text-[12px] font-semibold tabular-nums text-hm-on-surface sm:text-[13px]">
                          {cycle.priceDisplay}
                        </span>
                        <span
                          className={`h-[22px] w-[22px] shrink-0 rounded-full ${
                            isActive
                              ? "bg-primary"
                              : "border-2 border-slate-200/90 bg-white"
                          }`}
                          aria-hidden
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Right Column (Sticky Sidebar) */}
          <div className="w-full min-w-0 shrink-0 lg:w-[360px]">
            <div className="w-full lg:sticky lg:top-32">
              <div className="mb-6 rounded-[24px] border border-slate-200/90 bg-hm-surface-low p-4 shadow-[0px_4px_24px_rgba(27,48,34,0.06)] sm:rounded-[32px] sm:p-7">
                <div className="mb-6 flex items-start justify-between gap-3 sm:mb-8">
                  <div className="min-w-0 flex-1 pr-2 sm:pr-[18px]">
                    <h3 className="font-heading mb-3 text-[18px] font-semibold tracking-tight text-hm-on-surface sm:mb-[14px] sm:text-[20px]">
                      Your package, your way
                    </h3>
                    <p className="break-words text-[13.5px] font-semibold leading-[1.6] text-slate-600">
                      {getSelectedPlanTitle()}, {selectedMeals.length}{" "}
                      {selectedMeals.length === 1 ? "meal" : "meals"},{" "}
                      {selectedDays.length} days per week
                      {selectedCycle ? `, ${getCurrentCycle()?.title ?? ""}` : ""}
                    </p>
                  </div>
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-white font-black shadow-sm sm:h-[64px] sm:w-[64px]">
                    <span className="text-[28px] sm:text-[36px]" aria-hidden>
                      🛍️
                    </span>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:gap-[10px]">
                  <div className="flex-1 relative">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <svg
                        className="h-[18px] w-[18px] rotate-90 text-slate-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="4" y1="9" x2="20" y2="9"></line>
                        <line x1="4" y1="15" x2="20" y2="15"></line>
                        <line x1="10" y1="3" x2="8" y2="21"></line>
                        <line x1="16" y1="3" x2="14" y2="21"></line>
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Add promotion code"
                      className="w-full rounded-[14px] border border-slate-200/90 bg-white py-[15px] pl-[38px] pr-4 text-[13px] font-semibold text-hm-on-surface placeholder:text-slate-600/70 transition-shadow focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <button
                    type="button"
                    className="rounded-[14px] bg-hm-surface-low px-6 py-[15px] text-[13px] font-semibold tracking-tight text-slate-600 transition-colors hover:bg-slate-200/50"
                  >
                    Apply
                  </button>
                </div>

                {/* Subscription Coupon */}
                <div className="mb-8 flex items-center justify-between gap-3 rounded-[14px] border border-dashed border-slate-200/90 bg-white p-4 sm:mb-10">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="mt-1 shrink-0 -rotate-12 transform rounded-sm bg-primary px-[6px] py-[1.5px] text-[8px] font-black italic text-white">
                      🎟️
                    </div>
                    <div className="flex min-w-0 flex-col">
                      <span className="mb-0.5 break-words text-[12.5px] font-semibold leading-[1.3] text-hm-on-surface">
                        10% off subscription
                      </span>
                      <span className="break-words text-[11px] font-semibold tracking-tight text-slate-600">
                        with 6+ days/week on your package.
                      </span>
                    </div>
                  </div>
                  <div className="ml-2 flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-primary/15 text-[18px] font-bold text-primary">
                    +
                  </div>
                </div>

                {/* Indicative pricing */}
                <div className="flex flex-col gap-[14px] mb-[28px]">
                  <h4 className="mb-1 text-[14px] font-semibold tracking-tight text-hm-on-surface">
                    Indicative price
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-semibold tracking-tight text-slate-600">
                      Plan price
                    </span>
                    <span className="text-[13px] font-semibold text-hm-on-surface">
                      {getCurrentCycle()
                        ? formatMinorUnits(getCurrentCycle()!.amount, currency)
                        : "--"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-200/90 pb-[18px]">
                    <span className="text-[13px] font-semibold tracking-tight text-slate-600">
                      Delivery fee
                    </span>
                    <span className="text-[13px] font-semibold text-hm-on-surface">
                      {formatMinorUnits(0, currency)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-heading text-[16px] font-semibold tracking-tight text-hm-on-surface">
                      Total
                    </span>
                    <span className="font-heading text-[16px] font-semibold tracking-tight text-hm-on-surface">
                      {getCurrentCycle()
                        ? formatMinorUnits(getCurrentCycle()!.amount, currency)
                        : "--"}
                    </span>
                  </div>
                </div>

                <Link
                  href="/auth/register"
                  className="flex w-full min-h-12 items-center justify-center rounded-full bg-primary py-[16px] text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover"
                >
                  Tell us your goals
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
