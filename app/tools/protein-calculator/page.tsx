import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { ProteinCalculatorForm } from "@/components/tools/protein-calculator-form"
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema"

export const metadata: Metadata = {
  alternates: { canonical: '/tools/protein-calculator' },
  title: "Protein Calculator: Estimate Your Daily Protein Target",
  description:
    "Estimate your daily protein target in grams from your body weight and goal.",
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://aidietcalculator.com' },
  { name: 'Protein Calculator', url: 'https://aidietcalculator.com/tools/protein-calculator' },
])

export default function ProteinCalculatorPage() {
  return (
    <ToolShell
      title="Protein Calculator"
      description="Calculate your daily protein intake based on your weight and fitness goal."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProteinCalculatorForm />
    </ToolShell>
  )
}
