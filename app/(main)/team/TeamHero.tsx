'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function TeamHero() {
  return (
    <div className="relative h-[200px] md:h-[320px] overflow-hidden">
      <Image src="/front-view-of-office.jpeg" alt="SWRFHP Team" fill className="object-cover brightness-[0.65]" priority />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/40 to-emerald-950/90" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-[10px] font-black text-amber-400 uppercase tracking-[0.25em] mb-4">Leadership</p>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05] mb-4">Our Team</h1>
          {/* <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Dedicated professionals committed to improving healthcare access and outcomes across all 21 districts of the South West Region.
          </p> */}
        </motion.div>
      </div>
    </div>
  )
}