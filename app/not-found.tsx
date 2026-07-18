import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/404-diagnostic-console.png')",
      }}
    >
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Centered content container with breathing animation */}
      <div className="relative flex min-h-screen items-center justify-center px-4 py-8">
        <style>{`
          @keyframes breathe {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.95;
              transform: scale(1.01);
            }
          }
          .breathe-animate {
            animation: breathe 3s ease-in-out infinite;
          }
        `}</style>

        {/* Premium diagnostic card */}
        <div className="breathe-animate w-full max-w-2xl rounded-2xl border border-[#0E7C7B]/30 bg-white/95 p-8 shadow-2xl backdrop-blur-sm md:p-12">
          {/* System status indicator */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            <p className="font-mono text-sm uppercase tracking-wider text-red-500">
              System Diagnostic Alert
            </p>
            <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
          </div>

          {/* Headline */}
          <h1 className="mb-4 text-center font-serif text-3xl font-light tracking-tight text-[#0F1B2A] md:text-4xl">
            System Diagnostic: Pathway Not Found
          </h1>

          {/* Error code display */}
          <div className="mb-6 flex justify-center gap-4">
            <span className="font-mono text-sm text-[#0E7C7B]">ERROR_404</span>
            <span className="font-mono text-sm text-[#0F1B2A]/40">|</span>
            <span className="font-mono text-sm text-[#0E7C7B]">SIGNAL_LOST</span>
          </div>

          {/* Body description */}
          <p className="mb-8 text-center text-base leading-relaxed text-[#0F1B2A]/70">
            The metabolic data path you requested could not be calculated. This signal has been lost.
          </p>

          {/* Visual separator */}
          <div className="mb-8 flex items-center gap-4">
            <div className="flex-1 border-t border-[#0F1B2A]/10" />
            <div className="h-1 w-1 rounded-full bg-[#0E7C7B]" />
            <div className="flex-1 border-t border-[#0F1B2A]/10" />
          </div>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="mb-4 w-full rounded-full bg-[#0E7C7B] py-6 text-base font-medium text-white hover:bg-[#0E7C7B]/90"
          >
            <Link href="/">Return to Diagnostic Suite</Link>
          </Button>

          {/* Secondary info */}
          <p className="text-center text-xs text-[#0F1B2A]/50">
            All diagnostic pathways available on the main suite. No data was lost in this error.
          </p>
        </div>
      </div>
    </div>
  )
}
