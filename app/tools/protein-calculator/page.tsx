import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { ProteinCalculatorForm } from "@/components/tools/protein-calculator-form"

export const metadata: Metadata = {
  title: "Protein Calculator: AI Macro Tracker",
  description:
    "Optimize your protein intake with our AI-powered calculator. Get precise daily targets to build muscle and achieve your fitness goals.",
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
