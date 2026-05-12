"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Bathroom Renovation",
    category: "Bathroom",
    image: "/images/bathroom/2.jpg",
    description: "Complete bathroom renovation with large format tiles and waterproofing.",
  },
  {
    id: 2,
    title: "Kitchen Backsplash",
    category: "Kitchen",
    image: "/images/wall/4.jpg",
    description: "Contemporary kitchen splashback with crisp grout lines and clean proportions.",
  },
  {
    id: 3,
    title: "Outdoor Entertaining Area",
    category: "Outdoor",
    image: "/images/outdoor/1.jpg",
    description: "Natural stone-style outdoor tiling designed for durability and visual warmth.",
  },
  {
    id: 4,
    title: "Herringbone Floor",
    category: "Floor",
    image: "/images/floor/2.jpg",
    description: "Pattern-led installation that gives the room a stronger architectural rhythm.",
  },
  {
    id: 7,
    title: "Pool Area",
    category: "Outdoor",
    image: "/images/pool/1.jpg",
    description: "Non-slip poolside tiling that balances safety, drainage, and clean detailing.",
  },
  {
    id: 8,
    title: "Feature Wall",
    category: "Wall",
    image: "/images/wall/3.jpg",
    description: "A statement wall with careful pattern placement and a premium finish.",
  },
]

const categories = ["All", "Bathroom", "Kitchen", "Floor", "Wall", "Outdoor", "Commercial"]

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
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

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="px-4 py-16 sm:px-6 sm:py-24 lg:px-12 lg:py-32"
      aria-labelledby="portfolio-heading"
    >
      <div className="container mx-auto max-w-7xl">
        <div
          className={`flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div>
            <div className="surface-panel inline-flex rounded-full px-4 py-2 text-sm font-semibold text-primary">
              Portfolio
            </div>
            <h2
              id="portfolio-heading"
              className="mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              Recent projects with strong materials, clean lines, and finished-room impact.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Explore a mix of bathrooms, floors, splashbacks, outdoor areas, and feature work from
              projects across Sydney.
            </p>
          </div>

          <div className="surface-panel inline-block rounded-[1.8rem] p-3">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-white/60 text-primary/70 hover:bg-white hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className={`tile-3d surface-panel group flex flex-col rounded-[2rem] p-4 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${220 + index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,14,10,0.06)_0%,rgba(17,14,10,0.56)_100%)]" />
              </div>

              <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/45">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-primary">{project.title}</h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-primary/40 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">{project.description}</p>
                <div className="mt-auto pt-5">
                  <span className="inline-flex rounded-full border border-primary/10 bg-white/60 px-3 py-1.5 text-sm font-semibold text-primary/80">
                    View project
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
