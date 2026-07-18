import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { CalorieCalculatorForm } from "@/components/tools/calorie-calculator-form"

export const metadata: Metadata = {
  title: "Calorie Calculator: AI Daily Intake Planner",
  description:
    "Find your daily calorie needs with our AI calculator. Get precise, personalized targets for weight loss or maintenance based on your body metrics.",
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
