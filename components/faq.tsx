import { faqItems } from "@/lib/site"

export function FAQ() {
  return (
    <section
      id="faq"
      className="mesh-section px-4 py-16 sm:px-6 sm:py-24 lg:px-12 lg:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="surface-panel inline-flex rounded-full px-4 py-2 text-sm font-semibold text-primary">
            FAQ
          </div>
          <h2
            id="faq-heading"
            className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            Helpful answers before you start your project.
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg">
            A quick overview of the questions homeowners ask most often before requesting a quote.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqItems.map((item) => (
            <details key={item.question} className="surface-panel group rounded-[1.75rem] p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold text-primary marker:hidden">
                {item.question}
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
