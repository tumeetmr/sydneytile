"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Droplet, Home, Grid3x3, Sparkles } from "lucide-react"

const services = [
  {
    icon: Grid3x3,
    title: "Floor Tiling",
    description: "Expert floor tile installation for all spaces in Sydney. Standard, large format, and custom patterns available. Perfect for living rooms, kitchens, and commercial spaces.",
    price: "From $80/m²",
    image: "/images/floor/main.jpg",
    alt: "Professional floor tiling installation in Sydney - large format tiles",
  },
  {
    icon: Home,
    title: "Wall Tiling",
    description: "Professional wall tiling services for kitchens, bathrooms, and feature walls across Sydney. Subway tiles, splashbacks, and decorative patterns.",
    price: "From $70/m²",
    image: "/images/wall/main.jpg",
    alt: "Expert wall tiling work - kitchen backsplash installation Sydney",
  },
  {
    icon: Droplet,
    title: "Bathroom & Waterproofing",
    description: "Complete bathroom tiling with certified waterproofing services in Sydney. Full renovations, shower tiling, and wet area compliance.",
    price: "From $120/m²",
    image: "/images/bathroom/2.jpg",
    alt: "Bathroom tiling and waterproofing services Sydney - modern bathroom renovation",
  },
  {
    icon: Sparkles,
    title: "Custom Designs",
    description: "Herringbone, mosaic, chevron, and intricate patterns for unique spaces. Bespoke tile installations that make your Sydney home stand out.",
    price: "From $150/m²",
    image: "/images/outdoor/1.jpg",
    alt: "Custom herringbone tile pattern installation Sydney - premium tiling",
  },
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
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-secondary/20 overflow-hidden"
      aria-labelledby="services-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="container mx-auto max-w-7xl">
        <header 
          className={`mb-10 sm:mb-16 lg:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance max-w-2xl">
            Professional Tiling Services in Sydney
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Expert tiling solutions for residential and commercial projects across Greater Sydney. Licensed, insured, and committed to quality.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8" role="list">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <article 
                key={service.title} 
                className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 aspect-[3/4] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
                role="listitem"
                itemScope
                itemType="https://schema.org/Service"
                itemProp="itemListElement"
              >
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  itemProp="image"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 space-y-2 sm:space-y-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white shadow-sm transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide" itemProp="name">{service.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300" itemProp="description">{service.description}</p>
                  <meta itemProp="areaServed" content="Sydney, NSW, Australia" />
                  <meta itemProp="provider" content="Sydney Pro Tiling" />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
