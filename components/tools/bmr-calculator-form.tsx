"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AffiliateBridge } from "@/components/landing/affiliate-bridge"
import { AnalyzingState } from "@/components/tools/analyzing-state"
import { useDiagnosticDelay } from "@/lib/use-diagnostic-delay"
import { type Sex, bmr as calcBmr, inchesToCm, lbsToKg } from "@/lib/calculators"

type UnitSystem = "metric" | "imperial"

export function BmrCalculatorForm() {
  const [units, setUnits] = useState<UnitSystem>("metric")
  const [sex, setSex] = useState<Sex>("female")
  const [age, setAge] = useState("")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [result, setResult] = useState<number | null>(null)
  const [showResults, setShowResults] = useState(false)
  const isAnalyzing = useDiagnosticDelay(showResults && result === null)

  const canSubmit = age && height && weight

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
    if (!canSubmit) return
    setShowResults(true)
    setTimeout(() => {
      const heightCm = units === "metric" ? Number(height) : inchesToCm(Number(height))
      const weightKg = units === "metric" ? Number(weight) : lbsToKg(Number(weight))
      setResult(calcBmr(sex, weightKg, heightCm, Number(age)))
    }, 1500)
  }

  return (
    <div className="rounded-2xl border border-[#0F1B2A]/10 bg-white p-6 shadow-sm md:p-8">
      {result === null ? (
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
              <Label htmlFor="age">Age</Label>
              <Input id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="18" />
            </div>
            <div>
              <Label>Sex</Label>
              <Select value={sex} onValueChange={(v) => setSex(v as Sex)}>
                <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="male">Male</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="height">Height ({units === "metric" ? "cm" : "in"})</Label>
              <Input id="height" type="number" inputMode="decimal" value={height} onChange={(e) => setHeight(e.target.value)} placeholder={units === "metric" ? "169" : "67"} />
            </div>
            <div>
              <Label htmlFor="weight">Weight ({units === "metric" ? "kg" : "lbs"})</Label>
              <Input id="weight" type="number" inputMode="decimal" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={units === "metric" ? "69.5" : "153"} />
            </div>
          </div>
          <Button type="submit" className="w-full rounded-full bg-[#0E7C7B] py-6 text-base font-medium text-white hover:bg-[#0E7C7B]/90">
            Calculate BMR
          </Button>
        </form>
      ) : isAnalyzing ? (
        <AnalyzingState />
      ) : result !== null ? (
        <div className="space-y-6 text-center">
          <div>
            <p className="font-mono text-6xl font-light text-[#0F1B2A]">{result}</p>
            <p className="mt-3 text-base leading-relaxed text-[#0F1B2A]/60">kcal/day at complete rest (Mifflin-St Jeor)</p>
          </div>
          <AffiliateBridge result={`${result} kcal/day`} />
          <button onClick={() => { setResult(null); setShowResults(false) }} className="text-base text-[#0F1B2A]/50 underline underline-offset-4">
            Recalculate
          </button>
        </div>
      ) : null}
    </div>
  )
}
