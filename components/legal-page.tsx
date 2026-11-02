import type { ReactNode } from "react"

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated?: string
  children: ReactNode
}) {
  return (
    <main className="min-h-screen bg-[#F7F9FA] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-serif text-3xl text-[#0F1B2A] md:text-4xl">{title}</h1>
        {updated && (
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.15em] text-[#0F1B2A]/50">
            Last updated {updated}
          </p>
        )}
        <div className="mt-8 space-y-5 text-base leading-relaxed text-[#0F1B2A]/75 [&_a]:text-[#0E7C7B] [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-[#0F1B2A] [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          {children}
        </div>
      </div>
    </main>
  )
}
// end of file
