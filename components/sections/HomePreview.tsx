'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Heart, Shield, Users, Pill, Eye, Target, Star, Briefcase, HeartPulse } from 'lucide-react'
import { motion } from 'framer-motion'

export function HomePreview() {
    const sections = [
        {
            tag: 'About Us',
            title: 'Serving Communities Since 1989',
            description: 'From the Primary Health Care Essential Drug Program to a full Public Interest Group, discover our journey of over 35 years serving the South West Region of Cameroon.',
            href: '/about',
            gradient: 'from-brand-green-500 to-brand-green-600',
            icon: Heart,
            features: ['Our Vision & Mission', 'Historical Timeline', 'Administrator\'s Message']
        },
        {
            tag: 'Intervention Areas',
            title: 'Comprehensive Health Impact',
            description: 'Explore our 8 key areas of intervention spanning essential medicines, community health education, maternal care, and multi-partner collaboration.',
            href: '/intervention',
            gradient: 'from-brand-blue-500 to-brand-blue-700',
            icon: Shield,
            features: ['Essential Medicines', 'Health Financing', 'Community Sensitization']
        },
        {
            tag: 'Operational Pillars',
            title: 'Four Major Operational Pillars',
            description: 'The SWRFHP operates under four major sections: Pharmaceutical Products Management, Administration & Finance, Partnership & Health Promotion, and Universal Health Coverage.',
            href: '/sections',
            gradient: 'from-brand-blue-600 to-brand-blue-800',
            icon: Pill,
            features: ['Pharmaceutical Management', 'Universal Health Coverage', 'Administration & Finance']
        },
        {
            tag: 'Our Team',
            title: 'Meet the Dedicated Professionals',
            description: 'A team of dedicated professionals committed to promoting health and wellness. Learn about our Administrator and Heads of Sections driving change.',
            href: '/team',
            gradient: 'from-brand-red-500 to-brand-red-600',
            icon: Users,
            features: ['Leadership', 'Department Heads', 'Our Commitment']
        }
    ]

    return (
        <section className="bg-slate-50/50 py-24 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-sm font-bold tracking-[0.2em] text-brand-green-600 uppercase mb-4"
                    >
                        Explore
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight"
                    >
                        Discover
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-600 to-brand-green-500"> Our Work</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
                    >
                        Learn about our mission, explore our programs, and discover how we&apos;re making a difference in the South West Region.
                    </motion.p>
                </div>

                {/* Section Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.tag}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={section.href} className="group block">
                                <div className="relative bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-brand-blue-900/5 overflow-hidden h-full">
                                    {/* Gradient accent */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-lg shadow-${section.gradient.split('-')[1]}-200/50 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                        <section.icon className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Tag */}
                                    <span className={`text-xs font-bold uppercase tracking-[0.15em] bg-clip-text text-transparent bg-gradient-to-r ${section.gradient}`}>
                                        {section.tag}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-brand-blue-700 transition-colors">
                                        {section.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-500 leading-relaxed mb-6 text-sm">
                                        {section.description}
                                    </p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {section.features.map((feature) => (
                                            <span key={feature} className="text-xs px-3 py-1.5 rounded-full bg-gray-50 text-gray-600 font-medium">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center text-brand-blue-600 font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                                        <span>Explore</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
