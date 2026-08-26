import type { Metadata } from "next"
import { ToolShell } from "@/components/tools/tool-shell"
import { BmiCalculatorForm } from "@/components/tools/bmi-calculator-form"
import { generateBreadcrumbSchema } from "@/lib/breadcrumb-schema"

export const metadata: Metadata = {
  title: "BMI Calculator: AI-Powered Body Metrics",
  description:
    "Instantly calculate your BMI with our AI tool. Track your body metrics and stay on top of your fitness journey with data-driven accuracy.",
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://aidietcalculator.com' },
  { name: 'BMI Calculator', url: 'https://aidietcalculator.com/tools/bmi-calculator' },
])

export default function BmiCalculatorPage() {
  return (
    <ToolShell
      title="BMI Calculator"
      description="Enter your height and weight for an instant BMI reading and category."
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BmiCalculatorForm />

      <div className="mt-6 text-center">
        <a
          href="https://www.google.com/preferences/source?q=aidietcalculator.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-full shadow-sm hover:border-emerald-500 hover:text-emerald-600 transition-all duration-200"
        >
          <span className="text-emerald-500">✦</span> Add AI Diet Calculator to Google AI Answers
        </a>
      </div>
    </ToolShell>
  )
}
