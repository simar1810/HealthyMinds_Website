import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticleBody } from "@/components/blog/BlogArticleBody";
import { BlogArticleSchema } from "@/components/blog/BlogArticleSchema";
import { BlogCtaSection } from "@/components/blog/BlogCtaSection";
import { BlogPostHero } from "@/components/blog/BlogPostHero";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import { BLOG_SLUGS, getBlogPost } from "@/lib/blog/registry";
import { extractTableOfContents } from "@/lib/blog/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: { absolute: post.metaTitle ?? post.title },
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle ?? post.title,
      description: post.description,
      url: `https://www.healthyminds.ae/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;

  return (
    <main>
      <BlogArticleSchema post={post} path={path} />
      <BlogPostHero post={post} />
      <BlogPostLayout post={post} toc={extractTableOfContents(post.blocks)}>
        <BlogArticleBody blocks={post.blocks} linkAnchors={post.linkAnchors} />
      </BlogPostLayout>
      <BlogCtaSection cta={post.cta} />
    </main>
  );
}
