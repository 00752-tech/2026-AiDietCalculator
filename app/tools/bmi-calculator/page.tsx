import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { BmiCalculatorForm } from "@/components/tools/bmi-calculator-form"

export const metadata: Metadata = {
  title: "BMI Calculator — Free & Instant",
  description:
    "Calculate your Body Mass Index instantly. Enter your height and weight to see your BMI and what it means.",
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
