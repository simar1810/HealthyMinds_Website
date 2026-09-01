"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../Button";
import { api } from "@/lib/api";
import { useTenant } from "@/contexts/TenantContext";
import { formatMajorUnits } from "@/lib/formatCurrency";
import {
  type ApiTemplate,
  type CarouselPlanCard,
  templateToCard,
} from "@/lib/mealPlanTemplateDisplay";
import { STARTING_PRICE_PER_MEAL_AED } from "@/lib/site-config";

export const MealPlansSection = () => {
  const router = useRouter();
  const { currency } = useTenant();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [plans, setPlans] = useState<CarouselPlanCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchTemplates = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await api.get<{ templates: ApiTemplate[] }>("/menu/list?type=templates", {
        noAuth: true,
      });
      setPlans((res.data?.templates ?? []).map((t) => templateToCard(t)));
    } catch {
      setPlans([]);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchTemplates();
  }, [fetchTemplates]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -360 : 360;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full overflow-hidden bg-white py-24">
      <div className="mx-auto mb-10 w-full max-w-[1400px] px-4 sm:px-6 lg:mb-12 lg:px-12">
        <h2 className="mb-2 text-[36px] font-extrabold tracking-tight text-[#2F3337] md:text-[44px]">
          Find your perfect meal plan
        </h2>
        <p className="mb-8 text-[15px] font-bold text-[#878E99]">
          From{" "}
          {formatMajorUnits(STARTING_PRICE_PER_MEAL_AED, currency, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
          /meal
        </p>

        <div className="flex w-full items-center justify-between">
          <Button
            type="button"
            onClick={() => router.push("/plans")}
            className="h-[46px] border-none bg-[#4F46E5] px-8 text-[15px] font-bold text-white shadow-sm hover:bg-[#4338CA]"
          >
            See plans
          </Button>

          <div className="hidden gap-3 md:flex">
            <button
              onClick={() => scroll("left")}
              className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
              aria-label="Scroll left"
              type="button"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary/20"
              aria-label="Scroll right"
              type="button"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full">
        {loading ? (
          <div className="flex gap-[18px] overflow-hidden pl-4 pr-4 sm:pl-6 lg:pl-12 md:gap-[24px]">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-[360px] min-w-[280px] shrink-0 animate-pulse rounded-[28px] bg-[#E5E7EB] md:min-w-[320px]"
              />
            ))}
          </div>
        ) : error ? (
          <div className="px-6 pb-8 text-center">
            <p className="mb-4 text-[15px] font-medium text-[#878E99]">
              We couldn&apos;t load meal plans.
            </p>
            <button
              type="button"
              onClick={() => void fetchTemplates()}
              className="inline-flex h-11 min-h-[44px] items-center rounded-full bg-[#4F46E5] px-6 text-sm font-semibold text-white"
            >
              Retry
            </button>
          </div>
        ) : plans.length === 0 ? (
          <p className="px-6 pb-8 text-center text-[15px] font-medium text-[#878E99]">
            No meal plan templates yet.
          </p>
        ) : (
          <div
            ref={scrollContainerRef}
            className="hide-scrollbar flex snap-x gap-[18px] overflow-x-auto pb-8 pl-4 pr-4 sm:pl-6 sm:pr-6 md:gap-[24px] lg:pl-12 lg:pr-12"
          >
            {plans.map((plan) => (
              <Link
                key={plan.id}
                href={`/meal-plans/${plan.id}`}
                className="group relative flex aspect-[4/4.5] min-w-[280px] shrink-0 snap-start cursor-pointer overflow-hidden rounded-[28px] bg-[#F7F7F8] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:ring-offset-2 md:aspect-[4/5] md:min-w-[320px] lg:min-w-[340px]"
              >
                {plan.image ? (
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 340px"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#ECEFF1]" aria-hidden />
                )}

                <div className="absolute inset-x-3 bottom-3 flex items-center rounded-[24px] bg-white/95 p-[14px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-sm md:inset-x-4 md:bottom-4 md:p-4">
                  <div className="mr-3 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-gray-100/50 bg-[#F7F7F8] text-[20px] shadow-sm md:mr-4 md:h-[44px] md:w-[44px] md:text-[22px]">
                    {plan.icon}
                  </div>
                  <div className="w-full flex-1 overflow-hidden">
                    <h3 className="mb-[6px] truncate text-[13px] font-extrabold text-[#2F3337] md:text-[14px]">
                      {plan.title}
                    </h3>
                    <div className="mb-[6px] flex h-[5px] w-full gap-[2px] overflow-hidden rounded-full bg-gray-100">
                      <div style={{ width: `${plan.macros.protein}%` }} className="h-full bg-[#8b5cf6]" />
                      <div style={{ width: `${plan.macros.carbs}%` }} className="h-full bg-[#f59e0b]" />
                      <div style={{ width: `${plan.macros.fat}%` }} className="h-full bg-[#60a5fa]" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
