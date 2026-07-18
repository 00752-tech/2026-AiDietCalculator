import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { MacroCalculatorForm } from "@/components/tools/macro-calculator-form"
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Macro Calculator: AI Nutrition & Fitness Planner",
  description:
    "Split your calories into protein, fat, and carbs with our AI macro calculator. Get custom nutritional targets to support your fitness journey.",
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://aidietcalculator.com' },
  { name: 'Macro Calculator', url: 'https://aidietcalculator.com/tools/macro-calculator' },
])

export default function MacroCalculatorPage() {
  return (
    <ToolShell
      title="Macro Calculator"
      description="Split your daily calories into protein, fat, and carbs for your fitness goal."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MacroCalculatorForm />
    </ToolShell>
  )
}
