export const siteConfig = {
  name: "Sydney Pro Tiling",
  baseUrl: "https://sydneytileco.com",
  email: "sydneytileco@gmail.com",
  location: "Greater Sydney, NSW",
  foundingYear: 2010,
  title: "Professional Tiling Services in Sydney",
  description:
    "Sydney Pro Tiling delivers professional floor, wall, bathroom, and outdoor tiling across Greater Sydney with a detail-focused approach, clear communication, and dependable finishes.",
  ogDescription:
    "Premium floor, wall, bathroom, and outdoor tiling across Greater Sydney. Thoughtful workmanship, waterproofing expertise, and free project quotes.",
  areasServed: [
    "Sydney CBD",
    "Eastern Suburbs",
    "Inner West",
    "North Sydney",
    "Northern Beaches",
    "Parramatta",
    "Western Sydney",
  ],
} as const

export const serviceCatalog = [
  {
    name: "Floor Tiling",
    description:
      "Precision floor tile installation for living spaces, kitchens, hallways, and commercial interiors.",
    priceLabel: "From $80/m²",
  },
  {
    name: "Wall Tiling",
    description:
      "Crisp wall finishes for kitchens, splashbacks, bathrooms, laundries, and statement feature walls.",
    priceLabel: "From $70/m²",
  },
  {
    name: "Bathroom Tiling & Waterproofing",
    description:
      "Wet-area tiling paired with compliant waterproofing for bathrooms, ensuites, and shower rebuilds.",
    priceLabel: "From $120/m²",
  },
  {
    name: "Custom Tile Layouts",
    description:
      "Herringbone, mosaic, stacked, and large-format layouts designed to elevate the final space.",
    priceLabel: "From $150/m²",
  },
] as const

export const faqItems = [
  {
    question: "What types of tiling projects do you take on?",
    answer:
      "We handle floor tiling, wall tiling, bathroom renovations, waterproofing, splashbacks, outdoor areas, and custom tile layouts for residential and selected commercial projects across Greater Sydney.",
  },
  {
    question: "Do you provide waterproofing as part of bathroom work?",
    answer:
      "Yes. Bathroom projects can include waterproofing alongside tiling so the finish is both visually clean and built for wet-area performance.",
  },
  {
    question: "How are quotes provided?",
    answer:
      "Quotes are tailored to the tile type, surface condition, layout complexity, and total area. Share your project details through the contact form and we can provide a free quote.",
  },
  {
    question: "Which parts of Sydney do you service?",
    answer:
      "Sydney Pro Tiling services Greater Sydney, including the CBD, Eastern Suburbs, Inner West, North Sydney, Northern Beaches, Parramatta, and surrounding areas.",
  },
] as const
