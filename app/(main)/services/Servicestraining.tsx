'use client'

const training = [
  {
    title: 'Healthcare Provider Training',
    intro: 'Equipping health professionals with the knowledge to deliver better care.',
    desc: 'We train healthcare professionals on the proper management, storage, and administration of essential medicines  reducing waste, improving patient outcomes, and strengthening facility-level supply chain performance across all 21 districts.',
    points: ['Medicine management protocols', 'Dosage and administration guidelines', 'Storage and cold-chain handling', 'Patient counseling best practices'],
    image: '/health-education.jpg',
  },
  {
    title: 'Community Health Education',
    intro: 'Building health literacy from the ground up across every community.',
    desc: 'Through structured outreach programs, we educate communities on disease prevention, nutrition, and the responsible use of medicines  creating a healthier, better-informed population across the South West Region.',
    points: ['Health awareness campaigns', 'Preventive care sensitization', 'Medicine literacy programs', 'Community engagement workshops'],
    image: '/community.jfif',
  },
]

export function ServicesTraining() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">

        <div className="mb-14 text-center">
          <p data-aos="fade-up" className="text-[10px] font-black text-amber-400 uppercase tracking-[0.25em] mb-3">
            Capacity Building
          </p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-5xl font-black text-emerald-950 tracking-tight leading-tight">
            Training & Education
          </h2>
        </div>

        <div className="flex flex-col gap-0">
          {training.map((t, i) => {
            const imageRight = i % 2 === 0
            return (
              <div key={t.title} className="flex flex-col-reverse md:flex-row md:mb-16">

                {/* Content */}
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className={`w-full md:w-1/2 flex flex-col justify-center px-0 py-8 md:px-12 md:py-16 ${!imageRight ? 'md:order-2' : ''}`}
                >
                  {/* <p className="text-[10px] font-black text-amber-400 uppercase tracking-[0.25em] mb-3">0{i + 1}</p> */}
                  <h3 className="text-2xl md:text-3xl font-black text-emerald-950 tracking-tight leading-tight mb-3">{t.title}</h3>
                  <p className="text-xl md:text-2xl font-bold text-slate-600 mb-4 leading-snug">{t.intro}</p>
                  <p className="text-slate-500 text-sm md:text-xl leading-relaxed mb-6">{t.desc}</p>
                  {/* <ul className="flex flex-col gap-2">
                    {t.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className="w-1 h-1 bg-amber-400 shrink-0 mt-2" />
                        {p}
                      </li>
                    ))}
                  </ul> */}
                </div>

                {/* Image */}
                <div
                  data-aos={imageRight ? 'fade-left' : 'fade-right'}
                  data-aos-duration="1000"
                  className={`w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[380px] overflow-hidden ${!imageRight ? 'md:order-1' : ''}`}
                >
                  <img src={t.image} alt={t.title} className="w-full h-full object-cover" />
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}