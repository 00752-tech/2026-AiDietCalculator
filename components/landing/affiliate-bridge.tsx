import { Button } from "@/components/ui/button"

const AFFILIATE_URL = "/recommend/berberine-patch"

interface AffiliateBridgeProps {
  headline?: string
  body?: string
  result?: string | number
}

export function AffiliateBridge({
  headline,
  body = "Your baseline numbers show your mathematical caloric threshold, but tracking macros alone can't stop defensive hunger spikes. Berberine activates your body's natural satiety pathways to curb cravings and ignite steady fat oxidation. Skip the heavy pills and injections—this needle-free, plant-derived transdermal patch delivers continuous, slow-release metabolic support all day long.",
  result,
}: AffiliateBridgeProps) {
  const defaultHeadline = headline || (result ? `Metabolic Target: ${result} kcal | Lock In Cravings` : "Calorie tracking is only half the equation.")
  
  return (
    <div className="rounded-xl border-2 border-[#D64545]/20 bg-[#D64545]/[0.04] p-6 text-center">
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#D64545]">
        ✦ Recommended Next Step For Your Results
      </p>
      <h3 className="mb-3 font-serif text-2xl text-[#0F1B2A]">{defaultHeadline}</h3>
      <p className="mx-auto mb-6 max-w-sm text-base leading-relaxed text-[#0F1B2A]/70">{body}</p>
      <Button
        asChild
        size="lg"
        className="h-auto w-full rounded-full bg-[#D64545] py-4 font-semibold text-white hover:bg-[#D64545]/90 shadow-md transition-all"
      >
        <a 
          href={AFFILIATE_URL} 
          rel="sponsored noopener" 
          target="_blank"
          className="text-sm md:text-base whitespace-nowrap inline-flex items-center justify-center gap-2"
        >
          <span>👉</span> Claim Your All-Day Berberine Satiety Patch →
        </a>
      </Button>
      <p className="mt-3 text-xs leading-snug text-[#0F1B2A]/50">
        Independent review. We may earn a referral fee, but your price stays identical.
      </p>
      <p className="mt-1 text-[11px] leading-snug text-[#0F1B2A]/40">
        Statements have not been evaluated by the FDA. Plant-derived daily transdermal routine.
      </p>
    </div>
  )
}
