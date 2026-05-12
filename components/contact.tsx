"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import emailjs from "@emailjs/browser"
import { Mail, MapPin, MessageSquareText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type FormStatus = "idle" | "submitting" | "success" | "error"

const trustPoints = [
  "Free quote tailored to your space and tile selection",
  "Helpful guidance on layouts, finishes, and wet-area work",
  "Service across Greater Sydney",
]

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
      setErrorMessage("The message could not be sent. Please try again or email directly.")

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
      className="mesh-section overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-12 lg:py-32"
      aria-labelledby="contact-heading"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <div className="container mx-auto max-w-6xl">
        <header
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="surface-panel inline-flex rounded-full px-4 py-2 text-sm font-semibold text-primary">
            Contact
          </div>
          <h2
            id="contact-heading"
            className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            Request a quote for your Sydney tiling project.
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
            Share your project details and we&apos;ll come back with a tailored quote for the work,
            materials, and finish you&apos;re aiming for.
          </p>
        </header>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:gap-10">
          <div
            className={`tile-3d surface-panel-dark relative overflow-hidden rounded-[2rem] p-5 text-white transition-all duration-700 delay-150 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
              <Image
                src="/images/floor/main.jpg"
                alt="Premium floor tiling project by Sydney Pro Tiling"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,14,10,0.08)_0%,rgba(17,14,10,0.72)_100%)]" />
            </div>

            <div className="absolute left-6 right-6 top-6 rounded-[1.4rem] border border-white/12 bg-black/28 p-4 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">What you can send</p>
              <div className="mt-3 space-y-2.5 text-sm text-white/82">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <MessageSquareText className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.3rem] border border-white/12 bg-white/12 p-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-amber-300" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/55">Email</p>
                    <a href="mailto:sydneytileco@gmail.com" className="text-sm font-semibold text-white">
                      sydneytileco@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.3rem] border border-white/12 bg-white/12 p-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-amber-300" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/55">Area</p>
                    <p className="text-sm font-semibold text-white">Greater Sydney</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`surface-panel rounded-[2rem] p-5 shadow-xl transition-all duration-700 delay-250 sm:p-7 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
            itemScope
            itemType="https://schema.org/ContactPoint"
          >
            {formStatus === "success" && (
              <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-center text-emerald-800">
                <p className="font-semibold">Message sent successfully.</p>
                <p className="mt-1 text-sm">We&apos;ll follow up as soon as possible.</p>
              </div>
            )}

            {formStatus === "error" && (
              <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-center text-red-800">
                <p className="font-semibold">There was a sending issue.</p>
                <p className="mt-1 text-sm">{errorMessage}</p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form for free tiling quote">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-primary/75">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="h-14 rounded-2xl border-white/60 bg-white/70"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-primary/75">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Best contact number"
                    className="h-14 rounded-2xl border-white/60 bg-white/70"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-primary/75">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="h-14 rounded-2xl border-white/60 bg-white/70"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-primary/75">
                  Project details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about the rooms, tile type, area size, and any waterproofing or custom layout requirements."
                  rows={6}
                  className="rounded-[1.5rem] border-white/60 bg-white/70 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={formStatus === "submitting"}
                size="lg"
                className="h-14 w-full rounded-full bg-primary text-base font-semibold text-primary-foreground shadow-[0_18px_40px_rgba(73,56,36,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/92 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {formStatus === "submitting" ? "Sending..." : "Request Free Quote"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
