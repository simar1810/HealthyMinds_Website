import { HOME_FAQS } from "@/components/home/homeFaqs";

const SITE = "https://www.healthyminds.ae";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Restaurant",
      name: "Healthy Minds Restaurant",
      url: `${SITE}/`,
      image: `${SITE}/hm-stories/hero-journey.jpg`,
      servesCuisine: ["Healthy", "Meal prep"],
      areaServed: {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      description:
        "Chef-crafted meal plans for fat loss, muscle gain, and a balanced week, delivered across the UAE.",
    },
    {
      "@type": "FAQPage",
      mainEntity: HOME_FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export function HomeStructuredData() {
  const json = JSON.stringify(structuredData).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
