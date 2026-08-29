"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const AFFILIATE_URL = "/metabo-drops-official"

interface AffiliateBridgeProps {
  headline?: string
  body?: string
  result?: string | number
}

export function AffiliateBridge({
  headline,
  body = "Your baseline numbers show your mathematical caloric threshold, but tracking macros alone can't stop defensive hunger spikes. Adding targeted thermogenic catalysts to your morning coffee accelerates lipolysis and sustains daily calorie burn without restrictive dieting.",
  result,
}: AffiliateBridgeProps) {
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 59) // 14:59 starting time

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const defaultHeadline = headline || (result ? `Metabolic Target: ${result} kcal | Lock In Cravings` : "Calorie tracking is only half the equation.")

  const trackOutboundClick = () => {
    if (typeof window !== "undefined" && (window as any).clarity) {
      (window as any).clarity("set", "vsl_preframe_clicked", "true")
    }
    console.log("Conversion Event: vsl_preframe_clicked")
  }
  
  return (
    <div className="rounded-xl border-2 border-[#D64545]/20 bg-[#D64545]/[0.04] p-6 text-center">
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#D64545]">
        ✦ Recommended Next Step For Your Results
      </p>
      <h3 className="mb-3 font-serif text-2xl text-[#0F1B2A]">{defaultHeadline}</h3>
      <p className="mx-auto mb-4 max-w-sm text-base leading-relaxed text-[#0F1B2A]/70">{body}</p>

      {/* VSL Pre-Frame Callout */}
      <div className="mx-auto mb-3 max-w-sm rounded-xl border border-[#0F1B2A] bg-[#0F1B2A] p-4 text-left shadow-md">
        <div className="mb-1.5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#F59E0B]">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#F59E0B]" />
          Required Video Presentation
        </div>
        <p className="text-xs leading-snug text-white/80">
          Watch this brief presentation in its entirety to learn how to trigger steady fat oxidation and activate exclusive <strong>$39 introductory pricing</strong>.
        </p>
      </div>

      {/* Urgency Countdown Banner */}
      <div className="mx-auto mb-5 max-w-sm rounded-lg bg-red-100 py-2 text-center text-sm font-semibold text-red-700 shadow-sm">
        ⏳ $49 Pricing Reserved For: {minutes}:{seconds.toString().padStart(2, "0")}
      </div>

      <Button
        asChild
        size="lg"
        className="h-auto w-full rounded-full bg-[#D64545] py-4 font-semibold text-white shadow-md transition-all hover:bg-[#D64545]/90"
      >
        <a 
          href={AFFILIATE_URL} 
          rel="sponsored noopener" 
          target="_blank"
          onClick={trackOutboundClick}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm md:text-base"
        >
          <span>👉</span> Activate Your Coffee's Fat-Burning Potential →
        </a>
      </Button>
      <p className="mt-3 text-xs leading-snug text-[#0F1B2A]/50">
        Independent review. We may earn a referral fee, but your price stays identical.
      </p>
      <p className="mt-1 text-[11px] leading-snug text-[#0F1B2A]/40">
        Statements have not been evaluated by the FDA. Thermogenic coffee drop protocol.
      </p>
    </div>
  )
}
