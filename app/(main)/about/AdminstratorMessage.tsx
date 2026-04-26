'use client'

export function AdministratorMessage() {
  return (
    <section className="max-w-7xl mx-auto">
    <section className="bg-emerald-900 overflow-hidden md:mx-8">
      <div className="container">
        <div className="flex flex-col lg:flex-row">

          {/* ── LEFT: Photo — flush, full height ── */}
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="lg:w-[340px] xl:w-[400px] shrink-0 lg:self-stretch"
          >
            <div className="relative h-[300px] lg:h-full min-h-[400px] overflow-hidden">
              <img
                src="/admin.png"
                alt="Mrs. Ngondo W. Musenja"
                className="w-full h-full object-cover object-top grayscale opacity-60 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-emerald-900 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 to-transparent lg:hidden" />
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div className="flex-1 py-16 md:py-20 lg:pl-12 xl:pl-16 flex flex-col justify-center">

            <p
              data-aos="fade-up"
              className="text-[10px] font-black text-amber-400 uppercase tracking-[0.25em] mb-6"
            >
              From the Administrator
            </p>

            {/* <span
              data-aos="fade-up"
              data-aos-delay="50"
              className="text-[80px] md:text-[100px] font-black text-emerald-700 leading-none mb-2 select-none"
            >
              ``
            </span> */}

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-white text-xl md:text-2xl font-bold leading-relaxed tracking-tight max-w-2xl mb-8"
            >
              Our commitment is to ensure that every citizen in the South West Region has access to quality, affordable healthcare no matter how remote their community.
            </p>

            <div data-aos="fade-up" data-aos-delay="200" className="w-12 h-0.5 bg-amber-400 mb-6" />

            <div data-aos="fade-up" data-aos-delay="250">
              <p className="font-black text-white text-sm tracking-tight">Mrs. Ngondo W. Musenja</p>
              <p className="text-[10px] font-bold text-emerald-400/60 uppercase tracking-[0.2em] mt-1">Administrator, SWRFHP</p>
            </div>

          </div>
        </div>
      </div>
    </section>
    </section>
  )
}