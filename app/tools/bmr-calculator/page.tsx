import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { BmrCalculatorForm } from "@/components/tools/bmr-calculator-form"
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema"

export const metadata: Metadata = {
  alternates: { canonical: '/tools/bmr-calculator' },
  title: "BMR Calculator: Estimate Your Resting Metabolic Rate",
  description:
    "Estimate your basal metabolic rate (BMR), the calories your body uses at rest, from your age, sex, height and weight.",
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://aidietcalculator.com' },
  { name: 'BMR Calculator', url: 'https://aidietcalculator.com/tools/bmr-calculator' },
])

export default function BmrCalculatorPage() {
  return (
    <ToolShell
      title="BMR Calculator"
      description="Calculate your basal metabolic rate, the energy your body uses at rest, from your age, sex, height and weight."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BmrCalculatorForm />
    </ToolShell>
  )
}
