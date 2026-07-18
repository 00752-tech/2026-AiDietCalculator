import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { IdealWeightCalculatorForm } from "@/components/tools/ideal-weight-calculator-form"
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Ideal Weight Calculator: AI-Driven Health Insights",
  description:
    "Calculate your ideal weight range with our AI-driven tool. Get health-focused metrics based on your height and sex.",
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://aidietcalculator.com' },
  { name: 'Ideal Weight Calculator', url: 'https://aidietcalculator.com/tools/ideal-weight-calculator' },
])

export default function IdealWeightCalculatorPage() {
  return (
    <ToolShell
      title="Ideal Weight Calculator"
      description="Calculate your ideal weight range based on your height and sex."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <IdealWeightCalculatorForm />
    </ToolShell>
  )
}
