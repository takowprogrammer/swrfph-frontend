'use client'

import { ArrowRight } from 'lucide-react'

export function OperationalPillars() {
  const pillars = [
    {
      id: '01',
      title: 'Strategic Procurement',
      desc: 'Bulk acquisition of essential medicines and health commodities, ensuring cost-efficiency and international quality standards.',
      image: '/procurement.jpeg', 
    },
    {
      id: '02',
      title: 'Cold-Chain Warehousing',
      desc: 'Advanced climate-controlled storage solutions maintaining the biological integrity of vaccines and sensitive medical supplies.',
      image: '/re-stocking-medicines.jpeg', 
    },
    {
      id: '03',
      title: 'Last-Mile Distribution',
      desc: 'Precision logistics across 21 health districts, guaranteeing the secure delivery of medical supplies to remote facilities.',
      image: '/cargo.jpeg', 
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        
        {/* Header - No Animations */}
        <div className="max-w-7xl mb-8 md:mb-12 text-center">
          <p className="text-amber-400 font-black uppercase mb-3">
            Our Core Mandate
          </p>
          <h2 className="text-3xl md:text-5xl mx-auto max-w-3xl lg:text-6xl font-black text-gray-800/80 tracking-tight leading-[1.05]">
            Operational Pillars of Regional Healthcare.
          </h2>
        </div>

        {/* The Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.id} 
              className="bg-white overflow-hidden flex flex-col group transition-transform duration-500"
            >
              {/* Image Container - AOS Zoom-In Effect */}
              <div 
                className="relative aspect-[16/10] overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay={index * 200}
                data-aos-duration="1000"
              >
                <img 
                  src={pillar.image} 
                  alt={pillar.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content - Smooth Fade Up */}
              <div 
                className="flex-grow space-y-4 mt-6"
                data-aos="fade-up"
                data-aos-delay={(index * 200) + 150}
                data-aos-duration="800"
              >
                <h3 className="text-xl md:text-2xl font-black text-emerald-950 tracking-tight leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 leading-relaxed line-clamp-3">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}