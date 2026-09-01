import type { Metadata } from "next";
import { CONTACT, DELIVERY_ZONES_TEXT, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach the HealthyMinds concierge by phone, email, or WhatsApp.",
};

export default function ContactUsPage() {
  const whatsappHref = whatsappLink(
    "Hi HealthyMinds, I have a question about your meal plans.",
  );

  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border-subtle bg-bg-light pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Concierge
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
            A human answers. Always.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-secondary-text">
            {DELIVERY_ZONES_TEXT}. Plan advice, delivery coverage, and accounts —
            our concierge replies in minutes.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
          <ul className="space-y-8 text-base leading-relaxed text-secondary-text">
            <li>
              <span className="block text-xs font-semibold uppercase tracking-wider text-foreground/60">
                Contact
              </span>
              <p className="mt-1 font-semibold text-foreground">{CONTACT.name}</p>
            </li>
            <li>
              <span className="block text-xs font-semibold uppercase tracking-wider text-foreground/60">
                Phone
              </span>
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="mt-1 inline-flex min-h-[44px] items-center font-semibold text-foreground transition hover:text-primary"
              >
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <span className="block text-xs font-semibold uppercase tracking-wider text-foreground/60">
                Email
              </span>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-1 inline-flex min-h-[44px] items-center font-semibold text-foreground transition hover:text-primary"
              >
                {CONTACT.email}
              </a>
            </li>
            <li>
              <span className="block text-xs font-semibold uppercase tracking-wider text-foreground/60">
                WhatsApp
              </span>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex min-h-[44px] items-center font-semibold text-primary underline-offset-4 hover:underline"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li>
              <span className="block text-xs font-semibold uppercase tracking-wider text-foreground/60">
                Address
              </span>
              <p className="mt-1 font-semibold text-foreground">{CONTACT.address}</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
