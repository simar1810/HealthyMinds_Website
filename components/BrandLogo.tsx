"use client";

import Image from "next/image";

type Props = {
  className?: string;
  priority?: boolean;
  /** Slight lift on dark footers — keeps logo colors accurate */
  onDark?: boolean;
};

export function BrandLogo({
  className = "",
  priority = false,
  onDark = false,
}: Props) {
  const image = (
    <Image
      src="/healthy-minds-logo.png"
      alt="Healthy Minds Restaurant"
      width={206}
      height={208}
      className={
        onDark
          ? `h-14 w-auto max-w-[4.5rem] object-contain object-left sm:h-16 sm:max-w-[5.5rem] ${className}`
          : `h-14 w-auto max-w-[4.5rem] object-contain object-left sm:h-16 sm:max-w-[5.5rem] md:h-[4.75rem] md:max-w-[7rem] ${className}`
      }
      style={{ width: "auto", maxWidth: "100%" }}
      sizes="(max-width: 768px) 72px, 112px"
      priority={priority && !onDark}
    />
  );

  if (onDark) {
    return (
      <span className="inline-flex rounded-xl bg-white p-2 shadow-md ring-1 ring-white/20">
        {image}
      </span>
    );
  }

  return image;
}
