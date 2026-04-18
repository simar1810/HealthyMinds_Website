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
      width={280}
      height={120}
      className={
        onDark
          ? `h-16 w-auto max-w-[260px] object-contain object-left sm:h-[4.5rem] ${className}`
          : `h-14 w-auto max-w-[min(280px,78vw)] object-contain object-left sm:h-16 md:h-[4.75rem] lg:h-[5.25rem] ${className}`
      }
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
