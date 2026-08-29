"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

type QuizStep = 1 | 2 | 3

export function MicroQuiz() {
  const router = useRouter()
  const [step, setStep] = useState<QuizStep>(1)
  const [answers, setAnswers] = useState({ goal: "", activity: "", age: "" })

  const handleSelection = (field: keyof typeof answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }))
    
    if (step < 3) {
      setTimeout(() => setStep((prev) => (prev + 1) as QuizStep), 300) // Slight delay for visual feedback
    } else {
      // Final step completion - Redirect to the main calculator with pre-filled intent or directly to VSL
      trackConversionEvent("quiz_completed")
      router.push(`/?goal=${value}`) // Optionally pass query params to pre-fill the main form
    }
  }

  // Placeholder for the custom analytics event tracking
  const trackConversionEvent = (eventName: string) => {
    if (typeof window !== "undefined" && (window as any).clarity) {
      (window as any).clarity("set", eventName, "true")
    }
    console.log(`Event tracked: ${eventName}`)
  }

  return (
    <div className="rounded-2xl border border-[#0F1B2A]/10 bg-white p-6 shadow-sm md:p-8">
      {/* Progress Bar */}
      <div className="mb-8 flex gap-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-1.5 w-full rounded-full transition-colors ${
              step >= i ? "bg-[#0E7C7B]" : "bg-gray-100"
            }`}
          />
        ))}
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          <h3 className="mb-5 text-xl font-medium text-[#0F1B2A]">What is your primary goal?</h3>
          <div className="space-y-3">
            {["Accelerate Fat Loss", "Maintain Current Weight", "Build Lean Muscle"].map((option) => (
              <Button
                key={option}
                variant="outline"
                className="h-auto w-full justify-start rounded-xl border-[#0F1B2A]/10 px-5 py-4 text-left text-base hover:border-[#0E7C7B] hover:bg-[#0E7C7B]/5"
                onClick={() => handleSelection("goal", option)}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          <h3 className="mb-5 text-xl font-medium text-[#0F1B2A]">How active is your daily lifestyle?</h3>
          <div className="space-y-3">
            {["Sedentary (Desk Job)", "Lightly Active (Walking/Chores)", "Highly Active (Daily Exercise)"].map((option) => (
              <Button
                key={option}
                variant="outline"
                className="h-auto w-full justify-start rounded-xl border-[#0F1B2A]/10 px-5 py-4 text-left text-base hover:border-[#0E7C7B] hover:bg-[#0E7C7B]/5"
                onClick={() => handleSelection("activity", option)}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          <h3 className="mb-5 text-xl font-medium text-[#0F1B2A]">Which age bracket are you in?</h3>
          <div className="space-y-3">
            {["18 - 34 years", "35 - 54 years", "55+ years"].map((option) => (
              <Button
                key={option}
                variant="outline"
                className="h-auto w-full justify-start rounded-xl border-[#0F1B2A]/10 px-5 py-4 text-left text-base hover:border-[#0E7C7B] hover:bg-[#0E7C7B]/5"
                onClick={() => handleSelection("age", option)}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
