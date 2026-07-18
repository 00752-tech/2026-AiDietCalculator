'use client'

import { useEffect, useState } from 'react'

const MESSAGES = [
  'Analyzing your metabolic output...',
  'Cross-referencing efficiency...',
  'Calculating optimal catalyst...',
]

export function AnalyzingState() {
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % MESSAGES.length)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center py-12">
      <p className="text-base text-[#0F1B2A]/60 font-medium transition-opacity duration-300">
        {MESSAGES[messageIndex]}
      </p>
    </div>
  )
}
