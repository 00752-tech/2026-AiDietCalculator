"use client"

import { track } from "@vercel/analytics"
import { Button } from "@/components/ui/button"
import { VideoLightbox } from "@/components/landing/video-lightbox"

const AFFILIATE_URL = "/go/gluco6"

export type BridgeCalculator = "bmi" | "bmr" | "calorie" | "ideal-weight" | "macro" | "protein"

const COPY: Record<BridgeCalculator, { headline: string; body: string }> = {
  bmi: {
    headline: "BMI is one measurement, not the whole picture",
    body: "BMI is a quick screening number based on height and weight. It doesn't reflect muscle mass, body composition, or how your metabolism handles food. These two short videos look at what else is worth understanding.",
  },
  bmr: {
    headline: "Your resting rate is only one part of the equation",
    body: "BMR estimates the energy your body uses at rest. It's a useful baseline, but it doesn't describe every aspect of metabolic health. These two short videos explore the wider picture.",
  },
  calorie: {
    headline: "A calorie target is a starting point",
    body: "Your calorie target gives you a practical baseline. Metabolic health involves more than how much you eat, including what you eat and how your body responds to it. These short videos explain more.",
  },
  "ideal-weight": {
    headline: "A calculated weight is a reference, not a verdict",
    body: "Ideal weight formulas produce an estimate from height and sex. They don't reflect body composition or overall health. These short videos look at the bigger metabolic picture.",
  },
  macro: {
    headline: "Macro targets organize your nutrition, not the whole story",
    body: "Protein, carbohydrate and fat targets help you structure your meals. They don't tell the full story of how your body handles energy and food. These short videos go further.",
  },
  protein: {
    headline: "Protein is one important piece of nutrition",
    body: "Your protein target is one component of a balanced approach. It isn't a complete picture of metabolic health. These short videos explore what else is worth knowing.",
  },
}

const DEFAULT_COPY = {
  headline: "Calorie tracking is only part of the picture",
  body: "Your numbers give you a useful baseline, but metabolic health involves more than calories alone. If you'd like to explore further, here's a closer look at Gluco6.",
}

interface AffiliateBridgeProps {
  calculator?: BridgeCalculator
}

export function AffiliateBridge({ calculator }: AffiliateBridgeProps) {
  const copy = calculator ? COPY[calculator] : DEFAULT_COPY
  const source = calculator ?? "home"

  const trackOutboundClick = () => {
    if (typeof window !== "undefined" && (window as any).clarity) {
      (window as any).clarity("set", "vsl_preframe_clicked", "true")
    }
    track("bridge_cta_click", { source })
  }

  return (
    <div className="rounded-xl border-2 border-[#D64545]/20 bg-[#D64545]/[0.04] p-6 text-center">
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#D64545]">
        ✦ Recommended Next Step For Your Results
      </p>
      <h3 className="mb-3 font-serif text-2xl text-[#0F1B2A]">{copy.headline}</h3>
      <p className="mx-auto mb-5 max-w-sm text-base leading-relaxed text-[#0F1B2A]/70">{copy.body}</p>

      {calculator && (
        <div className="mb-5 grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
          <div>
            <VideoLightbox
              vimeoId="1241017019"
              vimeoHash="6d3c8473df"
              thumbnailSrc="/video-thumbnail.jpeg"
              thumbnailAlt="Watch: why accurate calorie tracking is only part of the equation"
              onOpen={() => track("calculator_video_open", { calculator, video: "tracking-is-only-part" })}
            />
            <p className="mt-2 text-xs leading-snug text-[#0F1B2A]/60">
              Why accurate calorie tracking is only part of the equation
            </p>
          </div>
          <div>
            <VideoLightbox
              vimeoId="1241398244"
              thumbnailSrc="/video-thumbnail-2.jpg"
              thumbnailAlt="Watch the Gluco6 cinematic product showcase"
              onOpen={() => track("calculator_video_open", { calculator, video: "gluco6-showcase" })}
            />
            <p className="mt-2 text-xs leading-snug text-[#0F1B2A]/60">
              Gluco6: ingredients and product details
            </p>
          </div>
        </div>
      )}

      <Button
        asChild
        size="lg"
        className="h-auto w-full rounded-full bg-[#D64545] py-4 font-semibold text-white shadow-md transition-all hover:bg-[#D64545]/90"
      >
        <a
          href={AFFILIATE_URL}
          rel="sponsored nofollow noopener"
          target="_blank"
          onClick={trackOutboundClick}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm md:text-base"
        >
          Learn more about Gluco6 →
        </a>
      </Button>
      <p className="mt-3 text-xs leading-snug text-[#0F1B2A]/50">
        Affiliate disclosure: we may earn a commission if you purchase through this link, at no extra cost to you.
      </p>
      <p className="mt-1 text-[11px] leading-snug text-[#0F1B2A]/40">
        These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
      </p>
    </div>
  )
}
// end of file
