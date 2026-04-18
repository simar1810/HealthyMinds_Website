"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { FilterBar } from "../../components/menu/FilterBar";
import { MenuCard } from "../../components/menu/MenuCard";
import { EditorialPageHeader } from "@/components/layout/EditorialPageHeader";
import { fallbackMenuItems, type MenuItem } from "./data";
import { api } from "@/lib/api";
import { menuItemMatchesFilter } from "@/lib/menuFilterMatch";
import { derivePlanFilterIdFromMacros } from "@/lib/planFromMacros";

interface BackendRecipe {
  _id: string;
  title: string;
  category?: string;
  nutrition?: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
  };
  tags?: string[];
  media?: string[];
  status?: string;
}

function mapRecipeToMenuItem(recipe: BackendRecipe): MenuItem {
  const calories = recipe.nutrition?.calories ?? 0;
  const protein = recipe.nutrition?.protein ?? 0;
  const carbs = recipe.nutrition?.carbs ?? 0;
  const fat = recipe.nutrition?.fat ?? 0;
  return {
    id: recipe._id,
    title: recipe.title,
    description: recipe.category || "",
    calories,
    macros: {
      protein,
      carbs,
      fat,
    },
    isNew: recipe.tags?.includes("new") || false,
    imageUrl:
      recipe.media?.[0] ||
      "https://cdn.calo.app/food/46cfb754-32c1-4f59-93fa-026430ae9918/square@3x.jpg",
    category: recipe.category,
    tags: recipe.tags,
    planFilterId: derivePlanFilterIdFromMacros({ calories, protein, carbs, fat }),
  };
}

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  const fetchMenu = useCallback(async () => {
    try {
      const res = await api.get<{ recipes: BackendRecipe[] }>("/menu/list?type=recipes", {
        noAuth: true,
      });
      const recipes = res.data?.recipes || [];
      if (recipes.length > 0) {
        const items = recipes.map(mapRecipeToMenuItem);
        setMenuItems(items);
      } else {
        setMenuItems(fallbackMenuItems);
      }
    } catch {
      setMenuItems(fallbackMenuItems);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchMenu();
  }, [fetchMenu]);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter((item) => menuItemMatchesFilter(item, activeFilter)));
    }
  }, [activeFilter, menuItems]);

  return (
    <div className="min-h-screen bg-hm-surface text-hm-on-surface">
      <EditorialPageHeader
        eyebrow="The menu"
        title={<>This week&apos;s picks</>}
        description="Here&apos;s a taste of what&apos;s included when you subscribe—same kitchen, rotating plates."
        actions={
          <Link
            href="/plans"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-hm-primary to-hm-primary-mid px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:brightness-105"
          >
            Order now
          </Link>
        }
      />

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-4 sm:px-8">
        <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        {/* Menu Grid */}
        {loading ? (
          <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex flex-col animate-pulse">
                <div className="mb-4 aspect-square w-full rounded-xl bg-hm-surface-container" />
                <div className="mx-2 mb-2 h-4 w-[75%] rounded bg-hm-surface-container-high" />
                <div className="mx-2 h-3 w-[50%] rounded bg-hm-surface-container" />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        )}

        {!loading && filteredItems.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg font-medium text-slate-600">No dishes found for this filter.</p>
          </div>
        )}
      </main>
    </div>
  );
}
