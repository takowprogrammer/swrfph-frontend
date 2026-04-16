"use client";

import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 items-start">
          {/* LEFT: Image - AOS Zoom In */}
          <div
            className="w-full lg:w-1/2 order-2 md:order-1"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="800"
          >
            <div className="relative aspect-video lg:aspect-[4/3] overflow-hidden">
              <img
                src="/medicine-reception.jpeg"
                alt="Our Operations"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: Content Area - Smooth Fade Up */}
          <div
            className="w-full lg:w-1/2 order-1 md:order-2"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="max-w-xl">
              {/* Title */}
              <h2
                className="text-3xl lg:text-4xl font-bold text-emerald-950/90 mb-4 leading-tight"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="300"
              >
                Our Commitment to Regional Health
              </h2>

              {/* 1 Line Para */}
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
                className="text-gray-600 font-semibold text-lg mb-6 leading-snug"
              >
                Ensuring quality medicine is available to every citizen in the
                South West.
              </p>

              {/* Short Description */}
              <p
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-delay="500"
                className="text-slate-600 text-base leading-relaxed mb-4 md:mb-6"
              >
                Since 1989, we have managed the procurement and distribution of
                essential medical supplies. We focus on transparency, safety,
                and reaching the most remote areas of our 21 health districts.
              </p>

              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
                className="text-slate-600 text-base leading-relaxed mb-4 md:mb-6"
              >
                Our operations are built on three pillars: strategic
                procurement, cold-chain warehousing, and last-mile distribution.
                We are committed to improving healthcare access and outcomes
                across the South West region.
              </p>

              {/* Learn More Final Link */}
              <a
                href="/about"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="700"
                className="inline-flex items-center gap-2 text-[#064E3B] font-bold text-sm border-b-2 border-transparent border-amber-500 pb-1 transition-all"
              >
                Learn more about our mission
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
