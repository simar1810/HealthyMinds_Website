import React from "react";

type Props = {
  name: string;
  className?: string;
  filled?: boolean;
};

/** Google Material Symbols (Outlined). Load stylesheet in root layout. */
export function MaterialIcon({ name, className = "", filled = false }: Props) {
  return (
    <span
      className={`material-symbols-outlined select-none ${className}`}
      aria-hidden
      style={{
        fontFamily: '"Material Symbols Outlined"',
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
      }}
    >
      {name}
    </span>
  );
}
