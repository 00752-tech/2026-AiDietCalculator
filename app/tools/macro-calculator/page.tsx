import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { MacroCalculatorForm } from "@/components/tools/macro-calculator-form"

export const metadata: Metadata = {
  title: "Macro Calculator — Protein, Fat & Carbs Split",
  description:
    "Calculate your macronutrient split (protein, fat, carbs) for your daily calorie goal. Get personalized macros for weight loss, maintenance, or muscle building.",
}

export default function MacroCalculatorPage() {
  return (
    <ToolShell
      title="Macro Calculator"
      description="Split your daily calories into protein, fat, and carbs for your fitness goal."
    >
      <MacroCalculatorForm />
    </ToolShell>
  )
}
