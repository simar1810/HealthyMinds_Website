import React from "react";

const iconClass = "h-7 w-7 shrink-0 text-hm-primary";

type SvgProps = { className?: string };

/** Inline SVGs — avoids Material Symbols font / Tailwind conflicts showing raw icon names. */

export function IconTotalControl({ className = iconClass }: SvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 6h16M4 12h16M4 18h10" />
      <path d="M16 16l2 2 4-5" />
    </svg>
  );
}

export function IconChefCrafted({ className = iconClass }: SvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3c1.5 3 1.5 6 0 9-1.5-3-1.5-6 0-9z" />
      <path d="M12 12v3M9 21h6M8 18h8" />
    </svg>
  );
}

export function IconFreshDelivery({ className = iconClass }: SvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14 18V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v11h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2V9l-3-3h-3v12" />
      <circle cx="7.5" cy="18.5" r="1.5" />
      <circle cx="17.5" cy="18.5" r="1.5" />
    </svg>
  );
}

export function IconEcoPackaging({ className = iconClass }: SvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 22c4-3 6-6.5 6-10a6 6 0 0 0-12 0c0 3.5 2 7 6 10Z" />
      <path d="M12 22V12" />
    </svg>
  );
}

export function IconStarFilled({ className = "h-5 w-5 text-hm-primary" }: SvgProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      />
    </svg>
  );
}
