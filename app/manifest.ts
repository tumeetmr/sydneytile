import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} - ${siteConfig.title}`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f8f4ee",
    theme_color: "#4b3b2a",
    lang: "en-AU",
    icons: [
      {
        src: "/sydneytiling.png",
        sizes: "1200x1200",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "View Projects",
        short_name: "Projects",
        description: "Browse completed tiling work",
        url: "/#portfolio",
        icons: [{ src: "/sydneytiling.png", sizes: "1200x1200" }],
      },
      {
        name: "Request a Quote",
        short_name: "Quote",
        description: "Jump to the contact section",
        url: "/#contact",
        icons: [{ src: "/sydneytiling.png", sizes: "1200x1200" }],
      },
    ],
  }
}
