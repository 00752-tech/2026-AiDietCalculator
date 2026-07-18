'use client'

export function SilentDelay() {
  return (
    <div className="flex items-center justify-center py-16">
      <style>{`
        @keyframes softPulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        
        .pulse-indicator {
          animation: softPulse 2s ease-in-out infinite;
        }
      `}</style>
      
      {/* Outer ring */}
      <div className="absolute h-16 w-16 rounded-full border-2 border-[#0F1B2A]/5" />
      
      {/* Middle pulsing ring */}
      <div className="pulse-indicator h-12 w-12 rounded-full border-2 border-[#0E7C7B]/30 border-t-[#0E7C7B]/60" />
      
      {/* Inner dot */}
      <div className="absolute h-2 w-2 rounded-full bg-[#0E7C7B]/40" />
    </div>
  )
}
