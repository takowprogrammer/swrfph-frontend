'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCards, Autoplay  } from 'swiper/modules'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'

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

const RatingStars = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 mb-6">
    {[...Array(Math.floor(rating))].map((_, i) => <FaStar key={i} size={16} className="text-amber-400" />)}
    {rating % 1 !== 0 && <FaStarHalfAlt size={16} className="text-amber-400" />}
    {[...Array(5 - Math.ceil(rating))].map((_, i) => <FaStar key={i} size={16} className="text-slate-200" />)}
  </div>
)

export function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-24 overflow-hidden">
      <style>{`
        .testimonial-swiper .swiper-pagination { bottom: -36px; }
        .testimonial-swiper .swiper-pagination-bullet { background: #064E3B; opacity: 0.25; width: 10px; height: 10px; }
        .testimonial-swiper .swiper-pagination-bullet-active { opacity: 1; width: 30px; border-radius: 3px; }
        .testimonial-swiper .swiper-cards { overflow: visible !important; }
        
        .message-card::after {
          content: '';
          position: absolute;
          bottom: -20px; left: 40px;
          border-right: 25px solid transparent;
          border-top: 20px solid #0f172a;
        }
        .message-card::before {
          content: '';
          position: absolute;
          bottom: -17px; left: 41px;
          border-right: 22px solid transparent;
          // border-top: 18px solid #ffffff;
          border-top: 18px solid #f8fafc;
          z-index: 1;
        }
        .testimonial-swiper .swiper-slide { overflow: visible !important; }
      `}</style>

      <div className="max-w-[700px] mx-auto px-6 flex flex-col items-center">
        <div className="text-center mb-16">
          <p className="text-[10px] font-bold text-[#064E3B] uppercase tracking-widest mb-3">Impact Reports</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#064E3B] leading-tight">Voices from the Field</h2>
        </div>

        <Swiper
          effect="cards"
          grabCursor
          modules={[EffectCards, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 500, disableOnInteraction: false }}
          className="testimonial-swiper w-full max-w-[520px] pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="message-card relative bg-white p-8 md:p-12 border border-slate-900 shadow-xl shadow-emerald-900/5 flex flex-col justify-center min-h-[280px]">
                <RatingStars rating={t.rating} />
                <p className="text-slate-800 text-lg md:text-xl italic leading-relaxed mb-8">"{t.quote}"</p>
                <div>
                  <p className="text-[#064E3B] font-bold text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs font-medium mt-1">{t.role} • {t.organization}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}