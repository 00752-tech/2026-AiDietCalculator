import type { Metadata } from "next"
import { DiagnosticTool } from "@/components/landing/diagnostic-tool"
import { ResourceLibrary } from "@/components/landing/resource-library"

export const metadata: Metadata = {
  title: "AI Diet Calculator — Free & Instant Results",
  description:
    "Calculate your daily calorie needs, BMI, protein intake, and macros instantly. AI-powered nutrition planning for weight loss, maintenance, and muscle gain.",
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
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
      <ResourceLibrary />
    </main>
  )
}
