import { Twitter, Facebook, Linkedin, Instagram, MapPin, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer2() {
  const aboutLinks = [
    { label: 'Our History', href: '/about#history' },
    { label: 'Our Vision', href: '/about#vision' },
    { label: 'Our Mission', href: '/about#mission' },
    { label: 'Meet the Team', href: '/team' },
    { label: 'Our Partners', href: '/interventions#partners' },
    { label: 'Testimonials', href: '/#testimonials' },
  ]

  const popularLinks = [
    { label: 'Home Page', href: '/' },
    { label: 'Operational Sections', href: '/sections' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Resources', href: '/resources' },
    { label: 'Districts', href: '/districts' },
    { label: 'Locate Us', href: '/#locate' },
  ]

  return (
    <footer className="bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row w-full">

        {/* ── LEFT: Brand ── */}
        <div className="bg-emerald-950 px-6 md:px-8 py-16 lg:w-[35%] flex flex-col justify-between">
          <div>
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <Image
                src="/swrfph-logo.png"
                alt="SWRFHP Logo"
                width={48}
                height={48}
                className="rounded-full ring-2 ring-emerald-800 group-hover:ring-amber-400 transition-all"
              />
              <div>
                <span className="font-normal text-sm block tracking-tighter leading-none">
                  SouthWest Region Fund For Health Promotion
                </span>
                <span className="text-[9px] text-emerald-200 uppercase font-bold tracking-[0.2em]">
                  Buea, Cameroon
                </span>
              </div>
            </Link>

            <p className="text-white/70 leading-relaxed text-sm">
              Established as the Primary Health Care Essential Drug Program to ensure a constant supply of quality essential medicines — ensuring better health for the population in the South West Region of Cameroon since 1989.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex gap-4 text-sm font-medium text-white/70">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="opacity-50">|</span>
              <a href="/terms" className="hover:text-white transition-colors">Terms and Conditions</a>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Links ── */}
        <div className="py-12 px-6 md:px-8 lg:w-[65%] grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Contact */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-2">Get In Touch</h3>
            <div className="h-px w-12 bg-amber-400 mb-8" />
            <ul className="space-y-5 text-zinc-400">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm">Buea, South West Region, Cameroon</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-sm">info@swrfhp.cm</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-sm">(+237) 633 322 943</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-8">
              {[Twitter, Facebook, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-zinc-800 hover:bg-amber-400 flex items-center justify-center transition-colors duration-200 group">
                  <Icon className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-2">About Us</h3>
            <div className="h-px w-12 bg-amber-400 mb-8" />
            <ul className="space-y-3">
              {aboutLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-zinc-400 hover:text-white text-sm transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-2">Popular Links</h3>
            <div className="h-px w-12 bg-amber-400 mb-8" />
            <ul className="space-y-3">
              {popularLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-zinc-400 hover:text-white text-sm transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright — desktop + mobile */}
          <div className="text-zinc-500 md:col-span-3 border-t border-white/10 pt-8 text-xs flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <span>© {new Date().getFullYear()} SWRFHP. All rights reserved.</span>
            {/* <span>South West Regional Fund for Health Promotion - Buea, Cameroon</span> */}
          </div>

        </div>

      </div>
    </footer>
  )
}