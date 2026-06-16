'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X, Search, Facebook, Linkedin, MessageCircle, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { SearchOverlay } from './Searchoverlay'

// ─── NAV CONFIG ─────────────────────────────────────────────────────────────

const nav = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  {name: "Contact", href: "/contact"},
  {
    name: 'Our Work',
    children: [
      { name: 'Area Interventions', href: '/interventions' },
      { name: 'Our Services', href: '/services' },
      { name: 'Sections', href: '/sections' },
    ],
  },
  { name: 'Team', href: '/team' },
  { name: 'Resources', href: '/resources' },
]

// ─── DROPDOWN ────────────────────────────────────────────────────────────────

function Dropdown({ item }: { item: typeof nav[number] }) {
  const [open, setOpen] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = () => {
    if (timeout.current) clearTimeout(timeout.current)
    setOpen(true)
  }
  const hide = () => {
    timeout.current = setTimeout(() => setOpen(false), 120)
  }

  return (
    <div onMouseEnter={show} onMouseLeave={hide} className="relative">
      <button className="flex items-center gap-1 px-5 py-2 text-[13px] font-bold uppercase tracking-wider text-primary-950 hover:text-accent-500 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500/50 outline-none rounded-sm">
        {item.name}
        <ChevronDown size={13} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full left-0 mt-1 w-48 bg-white border border-slate-100 shadow-lg shadow-slate-200/60 z-50"
          >
            {item.children!.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-5 py-3 text-[12px] font-bold uppercase tracking-wider text-primary-950 hover:bg-slate-50 hover:text-accent-500 transition-colors border-b border-slate-50 last:border-0"
              >
                {child.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── HEADER ──────────────────────────────────────────────────────────────────

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const pathname = usePathname()

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="bg-accent-600 text-white px-6 md:px-8 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-sm">Emergency Supply Line: +237 333 322 943</p>
          <div className="items-center gap-3 hidden md:flex">
            {[Facebook, Linkedin, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" className="text-white bg-white/20 p-2 rounded-full hover:text-accent-200 transition-colors focus-visible:ring-2 focus-visible:ring-white outline-none">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">

          {/* Left: hamburger + logo */}
          <div className="flex items-center gap-3">
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-primary-950 focus-visible:ring-2 focus-visible:ring-primary-500/50 outline-none rounded-sm">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link href="/" className="flex items-center gap-3 group">
              <Image src="/swrfph-logo.png" alt="SWRFHP" width={48} height={48} className="rounded-full ring-2 ring-primary-800  transition-all" />
              <div className="hidden sm:block">
                <span className="font-black text-sm block tracking-tighter leading-none">SWRFHP</span>
                <span className="text-[9px] text-primary-700 uppercase font-bold tracking-[0.2em]">Cameroon</span>
              </div>
            </Link>
          </div>

          {/* Center: desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) =>
              item.children ? (
                <Dropdown key={item.name} item={item} />
              ) : (
                <Link
                  key={item.name}
                  href={item.href!}
                  className={`px-5 py-2 text-[13px] font-bold uppercase tracking-wider transition-colors hover:text-accent-500 focus-visible:ring-2 focus-visible:ring-primary-500/50 outline-none rounded-sm ${pathname === item.href ? 'text-accent-500' : 'text-primary-950'}`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Right: search + CTA */}
          <div className="flex items-center gap-3">
            <button onClick={() => setSearchOpen(true)} className="p-2 text-primary-950 hover:text-accent-500 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500/50 outline-none rounded-sm">
              <Search size={20} />
            </button>
            <Link href="/contact">
              <Button className="bg-primary-600 hover:bg-primary-700 text-white rounded-none px-6 h-11 font-semibold text-[11px] uppercase tracking-[0.15em] hidden md:flex hover:-translate-y-0.5 active:scale-95 duration-200 transition-all focus-visible:ring-4 focus-visible:ring-primary-500/50">
                Partner with Us
              </Button>
              <Button className="bg-primary-600 hover:bg-primary-700 text-white md:hidden rounded-none px-4 h-10 text-[11px] tracking-[0.15em] hover:-translate-y-0.5 active:scale-95 duration-200 transition-all focus-visible:ring-4 focus-visible:ring-primary-500/50">
                Partner
              </Button>
            </Link>
          </div>
        </div>

        {/* ── MOBILE SIDEBAR ── */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0  bg-white/30 backdrop-blur-md z-40 lg:hidden"
                onClick={() => setMenuOpen(false)}
              />
              {
                menuOpen && <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                 className='fixed top-4 right-4 z-50 bg-white rounded-full p-2' onClick={() => setMenuOpen(false)}><X className='text-gray-700'/> </motion.div>
              }
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 220 }}
                className="fixed top-0 left-0 bottom-0 w-[280px] bg-white z-50 lg:hidden flex flex-col shadow-xl overflow-y-auto"
              >
                <nav className="flex-1 py-6 divide-y divide-slate-50">
                  {nav.map((item) =>
                    item.children ? (
                      <div key={item.name}>
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                          className="w-full flex items-center justify-between px-6 py-4 text-[13px] font-black uppercase tracking-wider text-primary-950"
                        >
                          {item.name}
                          <ChevronDown size={14} className={`transition-transform duration-200 ${mobileExpanded === item.name ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden bg-slate-50"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setMenuOpen(false)}
                                  className="block px-8 py-3 text-[12px] font-bold uppercase tracking-wider text-slate-500 hover:text-accent-500 transition-colors"
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href!}
                        onClick={() => setMenuOpen(false)}
                        className={`block px-6 py-4 text-[13px] font-black uppercase tracking-wider transition-colors hover:text-accent-500 ${pathname === item.href ? 'text-accent-500' : 'text-primary-950'}`}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </nav>

                <div className="p-6 border-t border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Emergency Supply Line</p>
                  <p className="text-primary-950 font-black text-lg">+237 333 322 943</p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* ── SEARCH OVERLAY ── */}
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}