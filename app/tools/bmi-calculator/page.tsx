import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { BmiCalculatorForm } from "@/components/tools/bmi-calculator-form"
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema"

export const metadata: Metadata = {
  title: "BMI Calculator: AI-Powered Body Metrics",
  description:
    "Instantly calculate your BMI with our AI tool. Track your body metrics and stay on top of your fitness journey with data-driven accuracy.",
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://aidietcalculator.com' },
  { name: 'BMI Calculator', url: 'https://aidietcalculator.com/tools/bmi-calculator' },
])

export default function BmiCalculatorPage() {
  return (
    <ToolShell
      title="BMI Calculator"
      description="Enter your height and weight for an instant BMI reading and category."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BmiCalculatorForm />
    </ToolShell>
  )
}
