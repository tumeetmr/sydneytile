import type { MetadataRoute } from "next"
import { projects } from "@/lib/data"
import { siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString()

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: siteConfig.baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ]

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteConfig.baseUrl}/projects/${project.id}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...mainPages, ...projectPages]
}
