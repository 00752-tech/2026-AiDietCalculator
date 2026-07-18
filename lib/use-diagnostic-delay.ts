'use client'

import { useEffect, useState } from 'react'

export function useDiagnosticDelay(shouldDelay: boolean, delayMs: number = 3000) {
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  useEffect(() => {
    if (!shouldDelay) {
      setIsAnalyzing(false)
      return
    }

    setIsAnalyzing(true)
    const timer = setTimeout(() => {
      setIsAnalyzing(false)
    }, delayMs)

    return () => clearTimeout(timer)
  }, [shouldDelay, delayMs])

  return isAnalyzing
}
