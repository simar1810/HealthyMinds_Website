import { STARTING_PRICE_PER_MEAL_AED, SITE_NAME } from "./site-config";

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: `What makes ${SITE_NAME} different from other meal delivery services in Dubai?`,
    answer: `${SITE_NAME} delivers chef-crafted meals with macros engineered to your goals. Personalise your plan, pause anytime, and reach our concierge on WhatsApp.`,
  },
  {
    question: `How much does a ${SITE_NAME} meal plan cost in Dubai and the UAE?`,
    answer: `Pricing starts from AED ${STARTING_PRICE_PER_MEAL_AED} per meal, multiplied by meals per day and programme length. Delivery is included. See live pricing on the Plans page.`,
  },
  {
    question: `Which areas does ${SITE_NAME} deliver to in the UAE?`,
    answer:
      "We deliver across Dubai, Abu Dhabi, Sharjah, and Ajman. Not sure about your address? Message concierge on WhatsApp and we will confirm.",
  },
  {
    question: "Can you build a plan around my macros, allergies, and goals?",
    answer:
      "Yes. During registration we collect goals, activity, diet preference, allergies, and medical conditions so the kitchen can personalise your rotation.",
  },
  {
    question: "Are meals cooked fresh daily or frozen?",
    answer:
      "Meals are cooked fresh for delivery, never frozen as a default. Keep them refrigerated and heat when you are ready to eat.",
  },
  {
    question: "I travel. How flexible is the subscription?",
    answer:
      "Pause or skip from the member app, or message WhatsApp and we will handle it. No lock-in contracts.",
  },
  {
    question: "How do I start?",
    answer:
      "Browse the public menu, pick a plan, verify your phone via WhatsApp OTP, complete your nutrition profile, and check out. First delivery is typically the next morning after kitchen cutoff.",
  },
];
