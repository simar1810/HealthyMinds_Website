import type { BlogPost } from "@/lib/blog/types";
import { balancedMealPlanDubai } from "@/content/blogs/balanced-meal-plan-dubai";
import { dubaiFitnessChallengeWhatToEat } from "@/content/blogs/dubai-fitness-challenge-what-to-eat";
import { highProteinMealPlanDubai } from "@/content/blogs/high-protein-meal-plan-dubai";
import { howToReadFoodLabelsUae } from "@/content/blogs/how-to-read-food-labels-uae";

export const BLOG_REGISTRY: Record<string, BlogPost> = {
  [balancedMealPlanDubai.slug]: balancedMealPlanDubai,
  [dubaiFitnessChallengeWhatToEat.slug]: dubaiFitnessChallengeWhatToEat,
  [highProteinMealPlanDubai.slug]: highProteinMealPlanDubai,
  [howToReadFoodLabelsUae.slug]: howToReadFoodLabelsUae,
};

export const BLOG_SLUGS = Object.keys(BLOG_REGISTRY);

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_REGISTRY[slug];
}

export function getAllBlogPosts(): BlogPost[] {
  return Object.values(BLOG_REGISTRY).sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
}
