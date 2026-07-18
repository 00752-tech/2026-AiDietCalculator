import { useState, useCallback } from "react"

type Status = "idle" | "processing" | "done"

export function useDelayedCalculation<T>(delayMs = 1500) {
  const [status, setStatus] = useState<Status>("idle")
  const [result, setResult] = useState<T | null>(null)

  const run = useCallback((compute: () => T) => {
    setStatus("processing")
    setResult(null)
    setTimeout(() => {
      setResult(compute())
      setStatus("done")
    }, delayMs)
  }, [delayMs])

  const reset = useCallback(() => {
    setStatus("idle")
    setResult(null)
  }, [])

  return { status, result, run, reset }
}
