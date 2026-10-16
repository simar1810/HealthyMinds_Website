import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog/registry";

const SITE = "https://www.healthyminds.ae";

/** Content date for the marketing pages. Do not bump this on every build. */
const LAST_MODIFIED = new Date("2026-10-14");

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllBlogPosts();
  return [
    { url: SITE, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/menu`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE}/plans`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${SITE}/blog`,
      lastModified: new Date(posts[0]?.publishedAt ?? "2026-10-16"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...posts.map((post) => ({
      url: `${SITE}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
