'use client'

import Image from 'next/image'

export function InterventionImageBreak() {
  return (
    <div className="relative h-[280px] md:h-[400px] overflow-hidden">
      <Image
        src="/cargo.jpeg"
        alt="Medicine distribution across the South West Region"
        fill
        className="object-cover brightness-[0.55]"
      />
      <div className="absolute inset-0 bg-emerald-950/50" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10 max-w-3xl mx-auto">
        <p
          data-aos="fade-up"
          className="text-white text-2xl md:text-4xl font-black tracking-tight leading-snug"
        >
          "No community in the South West Region is too remote to receive quality healthcare."
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-amber-400 text-[10px] font-black uppercase tracking-[0.25em] mt-6"
        >
          SWRFHP — Distribution Mandate
        </p>
      </div>
    </div>
  )
}