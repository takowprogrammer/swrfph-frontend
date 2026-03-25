'use client'

import React from 'react'
import Image from 'next/image'
import { Quote } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { motion } from 'framer-motion'

const VisionIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" fill="currentColor" fillOpacity={0.1} />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6M9 12h6" strokeWidth={1.5} opacity={0.6} />
  </svg>
)

const MissionIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" fill="currentColor" fillOpacity={0.1} />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3 3 4-6 3 3" strokeWidth={2} />
  </svg>
)

const ValuesIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" fill="currentColor" fillOpacity={0.1} />
  </svg>
)

const timeline = [
    {
        year: '1989',
        title: 'Foundation',
        description: 'Established as the Primary Health Care Essential Drug Program to ensure a constant supply of quality essential medicines with technical assistance provided by GTZ.',
        step: '01',
        color: 'from-brand-green-500 to-brand-green-600'
    },
    {
        year: '1992',
        title: 'Transformation',
        description: 'Transformed into South West Provincial Special Fund for Health with a legal personality as an Association following the promulgation of laws bearing on freedom of association.',
        step: '02',
        color: 'from-brand-blue-400 to-brand-blue-500'
    },
    {
        year: '2010',
        title: 'PIG Law Signed',
        description: 'Signing of the PIG Law on December 21, 2010, and Convention on June 10, 2010, establishing the legal framework for the transformation of the Fund.',
        step: '03',
        color: 'from-brand-blue-500 to-brand-blue-600'
    },
    {
        year: '2013',
        title: 'Public Interest Group',
        description: 'Fund officially created as a Public Interest Group through Prime Ministerial Decree of January 21, 2013. Constitutive General Assembly held to establish the Management Committee.',
        step: '04',
        color: 'from-brand-blue-600 to-brand-blue-800'
    }
]

const pillars = [
    {
        icon: VisionIcon,
        title: 'Our Vision',
        text: 'To provide sustainable quality health care for the population of the South West Region.',
        gradient: 'from-brand-blue-500 to-brand-blue-600',
        bg: 'bg-gradient-to-br from-brand-blue-50 to-white',
        border: 'border-brand-blue-100'
    },
    {
        icon: MissionIcon,
        title: 'Our Mission',
        text: 'To ensure better health for the population by improving on the performance of the health system in the South West Region.',
        gradient: 'from-brand-green-500 to-brand-green-600',
        bg: 'bg-gradient-to-br from-brand-green-50 to-white',
        border: 'border-brand-green-100'
    },
    {
        icon: ValuesIcon,
        title: 'Our Values',
        text: 'Collaboration, communication, openness, respect, partnership, and outcome-focused decision making.',
        gradient: 'from-brand-red-500 to-brand-red-600',
        bg: 'bg-gradient-to-br from-brand-red-50 to-white',
        border: 'border-brand-red-100'
    }
]

const values = [
    { number: '01', title: 'Compassion', description: 'We approach every challenge with empathy and understanding, putting the needs of patients and healthcare providers first.' },
    { number: '02', title: 'Excellence', description: 'We maintain the highest standards in everything we do, from medicine quality to service delivery.' },
    { number: '03', title: 'Integrity', description: 'We operate with transparency, honesty, and accountability in all our interactions and decisions.' },
    { number: '04', title: 'Partnership', description: 'We work closely with healthcare facilities, communities, and partners to achieve our shared goals.' },
]

const governingOrgans = [
    {
        title: 'The General Assembly',
        description: 'The highest decision-making body of SWRFHP, responsible for strategic oversight, policy direction, and major organizational decisions.',
    },
    {
        title: 'Management Committee',
        description: 'Oversees day-to-day operations, implementation of policies, and coordination of health programs across the South West Region.',
    },
    {
        title: 'The Administrator',
        description: 'Chief executive officer responsible for overall leadership, strategic implementation, and representation of SWRFHP.',
    }
]

