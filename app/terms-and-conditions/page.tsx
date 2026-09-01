import type { Metadata } from "next";
import { LegalPageLayout, type LegalSection } from "@/components/legal/LegalPageLayout";
import { CONTACT, SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms for using ${SITE_NAME} meal plans in the UAE.`,
};

const sections: LegalSection[] = [
  {
    id: "service",
    heading: "1. The service",
    body: (
      <p>
        {SITE_NAME} provides subscription meal plans delivered in the UAE. Plans,
        pricing, and menus are shown at checkout and may change with notice.
      </p>
    ),
  },
  {
    id: "account",
    heading: "2. Accounts",
    body: (
      <p>
        You must verify a mobile number via OTP. You are responsible for the accuracy
        of allergies, conditions, and delivery details you submit.
      </p>
    ),
  },
  {
    id: "payments",
    heading: "3. Payments & pauses",
    body: (
      <p>
        Payments are processed by Stripe. You may pause or cancel as described in
        the FAQ and member app. Failed payments may pause deliveries.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "4. Contact",
    body: (
      <p>
        {CONTACT.email} · {CONTACT.phone}
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Terms & Conditions"
      intro={`The agreement between you and ${SITE_NAME} for meal-plan subscriptions in the UAE.`}
      lastUpdated="1 September 2026"
      sections={sections}
    />
  );
}
