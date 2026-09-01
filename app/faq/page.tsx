import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FAQ_ITEMS } from "@/lib/faqs";
import { whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Pricing, delivery, pause policy, and how to start a HealthyMinds meal plan in Dubai.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border-subtle bg-bg-light pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Support
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
            Questions worth asking
          </h1>
          <p className="mt-4 text-lg text-secondary-text">
            Straight answers on pricing, delivery, and flexibility before you subscribe.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
          <FAQAccordion items={FAQ_ITEMS} defaultOpenIndex={0} />
          <p className="mt-12 text-center text-secondary-text">
            Prefer a human?{" "}
            <Link
              href="/contact-us"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              Contact our concierge
            </Link>{" "}
            or message us on{" "}
            <a
              href={whatsappLink("Hi HealthyMinds, I have a question before I subscribe.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              WhatsApp
            </a>
            . Ready now?{" "}
            <Link
              href="/plans"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              Design your plan
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
