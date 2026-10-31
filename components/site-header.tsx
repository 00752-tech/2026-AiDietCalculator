'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

const CALCULATORS = [
  { name: 'BMI Calculator', href: '/tools/bmi-calculator' },
  { name: 'BMR Calculator', href: '/tools/bmr-calculator' },
  { name: 'Calorie Calculator', href: '/tools/calorie-calculator' },
  { name: 'Ideal Weight Calculator', href: '/tools/ideal-weight-calculator' },
  { name: 'Macro Calculator', href: '/tools/macro-calculator' },
  { name: 'Protein Calculator', href: '/tools/protein-calculator' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [calcOpen, setCalcOpen] = useState(false)
  const calcRef = useRef<HTMLDivElement>(null)

  const close = () => {
    setMenuOpen(false)
    setCalcOpen(false)
  }

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (calcRef.current && !calcRef.current.contains(e.target as Node)) setCalcOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setCalcOpen(false)
        setMenuOpen(false)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const focus = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E7C7B]'

  return (
    <header className="sticky top-0 z-40 border-b border-[#0F1B2A]/10 bg-[#F7F9FA]/95 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-5xl flex-wrap items-center justify-between px-4">
        <Link
          href="/"
          onClick={close}
          className={`py-3 font-serif text-xl text-[#0E7C7B] ${focus}`}
        >
          AI Diet Calculator
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((o) => !o)}
          className={`-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-[#0F1B2A] md:hidden ${focus}`}
        >
          {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>

        <div
          id="site-menu"
          className={`${menuOpen ? 'flex' : 'hidden'} basis-full flex-col pb-3 md:flex md:basis-auto md:flex-row md:items-center md:gap-6 md:pb-0`}
        >
          <div ref={calcRef} className="relative">
            <button
              type="button"
              aria-expanded={calcOpen}
              aria-haspopup="true"
              aria-controls="calculators-menu"
              onClick={() => setCalcOpen((o) => !o)}
              className={`pointer-events-none flex min-h-11 items-center gap-1 text-sm font-medium text-[#0F1B2A] md:pointer-events-auto md:hover:text-[#0E7C7B] ${focus}`}
            >
              Calculators
              <ChevronDown className="hidden h-4 w-4 md:block" aria-hidden="true" />
            </button>
            <ul
              id="calculators-menu"
              className={`md:absolute md:left-0 md:top-full md:z-50 md:mt-1 md:w-60 md:rounded-md md:border md:border-[#0F1B2A]/10 md:bg-white md:py-2 md:shadow-lg ${calcOpen ? 'md:block' : 'md:hidden'}`}
            >
              {CALCULATORS.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    onClick={close}
                    className={`block min-h-11 py-3 pl-4 pr-4 text-sm text-[#0F1B2A]/70 hover:text-[#0E7C7B] md:min-h-0 md:py-2 md:hover:bg-[#F7F9FA] ${focus}`}
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/#resource-library"
            onClick={close}
            className={`flex min-h-11 items-center text-sm font-medium text-[#0F1B2A] hover:text-[#0E7C7B] ${focus}`}
          >
            Resources
          </Link>
        </div>
      </nav>
    </header>
  )
}
// end of file
