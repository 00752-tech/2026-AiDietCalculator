import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div
      className="fixed inset-0 min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/404-diagnostic-dashboard.png')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Centered glassmorphism container */}
      <div className="flex min-h-screen items-center justify-center px-4 py-8">
        <style>{`
          @keyframes breathe {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.97;
              transform: scale(1.01);
            }
          }
          .breathe-animate {
            animation: breathe 3.5s ease-in-out infinite;
          }
        `}</style>

        {/* Glassmorphism frosted glass panel */}
        <div className="breathe-animate w-full max-w-2xl rounded-2xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-md md:p-12">
          {/* Diagnostic status indicator */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <div className="h-2 w-2 rounded-full bg-white/40" />
            <p className="font-mono text-xs uppercase tracking-widest text-white/60">
              Diagnostic Output — No Data
            </p>
            <div className="h-2 w-2 rounded-full bg-white/40" />
          </div>

          {/* Headline - Serif font matching site branding */}
          <h1 className="font-serif mb-6 text-center text-4xl font-light tracking-tight text-white md:text-5xl">
            Pathway Not Found
          </h1>

          {/* Diagnostic reference codes */}
          <div className="mb-6 flex justify-center gap-4 font-mono text-xs">
            <span className="text-white/50">REF: 404</span>
            <span className="text-white/30">|</span>
            <span className="text-amber-500/70">SIGNAL_LOST</span>
          </div>

          {/* Clinical description - diagnostic tone, not urgent */}
          <p className="mb-8 text-center font-sans text-base leading-relaxed text-white/75">
            The metabolic diagnostic pathway you requested could not be located. This data signal has been lost.
          </p>

          {/* Visual separator - clinical grid line */}
          <div className="mb-8 flex items-center gap-4">
            <div className="flex-1 border-t border-white/10" />
            <div className="h-1 w-1 rounded-full bg-white/30" />
            <div className="flex-1 border-t border-white/10" />
          </div>

          {/* Primary CTA - matching calculator button styling */}
          <Button
            asChild
            size="lg"
            className="mb-4 w-full rounded-full bg-[#0E7C7B] py-6 text-base font-medium text-white hover:bg-[#0E7C7B]/90"
          >
            <Link href="/">Return to Diagnostic Suite</Link>
          </Button>

          {/* Clinical footer note */}
          <p className="text-center text-xs text-white/50">
            All diagnostic pathways remain available. No data was corrupted.
          </p>
        </div>
      </div>
    </div>
  )
}
