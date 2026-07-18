import { Button } from "@/components/ui/button"

// Live CitrusBurn hoplink. This is the hoplink (tracked), not a direct order-form
// link — keep it that way, direct-linking to the cart violates the affiliate terms.
const AFFILIATE_URL = "https://2d52bx1-e7dsfx08pm6q66yqyz.hop.clickbank.net/?&traffic_source=aidietcalc"

interface AffiliateBridgeProps {
  /** Optional per-page override so each calculator can bridge with a relevant line. */
  headline?: string
  body?: string
}

export function AffiliateBridge({
  headline = "Your numbers are only half the equation.",
  body = "Consistency is where most plans break down — especially through hormonal shifts and slowing metabolism after 40. See the daily formula built to support that gap.",
}: AffiliateBridgeProps) {
  return (
    <div className="rounded-xl border-2 border-[#D64545]/20 bg-[#D64545]/[0.04] p-6 text-center">
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#D64545]">
        Recommended for your results
      </p>
      <h3 className="mb-3 font-serif text-2xl text-[#0F1B2A]">{headline}</h3>
      <p className="mx-auto mb-6 max-w-sm text-base leading-relaxed text-[#0F1B2A]/70">{body}</p>
      <Button
        asChild
        size="lg"
        className="h-auto w-full rounded-full bg-[#D64545] py-4 text-base font-medium text-white hover:bg-[#D64545]/90"
      >
        <a href={AFFILIATE_URL} rel="sponsored noopener" target="_blank">
          See CitrusBurn →
        </a>
      </Button>
      <p className="mt-2 text-xs leading-snug text-[#0F1B2A]/50">
        Independent review. We may earn a referral, but your price stays the same.
      </p>
      <p className="mt-2 text-[11px] leading-snug text-[#0F1B2A]/40">
        Statements have not been evaluated by the FDA. Not intended to diagnose, treat, cure, or
        prevent any disease. Consult your physician before use.
      </p>
    </div>
  )
}
