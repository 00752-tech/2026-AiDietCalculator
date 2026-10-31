import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { CalorieCalculatorForm } from "@/components/tools/calorie-calculator-form"
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema"

export const metadata: Metadata = {
  alternates: { canonical: '/tools/calorie-calculator' },
  title: "Calorie Calculator: Estimate Your Daily Calorie Needs",
  description:
    "Estimate your daily calorie needs and a calorie target for your goal, based on your body metrics and activity level.",
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://aidietcalculator.com' },
  { name: 'Calorie Calculator', url: 'https://aidietcalculator.com/tools/calorie-calculator' },
])

export default function CalorieCalculatorPage() {
  return (
    <ToolShell
      title="Calorie Calculator"
      description="Estimate your daily calorie needs based on your body metrics and activity level."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CalorieCalculatorForm />
    </ToolShell>
  )
}
