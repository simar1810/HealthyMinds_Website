import React from "react";
import Image from "next/image";
import { MenuItem } from "../../app/menu/data";

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <div className="group flex cursor-pointer flex-col rounded-xl border border-transparent bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-200/90 hover:shadow-lg">
      <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-xl bg-hm-surface-low">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        <div className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-hm-on-surface shadow-sm backdrop-blur-sm">
          {item.calories} kcal
        </div>
      </div>

      <div className="flex flex-grow flex-col px-1">
        {item.isNew ? (
          <span className="mb-2 text-[10px] font-bold uppercase tracking-widest text-hm-primary">
            New
          </span>
        ) : null}
        <h3 className="font-heading mb-1 text-lg font-bold leading-tight text-hm-on-surface transition-colors group-hover:text-hm-primary">
          {item.title}
        </h3>
        <p className="mb-5 flex-grow text-sm text-slate-600">{item.description}</p>

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-bold uppercase tracking-wide text-slate-600">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-hm-primary" />
            {item.macros.protein}g Pro
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-hm-tertiary" />
            {item.macros.carbs}g Carbs
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-slate-400" />
            {item.macros.fat}g Fat
          </div>
        </div>
      </div>
    </div>
  );
};
