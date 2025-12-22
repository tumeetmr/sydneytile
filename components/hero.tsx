"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section - Sydney Pro Tiling"
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      {/* Background Image with Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cover.webp"
          alt="Professional bathroom tiling work by Sydney Pro Tiling - showcasing expert craftsmanship in Sydney"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background/70" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 pt-20 sm:pt-0">
        <div className="max-w-7xl">
          {/* Glassy title container for mobile */}
          <div className="sm:bg-transparent bg-white/10 backdrop-blur-md sm:backdrop-blur-none rounded-3xl p-6 sm:p-0 mb-6 sm:mb-0 border border-white/20 sm:border-0 shadow-xl sm:shadow-none">
            <h1
              className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-balance mb-6 sm:mb-12 leading-[0.9] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ fontFamily: "var(--font-display), sans-serif" }}
              itemProp="headline"
            >
              <span className="inline-block text-background drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">SYDNEY</span>
              <br />
              <span 
                className={`inline-block text-background drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                TILING
              </span>
            </h1>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 max-w-4xl">
              <div
                className={`transition-all duration-700 delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-base sm:text-xl md:text-2xl font-medium text-background/90 drop-shadow-lg leading-relaxed" itemProp="description">
                  Professional Tiling Services in Sydney
                </p>
              </div>
              <div
                className={`transition-all duration-700 delay-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-base sm:text-xl md:text-2xl font-medium text-background/90 drop-shadow-lg leading-relaxed">
                  Creating Beautiful Spaces with Expert Craftsmanship
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        aria-hidden="true"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-background/50 rounded-full flex justify-center p-1.5 sm:p-2 bg-white/10 backdrop-blur-sm">
          <div className="w-1 h-1.5 sm:h-2 bg-background/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
