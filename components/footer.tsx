"use client"

import { useEffect, useRef, useState } from "react"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const socialLinks = [
    { href: "https://facebook.com/sydneyprotiling", icon: Facebook, label: "Follow Sydney Pro Tiling on Facebook" },
    { href: "https://instagram.com/sydneyprotiling", icon: Instagram, label: "Follow Sydney Pro Tiling on Instagram" },
    { href: "https://linkedin.com/company/sydneyprotiling", icon: Linkedin, label: "Connect with Sydney Pro Tiling on LinkedIn" },
  ]

  return (
    <footer 
      ref={footerRef} 
      className="bg-primary text-primary-foreground py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-12 overflow-hidden"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-primary-foreground/10">
          {/* Logo and text - Glassy card on mobile */}
          <div 
            className={`w-full md:w-auto md:max-w-sm text-center md:text-left bg-white/5 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none rounded-2xl p-5 sm:p-6 md:p-0 border border-white/10 md:border-0 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            itemScope
            itemType="https://schema.org/LocalBusiness"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3" itemProp="name">Sydney Pro Tiling</h3>
            <p className="text-sm sm:text-base text-primary-foreground/70 leading-relaxed" itemProp="description">
              Sydney&apos;s trusted professional tiling service. Expert floor and wall tiling, bathroom renovations, and waterproofing across Greater Sydney. Licensed & insured.
            </p>
            <meta itemProp="areaServed" content="Sydney, NSW, Australia" />
            <meta itemProp="priceRange" content="$$" />
          </div>

          {/* Social links - Glassy style */}
          <nav className="flex gap-3 sm:gap-4" aria-label="Social media links">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:bg-white/20 hover:border-white/20 hover:scale-110 shadow-lg transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                  aria-label={social.label}
                  itemProp="sameAs"
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </a>
              )
            })}
          </nav>
        </div>

        <div 
          className={`flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-primary-foreground/60 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} <span itemProp="copyrightHolder">Sydney Pro Tiling</span>. All rights reserved. | Professional Tiler Sydney | ABN: XX XXX XXX XXX
          </p>
        </div>
      </div>
    </footer>
  )
}
