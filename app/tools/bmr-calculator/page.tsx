import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { BmrCalculatorForm } from "@/components/tools/bmr-calculator-form"
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema"

export const metadata: Metadata = {
  title: "BMR Calculator: AI Metabolic Rate Estimator",
  description:
    "Discover your Basal Metabolic Rate (BMR) with our AI calculator. Understand your body energy needs to lose weight or build muscle effectively.",
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://aidietcalculator.com' },
  { name: 'BMR Calculator', url: 'https://aidietcalculator.com/tools/bmr-calculator' },
])

export default function BmrCalculatorPage() {
  return (
    <ToolShell
      title="BMR Calculator"
      description="Calculate your basal metabolic rate and daily calorie needs based on your body metrics and activity level."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BmrCalculatorForm />
    </ToolShell>
  )
}
