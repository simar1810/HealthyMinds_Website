import Link from "next/link";

type Props = {
  className?: string;
  onDark?: boolean;
};

export function HealthyMindsLogo({ className = "", onDark = false }: Props) {
  return (
    <span
      className={`inline-block font-black uppercase tracking-[0.1em] ${
        onDark ? "text-white" : "text-primary"
      } ${className || "text-[1.35rem] sm:text-[1.5rem]"}`}
    >
      HealthyMinds
    </span>
  );
}

export function HealthyMindsLogoLink({
  className,
  onDark,
}: Props) {
  return (
    <Link
      href="/"
      className="inline-block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <HealthyMindsLogo className={className} onDark={onDark} />
    </Link>
  );
}
