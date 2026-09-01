"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";
import { api } from "@/lib/api";
import { MENU_FILTERS } from "@/components/menu/FilterBar";
import type { PlanFilterId } from "@/lib/planFromMacros";
import { derivePlanFilterIdFromMacros } from "@/lib/planFromMacros";

const FALLBACK_IMAGE =
  "https://cdn.calo.app/food/46cfb754-32c1-4f59-93fa-026430ae9918/square@3x.jpg";

interface ApiRecipe {
  _id: string;
  title: string;
  nutrition?: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
  };
  tags?: string[];
  media?: string[];
}

interface PreviewMeal {
  id: string;
  title: string;
  image: string;
  calories: number | null;
  protein?: number;
  carbs?: number;
  fat?: number;
  planFilterId: PlanFilterId;
}

function mapRecipeToMeal(recipe: ApiRecipe): PreviewMeal {
  const n = recipe.nutrition;
  const caloriesNum = n?.calories != null && Number.isFinite(n.calories) ? Math.round(n.calories) : 0;
  const p = n?.protein ?? 0;
  const c = n?.carbs ?? 0;
  const f = n?.fat ?? 0;
  return {
    id: recipe._id,
    title: recipe.title,
    image: recipe.media?.[0] || FALLBACK_IMAGE,
    calories: n?.calories != null && Number.isFinite(n.calories) ? caloriesNum : null,
    protein: n?.protein,
    carbs: n?.carbs,
    fat: n?.fat,
    planFilterId: derivePlanFilterIdFromMacros({
      calories: caloriesNum,
      protein: p,
      carbs: c,
      fat: f,
    }),
  };
}

export const MenuPreview = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [meals, setMeals] = useState<PreviewMeal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchRecipes = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await api.get<{ recipes: ApiRecipe[] }>("/menu/list?type=recipes", {
        noAuth: true,
      });
      setMeals((res.data?.recipes ?? []).map(mapRecipeToMeal));
    } catch {
      setMeals([]);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchRecipes();
  }, [fetchRecipes]);

  const visibleMeals = useMemo(() => {
    if (activeTab === "all") return meals;
    return meals.filter((m) => m.planFilterId === activeTab);
  }, [meals, activeTab]);

  return (
    <section className="w-full overflow-hidden bg-white py-24">
      <div className="flex w-full flex-col items-center">
        <div className="mx-auto mb-6 max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-[40px] font-extrabold leading-[1.1] tracking-tight text-[#2F3337] md:text-[56px]">
            Discover our
            <br />
            daily-changing menu
          </h2>
          <p className="mb-10 text-[17px] font-medium text-[#6B7280]">
            Live recipes from this week&apos;s rotation — macros on every plate.
          </p>
          <Link href="/menu">
            <Button
              className="mb-10 h-11 border-none bg-[#4F46E5] px-8 text-[15px] font-semibold text-white shadow-sm hover:bg-[#4338CA]"
              size="md"
            >
              See full menu
            </Button>
          </Link>
        </div>

        {loading ? (
          <div className="flex w-full max-w-[100vw] gap-4 overflow-x-auto px-6 pb-10 md:gap-[18px] md:px-12">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-[280px] w-[260px] shrink-0 animate-pulse rounded-[28px] bg-[#F7F7F8] md:w-[280px]"
              />
            ))}
          </div>
        ) : error ? (
          <div className="px-6 pb-10 text-center">
            <p className="mb-4 text-[15px] font-medium text-[#6B7280]">
              We couldn&apos;t load this week&apos;s menu.
            </p>
            <button
              type="button"
              onClick={() => void fetchRecipes()}
              className="inline-flex h-11 min-h-[44px] items-center rounded-full bg-[#4F46E5] px-6 text-sm font-semibold text-white"
            >
              Retry
            </button>
          </div>
        ) : visibleMeals.length === 0 ? (
          <p className="px-6 pb-10 text-center text-[15px] font-medium text-[#6B7280]">
            {meals.length === 0
              ? "No recipes in the menu yet."
              : "No dishes match this filter."}
          </p>
        ) : (
          <div className="hide-scrollbar flex w-full max-w-[100vw] gap-4 overflow-x-auto px-6 pb-10 snap-x md:gap-[18px] md:px-12 xl:justify-center">
            {visibleMeals.map((meal) => (
              <div
                key={meal.id}
                className="group flex w-[260px] min-w-[260px] snap-center flex-col pt-2 text-left md:w-[280px] md:min-w-[280px]"
              >
                <div className="relative mb-[14px] h-[260px] w-full overflow-hidden rounded-[28px] bg-[#F7F7F8] md:h-[280px]">
                  <Image
                    src={meal.image}
                    alt={meal.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 260px, 280px"
                  />
                  {meal.calories != null ? (
                    <div className="absolute left-[14px] top-[14px] rounded-full bg-[#F7F7F8]/90 px-[10px] py-[4px] text-[11px] font-bold tracking-tight text-[#2F3337] backdrop-blur-sm">
                      {meal.calories} kcal
                    </div>
                  ) : null}
                </div>
                <h3 className="mb-[8px] line-clamp-1 text-[15px] font-extrabold leading-tight text-[#2F3337] sm:text-[16px]">
                  {meal.title}
                </h3>
                <div className="flex flex-wrap items-center gap-[10px] text-[11px] font-bold text-[#6B7280]">
                  {meal.protein != null ? (
                    <span>{Math.round(meal.protein)}g Protein</span>
                  ) : null}
                  {meal.carbs != null ? (
                    <span>{Math.round(meal.carbs)}g Carbs</span>
                  ) : null}
                  {meal.fat != null ? (
                    <span>{Math.round(meal.fat)}g Fat</span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 flex w-full max-w-[100vw] justify-start gap-[10px] overflow-x-auto px-6 pb-4 hide-scrollbar xl:justify-center">
          {MENU_FILTERS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex h-[44px] items-center whitespace-nowrap rounded-full px-[20px] text-[13px] font-bold transition-colors ${
                  isActive
                    ? "bg-[#3730A3] text-white shadow-sm"
                    : "bg-[#F9FAFB] text-[#2F3337] hover:bg-[#E5E7EB]"
                }`}
              >
                {tab.icon ? <span className="mr-[6px] text-[16px]">{tab.icon}</span> : null}
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
