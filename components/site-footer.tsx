import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-[#0F1B2A]/10 bg-white px-4 py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 text-xs text-[#0F1B2A]/60 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} AI Diet Calculator. For general information only, not medical advice.</p>
        <nav aria-label="Footer" className="flex gap-5">
          <Link href="/about-us" className="hover:text-[#0E7C7B]">About</Link>
          <Link href="/privacy-policy" className="hover:text-[#0E7C7B]">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  )
}
// end of file
