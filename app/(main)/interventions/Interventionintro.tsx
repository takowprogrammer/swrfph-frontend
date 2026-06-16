'use client'

export function InterventionIntro() {
  return (
    <section className="py-16 md:py-24 border-b border-slate-100">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">

          <h2
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-black text-emerald-950 tracking-tight leading-tight lg:w-80 shrink-0"
          >
            Serving Every District. Every Citizen.
          </h2>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex-1 flex flex-col gap-5 text-slate-600 text-sm md:text-base leading-relaxed"
          >
            <p>
              Since 1989, SWRFHP has operated at the intersection of medicine supply, community health education, and institutional partnership. Our interventions are not programs — they are sustained commitments embedded into the health infrastructure of the South West Region.
            </p>
            <p>
              Across 21 health districts and over 400 facilities, we coordinate the procurement, storage, and distribution of essential medicines while simultaneously strengthening community health systems through education, financing, and collaboration with local and international partners.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}