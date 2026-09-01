import type { Metadata } from "next";
import { LegalPageLayout, type LegalSection } from "@/components/legal/LegalPageLayout";
import { CONTACT, SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects and protects your personal data.`,
};

const sections: LegalSection[] = [
  {
    id: "overview",
    heading: "1. Overview",
    body: (
      <p>
        {CONTACT.name} operates this website. This policy explains what we collect when you
        browse, register, subscribe, or message our concierge — and how we use it.
      </p>
    ),
  },
  {
    id: "data-we-collect",
    heading: "2. Information we collect",
    body: (
      <>
        <p>
          Account details (name, mobile, email, delivery address), plan preferences
          (goals, diet, allergies, conditions), payment data handled by Stripe, and
          WhatsApp/OTP communications.
        </p>
        <p>We never store your full card number. Stripe processes payments.</p>
      </>
    ),
  },
  {
    id: "use",
    heading: "3. How we use data",
    body: (
      <p>
        To deliver meals, personalise menus, send OTPs, answer WhatsApp leads, and
        meet legal obligations in the UAE.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "4. Contact",
    body: (
      <p>
        Questions: {CONTACT.email} or {CONTACT.phone}.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      intro={`How ${SITE_NAME} collects, uses, and protects your personal data.`}
      lastUpdated="1 September 2026"
      sections={sections}
    />
  );
}
