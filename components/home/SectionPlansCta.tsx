import Link from "next/link";

export function SectionPlansCta() {
  return (
    <div className="mt-12 flex justify-center">
      <Link
        href="/plans"
        className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-hm-primary px-8 py-3 text-sm font-bold text-hm-primary transition hover:bg-hm-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hm-primary"
      >
        View plans
      </Link>
    </div>
  );
}
