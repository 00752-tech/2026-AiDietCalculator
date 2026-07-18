import type { ReactNode } from "react"
import Link from "next/link"

const CALCULATOR_LINKS = [
  { name: "BMI Calculator", href: "/tools/bmi-calculator" },
  { name: "BMR Calculator", href: "/tools/bmr-calculator" },
  { name: "Calorie Calculator", href: "/tools/calorie-calculator" },
  { name: "Ideal Weight Calculator", href: "/tools/ideal-weight-calculator" },
  { name: "Macro Calculator", href: "/tools/macro-calculator" },
  { name: "Protein Calculator", href: "/tools/protein-calculator" },
]

export function ToolShell({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <main className="min-h-screen bg-[#F7F9FA] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-xl">
        <a href="/" className="mb-8 inline-block text-sm text-[#0F1B2A]/50 hover:text-[#0E7C7B]">
          ← Back to Metabolic Diagnostic
        </a>
        <h1 className="font-serif text-3xl text-[#0F1B2A] md:text-4xl">{title}</h1>
        <p className="mt-3 text-[#0F1B2A]/70">{description}</p>
        <div className="mt-8">{children}</div>
      </div>

      {/* Cross-Tool Navigation Footer */}
      <nav className="mt-16 border-t border-[#0F1B2A]/10 bg-white/50 px-4 py-12">
        <div className="mx-auto max-w-xl">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {CALCULATOR_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#0F1B2A]/60 hover:text-[#0E7C7B] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </main>
  )
}
