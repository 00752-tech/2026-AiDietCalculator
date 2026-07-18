import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { IdealWeightCalculatorForm } from "@/components/tools/ideal-weight-calculator-form"

export const metadata: Metadata = {
  title: "Ideal Weight Calculator — Devine Formula",
  description:
    "Calculate your ideal weight based on height and sex using the Devine formula. Get personalized weight targets for your fitness journey.",
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
