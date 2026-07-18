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
import {
  type Sex,
  type Activity,
  type Goal,
  ACTIVITY_LABELS,
  bmr as calcBmr,
  tdee as calcTdee,
  calorieTarget,
  proteinTarget,
  cmToInches,
  inchesToCm,
  kgToLbs,
  lbsToKg,
} from "@/lib/calculators"

type UnitSystem = "metric" | "imperial"

interface Result {
  bmr: number
  tdee: number
  target: number
  proteinG: number
}

export function DiagnosticTool() {
  const [units, setUnits] = useState<UnitSystem>("imperial")
  const [sex, setSex] = useState<Sex>("male")
  const [age, setAge] = useState("")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [activity, setActivity] = useState<Activity>("light")
  const [goal, setGoal] = useState<Goal>("lose")
  const [result, setResult] = useState<Result | null>(null)

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
    
    // Convert to metric if needed
    const heightCm = units === "metric" ? Number(height) : inchesToCm(Number(height))
    const weightKg = units === "metric" ? Number(weight) : lbsToKg(Number(weight))
    
    const bmrValue = calcBmr(sex, weightKg, heightCm, Number(age))
    const tdeeValue = calcTdee(bmrValue, activity)
    setResult({
      bmr: bmrValue,
      tdee: tdeeValue,
      target: calorieTarget(tdeeValue, goal),
      proteinG: proteinTarget(weightKg, goal),
    })
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="rounded-2xl border border-[#0F1B2A]/10 bg-white p-6 shadow-sm md:p-10">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-serif text-2xl text-[#0F1B2A]">Metabolic Diagnostic</h2>
          <span className="rounded-full bg-[#0E7C7B]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-[#0E7C7B]">
            Step 1 of 1
          </span>
        </div>

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
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" inputMode="numeric" value={age} onChange={(e) => setAge(e.target.value)} placeholder="28" />
              </div>
              <div>
                <Label>Sex</Label>
                <Select value={sex} onValueChange={(v) => setSex(v as Sex)}>
                  <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="height">Height ({units === "metric" ? "cm" : "in"})</Label>
                <Input id="height" type="number" inputMode="decimal" value={height} onChange={(e) => setHeight(e.target.value)} placeholder={units === "metric" ? "178" : "70"} />
              </div>
              <div>
                <Label htmlFor="weight">Weight ({units === "metric" ? "kg" : "lbs"})</Label>
                <Input id="weight" type="number" inputMode="decimal" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={units === "metric" ? "82" : "180"} />
              </div>
            </div>

            <div>
              <Label>Activity level</Label>
              <Select value={activity} onValueChange={(v) => setActivity(v as Activity)}>
                <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {(Object.keys(ACTIVITY_LABELS) as Activity[]).map((key) => (
                    <SelectItem key={key} value={key}>{ACTIVITY_LABELS[key]}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Goal</Label>
              <Select value={goal} onValueChange={(v) => setGoal(v as Goal)}>
                <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="lose">Lose fat</SelectItem>
                  <SelectItem value="maintain">Maintain</SelectItem>
                  <SelectItem value="gain">Build muscle</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              disabled={!canSubmit}
              className="w-full rounded-full bg-[#0E7C7B] py-6 text-base font-medium text-white hover:bg-[#0E7C7B]/90 disabled:opacity-40"
            >
              Get My Numbers
            </Button>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="rounded-xl bg-[#0F1B2A] p-6 font-mono text-white">
              <ReadoutRow label="Basal metabolic rate" value={`${result.bmr} kcal/day`} />
              <ReadoutRow label="Total daily energy expenditure" value={`${result.tdee} kcal/day`} />
              <ReadoutRow label="Target intake" value={`${result.target} kcal/day`} highlight />
              <ReadoutRow label="Minimum protein" value={`${result.proteinG} g/day`} />
            </div>

            <AffiliateBridge />

            <button
              onClick={() => setResult(null)}
              className="w-full text-center text-base text-[#0F1B2A]/50 underline underline-offset-4"
            >
              Run again with different numbers
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function ReadoutRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-baseline justify-between border-b border-white/10 py-3 last:border-0">
      <span className="text-xs uppercase tracking-wide text-white/50">{label}</span>
      <span className={highlight ? "text-2xl text-[#4FD1D0]" : "text-base text-white"}>{value}</span>
    </div>
  )
}
