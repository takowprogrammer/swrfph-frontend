"use client";

import React from 'react';
import {motion} from 'framer-motion';

const VisionIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 5v2M12 17v2M5 12H3M21 12h-2M7.5 7.5l-1.5-1.5M16.5 16.5l1.5 1.5M7.5 16.5l-1.5 1.5M16.5 7.5l1.5-1.5" />
  </svg>
);

const MissionIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
    <path d="M14.121 9.879l5.303-5.303a1.5 1.5 0 0 0-2.121-2.121l-5.303 5.303" />
    <path d="M15 8h3v3" />
  </svg>
);

const ValuesIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12l4 6-10 13L2 9Z" />
    <path d="M11 3v13l-5-7Z" />
    <path d="M13 3v13l5-7Z" />
    <path d="M2 9h20" />
  </svg>
);

const Pillars = () => {

    const pillars = [
      {
        icon: VisionIcon,
        title: "Our Vision",
        text: "To provide sustainable quality health care for the population of the South West Region.",
      },
      {
        icon: MissionIcon,
        title: "Our Mission",
        text: "To ensure better health for the population by improving on the performance of the health system in the South West Region.",
      },
      {
        icon: ValuesIcon,
        title: "Our Values",
        text: "Collaboration, communication, openness, respect, partnership, and outcome-focused decision making.",
      },
    ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-slate-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <span className="text-sm font-bold tracking-[0.2em] text-primary-600 uppercase mb-4 block">
              Strategic Foundation
            </span>
             <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-3xl md:text-5xl font-black text-emerald-950 tracking-tight leading-tight mb-10"
            >
              Our Guiding Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="group relative p-8 bg-white border border-slate-100 rounded-2xl hover:shadow-xl hover:border-primary-100 transition-all duration-300 overflow-hidden"
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary-500" />
                  
                  <div
                    className="w-14 h-14 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 text-primary-600"
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{pillar.text}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Core Values Grid */}
          {/* <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-blue-500 to-brand-green-500 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 hover:shadow-brand-blue-900/5 transition-all duration-500 group"
              >
                <span className="absolute -top-6 -right-2 text-[8rem] font-black text-slate-50 opacity-80 z-0 select-none group-hover:text-brand-green-50 transition-colors duration-500">
                  {value.number}
                </span>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-green-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div> */}
        </div>
      </section>
  )
}

export default Pillars
