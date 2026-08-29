import type { Metadata } from "next"
import { DiagnosticTool } from "@/components/landing/diagnostic-tool"
import { ResourceLibrary } from "@/components/landing/resource-library"
import { VideoLightbox } from "@/components/landing/video-lightbox"

export const metadata: Metadata = {
  title: "AI Diet Calculator — Metabolic Diagnostic Hub",
  description:
    "Calculate your daily calorie needs, BMI, protein intake, and macros instantly. Explore our expert-led metabolic health and microbiome science database.",
}

const AFFILIATE_OFFER_URL = "https://aidietcalculator.com/recommend/catalyst?utm_campaign=metabolic-compounds-hub"

const METABOLIC_COMPOUNDS = [
  {
    name: "EGCG & Green Tea Extract",
    tag: "Thermogenetic Catalyst",
    badgeColor: "bg-amber-100 text-amber-700 border-amber-200",
    description:
      "Inhibits COMT enzymes to prolong norepinephrine signaling. When paired with morning coffee, it accelerates resting calorie expenditure and fat oxidation.",
    target: "Target: Resting Metabolic Rate & Lipolysis",
  },
  {
    name: "Chlorogenic Acid",
    tag: "Lipid Modulation",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
    description:
      "A potent bioactive compound found in unroasted coffee beans that slows glucose release into the bloodstream and optimizes dietary carbohydrate management.",
    target: "Target: Carbohydrate Absorption & Storage",
  },
  {
    name: "Berberine & AMPK Activators",
    tag: "Metabolic Master Switch",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    description:
      "Activates cellular AMPK pathways to enhance insulin sensitivity, maintain stable fasting glucose, and reduce mid-day cravings and sugar spikes.",
    target: "Target: Glucose Clearance & Appetite Control",
  },
  {
    name: "L-Theanine & Coffee Synergy",
    tag: "Smooth Energy Modulator",
    badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    description:
      "Smooths out caffeine absorption to eliminate jitters and cortisol spikes, encouraging calm, steady mental focus and sustained daily metabolic output.",
    target: "Target: Adrenal Balance & Cortisol Control",
  },
]

export default function HomePage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://aidietcalculator.com"

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "AI Diet Calculator",
      "url": baseUrl,
      "description": "Metabolic Diagnostic Hub and personalized nutrition calculators.",
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Why Tracking Alone Doesn't Stop the Hunger Spike",
      "description": "Learn why calorie tracking alone fails to control appetite spikes and how metabolic drivers regulate daily calorie expenditure.",
      "thumbnailUrl": [`${baseUrl}/video-thumbnail.jpg`],
      "uploadDate": "2026-08-29T00:00:00Z",
      "embedUrl": "https://player.vimeo.com/video/1222329099?h=6d3c8473df",
    },
  ]

  return (
    <main className="min-h-screen bg-background scroll-smooth">
      {/* Search Engine Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Diagnostic Section */}
      <section id="diagnostic" className="bg-background px-4 py-12 md:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-serif text-4xl font-light leading-tight text-[#0E7C7B] md:text-5xl">
              Your Metabolic Diagnostic
            </h1>
            <p className="text-lg text-secondary">
              Real numbers for your body. Built on the Mifflin-St Jeor formula — the same protocol behind clinical metabolic testing.
            </p>
          </div>
          <div className="mb-10">
            <VideoLightbox
              vimeoId="1222329099"
              vimeoHash="6d3c8473df"
              thumbnailSrc="/video-thumbnail.jpg"
              thumbnailAlt="Watch: why tracking alone doesn't stop the hunger spike"
            />
          </div>
          <DiagnosticTool />
        </div>
      </section>

      {/* Self-Contained Metabolic Intelligence Hub */}
      <section className="bg-slate-50 px-4 py-16 border-y border-slate-200/60">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-normal text-[#0E7C7B]">
              Metabolic Compounds & Mechanisms
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              Evidence-based nutritional pathways that influence glucose regulation, mitochondrial efficiency, and metabolic flexibility.
            </p>
            {/* Micro Affiliate Disclaimer */}
            <p className="mt-3 text-[11px] leading-normal text-slate-400">
              <span className="font-semibold uppercase tracking-wider text-slate-500">Affiliate Disclosure:</span> Content is for educational purposes. We may receive compensation for partner recommendations or products linked across our site at no extra cost to you.
            </p>
          </div>

          {/* Clean Informational Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {METABOLIC_COMPOUNDS.map((compound) => (
              <div
                key={compound.name}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <span
                    className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-semibold ${compound.badgeColor} mb-4`}
                  >
                    {compound.tag}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 font-serif">
                    {compound.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {compound.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100">
                  <p className="text-xs font-medium text-slate-500">
                    {compound.target}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Standout Affiliate Call-to-Action & Google AI Answers Button */}
          <div className="mt-12 flex flex-col items-center justify-center gap-6 text-center">
            <a
              href={AFFILIATE_OFFER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-blue-700 hover:scale-[1.02] transition-all"
            >
              Activate Your Coffee's Fat-Burning Potential Now →
            </a>

            <div className="pt-2">
              <a
                href="https://www.google.com/preferences/source?q=aidietcalculator.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#0E7C7B] bg-white px-5 py-2.5 text-sm font-medium text-[#0E7C7B] shadow-sm hover:bg-emerald-50/50 transition-colors"
              >
                <span className="text-base font-bold">✦</span>
                Add AI Diet Calculator to Google AI Answers
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Library */}
      <ResourceLibrary />
    </main>
  )
}
