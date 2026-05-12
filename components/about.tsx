"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Award, Clock3, Shield, UserRound } from "lucide-react"

const stats = [
  {
    icon: Clock3,
    value: "2010",
    label: "Established",
  },
  {
    icon: UserRound,
    value: "Sydney",
    label: "Locally Focused",
  },
  {
    icon: Award,
    value: "Premium",
    label: "Finish Standard",
  },
  {
    icon: Shield,
    value: "Careful",
    label: "Project Delivery",
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
      className="px-4 py-16 sm:px-6 sm:py-24 lg:px-12 lg:py-32"
      aria-labelledby="about-heading"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="surface-panel inline-flex rounded-full px-4 py-2 text-sm font-semibold text-primary">
              About
            </div>
            <h2
              id="about-heading"
              className="mt-5 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              A more considered approach to tiling from planning to final clean-up.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
              <p>
                Sydney Pro Tiling has been serving Greater Sydney since 2010, with a focus on work
                that feels precise, durable, and visually calm once the room is complete.
              </p>
              <p>
                We pay attention to the parts that shape the end result: layout decisions, edge
                alignment, wet-area preparation, material suitability, and how the tiled surface sits
                within the rest of the space.
              </p>
              <p>
                Whether the project is a bathroom renovation, a kitchen splashback, or an outdoor
                area, the aim stays the same: a finish that looks intentional and lasts well.
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-150 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="tile-3d surface-panel relative rounded-[2rem] p-4 sm:p-5">
              <div className="grid grid-cols-2 gap-3 sm:gap-4" role="img" aria-label="Selected Sydney Pro Tiling project images">
                <div className="space-y-3 sm:space-y-4">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[1.4rem]">
                    <Image
                      src="/images/wall/main.jpg"
                      alt="Bathroom tiling project in Sydney"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-[1.4rem]">
                    <Image
                      src="/images/floor/main.jpg"
                      alt="Large format floor tile installation"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="space-y-3 pt-8 sm:space-y-4 sm:pt-10">
                  <div className="relative aspect-square overflow-hidden rounded-[1.4rem]">
                    <Image
                      src="/images/wall/main2.jpg"
                      alt="Tiled feature wall by Sydney Pro Tiling"
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative aspect-3/4 overflow-hidden rounded-[1.4rem]">
                    <Image
                      src="/images/wall/6.jpg"
                      alt="Kitchen tiling detail in Sydney"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="surface-panel absolute bottom-5 left-4 rounded-3xl px-4 py-3 text-sm font-semibold text-primary shadow-xl sm:bottom-6 sm:left-5 sm:px-5">
                Detail-led install
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mt-14">
          {stats.map((stat, index) => {
            const Icon = stat.icon

            return (
              <div
                key={stat.label}
                className={`surface-panel rounded-[1.6rem] p-5 text-center transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: `${320 + index * 100}ms` }}
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/16 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-2xl font-bold text-primary">{stat.value}</div>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
