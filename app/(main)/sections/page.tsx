'use client'

import React from 'react'
import Image from 'next/image'
import { Pill, Briefcase, Handshake, HeartPulse, CheckCircle2, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SectionsPage() {
    return (
        <div className="bg-white">
            {/* Page Hero */}
            <div className="relative h-[65vh] min-h-[500px] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/re-stocking-medicines.jpeg"
                        alt="Restocking medicines"
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
                        <span className="inline-block text-sm font-bold tracking-[0.2em] text-brand-blue-300 uppercase mb-4">Our Organization</span>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                            Operational <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-300 to-brand-green-300">Pillars</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                            Comprehensively structured to address the diverse health needs of the South West Region.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Section 1: PPM */}
            <section className="py-24 sm:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-blue-600 via-brand-blue-700 to-brand-blue-800 p-1 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                    >
                        <div className="bg-gradient-to-br from-brand-blue-600/95 via-brand-blue-700/95 to-brand-blue-800/95 rounded-[calc(2rem-4px)] p-10 md:p-14">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue-400/10 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-blue-400/10 rounded-full blur-3xl" />

                            <div className="relative z-10 flex flex-col lg:flex-row gap-12">
                                <div className="lg:w-3/5">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                                            <Pill className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="text-blue-200 text-sm font-bold uppercase tracking-wider">Section 01</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 tracking-tight">Pharmaceutical Products Management</h2>
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
                                                <CheckCircle2 className="w-4 h-4 text-brand-green-400 shrink-0" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="lg:w-2/5 space-y-4">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                            <HeartPulse className="w-4 h-4 text-brand-green-400" />
                                            Priority Disease Management
                                        </h4>
                                        <p className="text-blue-200 text-sm leading-relaxed">Complete pharmaceutical support for treating HIV/AIDS, Malaria, Tuberculosis and NTDs through free supplies and strict inventory control.</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                                        <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-brand-green-400" />
                                            Quality Assurance
                                        </h4>
                                        <p className="text-blue-200 text-sm leading-relaxed">Systematic verification against falsified medicines ensures patient safety. The GPHF-MINILAB donated by DIFAEM enables rapid drug quality verification.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 2 & 3 */}
            <section className="bg-slate-50/50 py-24 sm:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group relative bg-white rounded-[2rem] shadow-sm p-10 border border-gray-100/80 hover:shadow-2xl hover:-translate-y-2 hover:shadow-brand-blue-900/5 transition-all duration-500"
                        >
                            <div className="absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r from-brand-green-500 to-brand-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-green-500 to-brand-green-600 flex items-center justify-center shadow-lg shadow-brand-green-100">
                                    <Briefcase className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-brand-green-500 text-sm font-bold uppercase tracking-wider">Section 02</span>
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
                            className="group relative bg-white rounded-[2rem] shadow-sm p-10 border border-gray-100/80 hover:shadow-2xl hover:-translate-y-2 hover:shadow-brand-blue-900/5 transition-all duration-500"
                        >
                            <div className="absolute top-0 left-6 right-6 h-1 rounded-b-full bg-gradient-to-r from-brand-red-500 to-brand-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-red-500 to-brand-red-600 flex items-center justify-center shadow-lg shadow-brand-red-100">
                                    <Handshake className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-brand-red-500 text-sm font-bold uppercase tracking-wider">Section 03</span>
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
                                        <ArrowRight className="w-4 h-4 text-brand-red-500 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 4: UHC */}
            <section className="py-24 sm:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-red-50 via-white to-brand-blue-50 border border-brand-red-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 p-10 md:p-14"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red-100/50 rounded-full blur-3xl" />
                        <div className="relative z-10">
                            <div className="flex flex-col lg:flex-row gap-12">
                                <div className="lg:w-2/5">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-red-500 to-brand-red-600 flex items-center justify-center shadow-lg shadow-brand-red-200">
                                            <HeartPulse className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="text-brand-red-500 text-sm font-bold uppercase tracking-wider">Section 04</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 tracking-tight">Universal Health Coverage</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        A health insurance scheme which ensures that no one is left behind in accessing quality health services without facing financial hardship.
                                    </p>
                                </div>
                                <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {[
                                        { title: 'Children 0-5 Years', description: 'Free medical consultation and treatment for simple or severe malaria in public health facilities.', accent: 'border-l-brand-red-400' },
                                        { title: 'Maternal & Child Health', description: 'Health Voucher system (6,000 FCFA) covering 4 antenatal visits, safe delivery, and postnatal care for 42 days.', accent: 'border-l-brand-blue-400' },
                                        { title: 'Hemodialysis Services', description: '97% treatment cost reduction (15,000 FCFA vs 520,000 FCFA) at Buea Regional Hospital Annex.', accent: 'border-l-brand-green-400' },
                                        { title: 'HIV/AIDS & TB', description: 'Free comprehensive care for all persons living with HIV/AIDS and Tuberculosis patients at no cost.', accent: 'border-l-brand-red-600' },
                                    ].map((card, i) => (
                                        <motion.div
                                            key={card.title}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className={`bg-white rounded-2xl p-6 shadow-sm border-l-4 ${card.accent} hover:shadow-xl hover:-translate-y-1 hover:shadow-brand-blue-900/5 transition-all duration-300`}
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
            </section>
        </div>
    )
}
