import type { BlogPost } from "@/lib/blog/types";

const SITE = "https://www.healthyminds.ae";

export function BlogArticleSchema({ post, path }: { post: BlogPost; path: string }) {
  const url = `${SITE}${path}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Healthy Minds Restaurant",
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/healthy-minds-logo.png`,
      },
    },
    image: post.coverImage ? `${SITE}${post.coverImage.src}` : `${SITE}/hm-stories/hero-journey.jpg`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}
