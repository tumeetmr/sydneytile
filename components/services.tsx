"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Droplet, Grid3x3, Home, Sparkles } from "lucide-react"

const services = [
  {
    icon: Grid3x3,
    title: "Floor Tiling",
    description:
      "Careful substrate prep, accurate spacing, and sharp edges for kitchens, living areas, hallways, and commercial floors.",
    price: "From $80/m²",
    image: "/images/floor/main.jpg",
    alt: "Professional floor tiling installation in Sydney",
    deliverable: "Large format, herringbone, and standard layouts",
  },
  {
    icon: Home,
    title: "Wall Tiling",
    description:
      "Clean vertical lines for splashbacks, bathrooms, laundries, and feature walls with a finish that feels tailored to the room.",
    price: "From $70/m²",
    image: "/images/wall/main.jpg",
    alt: "Wall tiling and splashback installation in Sydney",
    deliverable: "Splashbacks, stacked layouts, and feature walls",
  },
  {
    icon: Droplet,
    title: "Bathroom & Waterproofing",
    description:
      "Wet-area tiling supported by waterproofing know-how for bathrooms, ensuites, showers, and renovation upgrades.",
    price: "From $120/m²",
    image: "/images/bathroom/2.jpg",
    alt: "Bathroom tiling and waterproofing services in Sydney",
    deliverable: "Showers, niches, bathrooms, and wet areas",
  },
  {
    icon: Sparkles,
    title: "Custom Layouts",
    description:
      "Pattern-led installations for projects that need more than a standard grid, including herringbone, chevron, and mosaics.",
    price: "From $150/m²",
    image: "/images/outdoor/1.jpg",
    alt: "Custom feature tiling design in Sydney",
    deliverable: "Statement surfaces with elevated detailing",
  },
]

const processSteps = [
  "Consultation and tile advice",
  "Surface prep and layout planning",
  "Precise install and clean handover",
]

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="mesh-section overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-12 lg:py-32"
      aria-labelledby="services-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <header
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="surface-panel inline-flex rounded-full px-4 py-2 text-sm font-semibold text-primary">
              Services
            </div>
            <h2
              id="services-heading"
              className="mt-5 max-w-xl text-3xl font-bold leading-tight text-balance sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              Professional tiling with sharper detailing and a cleaner process.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              Each project is approached like a finished surface, not just an install. We focus on
              alignment, material selection, preparation, and the final look of the whole room.
            </p>

            <div className="surface-panel mt-8 rounded-[1.8rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/55">
                How Projects Run
              </p>
              <div className="mt-5 space-y-4">
                {processSteps.map((step, index) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                    <p className="pt-1 text-sm font-medium text-primary/85 sm:text-base">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2" role="list">
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <article
                  key={service.title}
                  className={`tile-3d surface-panel group relative flex min-h-[27rem] flex-col overflow-hidden rounded-[2rem] transition-all duration-700 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${180 + index * 120}ms` }}
                  role="listitem"
                  itemScope
                  itemType="https://schema.org/Service"
                  itemProp="itemListElement"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      itemProp="image"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,14,10,0.08)_0%,rgba(17,14,10,0.68)_100%)]" />
                    <div className="surface-panel absolute left-4 top-4 rounded-2xl px-3 py-2 text-xs font-semibold text-primary">
                      {service.price}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div className="rounded-2xl bg-accent/16 p-3 text-accent">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <ArrowUpRight className="mt-1 h-5 w-5 text-primary/35" aria-hidden="true" />
                    </div>

                    <h3 className="mt-5 text-2xl font-bold tracking-tight text-primary" itemProp="name">
                      {service.title}
                    </h3>
                    <p
                      className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base"
                      itemProp="description"
                    >
                      {service.description}
                    </p>

                    <div className="mt-auto pt-6">
                      <div className="rounded-2xl border border-primary/10 bg-white/55 px-4 py-3 text-sm font-medium text-primary/80">
                        {service.deliverable}
                      </div>
                    </div>

                    <meta itemProp="areaServed" content="Sydney, NSW, Australia" />
                    <meta itemProp="provider" content="Sydney Pro Tiling" />
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
