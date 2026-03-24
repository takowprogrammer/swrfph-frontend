'use client'

import React from 'react'
import Image from 'next/image'
import { Briefcase, Users } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { motion } from 'framer-motion'

export function Team() {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

    return (
        <section id="team" className="relative bg-gray-50 py-24 sm:py-32 overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-50 rounded-full blur-3xl opacity-50" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-sm font-bold tracking-[0.2em] text-emerald-600 uppercase mb-4"
                    >
                        Leadership
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight"
                    >
                        Meet Our
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">Dedicated Team</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-500 leading-relaxed"
                    >
                        A team of dedicated professionals committed to promoting health and wellness in the South West Region of Cameroon.
                    </motion.p>
                </div>

                <div ref={ref} className="max-w-5xl mx-auto">

                    {/* Administrator */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative overflow-hidden rounded-[2rem] bg-white p-1 shadow-xl shadow-gray-100 border border-gray-100 mb-16"
                    >
                        <div className="bg-white rounded-[calc(2rem-4px)] p-10 md:p-14">
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="md:w-1/3 flex flex-col items-center text-center shrink-0">
                                    <div className="relative group">
                                        <div className="absolute -inset-2 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
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
                                    <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mt-1">The Administrator</p>
                                </div>
                                <div className="md:w-2/3 space-y-4">
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Ngondo W. Musenja has been instrumental in leading the South West Regional Fund for Health Promotion team with a crucial role to promote health and wellness across the region.
                                    </p>
                                    <p className="text-gray-500 leading-relaxed">
                                        With proven experience in business administration and public health, she has led in line with the norms set by the government while maintaining a conducive atmosphere for work.
                                    </p>
                                    <p className="text-gray-500 leading-relaxed">
                                        Amidst the challenges encountered, she has recorded tremendous successes especially in the implementation of Universal Health Coverage Phase 1, community participation and in the management and distribution of medicines.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Heads of Sections */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="text-center mb-12">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Heads of Sections</h3>
                            <p className="text-gray-500 max-w-xl mx-auto text-sm">Overseeing major operational activities, ensuring efficient coordination and delivery of services across all departments.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-500 text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-100 group-hover:scale-110 transition-transform">
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
                                className="group bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-500 text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-100 group-hover:scale-110 transition-transform">
                                    <Users className="w-7 h-7 text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">Partnership & Health Promotion</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Coordinates health promotion activities, dialogue structure interactions, and relationships with technical/financial partners.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
