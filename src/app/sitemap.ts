import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://shadowpixels.studio";

  // Compile static URL routes
  const staticUrls = [
    "",
    "/about",
    "/services",
    "/blogs",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Compile dynamic blog posts URLs
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticUrls, ...blogUrls];
}
