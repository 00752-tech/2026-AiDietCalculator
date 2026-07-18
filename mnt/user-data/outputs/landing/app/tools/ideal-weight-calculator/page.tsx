import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { IdealWeightCalculatorForm } from "@/components/tools/ideal-weight-calculator-form"

export const metadata: Metadata = {
  title: "Ideal Weight Calculator",
  description: "Estimate your ideal body weight based on your height and sex using the Devine formula.",
}

export default function IdealWeightCalculatorPage() {
  return (
    <ToolShell
      title="Ideal Weight Calculator"
      description="An estimate based on height — a reference point, not a strict target."
    >
      <IdealWeightCalculatorForm />
    </ToolShell>
  )
}
