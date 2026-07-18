import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { ProteinCalculatorForm } from "@/components/tools/protein-calculator-form"

export const metadata: Metadata = {
  title: "Protein Calculator — Daily Protein Intake",
  description: "Calculate how much protein you need per day based on your weight and goal.",
}

export default function ProteinCalculatorPage() {
  return (
    <ToolShell
      title="Protein Calculator"
      description="Enter your weight and goal to get your daily protein target in grams."
    >
      <ProteinCalculatorForm />
    </ToolShell>
  )
}
