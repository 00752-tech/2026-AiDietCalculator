import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { BmrCalculatorForm } from "@/components/tools/bmr-calculator-form"

export const metadata: Metadata = {
  title: "BMR Calculator — Basal Metabolic Rate (Mifflin-St Jeor)",
  description: "Calculate your Basal Metabolic Rate using the Mifflin-St Jeor formula.",
}

export default function BmrCalculatorPage() {
  return (
    <ToolShell
      title="BMR Calculator"
      description="Your Basal Metabolic Rate: the calories your body burns at complete rest."
    >
      <BmrCalculatorForm />
    </ToolShell>
  )
}
