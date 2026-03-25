'use client'

import React from 'react'
import { Activity, Globe, HeartHandshake, Package, ShieldCheck, Stethoscope, Users, Baby } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { motion } from 'framer-motion'

export function InterventionAreas() {
    const { ref: partnerRef, isVisible: isPartnerVisible } = useScrollAnimation<HTMLDivElement>()

    const interventions = [
        {
            title: 'Collaboration',
            description: 'Collaborate with technical and financial partners in the execution of health promotion activities such as UN Agencies, GIZ, GLOBAL FUND, CHEMONICS, CAMNAFAW, CARE, DWB, CBCHS, PCCHS and other community-Based Organizations.',
            icon: HeartHandshake,
            gradient: 'from-blue-500 to-indigo-600',
            glow: 'group-hover:shadow-blue-200'
        },
        {
            title: 'Health Financing',
            description: 'Health financing through Universal Health Coverage aimed at strengthening of the health system.',
            icon: ShieldCheck,
            gradient: 'from-emerald-500 to-teal-600',
            glow: 'group-hover:shadow-emerald-200'
        },
        {
            title: 'Community Participation',
            description: 'Community participation with emphasis on dialogue structures.',
            icon: Users,
            gradient: 'from-amber-500 to-orange-600',
            glow: 'group-hover:shadow-amber-200'
        },
        {
            title: 'Essential Medicines',
            description: 'Management and distribution of essential medicines for all public health structures and commodities for priority health programs including HIV, Tuberculosis, NTDs, Reproductive Health, COVID-19.',
            icon: Package,
            gradient: 'from-purple-500 to-violet-600',
            glow: 'group-hover:shadow-purple-200'
        },
        {
            title: 'Storage & Distribution',
            description: 'Organise the storage and distribution of pharmaceutical products for health facilities in all 21 health districts of the region.',
            icon: Activity,
            gradient: 'from-rose-500 to-pink-600',
            glow: 'group-hover:shadow-rose-200'
        },
        {
            title: 'Health Education',
            description: 'Facilitate capacity building throughout the medicines supply chain system in the Region, sensitization of priority health programs.',
            icon: Stethoscope,
            gradient: 'from-teal-500 to-cyan-600',
            glow: 'group-hover:shadow-teal-200'
        },
        {
            title: 'Maternal & Child Health',
            description: 'Contribute to the improvement of Maternal and Child Health through the provision of obstetric kits.',
            icon: Baby,
            gradient: 'from-pink-500 to-rose-600',
            glow: 'group-hover:shadow-pink-200'
        },
        {
            title: 'Community Sensitization',
            description: 'Promote community sensitization, and health education on various priority health issues and aspects of nutrition.',
            icon: Globe,
            gradient: 'from-indigo-500 to-blue-600',
            glow: 'group-hover:shadow-indigo-200'
        }
    ]

    const partners = [
        {
            title: 'The State',
            description: 'Includes Administrative and Local Authorities, regional actors, managers of health facilities, and representatives of district health services.',
            gradient: 'from-emerald-500 to-green-600',
            icon: '🏛️'
        },
        {
            title: 'Technical & Financial Partners',
            description: 'GIZ, AFD, KFW, World Bank and other international organizations.',
            gradient: 'from-blue-500 to-cyan-600',
            icon: '🌍'
        },
        {
            title: 'The Community',
            description: 'Community representatives from the six divisions in the South West Region as well as representatives from Confessional Health Services.',
            gradient: 'from-amber-500 to-orange-600',
            icon: '🤝'
        }
    ]

    return (
        <section id="areas" className="relative bg-gray-50 py-16 sm:py-20 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 health-pattern" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-sm font-bold tracking-[0.2em] text-emerald-600 uppercase mb-4"
                    >
                        Our Focus Areas
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight"
                    >
                        Areas of
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500">Intervention</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"
                    />
                </div>

                {/* Intervention Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
                    {interventions.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className={`group relative bg-white rounded-2xl p-7 border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${item.glow}`}
                        >
                            {/* Gradient top bar */}
                            <div className={`absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                <item.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Partners section */}
                <div id="partners" ref={partnerRef}>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative overflow-hidden rounded-[2rem] bg-white p-10 md:p-16 shadow-sm border border-gray-100"
                    >
                        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-50 rounded-full blur-3xl opacity-60" />
                        <div className="absolute bottom-0 left-0 w-60 h-60 bg-cyan-50 rounded-full blur-3xl opacity-60" />

                        <div className="relative z-10">
                            <div className="text-center mb-14">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Our Partners</h2>
                                <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">The SWRFHP has three main partners that work together to enhance good governance through the General Assembly, Management Committee and the Administrative office.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {partners.map((partner, index) => (
                                    <motion.div
                                        key={partner.title}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 }}
                                        className="text-center group"
                                    >
                                        <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-300">{partner.icon}</div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{partner.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{partner.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
