'use client'

import React from 'react'
import Image from 'next/image'
import { Eye, Target, Star, Heart, Shield, Building, Award, Quote } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { motion } from 'framer-motion'

export function About() {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

    const timeline = [
        {
            year: '1989',
            title: 'Foundation',
            description: 'Established as the Primary Health Care Essential Drug Program to ensure a constant supply of quality essential medicines with technical assistance provided by GTZ.',
            icon: Heart,
            color: 'from-emerald-500 to-teal-500'
        },
        {
            year: '1992',
            title: 'Transformation',
            description: 'Transformed into South West Provincial Special Fund for Health with a legal personality as an Association following the promulgation of laws bearing on freedom of association.',
            icon: Shield,
            color: 'from-teal-500 to-cyan-500'
        },
        {
            year: '2013',
            title: 'Public Interest Group',
            description: 'With the signing of the PIG Law in 2010 and the Prime Ministerial Decree of January 21, 2013, the Fund was officially created as a Public Interest Group.',
            icon: Building,
            color: 'from-cyan-500 to-blue-500'
        },
        {
            year: 'Today',
            title: 'Management Setup',
            description: 'Constitutive General Assembly held to establish the Management Committee and adopt the Internal regulations and organizational chart.',
            icon: Award,
            color: 'from-blue-500 to-indigo-500'
        }
    ]

    const pillars = [
        {
            icon: Eye,
            title: 'Our Vision',
            text: 'To provide sustainable quality health care for the population of the South West Region.',
            gradient: 'from-blue-500 to-cyan-500',
            bg: 'bg-gradient-to-br from-blue-50 to-cyan-50',
            border: 'border-blue-100'
        },
        {
            icon: Target,
            title: 'Our Mission',
            text: 'To ensure better health for the population by improving on the performance of the health system in the South West Region.',
            gradient: 'from-emerald-500 to-teal-500',
            bg: 'bg-gradient-to-br from-emerald-50 to-teal-50',
            border: 'border-emerald-100'
        },
        {
            icon: Star,
            title: 'Our Values',
            text: 'Collaboration, communication, openness, respect, partnership, and outcome-focused decision making.',
            gradient: 'from-amber-500 to-orange-500',
            bg: 'bg-gradient-to-br from-amber-50 to-orange-50',
            border: 'border-amber-100'
        }
    ]

    return (
        <section id="about" className="relative bg-white py-24 sm:py-32 overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-50 rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/3" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-sm font-bold tracking-[0.2em] text-emerald-600 uppercase mb-4"
                    >
                        Who We Are
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight"
                    >
                        Serving communities
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">since 1989</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
                    >
                        The South West Regional Fund for Health Promotion - PIG is the Regional Dialogue Structure supporting the health care needs of the South West Region.
                    </motion.p>
                </div>

                {/* Vision / Mission / Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className={`relative group ${pillar.bg} p-8 rounded-3xl border ${pillar.border} card-hover`}
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <pillar.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{pillar.text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Timeline */}
                <div ref={ref} className="mb-28">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h3>
                        <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Timeline line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-300 via-teal-300 to-blue-300 hidden md:block" />

                        <div className="space-y-16">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Timeline dot */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                                        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg z-10`}>
                                            <item.icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    {/* Content card */}
                                    <div className={`w-full md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:pr-4' : 'md:pl-4'}`}>
                                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group">
                                            <span className={`inline-block text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r ${item.color} mb-2`}>{item.year}</span>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">{item.title}</h4>
                                            <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Administrator Message */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-gray-900 via-emerald-950 to-slate-900 p-1"
                >
                    <div className="relative bg-gradient-to-br from-gray-900/95 via-emerald-950/95 to-slate-900/95 backdrop-blur-xl p-10 md:p-16 rounded-[calc(2rem-4px)]">
                        {/* Decorative elements */}
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
                                        <Image
                                            src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg"
                                            alt="Administrator"
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                    </div>
                                    <div className="mt-5">
                                        <p className="font-bold text-white text-lg">Mrs. Ngondo W. Musenja</p>
                                        <p className="text-emerald-400 text-sm font-medium">Administrator</p>
                                    </div>
                                </div>

                                <div className="flex-1 space-y-5">
                                    <p className="text-gray-300 text-lg leading-relaxed font-light italic">
                                        &ldquo;Welcome to our Fund official website! As the Administrator, I am thrilled to have you explore all that our institution has to offer. This website serves as a gateway to vital health educational write up on priority health issues, community sensitization activities on various health topics and quality, affordable essential medicines.&rdquo;
                                    </p>
                                    <p className="text-gray-400 leading-relaxed">
                                        The Fund is deeply committed to ensure better health for the population by improving the performance of the health system in the South West Region.
                                    </p>
                                    <p className="text-white/80 font-medium leading-relaxed">
                                        I hope our Journey inspires you to connect with us as a valued partner. Together we can shape a brighter tomorrow and continue to ensure quality health for the people of the SWR as a premier institution of public health.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
