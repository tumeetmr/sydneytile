import Link from "next/link"

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="px-4 pb-8 sm:px-6 lg:px-12" role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
      <div className="container mx-auto max-w-7xl">
        <div className="surface-panel-dark rounded-[2rem] px-6 py-10 text-primary-foreground sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/45">Sydney Pro Tiling</p>
              <h2
                className="mt-4 max-w-xl text-3xl font-bold text-white sm:text-4xl"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
              >
                Premium tiling finishes across Greater Sydney.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/68">
                Floor tiling, wall tiling, bathrooms, waterproofing, feature work, and outdoor
                surfaces delivered with detail-focused workmanship.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">Navigate</p>
                <div className="mt-4 grid gap-3">
                  {footerLinks.map((link) => (
                    <a key={link.href} href={link.href} className="text-base text-white/78 transition-colors hover:text-white">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">Contact</p>
                <div className="mt-4 grid gap-3 text-base text-white/78">
                  <a href="mailto:sydneytileco@gmail.com" className="transition-colors hover:text-white">
                    sydneytileco@gmail.com
                  </a>
                  <p>Greater Sydney, NSW</p>
                  <Link href="/#contact" className="font-semibold text-amber-200 transition-colors hover:text-amber-100">
                    Request a quote
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/48">
            © {new Date().getFullYear()} Sydney Pro Tiling. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
