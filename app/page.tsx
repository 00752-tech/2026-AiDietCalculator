import type { Metadata } from "next"
import Link from "next/link"
import { DiagnosticTool } from "@/components/landing/diagnostic-tool"
import { ResourceLibrary } from "@/components/landing/resource-library"

export const metadata: Metadata = {
  title: "AI Diet Calculator — Metabolic Diagnostic Hub",
  description:
    "Calculate your daily calorie needs, BMI, protein intake, and macros instantly. Explore our expert-led metabolic health and microbiome science database.",
}

const CATEGORIES = [
  { name: "Metabolic Diagnostic Profiles", slug: "metabolic-diagnostic-profiles" },
  { name: "Vegan Diet Strategies", slug: "vegan-diet-strategies" },
  { name: "Metabolic Compounds", slug: "metabolic-compounds" },
  { name: "Hormonal Health", slug: "hormonal-health" },
  { name: "Clean Label Standards", slug: "clean-label-standards" },
  { name: "Athletic Performance", slug: "athletic-performance" },
  { name: "Psychological Triggers", slug: "psychological-triggers" },
  { name: "Authority Pillar Pages", slug: "authority-pillar-pages" },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Diagnostic Section */}
      <section className="bg-background px-4 py-12 md:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
              Your Metabolic Diagnostic
            </h1>
            <p className="text-lg text-secondary">
              Real numbers for your body. Built on the Mifflin-St Jeor formula — the same protocol behind clinical metabolic testing.
            </p>
          </div>
          <DiagnosticTool />
        </div>
      </section>

      {/* Authority Hub Section */}
      <section className="bg-slate-50 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-serif">Metabolic Intelligence Hub</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => (
              <Link 
                key={cat.slug} 
                href={`/content/${cat.slug}`}
                className="p-6 bg-white border border-slate-200 rounded-lg hover:border-blue-500 transition-colors shadow-sm"
              >
                <h3 className="font-semibold text-lg">{cat.name}</h3>
                <p className="text-sm text-slate-500 mt-2">Expert-led research on {cat.name.toLowerCase()}.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Library */}
      <ResourceLibrary />
    </main>
  )
}
