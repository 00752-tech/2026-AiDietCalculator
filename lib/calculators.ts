// Shared formulas for every calculator on the site.
// Keep this the ONE place these numbers are computed — every tool page imports from here.

export type Sex = "male" | "female"
export type Activity = "sedentary" | "light" | "moderate" | "very"
export type Goal = "lose" | "maintain" | "gain"

export const ACTIVITY_MULTIPLIERS: Record<Activity, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  very: 1.725,
}

export const ACTIVITY_LABELS: Record<Activity, string> = {
  sedentary: "Sedentary (desk job, no training)",
  light: "Light (1-3 sessions/week)",
  moderate: "Moderate (3-5 sessions/week)",
  very: "Very active (6+ sessions/week)",
}

/** Mifflin-St Jeor — the formula behind every BMR/calorie query in the SEO data. */
export function bmr(sex: Sex, weightKg: number, heightCm: number, age: number): number {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age
  return Math.round(sex === "male" ? base + 5 : base - 161)
}

export function tdee(bmrValue: number, activity: Activity): number {
  return Math.round(bmrValue * ACTIVITY_MULTIPLIERS[activity])
}

export function calorieTarget(tdeeValue: number, goal: Goal): number {
  if (goal === "lose") return Math.round(tdeeValue - 500)
  if (goal === "gain") return Math.round(tdeeValue + 300)
  return tdeeValue
}

export function bmi(weightKg: number, heightCm: number): number {
  const heightM = heightCm / 100
  return Math.round((weightKg / (heightM * heightM)) * 10) / 10
}

export function bmiCategory(value: number): { label: string; color: string } {
  if (value < 18.5) return { label: "Underweight", color: "#3B82F6" }
  if (value < 25) return { label: "Healthy range", color: "#0E7C7B" }
  if (value < 30) return { label: "Above healthy range", color: "#D9822B" }
  return { label: "Well above healthy range", color: "#D64545" }
}

/** Grams of protein/day. Higher end for cutting to preserve lean mass. */
export function proteinTarget(weightKg: number, goal: Goal): number {
  const perKg = goal === "lose" ? 2.2 : goal === "gain" ? 1.8 : 1.6
  return Math.round(weightKg * perKg)
}

export interface MacroSplit {
  proteinG: number
  fatG: number
  carbG: number
}

/** Splits a calorie target into grams, protein-first, fat as a fixed % of calories, carbs fill the rest. */
export function macroSplit(calories: number, weightKg: number, goal: Goal): MacroSplit {
  const proteinG = proteinTarget(weightKg, goal)
  const proteinCals = proteinG * 4
  const fatCals = calories * 0.28
  const fatG = Math.round(fatCals / 9)
  const carbCals = Math.max(calories - proteinCals - fatCals, 0)
  const carbG = Math.round(carbCals / 4)
  return { proteinG, fatG, carbG }
}

/** Devine formula, the standard behind most "ideal weight" calculators. */
export function idealWeightKg(sex: Sex, heightCm: number): number {
  const heightIn = heightCm / 2.54
  const inchesOver5ft = Math.max(heightIn - 60, 0)
  const kg = sex === "male" ? 50 + 2.3 * inchesOver5ft : 45.5 + 2.3 * inchesOver5ft
  return Math.round(kg * 10) / 10
}

// Unit conversions — keep FULL precision during calculations, round only for display
export function cmToInches(cm: number): number {
  return cm / 2.54
}

export function inchesToCm(inches: number): number {
  return inches * 2.54
}

export function kgToLbs(kg: number): number {
  return kg * 2.20462
}

export function lbsToKg(lbs: number): number {
  return lbs / 2.20462
}

// Display-safe versions (rounded for user-facing output)
export function cmToInchesDisplay(cm: number): number {
  return Math.round((cm / 2.54) * 10) / 10
}

export function inchesToCmDisplay(inches: number): number {
  return Math.round(inches * 2.54 * 10) / 10
}

export function kgToLbsDisplay(kg: number): number {
  return Math.round(kg * 2.20462 * 10) / 10
}

export function lbsToKgDisplay(lbs: number): number {
  return Math.round((lbs / 2.20462) * 10) / 10
}
