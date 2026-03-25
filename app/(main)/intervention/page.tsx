'use client'

import React from 'react'
import Image from 'next/image'
import { Activity, Globe, HeartHandshake, Package, ShieldCheck, Stethoscope, Users, Baby, Building } from 'lucide-react'
import { motion } from 'framer-motion'

const interventions = [
    {
        title: 'Collaboration',
        description: 'Collaborate with technical and financial partners in the execution of health promotion activities such as UN Agencies, GIZ, GLOBAL FUND, CHEMONICS, CAMNAFAW, CARE, DWB, CBCHS, PCCHS and other community-Based Organizations.',
        icon: HeartHandshake,
        gradient: 'from-brand-blue-500 to-brand-blue-600',
        glow: 'group-hover:shadow-brand-blue-200'
    },
    {
        title: 'Health Financing',
        description: 'Health financing through Universal Health Coverage aimed at strengthening of the health system.',
        icon: ShieldCheck,
        gradient: 'from-brand-green-500 to-brand-green-600',
        glow: 'group-hover:shadow-brand-green-200'
    },
    {
        title: 'Community Participation',
        description: 'Community participation with emphasis on dialogue structures.',
        icon: Users,
        gradient: 'from-brand-blue-600 to-brand-blue-700',
        glow: 'group-hover:shadow-brand-blue-200'
    },
    {
        title: 'Essential Medicines',
        description: 'Management and distribution of essential medicines for all public health structures and commodities for priority health programs including HIV, Tuberculosis, NTDs, Reproductive Health, COVID-19.',
        icon: Package,
        gradient: 'from-brand-red-500 to-brand-red-600',
        glow: 'group-hover:shadow-brand-red-200'
    },
    {
        title: 'Storage & Distribution',
        description: 'Organise the storage and distribution of pharmaceutical products for health facilities in all 21 health districts of the region.',
        icon: Activity,
        gradient: 'from-brand-blue-500 to-brand-blue-600',
        glow: 'group-hover:shadow-brand-blue-200'
    },
    {
        title: 'Health Education',
        description: 'Facilitate capacity building throughout the medicines supply chain system in the Region, sensitization of priority health programs.',
        icon: Stethoscope,
        gradient: 'from-brand-green-500 to-brand-green-600',
        glow: 'group-hover:shadow-brand-green-200'
    },
    {
        title: 'Maternal & Child Health',
        description: 'Contribute to the improvement of Maternal and Child Health through the provision of obstetric kits.',
        icon: Baby,
        gradient: 'from-brand-red-500 to-brand-red-600',
        glow: 'group-hover:shadow-brand-red-200'
    },
    {
        title: 'Community Sensitization',
        description: 'Promote community sensitization, and health education on various priority health issues and aspects of nutrition.',
        icon: Globe,
        gradient: 'from-brand-blue-600 to-brand-blue-800',
        glow: 'group-hover:shadow-brand-blue-200'
    }
]

const partners = [
    {
        title: 'The State',
        description: 'Includes Administrative and Local Authorities, regional actors, managers of health facilities, and representatives of district health services.',
        gradient: 'from-brand-blue-500 to-brand-blue-700',
        icon: Building,
        members: ['Ministry of Public Health', 'Administrative Council Authorities', 'Municipal Council Authorities']
    },
    {
        title: 'Technical & Financial Partners',
        description: 'International development organizations providing technical and financial support.',
        gradient: 'from-brand-green-500 to-brand-green-600',
        icon: Globe,
        members: ['GIZ (German Technical Agency)', 'AFD (French Development Agency)', 'KFW (German Development Bank)', 'World Bank']
    },
    {
        title: 'The Community',
        description: 'Community representatives from the six divisions in the South West Region as well as representatives from Confessional Health Services.',
        gradient: 'from-brand-red-500 to-brand-red-600',
        icon: Users,
        members: ['6 Divisions represented by 21 Health Districts', '3 Representatives from Confessional Health Services']
    }
]

export default function InterventionPage() {
    return (
        <div className="bg-white">
            {/* Page Hero */}
            <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/medicine-reception.jpeg"
                        alt="Health intervention in the community"
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
                        <span className="inline-block text-sm font-bold tracking-[0.2em] text-brand-green-300 uppercase mb-4">Our Focus Areas</span>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                            Areas of <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-green-300 to-brand-blue-300">Intervention</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                            Comprehensive health promotion across 8 key areas serving all 21 health districts of the South West Region.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Intervention Areas */}
            <section className="py-24 sm:py-32 relative overflow-hidden">
                <div className="absolute inset-0 health-pattern" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {interventions.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className={`group relative bg-white rounded-[2rem] p-8 border border-gray-100/80 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue-900/5 ${item.glow}`}
                            >
                                <div className={`absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-brand-blue-700 transition-colors">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="bg-slate-50 py-24 sm:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold tracking-[0.2em] text-brand-blue-600 uppercase mb-4 block">Collaboration</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Our Partners</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">The SWRFHP has three main partners that work together to enhance good governance through the General Assembly, Management Committee and the Administrative office.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={partner.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="bg-white rounded-[2rem] p-8 border border-gray-100/80 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:shadow-brand-blue-900/5 transition-all duration-500 group"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${partner.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <partner.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{partner.title}</h3>
                                <p className="text-gray-500 text-sm mb-5 leading-relaxed">{partner.description}</p>
                                <div className="space-y-2.5">
                                    {partner.members.map((member, i) => (
                                        <div key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${partner.gradient} shrink-0 mt-1.5`} />
                                            <span>{member}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
