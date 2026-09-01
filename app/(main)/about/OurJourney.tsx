'use client'

export function OurJourney() {
  return (
    <section className="bg-white py-12 md:py-24 border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* ── LEFT: CONTENT ── */}
          <div className="flex-2">
            
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-3xl md:text-5xl font-black text-emerald-950 tracking-tight leading-tight mb-10"
            >
              More About Our Journey
            </h2>

            <div className="space-y-8">

              <div data-aos="fade-up" data-aos-delay="150">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">1989 — The Beginning</h4>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  SWRFHP was founded in 1989 as the Primary Health Care Essential Drug Program,
                  with a singular mandate: guarantee a constant supply of quality essential medicines
                  to health facilities across the South West Region, supported by technical assistance
                  from GTZ.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="200">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">1992 — Legal Recognition</h4>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Following the promulgation of laws bearing on freedom of association, the Fund was
                  transformed into the South West Provincial Special Fund for Health, acquiring a legal
                  personality as an Association and formalizing its role as a regional health institution.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="250">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">2010 — Legislative Milestone</h4>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  The signing of the PIG Law on December 21, 2010 and the Convention on June 10
                  established the legal framework for the Fund's next evolution. This moment marked
                  the transition from a provincial association to a nationally recognized entity of
                  public interest.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="300">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">2013 — Present Day</h4>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Through Prime Ministerial Decree of January 21, 2013, SWRFHP was officially
                  constituted as a Public Interest Group. Today it operates across 21 health districts,
                  serving over 400 facilities and reaching a population of 1.5 million citizens across
                  the South West Region.
                </p>
              </div>

            </div>
          </div>

          {/* ── RIGHT: TALL IMAGE ── */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="200"
            className="w-full lg:w-[380px] xl:w-[440px] shrink-0"
          >
            <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-[640px] overflow-hidden">
              <img
                src="/medicine-reception.jpeg"
                alt="SWRFHP Journey"
                className="w-full h-full object-cover"
              />
              
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}