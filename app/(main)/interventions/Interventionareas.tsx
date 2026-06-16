'use client'

const interventions = [
  {
    title: 'Collaboration',
    desc: 'Working alongside UN Agencies, GIZ, GLOBAL FUND, CHEMONICS, CAMNAFAW, CARE, DWB, CBCHS, PCCHS, and community-based organizations.',
    image: '/collaboration.jpg',
  },
  {
    title: 'Health Financing',
    desc: 'Supporting Universal Health Coverage initiatives aimed at strengthening the overall performance of the health system.',
    image: '/health-financing.webp',
  },
  {
    title: 'Community Participation',
    desc: 'Fostering meaningful community engagement through structured dialogue systems that give citizens a voice in health decisions.',
    image: '/community.jfif',
  },
  {
    title: 'Essential Medicines',
    desc: 'Managing and distributing essential medicines to all public health structures including HIV, TB, NTDs, and Reproductive Health.',
    image: '/re-stocking-medicines.jpeg',
  },
  {
    title: 'Storage & Distribution',
    desc: 'Operating storage and distribution of pharmaceutical products across all 21 health districts with cold-chain integrity.',
    image: '/cargo.jpeg',
  },
  {
    title: 'Health Education',
    desc: 'Facilitating capacity building throughout the medicines supply chain and sensitization for priority health programs.',
    image: '/health-education.jpg',
  },
  {
    title: 'Maternal & Child Health',
    desc: 'Improving maternal and child health outcomes through timely provision of obstetric kits and reproductive health commodities.',
    image: '/maternal.jpg',
  },
  {
    title: 'Community Sensitization',
    desc: 'Promoting awareness on priority health issues, nutrition, and disease prevention through community outreach programs.',
    image: '/sensitization.jpeg',
  },
]

export function InterventionAreas() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6 md:px-8">

        <div className="mb-14 text-center">
          <p data-aos="fade-up" className="text-[10px] font-black text-amber-400 uppercase tracking-[0.25em] mb-3">
            What We Do
          </p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-5xl font-black text-emerald-950 tracking-tight leading-tight">
            8 Areas of Focus
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interventions.map((item, i) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={i * 60}
              className="flex flex-col bg-white "
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="py-5 flex flex-col gap-2 flex-1">
                <h3 className="text-2xl font-black text-emerald-950 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-base leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}