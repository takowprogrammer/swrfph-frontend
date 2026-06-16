import React from 'react';
import {motion} from 'framer-motion';

const VisionIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      fill="currentColor"
      fillOpacity={0.1}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v6M9 12h6"
      strokeWidth={1.5}
      opacity={0.6}
    />
  </svg>
);

const MissionIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      fill="currentColor"
      fillOpacity={0.1}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 12l3 3 4-6 3 3"
      strokeWidth={2}
    />
  </svg>
);

const ValuesIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
      fill="currentColor"
      fillOpacity={0.1}
    />
  </svg>
);


const Pillars = () => {

    const pillars = [
      {
        icon: VisionIcon,
        title: "Our Vision",
        text: "To provide sustainable quality health care for the population of the South West Region.",
        gradient: "from-brand-blue-500 to-brand-blue-600",
        bg: "bg-gradient-to-br from-brand-blue-50 to-white",
        border: "border-brand-blue-100",
      },
      {
        icon: MissionIcon,
        title: "Our Mission",
        text: "To ensure better health for the population by improving on the performance of the health system in the South West Region.",
        gradient: "from-brand-green-500 to-brand-green-600",
        bg: "bg-gradient-to-br from-brand-green-50 to-white",
        border: "border-brand-green-100",
      },
      {
        icon: ValuesIcon,
        title: "Our Values",
        text: "Collaboration, communication, openness, respect, partnership, and outcome-focused decision making.",
        gradient: "from-brand-red-500 to-brand-red-600",
        bg: "bg-gradient-to-br from-brand-red-50 to-white",
        border: "border-brand-red-100",
      },
    ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-slate-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <span className="text-sm font-bold tracking-[0.2em] text-brand-green-500 uppercase mb-4 block">
              Strategic Foundation
            </span>
             <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-3xl md:text-5xl font-black text-emerald-950 tracking-tight leading-tight mb-10"
            >
              Our Guiding Principles
            </h2>
            {/* <div className="w-20 h-1 bg-gradient-to-r from-brand-green-500 to-brand-blue-500 mx-auto rounded-full" /> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative p-8  shadow-sm border bg-white border-slate-400/90  `}
              >
                <div
                  className={`w-14 h-14  bg-amber-500 flex items-center justify-center mb-6 transition-transform duration-300`}
                >
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{pillar.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Core Values Grid */}
          {/* <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-blue-500 to-brand-green-500 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 hover:shadow-brand-blue-900/5 transition-all duration-500 group"
              >
                <span className="absolute -top-6 -right-2 text-[8rem] font-black text-slate-50 opacity-80 z-0 select-none group-hover:text-brand-green-50 transition-colors duration-500">
                  {value.number}
                </span>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-green-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div> */}
        </div>
      </section>
  )
}

export default Pillars
