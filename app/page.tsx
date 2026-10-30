
import type { Metadata } from "next"
import { DiagnosticTool } from "@/components/landing/diagnostic-tool"
import { ResourceLibrary } from "@/components/landing/resource-library"
import { VideoLightbox } from "@/components/landing/video-lightbox"

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  title: "AI Diet Calculator — Metabolic Diagnostic Hub",
  description:
    "Calculate your daily calorie needs, BMI, protein intake, and macros instantly. Explore evidence-based metabolic health, blood sugar, and nutrition insights.",
}

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://aidietcalculator.com"

const AFFILIATE_OFFER_URL = `${baseUrl}/go/gluco6`

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AI Diet Calculator",
    url: baseUrl,
    description:
      "Metabolic Diagnostic Hub and personalized nutrition calculators.",
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Why Accurate Calorie Tracking Is Only Part of the Equation",
    description:
      "Learn why knowing your calorie and macro targets is only part of reaching your goals, and explore the role of blood sugar and metabolic support.",
    thumbnailUrl: [`${baseUrl}/video-thumbnail.jpeg`],
    uploadDate: "2026-08-29T00:00:00Z",
    embedUrl: "https://player.vimeo.com/video/1241017019",
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Meet Gluco6: Ingredients and Metabolic Support",
    description:
      "Discover Gluco6, explore its featured ingredients, and learn about its formulation for healthy blood sugar and glucose metabolism support.",
    thumbnailUrl: [`${baseUrl}/video-thumbnail-2.jpg`],
    uploadDate: "2026-10-30T00:00:00Z",
    embedUrl: "https://player.vimeo.com/video/1241398244",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AI Diet Calculator",
    url: baseUrl,
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    description:
      "Calculate your daily calorie needs, BMI, protein intake, and macros instantly.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },
]

const METABOLIC_COMPOUNDS = [
  {
    name: "Sukre",
    tag: "Glucose Absorption Support",
    badgeColor: "bg-amber-100 text-amber-700 border-amber-200",
    description:
      "A proprietary ingredient featured in Gluco6 and designed to support healthy glucose absorption and normal blood sugar levels.",
    target: "Target: Glucose Absorption & Blood Sugar Support",
  },
  {
    name: "TeaCrine",
    tag: "Metabolic & Energy Support",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
    description:
      "A branded extract derived from tea that Gluco6 includes to support healthy glucose metabolism, mental energy, focus, and overall metabolic function.",
    target: "Target: Glucose Metabolism & Daily Energy",
  },
  {
    name: "Gymnema Sylvestre",
    tag: "Blood Sugar Support",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    description:
      "A botanical traditionally used in metabolic health formulas and included in Gluco6 to support healthy glucose levels and help manage sugar cravings.",
    target: "Target: Glucose Regulation & Craving Support",
  },
  {
    name: "Chromium",
    tag: "Insulin Sensitivity Support",
    badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    description:
      "An essential trace mineral included in Gluco6 to support normal insulin function and healthy blood sugar levels.",
    target: "Target: Insulin Function & Blood Sugar Balance",
  },
]

export default function HomePage() {
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
              Real numbers for your body. Built on the Mifflin-St Jeor
              equation, a widely used method for estimating resting energy
              expenditure.
            </p>
          </div>

          {/* Original Educational VSL */}
          <div className="mb-10">
            <VideoLightbox
              vimeoId="1241017019"
              vimeoHash="6d3c8473df"
              thumbnailSrc="/video-thumbnail.jpeg"
              thumbnailAlt="Watch: why accurate calorie tracking is only part of the equation"
            />
          </div>

          <DiagnosticTool />
        </div>
      </section>

      {/* Metabolic Compounds & Mechanisms */}
      <section className="bg-slate-50 px-4 py-16 border-y border-slate-200/60">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-normal text-[#0E7C7B]">
              Metabolic Compounds &amp; Mechanisms
            </h2>

            <p className="mt-3 text-sm md:text-base text-slate-600">
              Explore the ingredients and metabolic pathways featured in
              Gluco6, including compounds associated with glucose regulation,
              blood sugar balance, and metabolic support.
            </p>

            {/* Micro Affiliate Disclaimer */}
            <p className="mt-3 text-[11px] leading-normal text-slate-400">
              <span className="font-semibold uppercase tracking-wider text-slate-500">
                Affiliate Disclosure:
              </span>{" "}
              Content is for educational purposes. We may receive compensation
              for partner recommendations or products linked across our site
              at no extra cost to you.
            </p>
          </div>

          {/* Ingredient Grid */}
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

          {/* Cinematic Gluco6 Product Showcase */}
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="mb-6 text-center">
              <h2 className="font-serif text-3xl font-normal text-[#0E7C7B]">
                Meet Gluco6
              </h2>

              <p className="mt-3 text-sm md:text-base text-slate-600">
                Take a closer look at the formula, its featured ingredients,
                and the daily supplement designed to support healthy blood
                sugar and glucose metabolism.
              </p>
            </div>

            <VideoLightbox
              vimeoId="1241398244"
              thumbnailSrc="/video-thumbnail-2.jpg"
              thumbnailAlt="Watch the Gluco6 cinematic product showcase"
            />

            <p className="mt-3 text-center text-xs text-slate-400">
              Review the product ingredients and details before deciding
              whether Gluco6 is right for you.
            </p>
          </div>

          {/* Affiliate CTA & Google AI Answers */}
          <div className="mt-12 flex flex-col items-center justify-center gap-6 text-center">
            <a
              href={AFFILIATE_OFFER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#047857] px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-[#065F46] hover:scale-[1.02] transition-all"
            >
              Explore Gluco6 for Blood Sugar Support →
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

      {/* Existing Resource Library */}
      <ResourceLibrary />
    </main>
  )
}
