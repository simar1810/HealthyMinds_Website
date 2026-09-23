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
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-14">
        {eyebrow ? (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-hm-primary">{eyebrow}</p>
        ) : null}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="min-w-0">
            <div className="font-heading text-[1.65rem] font-black uppercase leading-snug tracking-tight text-hm-on-surface break-words sm:text-4xl sm:tracking-tighter md:text-5xl">
              {title}
            </div>
            {description ? (
              <div className="mt-4 max-w-2xl break-words text-base leading-relaxed text-slate-600 md:text-lg">
                {description}
              </div>
            ) : null}
          </div>
          {actions ? <div className="w-full shrink-0 sm:w-auto">{actions}</div> : null}
        </div>
      </div>
    </header>
  );
}
