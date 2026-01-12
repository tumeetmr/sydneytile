"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Bathroom Renovation",
    category: "Bathroom",
    image: "/images/bathroom/2.jpg",
    description: "Complete bathroom renovation with large format tiles and waterproofing",
  },
  {
    id: 2,
    title: "Kitchen Backsplash",
    category: "Kitchen",
    image: "/images/wall/4.jpg",
    description: "Contemporary kitchen backsplash with subway tiles",
  },
  {
    id: 3,
    title: "Outdoor",
    category: "Outdoor",
    image: "/images/outdoor/1.jpg",
    description: "Large outdoor patio with natural stone tiles",
  },
  {
    id: 4,
    title: "Herringbone Floor",
    category: "Floor",
    image: "/images/floor/2.jpg",
    description: "Herringbone pattern floor installation",
  },
  {
    id: 7,
    title: "Pool Area",
    category: "Outdoor",
    image: "/images/pool/1.jpg",
    description: "Pool surround with non-slip tiles",
  },
  {
    id: 8,
    title: "Feature Wall",
    category: "Wall",
    image: "/images/wall/3.jpg",
    description: "Geometric pattern feature wall",
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
    <section id="portfolio" ref={sectionRef} className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-background overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div 
          className={`mb-10 sm:mb-16 lg:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance max-w-2xl">Our Work</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-6 sm:mb-10">
            Browse our completed projects and see the quality of our craftsmanship
          </p>

          {/* Glassy filter container */}
          <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/40 dark:border-white/10 shadow-lg inline-block">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-white/60 dark:bg-white/10 text-muted-foreground hover:bg-white/80 dark:hover:bg-white/20 border border-white/40 dark:border-white/10"
                  }`}
                  style={{ 
                    transitionDelay: `${index * 50}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <Link 
              key={project.id} 
              href={`/projects/${project.id}`} 
              className={`group cursor-pointer bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-white/40 dark:border-white/10 shadow-lg hover:shadow-xl hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl mb-3 sm:mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white text-sm sm:text-base font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">View Project →</span>
                </div>
              </div>
              <div className="space-y-1.5 sm:space-y-2 px-1">
                <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300">{project.category}</p>
                <h3 className="text-lg sm:text-xl font-semibold group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
