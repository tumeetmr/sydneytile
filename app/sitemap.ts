import type { MetadataRoute } from "next"
import { projects } from "@/lib/data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sydneytileco.com"
  const currentDate = new Date().toISOString()

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ]

  // Service-related pages (using hash anchors for SPA). 
  // Note: Fragments are not distinct pages for crawlers.
  const servicePages: MetadataRoute.Sitemap = []

  // Project pages
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...mainPages, ...servicePages, ...projectPages]
}
