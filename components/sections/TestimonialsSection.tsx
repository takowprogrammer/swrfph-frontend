'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

const testimonials = [
  {
    rating: 4.8,
    quote: "The consistency in the supply chain has completely changed how we manage malaria cases in remote clinics.",
    name: "Dr. Atem S.",
    role: "Chief Medical Officer",
    organization: "Manyu District"
  },
  {
    rating: 4.5,
    quote: "SWRFHP's focus on cold-chain integrity ensures that the vaccines we receive are always effective and safe.",
    name: "Marie-Louise N.",
    role: "Pharmacy Coordinator",
    organization: "Fako Health District"
  },
  {
    rating: 4.2,
    quote: "We now receive essential supplies in record time, even during the peak of the rainy season.",
    name: "John T.",
    role: "Health Lead",
    organization: "Lebialem District"
  }
]

const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className="flex gap-1 mb-6">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} size={16} className="text-amber-400" />
      ))}
      {hasHalfStar && <FaStarHalfAlt size={16} className="text-amber-400" />}
      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <FaStar key={i} size={16} className="text-slate-200" />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="bg-slate-50 py-24 overflow-hidden">
      {/* CSS for the tail - purely visual, doesn't touch the motion */}
      <style>{`
        .message-tail::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 40px;
          width: 0;
          height: 0;
          border-left: 0px solid transparent;
          border-right: 25px solid transparent;
          border-top: 20px solid #0f172a; /* Matches your border color */
        }
        .message-tail::before {
          content: '';
          position: absolute;
          bottom: -17px;
          left: 41px;
          width: 0;
          height: 0;
          border-left: 0px solid transparent;
          border-right: 22px solid transparent;
          border-top: 18px solid #ffffff; /* Matches card bg */
          z-index: 1;
        }
      `}</style>

      <div className="max-w-[700px] mx-auto px-6 flex flex-col items-center">
        <div className="text-center mb-6 md:mb-16">
          <p 
          data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
          className="text-[10px] font-bold text-[#064E3B] uppercase tracking-widest mb-3">
            Impact Reports
          </p>
          <h2 
          data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
          className="text-3xl lg:text-4xl font-bold text-[#064E3B] leading-tight">
            Voices from the Field
          </h2>
        </div>

        <div 
        data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="400"
        className="relative w-full h-[400px] md:h-[340px] perspective-1000">
          <AnimatePresence mode="popLayout">
            {[0, 1, 2].map((offset) => {
              const index = (current + offset) % testimonials.length
              const t = testimonials[index]
              const isActive = offset === 0
              
              return (
                <motion.div
                  key={`${index}-${offset}`}
                  // EXACT PREVIOUS ANIMATION VALUES
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ 
                    opacity: 1 - offset * 0.15,
                    scale: 1 - offset * 0.05,
                    y: offset * 12,
                    zIndex: 10 - offset,
                    rotate: offset === 1 ? 1.5 : offset === 2 ? -1 : 0
                  }}
                  exit={{ 
                    x: -200, 
                    opacity: 0, 
                    rotate: -10,
                    scale: 0.9 
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                  }}
                  className={`absolute inset-0 bg-white p-8 md:p-12 border border-slate-900 shadow-xl shadow-emerald-900/5 flex flex-col justify-center ${isActive ? 'message-tail' : ''}`}
                >
                  <RatingStars rating={t.rating} />
                  
                  <p className="text-slate-800 text-lg md:text-xl italic leading-relaxed mb-8">
                    "{t.quote}"
                  </p>
                  
                  <div>
                    <p className="text-[#064E3B] font-bold text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs font-medium mt-1">
                      {t.role} • {t.organization}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4">
          <button 
            onClick={nextTestimonial}
            className="group flex items-center gap-3 bg-[#064E3B] text-white px-8 py-4 text-xs font-bold uppercase transition-all hover:bg-emerald-800 active:scale-95"
          >
            Next Report
            <ArrowRight size={16} className=" transition-transform" />
          </button>
          
          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
            {current + 1} of {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  )
}