"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-7xl -translate-x-1/2 transition-all duration-500 ${
        isScrolled
          ? "top-3 rounded-[1.6rem] border border-white/35 bg-white/60 shadow-[0_20px_50px_rgba(70,51,30,0.16)] backdrop-blur-2xl"
          : "top-4 rounded-[1.8rem] border border-white/12 bg-white/10 backdrop-blur-xl"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/sydneytiling.png"
              alt="Sydney Pro Tiling logo"
              width={1200}
              height={1200}
              className="h-11 w-11 rounded-2xl object-contain shadow-lg shadow-black/10 sm:h-12 sm:w-12"
              priority
            />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/55">Sydney Pro Tiling</p>
              <p className="text-sm font-medium text-primary/75">Crafted finishes across Greater Sydney</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-primary/70 transition-colors duration-300 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_16px_36px_rgba(72,56,39,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/92"
            >
              Get Free Quote
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/55 text-primary shadow-md lg:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-white/20 bg-white/75 px-4 py-4 backdrop-blur-2xl sm:px-6">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-primary/80 transition-colors duration-300 hover:bg-white/70 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground"
            >
              Get Free Quote
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
