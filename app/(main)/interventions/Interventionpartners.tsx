'use client'

const logos = [
  { name: 'Ministry of Public Health', src: '/logos/minsante.png' },
  { name: 'GIZ', src: '/logos/giz.jpg' },
  { name: 'Global Fund', src: '/logos/global-fund.jpg' },
  { name: 'Chemonics', src: '/logos/chemonics.jfif' },
  { name: 'CAMNAFAW', src: '/logos/camnafaw.png' },
  { name: 'CARE', src: '/logos/CARE.png' },
  { name: 'Médecins Sans Frontières', src: '/logos/msf.png' },
  { name: 'World Bank', src: '/logos/world-bank.png' },
  { name: 'AFD', src: '/logos/AFD.png' },
  { name: 'KFW', src: '/logos/kfw.png' },
]

const community = [
  '21 Health Districts across 6 Divisions of the South West Region',
  '3 Representatives from Confessional Health Services (CBCHS, PCCHS)',
]

export function InterventionPartners() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="mb-14 text-center">
          <p data-aos="fade-up" className="text-[10px] font-black text-amber-400 uppercase tracking-[0.25em] mb-3">
            Collaboration
          </p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-5xl font-black text-emerald-950 tracking-tight leading-tight mb-4">
            Our Partners
          </h2>
          {/* <p data-aos="fade-up" data-aos-delay="150" className="text-slate-500 text-sm leading-relaxed max-w-xl">
            SWRFHP collaborates with state institutions, international development organizations, and community representatives to deliver quality healthcare across the South West Region.
          </p> */}
        </div>

        {/* Logo Grid */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px"
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              title={logo.name}
              className="  transition-colors duration-200 flex items-center justify-center p-6 md:p-8 group"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-20 md:h-20 w-auto object-contain group-hover:grayscale-0 transition-all duration-300  group-hover:opacity-100"
              />
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}