import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { BmrCalculatorForm } from "@/components/tools/bmr-calculator-form"

export const metadata: Metadata = {
  title: "BMR Calculator — Basal Metabolic Rate",
  description:
    "Calculate your basal metabolic rate using the Mifflin-St Jeor formula. Find your BMR and daily calorie needs for your fitness goal.",
}

export default function BmrCalculatorPage() {
  return (
    <ToolShell
      title="BMR Calculator"
      description="Calculate your basal metabolic rate and daily calorie needs based on your body metrics and activity level."
    >
      <BmrCalculatorForm />
    </ToolShell>
  )
}
