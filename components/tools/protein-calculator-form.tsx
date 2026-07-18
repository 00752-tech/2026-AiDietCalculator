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
import { type Goal, proteinTarget, lbsToKg } from "@/lib/calculators"

type UnitSystem = "metric" | "imperial"

export function ProteinCalculatorForm() {
  const [units, setUnits] = useState<UnitSystem>("metric")
  const [weight, setWeight] = useState("")
  const [goal, setGoal] = useState<Goal>("lose")
  const [result, setResult] = useState<number | null>(null)

  function handleUnitToggle(newUnits: UnitSystem) {
    if (!weight) {
      setUnits(newUnits)
      return
    }
    // Convert input value to the new unit system
    if (newUnits === "imperial" && units === "metric") {
      setWeight(String(Math.round(Number(weight) * 2.20462 * 10) / 10))
    } else if (newUnits === "metric" && units === "imperial") {
      setWeight(String(Math.round(Number(weight) / 2.20462 * 10) / 10))
    }
    setUnits(newUnits)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!weight) return
    const weightKg = units === "metric" ? Number(weight) : lbsToKg(Number(weight))
    setResult(proteinTarget(weightKg, goal))
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
              kg
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
              lbs
            </button>
          </div>
          <div>
            <Label htmlFor="weight">Weight ({units === "metric" ? "kg" : "lbs"})</Label>
            <Input id="weight" type="number" inputMode="decimal" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={units === "metric" ? "72" : "160"} />
          </div>
          <div>
            <Label>Goal</Label>
            <Select value={goal} onValueChange={(v) => setGoal(v as Goal)}>
              <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="lose">Lose fat (preserve muscle)</SelectItem>
                <SelectItem value="maintain">Maintain</SelectItem>
                <SelectItem value="gain">Build muscle</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full rounded-full bg-[#0E7C7B] py-6 text-base font-medium text-white hover:bg-[#0E7C7B]/90">
            Calculate Protein Target
          </Button>
        </form>
      ) : (
        <div className="space-y-6 text-center">
          <div>
            <p className="font-mono text-6xl font-light text-[#0F1B2A]">{result}g</p>
            <p className="mt-3 text-lg text-[#0F1B2A]/60">recommended protein per day</p>
          </div>
          <AffiliateBridge />
          <button onClick={() => setResult(null)} className="text-base text-[#0F1B2A]/50 underline underline-offset-4">
            Recalculate
          </button>
        </div>
      )}
    </div>
  )
}
