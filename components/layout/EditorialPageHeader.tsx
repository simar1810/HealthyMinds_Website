import React from "react";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
};

export function EditorialPageHeader({ eyebrow, title, description, actions }: Props) {
  return (
    <header className="border-b border-slate-200/90 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        {eyebrow ? (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-hm-primary">{eyebrow}</p>
        ) : null}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <div className="font-heading text-4xl font-black uppercase leading-[0.95] tracking-tighter text-hm-on-surface md:text-5xl">
              {title}
            </div>
            {description ? (
              <div className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                {description}
              </div>
            ) : null}
          </div>
          {actions ? <div className="shrink-0">{actions}</div> : null}
        </div>
      </div>
    </header>
  );
}
