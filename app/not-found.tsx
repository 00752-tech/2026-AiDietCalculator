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
          {/* System status indicator */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#4FD1D0]" />
            <p className="font-mono text-sm uppercase tracking-wider text-[#4FD1D0]">
              System Diagnostic Fault
            </p>
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#4FD1D0]" />
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-center font-mono text-3xl font-bold tracking-tight text-white md:text-4xl">
            404 — SYSTEM DIAGNOSTIC FAULT
          </h1>

          {/* Error code display */}
          <div className="mb-6 flex justify-center gap-4 font-mono text-sm">
            <span className="text-[#4FD1D0]">PATHWAY_OFFLINE</span>
            <span className="text-white/30">|</span>
            <span className="text-[#FF6B6B]">CRITICAL_FAULT</span>
          </div>

          {/* Body description */}
          <p className="mb-8 text-center text-base leading-relaxed text-white/80">
            The metabolic pathway you are attempting to access is currently offline or corrupted.
          </p>

          {/* Visual separator */}
          <div className="mb-8 flex items-center gap-4">
            <div className="flex-1 border-t border-white/10" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#4FD1D0]" />
            <div className="flex-1 border-t border-white/10" />
          </div>

          {/* Override button */}
          <Button
            asChild
            size="lg"
            className="mb-4 w-full rounded-full border-2 border-[#4FD1D0] bg-[#0E7C7B] py-6 text-base font-semibold text-white transition-all hover:bg-[#4FD1D0] hover:text-[#0F1B2A]"
          >
            <Link href="/">System Override — Return to Home</Link>
          </Button>

          {/* Status info */}
          <p className="text-center text-xs text-white/50">
            Initiating diagnostic reset. All pathways will be restored.
          </p>
        </div>
      </div>
    </div>
  )
}
