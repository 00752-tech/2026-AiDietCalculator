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
import { type Sex, idealWeightKg, inchesToCm, kgToLbs } from "@/lib/calculators"

type UnitSystem = "metric" | "imperial"

export function IdealWeightCalculatorForm() {
  const [units, setUnits] = useState<UnitSystem>("imperial")
  const [sex, setSex] = useState<Sex>("female")
  const [height, setHeight] = useState("")
  const { status, result, run, reset } = useDelayedCalculation<number>()

  function handleUnitToggle(newUnits: UnitSystem) {
    if (!height) {
      setUnits(newUnits)
      return
    }
    // Convert input value to the new unit system
    if (newUnits === "imperial" && units === "metric") {
      setHeight(String(Math.round(Number(height) / 2.54 * 10) / 10))
    } else if (newUnits === "metric" && units === "imperial") {
      setHeight(String(Math.round(Number(height) * 2.54 * 10) / 10))
    }
    setUnits(newUnits)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!height) return
    run(() => {
      const heightCm = units === "metric" ? Number(height) : inchesToCm(Number(height))
      const weightKg = idealWeightKg(sex, heightCm)
      return units === "metric" ? weightKg : kgToLbs(weightKg)
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
          <div>
            <Label htmlFor="height">Height ({units === "metric" ? "cm" : "in"})</Label>
            <Input id="height" type="number" inputMode="decimal" value={height} onChange={(e) => setHeight(e.target.value)} placeholder={units === "metric" ? "178" : "70"} />
          </div>
          <Button type="submit" className="w-full rounded-full bg-[#0E7C7B] py-6 text-base font-medium text-white hover:bg-[#0E7C7B]/90">
            Calculate Ideal Weight
          </Button>
        </form>
      ) : status === "processing" ? (
        <ProcessingState />
      ) : status === "done" && result !== null ? (
        <div className="animate-in fade-in duration-500 space-y-6 text-center">
          <div>
            <p className="font-mono text-6xl font-light text-[#0F1B2A]">{result.toFixed(2)} {units === "metric" ? "kg" : "lbs"}</p>
            <p className="mt-3 text-base leading-relaxed text-[#0F1B2A]/60">estimated ideal weight (Devine formula)</p>
          </div>
          <AffiliateBridge 
            result={`${result.toFixed(2)} ${units === "metric" ? "kg" : "lbs"}`} 
            resultLabel="Your Ideal Weight"
            description="Your ideal weight is a target range based on your height and body structure. This estimate gives you a measurable goal to work toward, but remember: the number on the scale is just one metric. Pair this target with strength training, proper nutrition, and consistent habits for true transformation."
          />
          <button onClick={() => reset()} className="text-base text-[#0F1B2A]/50 underline underline-offset-4">
            Recalculate
          </button>
        </div>
      ) : null}
    </div>
  )
}
