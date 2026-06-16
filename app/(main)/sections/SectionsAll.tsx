'use client'

const sections = [
  {
    num: '01',
    title: 'Pharmaceutical Products Management',
    intro: 'The bedrock of the SWRFHP healthcare delivery system.',
    desc: 'PPM manages the entire pharmaceutical supply chain  from procurement to distribution  ensuring quality medicines reach every health facility in compliance with WHO standards. The GPHF-MINILAB donated by DIFAEM enables rapid drug quality verification against falsified medicines.',
    points: ['Quality essential medicines availability', 'Last Mile Delivery across 21 districts', 'Standard Operating Procedures compliance', 'Expired medicines management', 'GPHF-MINILAB quality control', 'Capacity building and refresher training'],
    image: '/medicine-reception.jpeg',
  },
  {
    num: '02',
    title: 'Administration & Finance',
    intro: 'Managing the financial health and operational efficiency of SWRFHP.',
    desc: 'This section handles budgeting, accounting, procurement, and human resources  ensuring smooth institutional operations through financial reporting, fixed asset management, payroll, and compliance. It also coordinates external audits to maintain full accountability.',
    points: ['Budgeting and financial reporting', 'Procurement and asset management', 'Human resources and payroll', 'External audit coordination'],
    image: '/front-view-of-office.jpeg',
  },
  {
    num: '03',
    title: 'Partnership & Health Promotion',
    intro: 'Strengthening the healthcare ecosystem through training and collaboration.',
    desc: 'Works with the Regional Assembly, University of Buea, and community organizations to deliver sensitization programs, train dialogue structure members, and distribute health communication materials across all 21 health districts.',
    points: ['Sensitization on priority health programs', 'Multi-sectorial partnerships', 'Health communication materials', 'Dialogue structure member training'],
    image: '/community.jfif',
  },
  {
    num: '04',
    title: 'Universal Health Coverage',
    intro: 'Ensuring no citizen is left behind in accessing quality healthcare.',
    desc: 'A health insurance scheme covering children 0–5 years, maternal and child health, hemodialysis services (97% cost reduction at Buea Regional Hospital Annex), and free comprehensive care for all persons living with HIV/AIDS and Tuberculosis.',
    points: ['Free malaria treatment for children 0–5', 'Health Voucher system for maternal care', 'Hemodialysis at 15,000 vs 520,000 FCFA', 'Free HIV/AIDS and TB care'],
    image: '/procurement.jpeg',
  },
]

export function SectionsAll() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">

        <div className="mb-14 text-center">
          <p data-aos="fade-up" className="text-[10px] font-black text-amber-400 uppercase tracking-[0.25em] mb-3">
            Our Structure
          </p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-5xl font-black text-emerald-950 tracking-tight leading-tight">
            Four Operational Sections
          </h2>
        </div>

        <div className="flex flex-col gap-0">
          {sections.map((s, i) => {
            const imageLeft = i % 2 === 0
            return (
              <div key={s.num} className="flex flex-col md:flex-row md:mb-16">

                {/* Image */}
                <div
                  data-aos={imageLeft ? 'fade-right' : 'fade-left'}
                  data-aos-duration="1000"
                  className={`w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[400px] overflow-hidden ${!imageLeft ? 'md:order-2' : ''}`}
                >
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className={`w-full md:w-1/2 flex flex-col justify-center px-0 py-8 md:px-12 md:py-16 ${!imageLeft ? 'md:order-1' : ''}`}
                >
                  <p className="text-[10px] font-black text-emerald-800 uppercase tracking-[0.25em] mb-3">Section {s.num}</p>
                  <h3 className="text-2xl md:text-3xl font-black text-emerald-950 tracking-tight leading-tight mb-3">{s.title}</h3>
                  <p className="text-base font-bold text-slate-700 mb-4 leading-snug">{s.intro}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 ml-6 md:ml-0">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className="w-[6px] h-[6px] md:w-2 md:h-2 bg-slate-600 rounded-full shrink-0 mt-2" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}