'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function SectionsHero() {
  return (
    <div className="relative h-[200px] md:h-[300px] overflow-hidden">
      <Image src="/re-stocking-medicines.jpeg" alt="Operational Sections" fill className="object-cover brightness-[0.65]" priority />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/40 to-emerald-950/90" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-[10px] font-black text-amber-400 uppercase tracking-[0.25em] mb-4">Our Organization</p>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05] mb-4">Operational Sections</h1>
          {/* <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Four specialized sections working in coordination to deliver quality healthcare across all 21 districts of the South West Region.
          </p> */}
        </motion.div>
      </div>
    </div>
  )
}