export default function AboutPage() {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

    return (
        <div className="bg-white">
            {/* Page Hero */}
            <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/front-view-of-office.jpeg"
                        alt="SWRFHP Front View"
                        fill
                        className="object-cover brightness-[0.7]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-950/60 via-brand-blue-900/40 to-brand-green-950/60" />
                </div>
                <div className="relative h-full flex items-center justify-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block text-sm font-bold tracking-[0.2em] text-brand-green-300 uppercase mb-4">Who We Are</span>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-green-300 to-brand-blue-300">SWRFHP</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                            Serving the South West Region of Cameroon since 1989 through comprehensive health promotion and essential medicine distribution.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Vision / Mission / Values Cards */}
            <section className="py-16 sm:py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/3" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold tracking-[0.2em] text-brand-green-500 uppercase mb-4 block">Strategic Foundation</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue-950 tracking-tight mb-4">Our Guiding Principles</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-brand-green-500 to-brand-blue-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className={`relative group ${pillar.bg} p-8 rounded-[2rem] shadow-sm border ${pillar.border} card-hover hover:shadow-brand-blue-900/5`}
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <pillar.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{pillar.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Core Values Grid */}
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
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
                                {/* Giant Background Number */}
                                <span className="absolute -top-6 -right-2 text-[8rem] font-black text-slate-50 opacity-80 z-0 select-none group-hover:text-brand-green-50 transition-colors duration-500">
                                    {value.number}
                                </span>
                                
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-green-600 transition-colors">{value.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="bg-slate-50/50 py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold tracking-[0.2em] text-emerald-600 uppercase mb-4 block">Our History</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Our Journey</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
                    </div>

                    <div ref={ref} className="relative max-w-4xl mx-auto">
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-300 via-teal-300 to-blue-300 hidden md:block" />
                        <div className="space-y-8">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                                        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg z-10`}>
                                            <span className="text-xl font-black text-white">{item.step}</span>
                                        </div>
                                    </div>
                                    <div className={`w-full md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:pr-4' : 'md:pl-4'}`}>
                                        <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:shadow-brand-blue-900/5 transition-all duration-500 border border-gray-100/80 group">
                                            <span className={`inline-block text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r ${item.color} mb-1`}>{item.year}</span>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">{item.title}</h4>
                                            <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Administrator Message */}
            <section className="py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-gray-900 via-emerald-950 to-slate-900 p-1"
                    >
                        <div className="relative bg-gradient-to-br from-gray-900/95 via-emerald-950/95 to-slate-900/95 backdrop-blur-xl p-10 md:p-16 rounded-[calc(2rem-4px)]">
                            <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
                            <Quote className="absolute top-10 right-10 w-32 h-32 text-white/[0.03] rotate-180" />

                            <div className="relative z-10">
                                <div className="text-center mb-12">
                                    <span className="text-sm font-bold tracking-[0.2em] text-emerald-400 uppercase">Welcome Message</span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mt-3">From the Administrator</h3>
                                </div>
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                                    <div className="flex-shrink-0 text-center">
                                        <div className="w-44 h-44 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 relative group">
                                            <Image src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg" alt="Administrator" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                        </div>
                                        <div className="mt-5">
                                            <p className="font-bold text-white text-lg">Mrs. Ngondo W. Musenja</p>
                                            <p className="text-emerald-400 text-sm font-medium">Administrator</p>
                                        </div>
                                    </div>
                                    <div className="flex-1 space-y-5">
                                        <p className="text-gray-300 text-lg leading-relaxed font-light italic">
                                            &ldquo;Welcome to our Fund official website! As the Administrator, I am thrilled to have you explore all that our institution has to offer. This website serves as a gateway to vital health educational resources, community sensitization activities and quality, affordable essential medicines.&rdquo;
                                        </p>
                                        <p className="text-gray-400 leading-relaxed">
                                            The Fund is deeply committed to ensure better health for the population by improving the performance of the health system in the South West Region.
                                        </p>
                                        <p className="text-white/80 font-medium leading-relaxed">
                                            I hope our journey inspires you to connect with us as a valued partner. Together we can shape a brighter tomorrow and continue to ensure quality health for the people of the SWR as a premier institution of public health.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Governing Organs */}
            <section className="bg-slate-50 py-24 sm:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Governing Organs</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">The organizational structure that ensures effective governance and management of the Fund.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {governingOrgans.map((organ, index) => (
                            <motion.div
                                key={organ.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100/80 hover:shadow-2xl hover:-translate-y-2 hover:shadow-brand-blue-900/5 transition-all duration-500"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{organ.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-sm">{organ.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}