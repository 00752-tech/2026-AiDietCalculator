import type { ReactNode } from "react"

export function ToolShell({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <main className="min-h-screen bg-[#F7F9FA] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-xl">
        <a href="/" className="mb-8 inline-block text-sm text-[#0F1B2A]/50 hover:text-[#0E7C7B]">
          ← Back to Metabolic Diagnostic
        </a>
        <h1 className="font-serif text-3xl text-[#0F1B2A] md:text-4xl">{title}</h1>
        <p className="mt-3 text-[#0F1B2A]/70">{description}</p>
        <div className="mt-8">{children}</div>
      </div>
    </main>
  )
}
