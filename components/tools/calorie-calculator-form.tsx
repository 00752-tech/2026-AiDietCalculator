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
import { ProcessingState } from "@/components/tools/processing-state"
import { useDelayedCalculation } from "@/lib/use-delayed-calculation"
import {
  type Sex,
  type Activity,
  type Goal,
  ACTIVITY_LABELS,
  bmr as calcBmr,
  tdee as calcTdee,
  calorieTarget,
  inchesToCm,
  lbsToKg,
} from "@/lib/calculators"

type UnitSystem = "metric" | "imperial"

export function CalorieCalculatorForm() {
  const [units, setUnits] = useState<UnitSystem>("imperial")
  const [sex, setSex] = useState<Sex>("male")
  const [age, setAge] = useState("")
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [activity, setActivity] = useState<Activity>("sedentary")
  const [goal, setGoal] = useState<Goal>("lose")
  const { status, result, run, reset } = useDelayedCalculation<{ tdee: number; target: number }>()

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
    run(() => {
      const heightCm = units === "metric" ? Number(height) : inchesToCm(Number(height))
      const weightKg = units === "metric" ? Number(weight) : lbsToKg(Number(weight))
      const bmrValue = calcBmr(sex, weightKg, heightCm, Number(age))
      const tdeeValue = calcTdee(bmrValue, activity)
      return { tdee: tdeeValue, target: calorieTarget(tdeeValue, goal) }
    })
  }

  return (
    <div className="rounded-2xl border border-[#0F1B2A]/10 bg-white p-6 shadow-sm md:p-8">
      {status === "idle" ? (
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
              <Input id="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="42" />
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
              <Input id="height" type="number" inputMode="decimal" value={height} onChange={(e) => setHeight(e.target.value)} placeholder={units === "metric" ? "165" : "65"} />
            </div>
            <div>
              <Label htmlFor="weight">Weight ({units === "metric" ? "kg" : "lbs"})</Label>
              <Input id="weight" type="number" inputMode="decimal" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={units === "metric" ? "72" : "160"} />
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
                <SelectItem value="lose">Lose weight</SelectItem>
                <SelectItem value="maintain">Maintain weight</SelectItem>
                <SelectItem value="gain">Gain weight</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full rounded-full bg-[#0E7C7B] py-6 text-base font-medium text-white hover:bg-[#0E7C7B]/90">
            Calculate Calories
          </Button>
        </form>
      ) : status === "processing" ? (
        <ProcessingState />
      ) : status === "done" && result ? (
        <div className="animate-in fade-in duration-500 space-y-6 text-center">
          <div className="rounded-xl bg-[#0F1B2A] p-6 font-mono text-white">
            <div className="flex items-baseline justify-between border-b border-white/10 py-3">
              <span className="text-xs uppercase tracking-wide text-white/50">Maintenance calories</span>
              <span className="text-base">{result.tdee} kcal/day</span>
            </div>
            <div className="flex items-baseline justify-between py-3">
              <span className="text-xs uppercase tracking-wide text-white/50">Your target</span>
              <span className="text-2xl text-[#4FD1D0]">{result.target} kcal/day</span>
            </div>
          </div>
          <AffiliateBridge 
            result={`${result.target} kcal/day`} 
            resultLabel="Your Calorie Target"
            description="Your calorie target is calibrated to your current metabolic output and activity level. Hitting this number consistently—not perfectly, but consistently—creates the foundation for sustainable body composition change. The key is pairing this target with whole foods and resistance training for optimal results."
          />
          <button onClick={() => reset()} className="text-base text-[#0F1B2A]/50 underline underline-offset-4">
            Recalculate
          </button>
        </div>
      ) : null}
    </div>
  )
}
