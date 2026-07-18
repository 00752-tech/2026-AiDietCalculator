import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { CalorieCalculatorForm } from "@/components/tools/calorie-calculator-form"

export const metadata: Metadata = {
  title: "Calorie Calculator — Daily Calorie Needs",
  description:
    "Find your daily calorie needs for weight loss, maintenance, or muscle gain based on your age, activity level, and goal.",
}

export default function CalorieCalculatorPage() {
  return (
    <ToolShell
      title="Calorie Calculator"
      description="See your maintenance calories and a target based on your goal."
    >
      <CalorieCalculatorForm />
    </ToolShell>
  )
}
