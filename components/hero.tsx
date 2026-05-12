"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight, CheckCircle2, Layers3, ShieldCheck, Sparkles } from "lucide-react"

const heroPoints = [
  "Bathrooms and waterproofing",
  "Feature walls and splashbacks",
  "Outdoor and large-format tiling",
]

const heroStats = [
  { label: "Founded", value: "2010" },
  { label: "Service Area", value: "Greater Sydney" },
  { label: "Project Focus", value: "Residential + Select Commercial" },
]

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      className="mesh-section relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-12 lg:pb-20"
      aria-label="Hero section - Sydney Pro Tiling"
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cover.webp"
          alt="Professional bathroom tiling work by Sydney Pro Tiling"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={88}
        />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(21,18,14,0.82)_0%,rgba(21,18,14,0.52)_42%,rgba(248,244,238,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(223,184,132,0.28),transparent_28%)]" />
      </div>

      <div className="floating-orb left-[6%] top-[18%] h-20 w-20 bg-white/40" />
      <div className="floating-orb bottom-[16%] right-[8%] h-28 w-28 bg-amber-200/40 [animation-delay:1.4s]" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-14">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="surface-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-primary">
              <Sparkles className="h-4 w-4" />
              Premium finishes. Clear communication. Dependable workmanship.
            </div>

            <h1
              className="mt-6 max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.06em] text-white text-shadow-soft sm:text-6xl md:text-7xl xl:text-[6.3rem]"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
              itemProp="headline"
            >
              Tiling work that makes the whole room feel finished.
            </h1>

            <p
              className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl"
              itemProp="description"
            >
              Sydney Pro Tiling delivers refined floor, wall, bathroom, and outdoor tile installations
              with a clean process and a sharp eye for detail from substrate prep through final lines.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground shadow-[0_18px_45px_rgba(179,126,64,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(179,126,64,0.42)]"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/24 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/16"
              >
                View Recent Projects
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroPoints.map((point, index) => (
                <div
                  key={point}
                  className={`surface-panel rounded-2xl px-4 py-4 text-sm font-medium text-primary transition-all duration-700 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${200 + index * 120}ms` }}
                >
                  <CheckCircle2 className="mb-3 h-5 w-5 text-accent" />
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-150 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="tile-3d surface-panel-dark relative overflow-hidden rounded-[2rem] p-5 text-white sm:p-6">
              <div className="tile-grid absolute inset-0 opacity-25" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-white/12">
                <Image
                  src="/images/wall/main2.jpg"
                  alt="Modern tiled interior by Sydney Pro Tiling"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,14,10,0.04)_0%,rgba(17,14,10,0.65)_100%)]" />
              </div>

              <div className="absolute left-4 top-4 rounded-2xl border border-white/15 bg-black/28 px-4 py-3 backdrop-blur-md sm:left-6 sm:top-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-white/88">
                  <Layers3 className="h-4 w-4 text-amber-300" />
                  Material-led execution
                </div>
              </div>

              <div className="absolute bottom-6 left-4 right-4 rounded-[1.6rem] border border-white/15 bg-white/92 p-4 text-primary shadow-2xl sm:left-6 sm:right-auto sm:max-w-[22rem] sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-accent/20 p-3 text-accent">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/50">
                      Waterproofing
                    </p>
                    <p className="text-base font-bold">Wet-area confidence built in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="surface-panel absolute -right-2 bottom-6 max-w-xs rounded-[1.7rem] p-5 text-primary shadow-2xl sm:-right-10 sm:bottom-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/50">
                Project Snapshot
              </p>
              <div className="mt-4 space-y-4">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="border-b border-primary/10 pb-4 last:border-b-0 last:pb-0">
                    <p className="text-xs uppercase tracking-[0.18em] text-primary/45">{stat.label}</p>
                    <p className="mt-1 text-sm font-bold sm:text-base">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
