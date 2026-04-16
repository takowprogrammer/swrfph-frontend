'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    image: '/front-view-of-office-croped.jpeg',
    heading: 'Ensuring Quality Medicine for Every Citizen in the South West',
    body: 'Since 1989, we have been at the forefront of healthcare supply and medical integrity across 21 districts.',
    cta: true,
    // AOS "Fade Up" Aura: High Y offset (60px) + Fast Spring
    variants: {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 }
    }
  },
  {
    image: '/cargo.jpeg',
    heading: 'Reaching Every District With Essential Health Supplies',
    body: 'Our distribution network spans all 21 health districts, ensuring no community is left without critical medicines.',
    cta: false,
    // AOS "Zoom In" Aura: Sharp scale up from 0.85
    variants: {
      initial: { opacity: 0, scale: 0.85 },
      animate: { opacity: 1, scale: 1 }
    }
  },
  {
    image: '/test.jpeg',
    heading: 'Professionals Committed to Public Health Excellence',
    body: 'Dedicated health officers and staff driving impact across the South West Region every single day.',
    cta: false,
    // AOS "Fade Left" Aura: High X offset
    variants: {
      initial: { opacity: 0, x: 80 },
      animate: { opacity: 1, x: 0 }
    }
  },
]

const DURATION = 5000

export const Hero = () => {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Fast, snapping transition settings
 const snapTransition = {
    type: "spring",
    stiffness: 120,
    damping: 18,
    mass: 0.8
  } as const;

  const goTo = useCallback((index: number) => {
    if (transitioning) return
    const next = (index + slides.length) % slides.length
    setTransitioning(true)
    setCurrent(next)
    setTimeout(() => setTransitioning(false), 900)
  }, [transitioning])

  const resetAutoplay = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      goTo(current + 1)
    }, DURATION)
  }, [current, goTo])

  useEffect(() => {
    resetAutoplay()
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [current, resetAutoplay])

  const activeSlide = slides[current]

  return (
    <div className="relative w-full h-[300px] md:h-[420px] max-w-7xl mx-auto overflow-hidden bg-black">
      {/* BG Images */}
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[900ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/55 to-emerald-950/90" />

      {/* Content Area */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-10 md:px-16 text-center z-20">
        <AnimatePresence mode="wait">
          <div key={current} className="flex flex-col items-center">
            
            <motion.h1
              initial={activeSlide.variants.initial}
              animate={activeSlide.variants.animate}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              transition={{ ...snapTransition, delay: 0.05 }}
              className="text-xl sm:text-2xl md:text-[32px] font-bold text-white leading-[1.15] max-w-2xl mb-3 tracking-tight"
            >
              {activeSlide.heading}
            </motion.h1>

            <motion.p
              initial={activeSlide.variants.initial}
              animate={activeSlide.variants.animate}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              transition={{ ...snapTransition, delay: 0.15 }}
              className="text-sm md:text-base text-white/80 max-w-xl leading-relaxed mb-5"
            >
              {activeSlide.body}
            </motion.p>

            {activeSlide.cta && (
              <motion.div
                initial={activeSlide.variants.initial}
                animate={activeSlide.variants.animate}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ ...snapTransition, delay: 0.25 }}
                className="hidden md:flex gap-2.5 flex-wrap justify-center"
              >
                <button className="text-xs font-semibold bg-emerald-600 text-white px-5 py-2.5 hover:bg-emerald-700 transition-colors">
                  Contact Us
                </button>
                <button className="text-xs font-bold bg-white text-gray-900 border-[1.5px] border-white px-5 py-2.5 hover:bg-white/90 transition-colors">
                  Learn More
                </button>
              </motion.div>
            )}
            
          </div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button onClick={() => goTo(current - 1)} className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 text-white opacity-50 hover:opacity-100 transition-opacity">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square"><polyline points="15 18 9 12 15 6" /></svg>
      </button>

      <button onClick={() => goTo(current + 1)} className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 text-white opacity-50 hover:opacity-100 transition-opacity">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square"><polyline points="9 18 15 12 9 6" /></svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="h-1.5 transition-all duration-300"
            style={{
              width: i === current ? '20px' : '6px',
              background: i === current ? '#fff' : 'rgba(255,255,255,0.4)'
            }}
          />
        ))}
      </div>
    </div>
  )
}