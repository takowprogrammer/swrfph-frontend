'use client'

import React from 'react'
import { Pill, Briefcase, Handshake, HeartPulse, CheckCircle2, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { motion } from 'framer-motion'

export function OurSections() {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

    return (
        <section id="sections" className="relative bg-white py-24 sm:py-32 overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl opacity-30 -translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-4"
                    >
                        Our Organization
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight"
                    >
                        Four Major
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Sections</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed"
                    >
                        The SWRFHP operates under four major sections designed to comprehensively serve the health needs of the South West Region.
                    </motion.p>
                </div>

                <div ref={ref} className="space-y-12">

                    {/* Section 1: PPM - Feature Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-1"
                    >
                        <div className="bg-gradient-to-br from-blue-600/95 via-blue-700/95 to-indigo-800/95 rounded-[calc(2rem-4px)] p-10 md:p-14">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl" />

                            <div className="relative z-10 flex flex-col lg:flex-row gap-12">
                                <div className="lg:w-3/5">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                                            <Pill className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="text-blue-200 text-sm font-bold uppercase tracking-wider">Section 01</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-5 tracking-tight">Pharmaceutical Products Management</h3>
                                    <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                                        The bedrock of the SWRFHP health care delivery system. It manages the entire pharmaceutical supply chain from procurement to distribution, ensuring quality medicines reach the periphery in compliance with WHO standards.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                        {[
                                            'Quality essential medicines availability',
                                            'Last Mile Delivery (LMD)',
                                            'Standard Operating Procedures',
                                            'Expired medicines management',
                                            'GPHF-MINILAB Quality Control',
                                            'Capacity building & refresher',
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2.5 text-blue-100 text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="lg:w-2/5 space-y-4">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                            <HeartPulse className="w-4 h-4 text-emerald-400" />
                                            Priority Disease Management
                                        </h4>
                                        <p className="text-blue-200 text-sm leading-relaxed">Complete pharmaceutical support for treating HIV/AIDS, Malaria, Tuberculosis and NTDs through free supplies and strict inventory control.</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                            Quality Assurance
                                        </h4>
                                        <p className="text-blue-200 text-sm leading-relaxed">Systematic verification against falsified medicines ensures patient safety. The GPHF-MINILAB donated by DIFAEM enables rapid drug quality verification.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Sections 2 & 3 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group relative bg-white rounded-3xl p-10 border border-gray-100 hover:shadow-xl transition-all duration-500"
                        >
                            <div className="absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-100">
                                    <Briefcase className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-emerald-500 text-sm font-bold uppercase tracking-wider">Section 02</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Administration & Finance</h3>
                            <p className="text-gray-500 leading-relaxed">
                                This section manages the financial health and operational efficiency of the SWRFHP by handling budgeting, accounting, procurement, and Human Resources. It ensures smooth operations through tasks like financial reporting, fixed asset management, payroll, and compliance. It also coordinates to ensure external audits run smoothly.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group relative bg-white rounded-3xl p-10 border border-gray-100 hover:shadow-xl transition-all duration-500"
                        >
                            <div className="absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-100">
                                    <Handshake className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-amber-500 text-sm font-bold uppercase tracking-wider">Section 03</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership & Health Promotion</h3>
                            <p className="text-gray-500 leading-relaxed mb-6">
                                Focuses on strengthening the health care ecosystem through comprehensive training, especially for dialogue structure members.
                            </p>
                            <div className="space-y-3">
                                {[
                                    'Sensitization on priority health programs',
                                    'Multi-sectorial partnerships (Regional Assembly, Univ Buea)',
                                    'Production & distribution of communication materials',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                                        <ArrowRight className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Section 4: UHC */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 border border-rose-100 p-10 md:p-14"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/50 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <div className="flex flex-col lg:flex-row gap-12">
                                <div className="lg:w-2/5">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-lg shadow-rose-200">
                                            <HeartPulse className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="text-rose-500 text-sm font-bold uppercase tracking-wider">Section 04</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 tracking-tight">Universal Health Coverage</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        A health insurance scheme which ensures that no one is left behind in accessing quality health services without facing financial hardship.
                                    </p>
                                </div>
                                <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {[
                                        {
                                            title: 'Children 0-5 Years',
                                            description: 'Free medical consultation and treatment for simple or severe malaria in public health facilities.',
                                            accent: 'border-l-rose-400',
                                        },
                                        {
                                            title: 'Maternal & Child Health',
                                            description: 'Health Voucher system (6,000 FCFA) covering 4 antenatal visits, safe delivery, and postnatal care for 42 days.',
                                            accent: 'border-l-pink-400',
                                        },
                                        {
                                            title: 'Hemodialysis Services',
                                            description: '97% treatment cost reduction (15,000 FCFA vs 520,000 FCFA) at Buea Regional Hospital Annex.',
                                            accent: 'border-l-orange-400',
                                        },
                                        {
                                            title: 'HIV/AIDS & TB',
                                            description: 'Free comprehensive care for all persons living with HIV/AIDS and Tuberculosis patients at no cost.',
                                            accent: 'border-l-red-400',
                                        },
                                    ].map((card, i) => (
                                        <motion.div
                                            key={card.title}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className={`bg-white rounded-xl p-6 shadow-sm border-l-4 ${card.accent} hover:shadow-lg transition-all duration-300`}
                                        >
                                            <h4 className="font-bold text-gray-900 mb-2 text-sm">{card.title}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
