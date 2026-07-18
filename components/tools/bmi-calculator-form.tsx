"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AffiliateBridge } from "@/components/landing/affiliate-bridge"
import { SilentDelay } from "@/components/tools/silent-delay"
import { useDiagnosticDelay } from "@/lib/use-diagnostic-delay"
import { bmi, bmiCategory, inchesToCm, lbsToKg } from "@/lib/calculators"

type UnitSystem = "metric" | "imperial"

export function BmiCalculatorForm() {
  const [units, setUnits] = useState<UnitSystem>("imperial")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [result, setResult] = useState<{ value: number; label: string; color: string } | null>(null)
  const [showResults, setShowResults] = useState(false)
  const isAnalyzing = useDiagnosticDelay(showResults && !result)

  function handleUnitToggle(newUnits: UnitSystem) {
    if (!height || !weight) {
      setUnits(newUnits)
      return
    }
    // Convert input values to the new unit system
    if (newUnits === "imperial" && units === "metric") {
      setHeight(String(Math.round(Number(height) / 2.54 * 10) / 10))
      setWeight(String(Math.round(Number(weight) * 2.20462 * 10) / 10))
    } else if (newUnits === "metric" && units === "imperial") {
      setHeight(String(Math.round(Number(height) * 2.54 * 10) / 10))
      setWeight(String(Math.round(Number(weight) / 2.20462 * 10) / 10))
    }
    setUnits(newUnits)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!height || !weight) return
    setShowResults(true)
    setTimeout(() => {
      const heightCm = units === "metric" ? Number(height) : inchesToCm(Number(height))
      const weightKg = units === "metric" ? Number(weight) : lbsToKg(Number(weight))
      const value = bmi(weightKg, heightCm)
      setResult({ value, ...bmiCategory(value) })
    }, 3000)
  }

  return (
    <div className="rounded-2xl border border-[#0F1B2A]/10 bg-white p-6 shadow-sm md:p-8">
      {!result ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex gap-2 border-b border-[#0F1B2A]/10 pb-4">
            <button
              type="button"
              onClick={() => handleUnitToggle("metric")}
              className={`text-xs font-medium uppercase tracking-wide px-3 py-1 rounded transition-colors ${
                units === "metric"
                  ? "bg-[#0E7C7B] text-white"
                  : "text-[#0F1B2A]/50 hover:text-[#0F1B2A]"
              }`}
            >
              cm/kg
            </button>
            <button
              type="button"
              onClick={() => handleUnitToggle("imperial")}
              className={`text-xs font-medium uppercase tracking-wide px-3 py-1 rounded transition-colors ${
                units === "imperial"
                  ? "bg-[#0E7C7B] text-white"
                  : "text-[#0F1B2A]/50 hover:text-[#0F1B2A]"
              }`}
            >
              in/lbs
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="height">Height ({units === "metric" ? "cm" : "in"})</Label>
              <Input id="height" type="number" inputMode="decimal" value={height} onChange={(e) => setHeight(e.target.value)} placeholder={units === "metric" ? "165" : "65"} />
            </div>
            <div>
              <Label htmlFor="weight">Weight ({units === "metric" ? "kg" : "lbs"})</Label>
              <Input id="weight" type="number" inputMode="decimal" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={units === "metric" ? "68" : "150"} />
            </div>
          </div>
          <Button type="submit" className="w-full rounded-full bg-[#0E7C7B] py-6 text-base font-medium text-white hover:bg-[#0E7C7B]/90">
            Calculate BMI
          </Button>
        </form>
      ) : isAnalyzing ? (
        <SilentDelay />
      ) : result ? (
        <div className="animate-in fade-in duration-700 space-y-6 text-center">
          <div>
            <p className="font-mono text-6xl font-light text-[#0F1B2A]">{result.value}</p>
            <p className="mt-3 font-mono text-base uppercase tracking-wide" style={{ color: result.color }}>
              {result.label}
            </p>
          </div>
          <p className="text-sm leading-relaxed text-[#0F1B2A]/60">
            BMI doesn&apos;t account for muscle mass or frame size — it&apos;s a starting point, not a diagnosis.
          </p>
          <AffiliateBridge
            result={result.value}
            resultLabel="Your BMI Reading"
            description="Your BMI is one health metric among many. It provides a general overview of body weight relative to height, but it doesn't measure body composition. When combined with regular strength training and cardiovascular activity, maintaining a healthy BMI supports long-term metabolic health and energy levels."
          />
          <button onClick={() => { setResult(null); setShowResults(false) }} className="text-base text-[#0F1B2A]/50 underline underline-offset-4">
            Recalculate
          </button>
        </div>
      ) : null}
    </div>
  )
}
