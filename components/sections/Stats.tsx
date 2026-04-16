'use client'

import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { MapPin, Building2, Users2, Truck } from 'lucide-react'

export function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const stats = [
    { label: 'Districts', value: 21, suffix: '', icon: <MapPin size={16} className="text-[#F59E0B]" /> },
    { label: 'Facilities', value: 400, suffix: '+', icon: <Building2 size={16} className="text-[#F59E0B]" /> },
    { label: 'Supply Nodes', value: 3, prefix: '0', icon: <Truck size={16} className="text-[#F59E0B]" /> },
    { label: 'Reach', value: 1.5, suffix: 'M+', decimals: 1, icon: <Users2 size={16} className="text-[#F59E0B]" /> },
  ]

  return (
    <section ref={ref} className="bg-[#064E3B] py-12 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className={`flex flex-col items-center text-center ${
                index !== stats.length - 1 ? 'md:border-r border-white/10' : ''
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                {stat.icon}
                <span className="text-4xl md:text-5xl font-black text-white tracking-normal">
                  {inView ? (
                    <CountUp 
                      end={stat.value} 
                      duration={2.5} 
                      decimals={stat.decimals || 0}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                    />
                  ) : (
                    0
                  )}
                </span>
              </div>
              <p className="text-base md:text-lg font-semibold  -tracking-normal text-emerald-400/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}