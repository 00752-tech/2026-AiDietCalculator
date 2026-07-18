import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { CalorieCalculatorForm } from "@/components/tools/calorie-calculator-form"
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Calorie Calculator: AI Daily Intake Planner",
  description:
    "Find your daily calorie needs with our AI calculator. Get precise, personalized targets for weight loss or maintenance based on your body metrics.",
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
