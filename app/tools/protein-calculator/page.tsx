import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { ProteinCalculatorForm } from "@/components/tools/protein-calculator-form"

export const metadata: Metadata = {
  title: "Protein Calculator — Daily Intake Guide",
  description:
    "Calculate your daily protein needs based on your weight and fitness goal. Get personalized recommendations for weight loss, maintenance, or muscle gain.",
}

export default function ProteinCalculatorPage() {
  return (
    <ToolShell
      title="Protein Calculator"
      description="Calculate your daily protein intake based on your weight and fitness goal."
    >
      <ProteinCalculatorForm />
    </ToolShell>
  )
}
