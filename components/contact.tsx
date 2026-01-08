"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type FormStatus = "idle" | "submitting" | "success" | "error"

export function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")
    setErrorMessage("")

    if (!formRef.current) return

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )

      setFormStatus("success")
      formRef.current.reset()

      setTimeout(() => {
        setFormStatus("idle")
      }, 5000)
    } catch (error) {
      console.error("Form submission error:", error)
      setFormStatus("error")
      setErrorMessage("Failed to send message. Please try again or email us directly.")

      setTimeout(() => {
        setFormStatus("idle")
        setErrorMessage("")
      }, 5000)
    }
  }

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-secondary/20 overflow-hidden"
      aria-labelledby="contact-heading"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <div className="container mx-auto max-w-6xl">
        <header 
          className={`text-center mb-10 sm:mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            Get a Free Tiling Quote in Sydney
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to transform your space? Contact Sydney&apos;s trusted tiling professionals for a free consultation and quote. We service all of Greater Sydney.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Image */}
          <div 
            className={`relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 delay-200 order-2 lg:order-1 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <Image
              src="/images/40.jpg"
              alt="Expert bathroom tiling transformation by Sydney Pro Tiling - quality craftsmanship"
              fill
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20">
                <p className="text-base sm:text-lg font-medium mb-1 sm:mb-2 text-white">Transform Your Sydney Home</p>
                <p className="text-xs sm:text-sm text-white/80">Licensed tiling services • Free quotes • 15+ years experience</p>
              </div>
            </div>
          </div>

          {/* Form - Glassy card */}
          <div 
            className={`order-1 lg:order-2 bg-white/50 dark:bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-white/40 dark:border-white/10 shadow-xl transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            itemScope
            itemType="https://schema.org/ContactPoint"
          >
            {/* Success Message */}
            {formStatus === "success" && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl text-green-800 dark:text-green-200 text-center animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="font-semibold">Thank you for your message! 🎉</p>
                <p className="text-sm mt-1">We&apos;ll get back to you within 24 hours.</p>
              </div>
            )}

            {/* Error Message */}
            {formStatus === "error" && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-xl text-red-800 dark:text-red-200 text-center animate-in fade-in slide-in-from-top-2 duration-300">
                <p className="font-semibold">Oops! Something went wrong</p>
                <p className="text-sm mt-1">{errorMessage}</p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" aria-label="Contact form for free tiling quote">
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="transition-all duration-300 hover:translate-y-[-2px]">
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-2 sm:mb-3 text-foreground/70">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="h-12 sm:h-14 rounded-xl bg-white/60 dark:bg-white/10 backdrop-blur-sm border-white/40 dark:border-white/20 transition-all duration-300 focus:shadow-lg focus:bg-white/80 dark:focus:bg-white/20"
                  />
                </div>
                <div className="transition-all duration-300 hover:translate-y-[-2px]">
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium mb-2 sm:mb-3 text-foreground/70">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Your phone"
                    className="h-12 sm:h-14 rounded-xl bg-white/60 dark:bg-white/10 backdrop-blur-sm border-white/40 dark:border-white/20 transition-all duration-300 focus:shadow-lg focus:bg-white/80 dark:focus:bg-white/20"
                  />
                </div>
              </div>
              <div className="transition-all duration-300 hover:translate-y-[-2px]">
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-2 sm:mb-3 text-foreground/70">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="h-12 sm:h-14 rounded-xl bg-white/60 dark:bg-white/10 backdrop-blur-sm border-white/40 dark:border-white/20 transition-all duration-300 focus:shadow-lg focus:bg-white/80 dark:focus:bg-white/20"
                />
              </div>
              <div className="transition-all duration-300 hover:translate-y-[-2px]">
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-2 sm:mb-3 text-foreground/70">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="rounded-xl bg-white/60 dark:bg-white/10 backdrop-blur-sm border-white/40 dark:border-white/20 resize-none transition-all duration-300 focus:shadow-lg focus:bg-white/80 dark:focus:bg-white/20"
                />
              </div>
              <Button 
                type="submit" 
                disabled={formStatus === "submitting"} 
                size="lg" 
                className="w-full h-12 sm:h-14 rounded-full text-sm sm:text-base bg-primary/90 backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:bg-primary active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === "submitting" ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : formStatus === "success" ? (
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Sent!
                  </span>
                ) : (
                  "Get Free Quote"
                )}
              </Button>
            </form>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-10 pt-6 sm:pt-10 border-t border-white/30 dark:border-border/50">
              <div 
                className={`text-center bg-white/40 dark:bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <h3 className="text-[10px] sm:text-xs font-medium text-muted-foreground mb-1.5 sm:mb-2 uppercase tracking-wide">Email</h3>
                <a
                  href="mailto:sydneytileco@gmail.com"
                  className="text-xs sm:text-sm font-semibold hover:text-accent transition-colors break-all"
                >
                  sydneytileco@gmail.com
                </a>
              </div>
              <div 
                className={`text-center bg-white/40 dark:bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/30 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "700ms" }}
              >
                <h3 className="text-[10px] sm:text-xs font-medium text-muted-foreground mb-1.5 sm:mb-2 uppercase tracking-wide">Location</h3>
                <p className="text-xs sm:text-sm font-semibold">Greater Sydney</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
