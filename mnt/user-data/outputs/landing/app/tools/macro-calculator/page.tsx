import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { MacroCalculatorForm } from "@/components/tools/macro-calculator-form"

export const metadata: Metadata = {
  title: "Macro Calculator — Protein, Carbs & Fat Targets",
  description: "Get your daily protein, carb, and fat targets in grams based on your calorie goal.",
}

export default function MacroCalculatorPage() {
  return (
    <ToolShell
      title="Macro Calculator"
      description="See your protein, carb, and fat split in grams, based on your goal."
    >
      <MacroCalculatorForm />
    </ToolShell>
  )
}
