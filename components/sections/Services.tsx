'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight, Heart, Shield, Users, Activity, Globe, Stethoscope, Zap } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Link from 'next/link'

export function Services() {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

    const programs = [
        {
            title: 'Reproductive Health',
            description: 'Comprehensive reproductive health services including obstetric kits and health voucher mechanisms to improve maternal and child health outcomes.',
            imageUrl: 'https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg',
            icon: Heart,
            progress: 94,
            color: 'from-pink-500 to-rose-600',
            bgColor: 'bg-pink-50',
            textColor: 'text-pink-700'
        },
        {
            title: 'Tuberculosis Control',
            description: 'TB prevention, diagnosis, and treatment programs with quality medicines and technical support across all health districts.',
            imageUrl: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
            icon: Shield,
            progress: 89,
            color: 'from-blue-500 to-cyan-600',
            bgColor: 'bg-blue-50',
            textColor: 'text-blue-700'
        },
        {
            title: 'HIV/AIDS Programs',
            description: 'Comprehensive HIV prevention, treatment, and care services with essential medicines and community support programs.',
            imageUrl: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
            icon: Activity,
            progress: 91,
            color: 'from-red-500 to-pink-600',
            bgColor: 'bg-red-50',
            textColor: 'text-red-700'
        },
        {
            title: 'Malaria Prevention',
            description: 'Malaria control initiatives including distribution of preventive medicines, mosquito nets, and community education programs.',
            imageUrl: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
            icon: Globe,
            progress: 87,
            color: 'from-green-500 to-emerald-600',
            bgColor: 'bg-green-50',
            textColor: 'text-green-700'
        },
        {
            title: 'Neglected Tropical Diseases',
            description: 'NTD control and elimination programs focusing on diseases like schistosomiasis, lymphatic filariasis, and onchocerciasis.',
            imageUrl: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
            icon: Stethoscope,
            progress: 85,
            color: 'from-purple-500 to-violet-600',
            bgColor: 'bg-purple-50',
            textColor: 'text-purple-700'
        },
        {
            title: 'Universal Health Coverage',
            description: 'Implementation of UHC Phase 1 including consultation services for children 0-5 years, HIV user fees, and TB user fees.',
            imageUrl: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
            icon: Zap,
            progress: 92,
            color: 'from-orange-500 to-amber-600',
            bgColor: 'bg-orange-50',
            textColor: 'text-orange-700'
        },
    ]

    return (
        <section id="programs" className="bg-gradient-to-br from-gray-50 via-white to-green-50 py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
                        <Shield className="w-4 h-4 mr-2" />
                        Our Health Programs
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        Transforming Health in the
                        <span className="block text-green-600">South West Region</span>
                    </h2>
                    <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
                        Since 1989, we have been dedicated to improving health outcomes through comprehensive programs
                        that address the most critical health challenges in our region.
                    </p>
                </div>

                {/* Programs Grid */}
                <div ref={ref} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {programs.map((program, index) => (
                        <div
                            key={program.title}
                            className={`group overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-700 transform hover:scale-105 hover:shadow-2xl border border-gray-100 ${isVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-8 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Image Container */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={program.imageUrl}
                                    alt={program.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                {/* Icon Overlay */}
                                <div className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                    {React.createElement(program.icon, {
                                        className: `h-6 w-6 ${program.textColor}`
                                    })}
                                </div>

                                {/* Progress Badge */}
                                <div className="absolute bottom-6 left-6 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800">
                                    {program.progress}% Success Rate
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                                    {program.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {program.description}
                                </p>

                                {/* Progress Bar */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-sm font-medium text-gray-700">Program Impact</span>
                                        <span className="text-sm font-bold text-green-700">{program.progress}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                        <div
                                            className={`bg-gradient-to-r ${program.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                                            style={{
                                                width: isVisible ? `${program.progress}%` : '0%',
                                                transitionDelay: `${(index * 150) + 800}ms`
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <Link href="/programs">
                                    <button className={`w-full flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300 group/btn ${program.bgColor} ${program.textColor} hover:shadow-lg hover:scale-105`}>
                                        Learn More About This Program
                                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className={`mt-16 text-center transition-all duration-1000 transform delay-1000 ${isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                    }`}>
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">Partner with Us</h3>
                        <p className="text-lg mb-6 text-green-100 max-w-2xl mx-auto">
                            Join us in our mission to improve health outcomes across the South West Region.
                            Together, we can make a lasting impact on the health and well-being of our communities.
                        </p>
                        <Link href="/contact">
                            <button className="bg-white text-green-700 px-8 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors duration-300">
                                Become a Partner
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}