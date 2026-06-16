'use client'

const values = [
  { num: '01', title: 'Compassion', desc: 'Putting the needs of patients and healthcare providers first in every decision we make across all 21 districts.' },
  { num: '02', title: 'Excellence', desc: 'Highest standards in medicine quality, logistics, and service delivery — from procurement to last-mile delivery.' },
  { num: '03', title: 'Integrity', desc: 'Transparency, honesty, and accountability in all our interactions and institutional decisions.' },
  { num: '04', title: 'Partnership', desc: 'Working closely with healthcare facilities, communities, and partners toward shared public health goals.' },
]

export function CoreValues() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">

        <div className="flex flex-col lg:flex-row lg:gap-24 gap-6">

          {/* ── LEFT: sticky label col ── */}
          <div className="lg:w-72 shrink-0">
            <p data-aos="fade-up" className="text-[10px] text-center md:text-start font-black text-amber-400  mb-3">
              What We Stand For
            </p>
            <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl text-center md:text-start md:text-5xl font-black text-emerald-950 tracking-tight leading-tight">
              Core Values
            </h2>

            <img src="/front-view-of-office.jpeg" alt="" className="h-72 mt-6"/>
          </div>

          {/* ── RIGHT: full-width rows ── */}
          <div className="flex-1 divide-y divide-slate-300">
            {values.map((v, i) => (
              <div
                key={v.title}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="flex items-start gap-8 py-4 md:py-8 group"
              >
                <span className="text-base font-black text-emerald-600 tracking-[0.2em] pt-1 shrink-0 transition-colors duration-300">
                  {v.num}
                </span>
                <div className="flex-1 flex flex-col sm:flex-row sm:items-start sm:gap-12">
                  <h3 className="text-2xl font-black text-emerald-950 tracking-tight sm:w-36 shrink-0 mb-2 sm:mb-0">
                    {v.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}