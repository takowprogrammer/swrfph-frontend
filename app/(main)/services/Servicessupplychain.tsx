'use client'

const services = [
  {
    title: 'Procurement',
    intro: 'Sourcing quality medicines at scale, reliably and cost-effectively.',
    desc: 'We source essential medicines directly from reputable, certified manufacturers  negotiating bulk pricing that keeps costs low for health facilities without compromising quality. Every supplier is vetted against international standards before any procurement is initiated.',
    points: ['Certified supplier network', 'Bulk purchasing agreements', 'Cost-efficiency benchmarking', 'Supply chain optimization'],
    image: '/procurement.jpeg',
  },
  {
    title: 'Logistics & Storage',
    intro: 'Cold-chain integrity from warehouse to facility door.',
    desc: 'Our logistics infrastructure spans all 21 health districts, maintaining optimal storage conditions for temperature-sensitive medicines and vaccines. We operate climate-controlled warehouses and coordinate secure, documented delivery to every facility in the region.',
    points: ['Cold-chain management', 'Climate-controlled warehousing', 'Secure transport', 'Real-time inventory tracking'],
    image: '/cargo.jpeg',
  },
  {
    title: 'Quality Assurance',
    intro: 'Rigorous checks at every stage of the supply chain.',
    desc: 'No medicine leaves our facility without passing through a structured quality assurance process. We verify batch certifications, monitor expiry dates, and conduct systematic safety checks  ensuring every product delivered is safe, effective, and properly documented.',
    points: ['Batch certification verification', 'Expiry date monitoring', 'Safety protocol compliance', 'Documentation and traceability'],
    image: '/medicine-reception.jpeg',
  },
]

export function ServicesSupplyChain() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">

        <div className="mb-14 md:mb-0 text-center">
          <p data-aos="fade-up" className="text-[10px] font-black text-amber-400 uppercase tracking-[0.25em] mb-3">
            Supply Chain
          </p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-5xl font-black text-emerald-950 tracking-tight leading-tight">
            Essential Medicine Supply
          </h2>
        </div>

        <div className="flex flex-col gap-0">
          {services.map((s, i) => {
            const imageLeft = i % 2 === 0
            return (
              <div
                key={s.title}
                className="flex flex-col md:mt-16 md:flex-row"
              >
                {/* Image */}
                <div
                  data-aos={imageLeft ? 'fade-right' : 'fade-left'}
                  data-aos-duration="1000"
                  className={`w-full md:w-1/2 aspect-[4/3] overflow-hidden ${!imageLeft ? 'md:order-2' : ''}`}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className={`w-full md:w-1/2 flex flex-col justify-center px-0 py-8 md:px-12 md:py-16 ${!imageLeft ? 'md:order-1' : ''}`}
                >
                  {/* <p className="text-[10px] font-black text-amber-400 uppercase tracking-[0.25em] mb-3">0{i + 1}</p> */}
                  <h3 className="text-2xl md:text-4xl font-black text-emerald-950 tracking-tight leading-tight mb-3">{s.title}</h3>
                  <p className="text-base font-bold text-slate-700 mb-4 leading-snug">{s.intro}</p>
                  <p className="text-slate-500 text-sm  md:text-xl leading-relaxed mb-6">{s.desc}</p>
                  {/* <ul className="flex flex-col gap-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className="w-1 h-1 bg-amber-400 shrink-0 mt-2" />
                        {p}
                      </li>
                    ))}
                  </ul> */}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}