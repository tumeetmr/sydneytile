"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Award, User, Clock, Shield } from "lucide-react"

const stats = [
  {
    icon: Clock,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: User,
    value: "500+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    value: "100%",
    label: "Satisfaction Rate",
  },
  {
    icon: Shield,
    value: "Licensed",
    label: "Fully Insured",
  },
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-background overflow-hidden"
      aria-labelledby="about-heading"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Image Gallery */}
          <div 
            className={`relative grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 transition-all duration-700 order-2 lg:order-1 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            role="img"
            aria-label="Gallery of professional tiling work by Sydney Pro Tiling"
          >
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <div className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden group shadow-lg">
                <Image
                  src="/images/wall/main.jpg"
                  alt="Professional bathroom floor tiling work in Sydney - precision tile installation"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden group shadow-lg">
                <Image
                  src="/images/floor/main.jpg"
                  alt="Modern bathroom wall tiling Sydney - subway tiles and splashback installation"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-2 sm:space-y-3 lg:space-y-4 pt-4 sm:pt-6 lg:pt-8">
              <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden group shadow-lg">
                <Image
                  src="/images/wall/main2.jpg"
                  alt="Large format floor tiles installation Sydney - living room tiling project"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden group shadow-lg">
                <Image
                  src="/images/wall/6.jpg"
                  alt="Kitchen backsplash tiling Sydney - premium tile installation"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div 
            className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            itemScope
            itemType="https://schema.org/Person"
          >
            {/* Glassy content card for mobile */}
            <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-0 border border-white/40 dark:border-white/10 lg:border-0 shadow-lg lg:shadow-none">
              <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-4 sm:mb-6 tracking-wider uppercase">
                <time dateTime="2010" itemProp="foundingDate">SINCE 2010</time> • LICENSED & INSURED
              </p>
              <h2 id="about-heading" className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-5 sm:mb-8 leading-tight text-balance max-w-2xl">
                Sydney&apos;s Trusted Professional Tiler — 15+ Years Experience
              </h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed max-w-2xl" itemProp="description">
                <p>
                  I&apos;m a <strong>licensed and certified professional tiler</strong> serving Greater Sydney since 2010. At Sydney Pro Tiling, I
                  believe tiling is a form of care — for your habits, your dreams, and your everyday life.
                </p>
                <p>
                  I don&apos;t just create beautiful spaces; I design surfaces that feel right, reflect who you are, and
                  support you daily. From <strong>bathroom renovations</strong> to <strong>kitchen backsplashes</strong>, outdoor patios to commercial spaces, every project
                  receives my complete attention and expertise.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats - Glassy cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className={`text-center bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/40 dark:border-white/10 shadow-lg hover:shadow-xl hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-white/60 dark:bg-accent/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 shadow-sm">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">{stat.value}</div>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
