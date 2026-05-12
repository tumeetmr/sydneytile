import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono, Manrope, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { faqItems, serviceCatalog, siteConfig } from "@/lib/site"

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
})

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
})

const monoFont = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono-app",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "tiler Sydney",
    "tiling services Sydney",
    "bathroom tiling Sydney",
    "floor tiling Sydney",
    "wall tiling Sydney",
    "waterproofing Sydney",
    "outdoor tiling Sydney",
    "tile installer Sydney",
  ],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.baseUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Home Services",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.ogDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} social preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.ogDescription,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/sydneytiling.png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.baseUrl}/#business`,
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.baseUrl,
      email: siteConfig.email,
      image: `${siteConfig.baseUrl}/opengraph-image`,
      logo: `${siteConfig.baseUrl}/sydneytiling.png`,
      areaServed: siteConfig.areasServed.map((name) => ({
        "@type": "Place",
        name,
      })),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
        addressRegion: "NSW",
        addressCountry: "AU",
      },
      foundingDate: String(siteConfig.foundingYear),
      makesOffer: serviceCatalog.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "AUD",
          description: service.priceLabel,
        },
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.baseUrl}/#website`,
      url: siteConfig.baseUrl,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "en-AU",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.baseUrl}/#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU">
      <body className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
