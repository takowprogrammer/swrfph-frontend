'use client'

import { ClipboardList, Package, ShieldCheck, Truck } from 'lucide-react'
import { ArrowRight, ArrowDown } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    title: 'Assessment',
    desc: 'We evaluate your facility\'s medicine needs and current stock levels.',
  },
  {
    icon: Package,
    title: 'Procurement',
    desc: 'Medicines are sourced from verified suppliers at competitive prices.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Check',
    desc: 'Every batch undergoes rigorous quality assurance before dispatch.',
  },
  {
    icon: Truck,
    title: 'Delivery',
    desc: 'Secure, documented delivery to your facility on schedule.',
  },
]

export function ServicesHowWeWork() {
  return (
    <section className="bg-slate-50 py-16 md:py-24 border-y border-slate-100">
      <div className="container mx-auto px-6 md:px-8">

        <div className="text-center mb-16">
          <p data-aos="fade-up" className="text-[10px] font-black text-amber-400 uppercase tracking-[0.25em] mb-3">
            Our Process
          </p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-5xl font-black text-emerald-950 tracking-tight leading-tight">
            How we work
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-0 md:gap-0">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col md:flex-row items-center">

              {/* Step */}
              <div
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="flex flex-col items-center text-center w-full md:w-48"
              >
                {/* Icon circle */}
                <div className="w-32 h-32 rounded-full  border-2 border-slate-700 flex items-center justify-center mb-5">
                  <step.icon size={50} className="text-emerald-700" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black text-emerald-950 tracking-tight mb-2">{step.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed max-w-[240px]">{step.desc}</p>
              </div>

              {/* Arrow */}
              {i < steps.length - 1 && (
                <div
                  data-aos="fade-up"
                  data-aos-delay={i * 100 + 50}
                  className="flex items-center justify-center mx-4 my-6 md:my-0"
                >
                  <ArrowRight size={50} className="text-amber-400 hidden md:block" strokeWidth={2.5} />
                  <ArrowDown size={50} className="text-amber-400 md:hidden" strokeWidth={2.5} />
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}