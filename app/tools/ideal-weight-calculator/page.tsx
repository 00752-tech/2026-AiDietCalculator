import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { IdealWeightCalculatorForm } from "@/components/tools/ideal-weight-calculator-form"
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema"

export const metadata: Metadata = {
  alternates: { canonical: '/tools/ideal-weight-calculator' },
  title: "Ideal Weight Calculator: Estimate Your Target Weight",
  description:
    "Estimate an ideal body weight from your height and sex. It's a reference estimate, not a complete measure of health.",
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://aidietcalculator.com' },
  { name: 'Ideal Weight Calculator', url: 'https://aidietcalculator.com/tools/ideal-weight-calculator' },
])

export default function IdealWeightCalculatorPage() {
  return (
    <ToolShell
      title="Ideal Weight Calculator"
      description="Estimate your ideal weight based on your height and sex."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <IdealWeightCalculatorForm />
    </ToolShell>
  )
}
