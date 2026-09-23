"use client";

import React from "react";

/** Plan-style filters only (no veg / chef picks / custom macros). */
export const MENU_FILTERS = [
  { id: "all", label: "All", icon: null as string | null },
  { id: "balanced", label: "Balanced", icon: "⚖️" },
  { id: "high-protein", label: "High Protein", icon: "🍗" },
  { id: "low-carb", label: "Low carb", icon: "🥑" },
] as const;

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export const FilterBar = ({ activeFilter, onFilterChange }: FilterBarProps) => {
  return (
    <div className="sticky top-[4.75rem] z-40 my-6 flex min-w-0 flex-col justify-between gap-3 rounded-xl border border-slate-200/80 bg-white/95 px-2 py-3 shadow-sm backdrop-blur-md sm:my-8 sm:px-3 sm:py-4 md:flex-row md:items-center md:px-4">
      <div className="flex w-full min-w-0 flex-wrap gap-2">
        {MENU_FILTERS.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => onFilterChange(filter.id)}
              className={`flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-wide transition-all duration-300 sm:px-5 sm:text-sm ${
                isActive
                  ? "bg-hm-primary text-white shadow-md"
                  : "bg-hm-surface-low text-hm-on-surface hover:bg-hm-surface-container-high"
              }`}
            >
              {filter.icon ? <span className="mr-2 text-base">{filter.icon}</span> : null}
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="hidden md:flex">
        <button
          type="button"
          className="flex w-48 items-center justify-between rounded-full border border-slate-200/90 bg-hm-surface-low px-5 py-2.5 text-sm font-semibold text-hm-on-surface transition-colors hover:bg-hm-surface-container-high"
        >
          <span>Type of meal</span>
          <svg className="ml-2 h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};
