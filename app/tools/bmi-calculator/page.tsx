import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { BmiCalculatorForm } from "@/components/tools/bmi-calculator-form"
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema"

export const metadata: Metadata = {
  alternates: { canonical: '/tools/bmi-calculator' },
  title: "BMI Calculator: Check Your Body Mass Index",
  description:
    "Calculate your BMI from height and weight and see which category it falls in. BMI is a quick screening number, not a full picture of health.",
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
