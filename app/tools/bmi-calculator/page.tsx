import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { BmiCalculatorForm } from "@/components/tools/bmi-calculator-form"

export const metadata: Metadata = {
  title: "BMI Calculator: AI-Powered Body Metrics",
  description:
    "Instantly calculate your BMI with our AI tool. Track your body metrics and stay on top of your fitness journey with data-driven accuracy.",
}

export default function BmiCalculatorPage() {
  return (
    <ToolShell
      title="BMI Calculator"
      description="Enter your height and weight for an instant BMI reading and category."
    >
      <BmiCalculatorForm />
    </ToolShell>
  )
}
