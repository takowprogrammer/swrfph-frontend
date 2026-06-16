'use client'

const organs = [
  {
    title: 'The General Assembly',
    desc: 'The highest decision-making body of SWRFHP, responsible for strategic oversight, policy direction, and major organizational decisions affecting the Fund.',
  },
  {
    title: 'Management Committee',
    desc: 'Oversees day-to-day operations, implementation of policies, and coordination of health programs across all 21 health districts of the South West Region.',
  },
  {
    title: 'The Administrator',
    desc: 'Chief executive officer responsible for overall leadership, strategic implementation, and official representation of SWRFHP at national and regional levels.',
  },
]

export function GoverningOrgans() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">

        <div className="flex flex-col md:flex-row md:items-end md:justify-center gap-4 mb-8 md:mb-16">
          <div className="text-center">
            <p data-aos="fade-up" className="text-[10px] font-black text-amber-400 uppercase tracking-[0.25em] mb-3">
              Institutional Structure
            </p>
            <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-5xl font-black text-emerald-950 tracking-tight leading-tight">
              Governing Organs
            </h2>
          </div>
          {/* <p data-aos="fade-up" data-aos-delay="150" className="text-slate-400 text-sm max-w-xs leading-relaxed md:text-right">
            The structure ensuring effective governance and accountability of the Fund.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {organs.map((o, i) => (
            <div
              key={o.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white border border-slate-200 p-8 flex flex-col gap-6  transition-colors duration-300"
            >
              
              <div>
                <h3 className="text-lg font-black text-emerald-950 tracking-tight leading-snug mb-3">{o.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{o.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}