import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { MacroCalculatorForm } from "@/components/tools/macro-calculator-form"
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema"

export const metadata: Metadata = {
  alternates: { canonical: '/tools/macro-calculator' },
  title: "Macro Calculator: Protein, Carb and Fat Targets",
  description:
    "Split your daily calories into protein, carbohydrate and fat targets for your goal, based on your body metrics.",
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
