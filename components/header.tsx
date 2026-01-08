"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll handler
  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      const headerOffset = 96 // Account for fixed header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    
    setIsMobileMenuOpen(false)
  }, [])

  const navItems = [
    { href: "#about", label: "About Us" },
    { href: "#portfolio", label: "Projects" },
    { href: "#contact", label: "Contacts" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? "bg-white/60 dark:bg-background/60 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-white/20" 
          : "bg-white/30 dark:bg-background/30 backdrop-blur-md"
      }`}
    >
      {/* Glassy overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          <Link href="/" className="flex items-center gap-2 group">
            <Image 
              src="/sydneytiling.png" 
              alt="Logo"
              width={52}
              height={52}
              className="w-10 h-10 sm:w-16 sm:h-16 object-contain rounded-full transition-transform duration-300 group-hover:scale-110"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-sm xl:text-base font-medium text-foreground/70 hover:text-foreground transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full px-2 py-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </a>
            ))}
            <Button 
              size="lg" 
              className="rounded-full px-6 xl:px-8 bg-primary/90 backdrop-blur-sm border border-white/20 shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary" 
              asChild
            >
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact Us</a>
            </Button>
          </nav>

          <button 
            className="lg:hidden text-foreground p-2 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-sm border border-white/30 shadow-md transition-all duration-300 hover:scale-110 hover:bg-white/60 dark:hover:bg-white/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white/70 dark:bg-background/80 backdrop-blur-xl px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4 border-t border-white/30 dark:border-border/50 shadow-lg">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className={`block text-base sm:text-lg font-medium text-foreground/70 hover:text-foreground hover:bg-white/50 dark:hover:bg-white/10 rounded-lg px-4 py-2 transition-all duration-300 transform ${
                isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.label}
            </a>
          ))}
          <Button 
            size="lg" 
            className="w-full rounded-full mt-4 bg-primary/90 backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-300 hover:bg-primary hover:shadow-xl" 
            asChild
          >
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact Us</a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
