import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { projects } from "@/lib/data"
import { siteConfig } from "@/lib/site"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const project = projects.find((p) => p.id === resolvedParams.id)

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested tiling project could not be found.",
    }
  }

  const title = `${project.title} | ${project.category} Tiling in ${project.location}`
  const description = `${project.fullDescription} Explore this ${project.category.toLowerCase()} tiling project in ${project.location} and request a tailored quote for similar work.`

  return {
    title,
    description,
    keywords: [
      `${project.category.toLowerCase()} tiling Sydney`,
      `${project.category.toLowerCase()} tiler ${project.location}`,
      `${project.location} tiling project`,
      "Sydney tiling portfolio",
      project.title,
    ],
    alternates: {
      canonical: `/projects/${project.id}`,
    },
    openGraph: {
      type: "article",
      title: `${project.title} | ${siteConfig.name}`,
      description,
      url: `${siteConfig.baseUrl}/projects/${project.id}`,
      siteName: siteConfig.name,
      locale: "en_AU",
      images: [
        {
          url: project.mainImage,
          width: 1200,
          height: 900,
          alt: `${project.title} project image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteConfig.name}`,
      description,
      images: [project.mainImage],
    },
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const project = projects.find((p) => p.id === resolvedParams.id)

  if (!project) {
    notFound()
  }

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${siteConfig.baseUrl}/projects/${project.id}#project`,
        name: project.title,
        description: project.fullDescription,
        image: project.gallery.map((image) => `${siteConfig.baseUrl}${image}`),
        creator: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.baseUrl,
        },
        about: {
          "@type": "Service",
          name: `${project.category} Tiling`,
        },
        contentLocation: {
          "@type": "Place",
          name: project.location,
        },
        dateCreated: `${project.year}-01-01`,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.baseUrl}/projects/${project.id}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${siteConfig.baseUrl}/#portfolio`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: `${siteConfig.baseUrl}/projects/${project.id}`,
          },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }} />
      <main className="min-h-screen bg-background px-4 pb-12 pt-24 sm:px-6 lg:px-12 lg:pt-28">
        <div className="container mx-auto max-w-7xl">
          <div className="surface-panel mb-8 inline-flex rounded-full px-4 py-2 text-sm font-semibold text-primary">
            <Link href="/#portfolio" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Link>
          </div>

          <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/45">{project.category}</p>
              <h1
                className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
              >
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                {project.fullDescription}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="surface-panel rounded-[1.5rem] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/45">Year</p>
                  <p className="mt-2 text-lg font-bold text-primary">{project.year}</p>
                </div>
                <div className="surface-panel rounded-[1.5rem] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/45">Location</p>
                  <p className="mt-2 text-lg font-bold text-primary">{project.location}</p>
                </div>
              </div>

              <div className="surface-panel mt-8 rounded-[1.7rem] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/45">Thinking about a similar result?</p>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  We can help with tile selection, layout direction, waterproofing requirements, and a
                  tailored quote for your space.
                </p>
                <Link
                  href="/#contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Request a quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="tile-3d surface-panel rounded-[2rem] p-4 sm:p-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem]">
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 52vw"
                />
              </div>
            </div>
          </section>

          <section className="mt-12">
            <h2
              className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              Project gallery
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((image, index) => (
                <div key={image} className="tile-3d surface-panel rounded-[1.7rem] p-3">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem]">
                    <Image
                      src={image}
                      alt={`${project.title} gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                      loading={index < 2 ? "eager" : "lazy"}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
