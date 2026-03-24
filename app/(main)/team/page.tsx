'use client'

import React from 'react'
import Image from 'next/image'
import { Briefcase, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function TeamPage() {
    return (
        <div className="bg-white">
            {/* Page Hero */}
            <div className="relative h-[65vh] min-h-[500px] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/front-view-of-office.jpeg"
                        alt="SWRFHP Office"
                        fill
                        className="object-cover brightness-[0.7]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-red-950/60 via-brand-blue-900/40 to-brand-red-900/60" />
                </div>
                <div className="relative h-full flex items-center justify-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block text-sm font-bold tracking-[0.2em] text-brand-red-300 uppercase mb-4">Leadership</span>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                            Meet Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-red-300 to-brand-blue-300">Team</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                            A team of dedicated professionals committed to promoting health and wellness in the South West Region.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Administrator */}
            <section className="py-24 sm:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative overflow-hidden rounded-[2rem] bg-white p-1 shadow-sm border border-gray-100/80 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-brand-blue-900/5"
                    >
                        <div className="bg-white rounded-[calc(2rem-4px)] p-10 md:p-14">
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/3 flex flex-col items-center text-center shrink-0">
                                    <div className="relative group">
                                        <div className="absolute -inset-2 bg-gradient-to-br from-brand-green-400 to-brand-blue-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                                        <div className="relative w-44 h-44 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                                            <Image
                                                src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg"
                                                alt="Mrs. Ngondo W. Musenja"
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-extrabold text-gray-900 mt-6">Mrs. Ngondo W. Musenja</h3>
                                    <p className="text-brand-green-600 font-semibold text-sm uppercase tracking-wider mt-1">The Administrator</p>
                                </div>
                                <div className="md:w-2/3 space-y-4">
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Ngondo W. Musenja has been instrumental in leading the South West Regional Fund for Health Promotion team with a crucial role to promote health and wellness across the region.
                                    </p>
                                    <p className="text-gray-500 leading-relaxed">
                                        With proven experience in business administration and public health, she has led in line with the norms set by the government while maintaining a conducive atmosphere for work.
                                    </p>
                                    <p className="text-gray-500 leading-relaxed">
                                        Amidst the challenges encountered as a result of the ongoing crisis, she has managed to lead the team through and recorded tremendous successes especially in the implementation of Universal Health Coverage Phase 1, community participation and in the management and distribution of medicines.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Heads of Sections */}
            <section className="bg-slate-50 py-24 sm:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Heads of Sections</h2>
                        <p className="text-gray-500 max-w-xl mx-auto text-sm">Overseeing major operational activities, ensuring efficient coordination and delivery of services across all departments.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100/80 hover:shadow-2xl hover:-translate-y-2 hover:shadow-brand-blue-900/5 transition-all duration-500 text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue-500 to-brand-blue-700 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-blue-100 group-hover:scale-110 transition-transform">
                                <Briefcase className="w-7 h-7 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Administration & Finance</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Responsible for the Fund&apos;s administrative, financial, accounting and personnel as well as the management of the Fund&apos;s property.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100/80 hover:shadow-2xl hover:-translate-y-2 hover:shadow-brand-blue-900/5 transition-all duration-500 text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-green-500 to-brand-green-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-green-100 group-hover:scale-110 transition-transform">
                                <Users className="w-7 h-7 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Partnership & Health Promotion</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Coordinates health promotion activities, dialogue structure interactions, and relationships with technical/financial partners.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}
