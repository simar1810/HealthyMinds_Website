/** Public concierge number for Healthy Minds website leads (digits only). */
export const HM_LEADS_WHATSAPP = (
  process.env.NEXT_PUBLIC_WHATSAPP_LEADS || "971585719929"
).replace(/\D/g, "") || "971585719929";

export function conciergeWhatsAppUrl(summary: string): string {
  return `https://wa.me/${HM_LEADS_WHATSAPP}?text=${encodeURIComponent(summary)}`;
}

export function leadWhatsAppSummary(input: {
  name: string;
  countryCode: string;
  phone: string;
  goal?: string;
}): string {
  const cc = input.countryCode.replace(/^\+/, "");
  const goal = input.goal?.trim();
  const lines = [
    "Hi Healthy Minds, I just sent my goals from the website.",
    `Name: ${input.name.trim() || "—"}`,
    `WhatsApp: +${cc}${input.phone}`,
  ];
  if (goal) lines.push(`Goal: ${goal}`);
  return lines.join("\n");
}
