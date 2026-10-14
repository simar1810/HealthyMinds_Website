import type { MetadataRoute } from "next";

const SITE = "https://www.healthyminds.ae";

/** Content date for the marketing pages. Do not bump this on every build. */
const LAST_MODIFIED = new Date("2026-10-14");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/menu`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE}/plans`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.8 },
  ];
}
