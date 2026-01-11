import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
})

const baseUrl = "https://sydneytileco.com"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Sydney Pro Tiling | #1 Professional Tiler in Sydney | Floor & Wall Tiling",
    template: "%s | Sydney Pro Tiling",
  },
  description:
    "Sydney's trusted professional tiling service with 15+ years experience. Expert floor tiling, wall tiling, bathroom renovations, waterproofing & kitchen backsplash. Licensed & insured. Free quotes! ⭐ 500+ happy clients across Greater Sydney.",
  keywords: [
    "tiling Sydney",
    "tilers Sydney",
    "tiling services Sydney",
    "tile installation Sydney",
    "professional tilers Sydney",
    "licensed tiler Sydney",
    "local tilers Sydney",
    "Sydney tiling company",
    "bathroom tiling Sydney",
    "kitchen tiling Sydney",
    "floor tiling Sydney",
    "wall tiling Sydney",
    "shower tiling Sydney",
    "outdoor tiling Sydney",
    "patio tiling Sydney",
    "balcony tiling Sydney",
    "laundry tiling Sydney",
    "commercial tiling Sydney",
    "residential tiling Sydney",
    "porcelain tiling Sydney",
    "ceramic tiling Sydney",
    "marble tiling Sydney",
    "stone tiling Sydney",
    "natural stone tiles Sydney",
    "mosaic tiling Sydney",
    "large format tiling Sydney",
    "terrazzo tiling Sydney",
    "tile repair Sydney",
    "tile replacement Sydney",
    "retiling Sydney",
    "bathroom renovation tiling Sydney",
    "cracked tile repair Sydney",
    "regrouting Sydney",
    "waterproofing and tiling Sydney",
    "tiling cost Sydney",
    "tiler prices Sydney",
    "tiling quotes Sydney",
    "tiling rates Sydney",
    "affordable tilers Sydney",
    "cheap tilers Sydney",
    "tiling price per sqm Sydney",
    "tilers Sydney CBD",
    "tilers Western Sydney",
    "tilers Eastern Suburbs Sydney",
    "tilers Northern Beaches",
    "tilers Inner West Sydney",
    "tilers Parramatta",
    "tilers Bondi",
    "tilers Blacktown",
    "tilers Liverpool",
    "tilers Penrith",
    "tilers near me Sydney",
    "tiling services near me Sydney",
    "local tiler near me",
    "tile installer near me Sydney",
    "tiling contractors Sydney",
    "commercial tilers Sydney",
    "industrial tiling Sydney",
    "strata tiling Sydney",
    "tiling subcontractor Sydney",
    "builders tiler Sydney",
    "waterproof bathroom tiling Sydney",
    "anti slip tiles Sydney",
    "heated floor tiling Sydney",
    "luxury tiling Sydney",
    "custom tiling Sydney",
    "high end tilers Sydney",
    "best tilers Sydney",
    "top rated tilers Sydney",
    "trusted tilers Sydney",
    "experienced tilers Sydney",
    "insured tilers Sydney",
    "guaranteed tiling work Sydney",
  ],
  authors: [{ name: "Sydney Pro Tiling", url: baseUrl }],
  creator: "Sydney Pro Tiling",
  publisher: "Sydney Pro Tiling",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: baseUrl,
    siteName: "Sydney Pro Tiling",
    title: "Sydney Pro Tiling | #1 Professional Tiler in Sydney",
    description:
      "Sydney's most trusted tiling service. 15+ years experience, 500+ happy clients. Expert bathroom, kitchen, floor & wall tiling. Licensed & insured. Free quotes!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sydney Pro Tiling - Professional Floor & Wall Tiling Services in Sydney",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 600,
        height: 600,
        alt: "Sydney Pro Tiling Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sydney Pro Tiling | #1 Professional Tiler in Sydney",
    description: "Expert floor & wall tiling services. 15+ years experience, 500+ clients. Free quotes! Licensed & insured.",
    images: ["/og-image.jpg"],
    creator: "@sydneyprotiling",
    site: "@sydneyprotiling",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  category: "Home Services",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
  applicationName: "Sydney Pro Tiling",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#1a1a1a",
      },
    ],
  },
  other: {
    "geo.region": "AU-NSW",
    "geo.placename": "Sydney",
    "geo.position": "-33.8688;151.2093",
    "ICBM": "-33.8688, 151.2093",
    "og:locality": "Sydney",
    "og:region": "NSW",
    "og:country-name": "Australia",
    "og:phone_number": "+61400000000",
    "og:email": "sydneytileco@gmail.com",
    "business:contact_data:street_address": "Greater Sydney Area",
    "business:contact_data:locality": "Sydney",
    "business:contact_data:region": "NSW",
    "business:contact_data:postal_code": "2000",
    "business:contact_data:country_name": "Australia",
  },
}

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#business`,
      name: "Sydney Pro Tiling",
      alternateName: "Sydney Professional Tiling Services",
      description: "Sydney's trusted professional tiling service with 15+ years experience. Expert floor tiling, wall tiling, bathroom renovations, waterproofing & kitchen backsplash.",
      url: baseUrl,
      telephone: "+61400000000",
      email: "sydneytileco@gmail.com",
      image: `${baseUrl}/og-image.jpg`,
      logo: `${baseUrl}/logo.png`,
      priceRange: "$$",
      currenciesAccepted: "AUD",
      paymentAccepted: "Cash, Credit Card, Bank Transfer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
        addressRegion: "NSW",
        postalCode: "2000",
        addressCountry: "AU",
        streetAddress: "Greater Sydney Area",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "14:00",
        },
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -33.8688,
        longitude: 151.2093,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Sydney",
          "@id": "https://www.wikidata.org/wiki/Q3130",
        },
        { "@type": "Place", name: "Greater Sydney" },
        { "@type": "Place", name: "North Sydney" },
        { "@type": "Place", name: "Eastern Suburbs" },
        { "@type": "Place", name: "Inner West" },
        { "@type": "Place", name: "Northern Beaches" },
        { "@type": "Place", name: "Parramatta" },
        { "@type": "Place", name: "Bondi" },
        { "@type": "Place", name: "Mosman" },
        { "@type": "Place", name: "Manly" },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "John Smith",
          },
          reviewBody: "Excellent work on our bathroom renovation. Professional, clean, and delivered on time. Highly recommend!",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Tiling Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Floor Tiling",
              description: "Expert floor tile installation for all spaces. Standard, large format, and custom patterns.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Wall Tiling",
              description: "Professional wall tiling for kitchens, bathrooms, and feature walls.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Bathroom Tiling & Waterproofing",
              description: "Complete bathroom tiling with certified waterproofing services.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Tile Designs",
              description: "Herringbone, mosaic, and intricate patterns for unique spaces.",
            },
          },
        ],
      },
      sameAs: [
        "https://facebook.com",
        "https://instagram.com",
        "https://linkedin.com",
      ],
      foundingDate: "2010",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: "5-10",
      },
      slogan: "Quality Craftsmanship, Every Time",
      knowsAbout: [
        "Floor Tiling",
        "Wall Tiling",
        "Bathroom Renovation",
        "Kitchen Tiling",
        "Waterproofing",
        "Tile Installation",
        "Herringbone Pattern",
        "Mosaic Tiles",
        "Large Format Tiles",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Sydney Pro Tiling",
      description: "Professional tiling services in Sydney",
      publisher: {
        "@id": `${baseUrl}/#business`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${baseUrl}/?s={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
      inLanguage: "en-AU",
    },
    {
      "@type": "WebPage",
      "@id": `${baseUrl}/#webpage`,
      url: baseUrl,
      name: "Sydney Pro Tiling | #1 Professional Tiler in Sydney",
      isPartOf: {
        "@id": `${baseUrl}/#website`,
      },
      about: {
        "@id": `${baseUrl}/#business`,
      },
      description: "Sydney's trusted professional tiling service with 15+ years experience.",
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [baseUrl],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${baseUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does tiling cost in Sydney?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tiling costs in Sydney typically range from $70-$150 per square metre, depending on the type of tiles, complexity of the job, and preparation required. Floor tiling starts from $80/m², wall tiling from $70/m², bathroom waterproofing from $120/m², and custom designs from $150/m². Contact us for a free quote tailored to your project.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer free quotes for tiling work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we offer completely free, no-obligation quotes for all tiling projects across Greater Sydney. We'll assess your space, discuss your requirements, and provide a detailed written quote.",
          },
        },
        {
          "@type": "Question",
          name: "Are you a licensed tiler in Sydney?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we are fully licensed and insured tiling contractors operating across Greater Sydney. With 15+ years of experience and over 500 happy clients, we deliver quality workmanship on every project.",
          },
        },
        {
          "@type": "Question",
          name: "What areas of Sydney do you service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We service all areas of Greater Sydney including North Sydney, Eastern Suburbs, Inner West, Northern Beaches, Parramatta, Bondi, Mosman, Manly, and surrounding suburbs.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a bathroom tiling job take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A typical bathroom tiling job takes 3-5 days, depending on the size and complexity. This includes preparation, waterproofing (which requires curing time), and tile installation. We'll provide a detailed timeline with your quote.",
          },
        },
      ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#1a1a1a" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sydney Pro Tiling" />
      </head>
      <body className={`font-sans antialiased ${_spaceGrotesk.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
