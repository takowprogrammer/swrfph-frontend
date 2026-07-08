'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CallToActionBanner() {
  return (
    <section className='w-full max-w-7xl mx-auto'>
    <section className="relative h-[300px] md:h-[300px] overflow-hidden mx-3 md:mx-8 mb-12 md:mb-24">

      {/* Background image */}
      <img
        src="/community.jfif"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-950/80" />

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8 justify-center z-10">

        <div>
          <p data-aos="fade-up" className="text-[10px] font-black text-accent-400 uppercase tracking-[0.25em] mb-3">
            Get Involved
          </p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight max-w-lg">
            Become a Partner in Regional Health.
          </h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-accent-500 text-white px-8 py-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-accent-600 transition-colors duration-200"
          >
            Partner with Us
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
    </section>
  )
}
