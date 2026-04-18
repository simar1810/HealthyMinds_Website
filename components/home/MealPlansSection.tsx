"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { useTenant } from "@/contexts/TenantContext";
import { formatMajorUnits } from "@/lib/formatCurrency";
import {
  type ApiTemplate,
  type CarouselPlanCard,
  templateToCard,
} from "@/lib/mealPlanTemplateDisplay";

function macroCell(label: string): string {
  const g = label.match(/(\d+)\s*g/i);
  if (g) return `${g[1]}g`;
  const pct = label.match(/(\d+)\s*%/);
  if (pct) return `${pct[1]}%`;
  return "—";
}

export const MealPlansSection = () => {
  const router = useRouter();
  const { currency } = useTenant();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [plans, setPlans] = useState<CarouselPlanCard[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTemplates = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.get<{ templates: ApiTemplate[] }>("/menu/list?type=templates", {
        noAuth: true,
      });
      const list = res.data?.templates ?? [];
      setPlans(list.map((t) => templateToCard(t)));
    } catch {
      setPlans([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchTemplates();
  }, [fetchTemplates]);

  const hasPlans = plans.length > 0;

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24">
      <div className="mb-12 flex flex-col items-end justify-between gap-6 sm:flex-row sm:items-center">
        <h2 className="font-heading text-center text-4xl font-black uppercase tracking-tighter text-hm-on-surface sm:text-left md:text-5xl">
          Lock the Plan. Love the Plates.
        </h2>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-hm-outline-variant/40 bg-white text-hm-primary transition hover:bg-hm-surface-low"
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="m15 18-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-hm-outline-variant/40 bg-white text-hm-primary transition hover:bg-hm-surface-low"
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="m9 18 6-6-6-6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <p className="mb-10 text-center text-sm text-slate-600 sm:text-left">
        From{" "}
        {formatMajorUnits(2.5, currency, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
        /meal — explore every template and subscribe when you are ready.
      </p>

      {loading ? (
        <div className="flex gap-8 overflow-x-auto pb-4 hide-scrollbar">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="min-h-[420px] min-w-[380px] shrink-0 animate-pulse rounded-xl border border-hm-outline-variant/30 bg-white"
            />
          ))}
        </div>
      ) : !hasPlans ? (
        <p className="py-8 text-center text-slate-600">No meal plan templates yet.</p>
      ) : (
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-12 hide-scrollbar"
        >
          {plans.map((plan, index) => {
            const pg = macroCell(plan.labels.p);
            const cg = macroCell(plan.labels.c);
            const fg = macroCell(plan.labels.f);
            const featured = plans.length >= 2 && index === 1;
            return (
              <div
                key={plan.id}
                className={`flex min-h-[420px] min-w-[380px] shrink-0 flex-col rounded-xl p-8 shadow-sm ${
                  featured
                    ? "relative overflow-hidden bg-gradient-to-br from-hm-primary to-hm-primary-mid text-white shadow-xl"
                    : "border border-hm-outline-variant/20 bg-white"
                }`}
              >
                {featured ? (
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/10 blur-3xl"
                    aria-hidden
                  />
                ) : null}
                <h3
                  className={`font-heading text-3xl font-extrabold uppercase ${featured ? "relative" : ""}`}
                >
                  {plan.title}
                </h3>
                <p
                  className={`relative mb-8 mt-2 text-sm ${featured ? "text-white/80" : "text-slate-500"}`}
                >
                  Chef-crafted rotation with macros tuned to this plan.
                </p>
                <div className="relative mb-8 grid grid-cols-3 gap-4">
                  {[
                    { v: pg, k: "PRO", highlight: true },
                    { v: cg, k: "CARB", highlight: false },
                    { v: fg, k: "FAT", highlight: false },
                  ].map((cell) => (
                    <div
                      key={cell.k}
                      className={`rounded-lg p-3 text-center ${
                        featured ? "bg-white/10" : "bg-hm-surface-low"
                      }`}
                    >
                      <p
                        className={`text-lg font-bold ${
                          featured
                            ? "text-white"
                            : cell.highlight
                              ? "text-hm-primary"
                              : "text-hm-on-surface"
                        }`}
                      >
                        {cell.v}
                      </p>
                      <p
                        className={`text-[10px] font-bold uppercase tracking-widest ${
                          featured ? "text-white/80" : "text-slate-500"
                        }`}
                      >
                        {cell.k}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-auto flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => router.push(`/meal-plans/${plan.id}`)}
                    className={`w-full rounded-xl py-4 text-sm font-bold uppercase tracking-widest transition ${
                      featured
                        ? "bg-white text-hm-primary hover:bg-slate-100"
                        : "border-2 border-hm-primary text-hm-primary hover:bg-hm-primary hover:text-white"
                    }`}
                  >
                    Select {plan.title}
                  </button>
                  <Link
                    href="/plans"
                    className={`text-center text-xs font-semibold underline-offset-4 hover:underline ${
                      featured ? "text-white/90" : "text-hm-primary"
                    }`}
                  >
                    Compare on plans page
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
