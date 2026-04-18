"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MENU_FILTERS } from "@/components/menu/FilterBar";
import { api } from "@/lib/api";
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
  calories: string | null;
  protein?: number;
  carbs?: number;
  fat?: number;
  customText?: string;
  planFilterId: PlanFilterId;
}

function mapRecipeToMeal(recipe: ApiRecipe): PreviewMeal {
  const n = recipe.nutrition;
  const hasCalories = n?.calories != null && Number.isFinite(n.calories);
  const p = n?.protein;
  const c = n?.carbs;
  const f = n?.fat;
  const hasP = p != null && Number.isFinite(p);
  const hasC = c != null && Number.isFinite(c);
  const hasF = f != null && Number.isFinite(f);
  const hasAnyMacro = hasP || hasC || hasF;
  const caloriesNum = hasCalories ? Math.round(n!.calories!) : 0;
  const planFilterId = derivePlanFilterIdFromMacros({
    calories: caloriesNum,
    protein: hasP ? (p as number) : 0,
    carbs: hasC ? (c as number) : 0,
    fat: hasF ? (f as number) : 0,
  });

  return {
    id: recipe._id,
    title: recipe.title,
    image: recipe.media?.[0] || FALLBACK_IMAGE,
    calories: hasCalories ? `${caloriesNum} CALORIES` : null,
    protein: hasP ? p : undefined,
    carbs: hasC ? c : undefined,
    fat: hasF ? f : undefined,
    customText: !hasAnyMacro ? "Macros on request" : undefined,
    planFilterId,
  };
}

function mealMatchesTab(meal: PreviewMeal, tabId: string): boolean {
  if (tabId === "all") return true;
  return meal.planFilterId === tabId;
}

function tagForMeal(meal: PreviewMeal): { text: string; className: string } {
  switch (meal.planFilterId) {
    case "high-protein":
      return { text: "PROTEIN+", className: "text-hm-tertiary" };
    case "low-carb":
      return { text: "LOW CARB", className: "text-hm-primary" };
    case "balanced":
      return { text: "HEALTHY", className: "text-hm-tertiary" };
    default:
      return { text: "CHEF CHOICE", className: "text-hm-primary" };
  }
}

export const MenuPreview = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [meals, setMeals] = useState<PreviewMeal[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.get<{ recipes: ApiRecipe[]; templates?: unknown[] }>(
        "/menu/list?type=recipes",
        { noAuth: true },
      );
      const recipes = res.data?.recipes ?? [];
      setMeals(recipes.map(mapRecipeToMeal));
    } catch {
      setMeals([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchRecipes();
  }, [fetchRecipes]);

  const visibleMeals = useMemo(
    () => meals.filter((m) => mealMatchesTab(m, activeTab)),
    [meals, activeTab],
  );

  return (
    <section id="menu" className="relative scroll-mt-28 bg-hm-surface-low py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div>
            <h2 className="font-heading text-4xl font-black uppercase leading-tight tracking-tighter text-hm-on-surface md:text-5xl">
              Same Kitchen.
              <br />
              New Picks Weekly.
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {MENU_FILTERS.map((tab) => {
                const selected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-full px-6 py-2 text-sm font-bold uppercase tracking-wide transition-colors ${
                      selected
                        ? "bg-hm-primary text-white"
                        : "bg-white text-hm-on-surface hover:bg-hm-surface-container-high"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
          <Link
            href="/menu"
            className="mb-2 border-b-2 border-hm-primary pb-1 text-sm font-bold text-hm-primary transition-opacity hover:opacity-80"
          >
            View full menu
          </Link>
        </div>

        {loading ? (
          <div className="flex gap-8 overflow-x-auto pb-12 hide-scrollbar">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="min-w-[320px] shrink-0 rounded-xl bg-white p-4"
              >
                <div className="mb-6 aspect-square animate-pulse rounded-lg bg-hm-surface-container" />
                <div className="h-4 w-[66%] animate-pulse rounded bg-hm-surface-container" />
              </div>
            ))}
          </div>
        ) : visibleMeals.length === 0 ? (
          <p className="py-8 text-center text-slate-600">
            {meals.length === 0
              ? "No recipes in the menu yet."
              : "No dishes match this filter."}
          </p>
        ) : (
          <div className="flex gap-8 overflow-x-auto pb-12 hide-scrollbar">
            {visibleMeals.map((meal) => {
              const tag = tagForMeal(meal);
              return (
                <button
                  key={meal.id}
                  type="button"
                  onClick={() => router.push("/menu")}
                  className="min-w-[320px] shrink-0 rounded-xl bg-white p-4 text-left transition-shadow hover:shadow-lg"
                >
                  <div className="group relative mb-6 aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={meal.image}
                      alt={meal.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="320px"
                      unoptimized={meal.image.startsWith("http")}
                    />
                  </div>
                  <div className="space-y-1">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest ${tag.className}`}
                    >
                      {tag.text}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-hm-on-surface">
                      {meal.title}
                    </h3>
                    <p className="font-sans text-sm font-bold uppercase tracking-widest text-slate-500">
                      {meal.calories ?? meal.customText ?? "—"}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
