import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { CalorieCalculatorForm } from "@/components/tools/calorie-calculator-form"

export const metadata: Metadata = {
  title: "Calorie Calculator — Daily Intake Estimator",
  description:
    "Calculate your daily calorie needs based on age, weight, height, and activity level. Instant TDEE and calorie goals for weight loss, maintenance, or muscle gain.",
}

export default function CalorieCalculatorPage() {
  return (
    <ToolShell
      title="Calorie Calculator"
      description="Estimate your daily calorie needs based on your body metrics and activity level."
    >
      <CalorieCalculatorForm />
    </ToolShell>
  )
}
