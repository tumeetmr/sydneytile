import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { projects } from "@/lib/data"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const project = projects.find((p) => p.id === resolvedParams.id)
  const baseUrl = "https://sydneytileco.com"

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested tiling project could not be found.",
    }
  }

  const title = `${project.title} | ${project.category} Tiling ${project.location} | Sydney Pro Tiling`
  const description = `${project.fullDescription} Professional ${project.category.toLowerCase()} tiling in ${project.location}. View our ${project.year} project gallery. Get a free quote today!`

  return {
    title,
    description,
    keywords: [
      `${project.category.toLowerCase()} tiling Sydney`,
      `${project.category.toLowerCase()} tiling ${project.location}`,
      `tiler ${project.location}`,
      "tiling Sydney",
      "professional tiler",
      project.title.toLowerCase(),
      `${project.category.toLowerCase()} renovation Sydney`,
    ],
    alternates: {
      canonical: `${baseUrl}/projects/${project.id}`,
    },
    openGraph: {
      type: "article",
      title: `${project.title} | Sydney Pro Tiling Portfolio`,
      description: project.fullDescription,
      url: `${baseUrl}/projects/${project.id}`,
      siteName: "Sydney Pro Tiling",
      locale: "en_AU",
      images: [
        {
          url: project.mainImage,
          width: 1200,
          height: 900,
          alt: `${project.title} - ${project.category} Tiling in ${project.location}`,
        },
        ...project.gallery.slice(0, 3).map((img, i) => ({
          url: img,
          width: 800,
          height: 600,
          alt: `${project.title} - Gallery Image ${i + 1}`,
        })),
      ],
      publishedTime: `${project.year}-01-01T00:00:00.000Z`,
      modifiedTime: new Date().toISOString(),
      authors: ["Sydney Pro Tiling"],
      tags: [project.category, "Tiling", "Sydney", project.location, "Home Improvement"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Sydney Pro Tiling`,
      description: project.fullDescription,
      images: [project.mainImage],
      creator: "@sydneyprotiling",
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const project = projects.find((p) => p.id === resolvedParams.id)
  const baseUrl = "https://sydneytileco.com"

  if (!project) {
    notFound()
  }

  // JSON-LD Structured Data for Project Page
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${baseUrl}/projects/${project.id}#article`,
        headline: project.title,
        description: project.fullDescription,
        image: project.gallery,
        datePublished: `${project.year}-01-01T00:00:00.000Z`,
        dateModified: new Date().toISOString(),
        author: {
          "@type": "Organization",
          name: "Sydney Pro Tiling",
          url: baseUrl,
        },
        publisher: {
          "@type": "Organization",
          name: "Sydney Pro Tiling",
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/logo.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${baseUrl}/projects/${project.id}`,
        },
        about: {
          "@type": "Service",
          name: `${project.category} Tiling`,
          provider: {
            "@type": "LocalBusiness",
            name: "Sydney Pro Tiling",
          },
        },
        contentLocation: {
          "@type": "Place",
          name: project.location,
          address: {
            "@type": "PostalAddress",
            addressLocality: project.location.replace(", Sydney", ""),
            addressRegion: "NSW",
            addressCountry: "AU",
          },
        },
      },
      {
        "@type": "ImageGallery",
        "@id": `${baseUrl}/projects/${project.id}#gallery`,
        name: `${project.title} Gallery`,
        description: `Photo gallery of ${project.title} - ${project.category} tiling project in ${project.location}`,
        image: project.gallery.map((img, index) => ({
          "@type": "ImageObject",
          url: `${baseUrl}${img}`,
          name: `${project.title} - Image ${index + 1}`,
          description: `${project.category} tiling work by Sydney Pro Tiling`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/projects/${project.id}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Portfolio",
            item: `${baseUrl}/#portfolio`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: `${baseUrl}/projects/${project.id}`,
          },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto max-w-7xl px-6 lg:px-12 py-6">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:-translate-x-1"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto max-w-7xl px-6 lg:px-12 pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in-up">
            <p className="text-sm text-muted-foreground mb-4">{project.category}</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">{project.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">{project.fullDescription}</p>

            <div className="grid grid-cols-2 gap-6">
              <div className="animate-fade-in-up animation-delay-200">
                <p className="text-sm text-muted-foreground mb-2">Year</p>
                <p className="text-lg font-medium">{project.year}</p>
              </div>
              <div className="animate-fade-in-up animation-delay-300">
                <p className="text-sm text-muted-foreground mb-2">Location</p>
                <p className="text-lg font-medium">{project.location}</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl animate-scale-in group">
            <Image 
              src={project.mainImage || "/placeholder.svg"} 
              alt={project.title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="container mx-auto max-w-7xl px-6 lg:px-12 py-16">
        <h2 className="text-3xl font-bold mb-12">Project Gallery</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.gallery.map((image, index) => (
            <div 
              key={index} 
              className="relative aspect-[4/3] overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${project.title} - Image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto max-w-7xl px-6 lg:px-12 py-16">
        <div className="bg-accent rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/80 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get in touch today for a free consultation and quote
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}
