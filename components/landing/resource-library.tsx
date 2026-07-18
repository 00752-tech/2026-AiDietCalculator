// Server component — plain links, no client JS needed. Crawlable, keeps your
// existing rankings for these queries without competing with the diagnostic funnel.
// Route each href to wherever these calculators actually live (e.g. /tools/bmi-calculator).
// Live tools, prioritized by actual Search Console demand (highest impressions/queries first).
const TOOLS = [
  { label: "BMI Calculator", href: "/tools/bmi-calculator" },
  { label: "Calorie Calculator", href: "/tools/calorie-calculator" },
  { label: "Protein Calculator", href: "/tools/protein-calculator" },
  { label: "Macro Calculator", href: "/tools/macro-calculator" },
  { label: "BMR Calculator", href: "/tools/bmr-calculator" },
  { label: "Ideal Weight Calculator", href: "/tools/ideal-weight-calculator" },
]

export function ResourceLibrary() {
  return (
    <section className="border-t border-[#0F1B2A]/10 bg-white px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <p className="mb-1 font-mono text-xs uppercase tracking-[0.2em] text-[#0F1B2A]/40">
          Resource library
        </p>
        <h2 className="mb-8 font-serif text-2xl text-[#0F1B2A]">Individual calculators</h2>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
          {TOOLS.map((tool) => (
            <li key={tool.href}>
              <a
                href={tool.href}
                className="text-sm text-[#0F1B2A]/70 underline-offset-4 hover:text-[#0E7C7B] hover:underline"
              >
                {tool.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
