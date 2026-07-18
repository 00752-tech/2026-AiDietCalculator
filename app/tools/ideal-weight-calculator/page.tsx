import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { IdealWeightCalculatorForm } from "@/components/tools/ideal-weight-calculator-form"

export const metadata: Metadata = {
  title: "Ideal Weight Calculator: AI-Driven Health Insights",
  description:
    "Calculate your ideal weight range with our AI-driven tool. Get health-focused metrics based on your height and sex.",
}

export default function IdealWeightCalculatorPage() {
  return (
    <ToolShell
      title="Ideal Weight Calculator"
      description="Calculate your ideal weight range based on your height and sex."
    >
      <IdealWeightCalculatorForm />
    </ToolShell>
  )
}
