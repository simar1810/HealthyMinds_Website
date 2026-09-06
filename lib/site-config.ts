/** Central site constants for SEO, contact, and WhatsApp leads. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://www.healthyminds.ae";

export const SITE_NAME = "HealthyMinds";

export const SITE_TAGLINE = "Meal plans for busy people in Dubai & the UAE";

export const STARTING_PRICE_PER_MEAL_AED = 45;

/** Concierge inbox — every website lead opens WhatsApp to this number. */
export const LEADS_WHATSAPP_DIGITS = "971585719929";

export const DEFAULT_WHATSAPP_PHONE = `+${LEADS_WHATSAPP_DIGITS}`;

export const CONTACT = {
  name: "HealthyMinds",
  phone: "+971 58 571 9929",
  phoneTel: `+${LEADS_WHATSAPP_DIGITS}`,
  whatsapp: DEFAULT_WHATSAPP_PHONE,
  email: "hello@healthyminds.ae",
  address: "Dubai, United Arab Emirates",
  addressShort: "Dubai, United Arab Emirates",
} as const;

export const DELIVERY_ZONES_TEXT =
  "Delivering across Dubai, Abu Dhabi, Sharjah & Ajman";

export const HOME_META = {
  title: "HealthyMinds | Meal plans delivered in Dubai & the UAE",
  description: `Chef-crafted, nutritionist-signed meal plans delivered across Dubai. Personalised macros, pause anytime. From AED ${STARTING_PRICE_PER_MEAL_AED}/meal.`,
} as const;

/** Always opens a chat to 971585719929 (HealthyMinds lead inbox). */
export function whatsappLink(message: string, _phone?: string): string {
  return `https://wa.me/${LEADS_WHATSAPP_DIGITS}?text=${encodeURIComponent(message)}`;
}

export function digitsOnlyPhone(phone: string): string {
  return phone.replace(/\D/g, "");
}

/**
 * Phone line in the lead WhatsApp contract. Prefixes +971 when the user
 * typed a national number. Does not change login/OTP storage.
 */
export function leadPhoneForContract(raw: string, defaultCc = "971"): string {
  const trimmed = String(raw ?? "").trim();
  if (!trimmed) return "";
  let digits = trimmed.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("00")) digits = digits.slice(2);
  const cc = defaultCc.replace(/\D/g, "") || "971";
  const looksInternational = trimmed.startsWith("+") || trimmed.startsWith("00");
  if (looksInternational) return `+${digits}`;
  if (digits.startsWith(cc) && digits.length >= cc.length + 6) return `+${digits}`;
  digits = digits.replace(/^0+/, "");
  return `+${cc}${digits}`;
}
