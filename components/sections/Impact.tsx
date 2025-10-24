'use client'

import React from 'react'
import { Shield, Heart, Users, Globe, Building2, Package, Activity, Award } from 'lucide-react'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Link from 'next/link'

const impacts = [
    {
        icon: Shield,
        title: 'Universal Health Coverage',
        description: 'Implementation of UHC Phase 1 with comprehensive health services for children 0-5 years, HIV, and TB user fees.',
    },
    {
        icon: Heart,
        title: 'Maternal & Child Health',
        description: 'Provision of obstetric kits and Health Voucher Mechanism to improve maternal and child health outcomes.',
    },
    {
        icon: Globe,
        title: 'Regional Coverage',
        description: 'Storage and distribution of pharmaceutical products across all 21 health districts in the South West Region.',
    },
]

export function Impact() {
    const { ref, isVisible } = useScrollAnimation()

    const statistics = [
        {
            icon: Building2,
            value: 21,
            suffix: '',
            label: 'Health Districts Covered',
            description: 'Complete regional coverage across South West Cameroon'
        },
        {
            icon: Users,
            value: 6,
            suffix: '',
            label: 'Divisions Served',
            description: 'All divisions in the South West Region'
        },
        {
            icon: Package,
            value: 30,
            suffix: '+',
            label: 'Years of Service',
            description: 'Serving communities since 1989'
        },
        {
            icon: Activity,
            value: 8,
            suffix: '+',
            label: 'Health Programs',
            description: 'Comprehensive health promotion programs'
        }
    ]

    const achievements = [
        {
            title: 'Essential Medicines Access',
            description: 'Availability of affordable essential medicines and medical materials for all public health structures',
            icon: Package,
            color: 'text-blue-600',
            bgColor: 'bg-blue-100'
        },
        {
            title: 'Priority Health Programs',
            description: 'Support for HIV, Tuberculosis, NTDs, Reproductive Health, Cholera, and Disinfectants programs',
            icon: Heart,
            color: 'text-pink-600',
            bgColor: 'bg-pink-100'
        },
        {
            title: 'SDG Contribution',
            description: 'Contributing to the attainment of Sustainable Development Goals through health promotion',
            icon: Globe,
            color: 'text-green-600',
            bgColor: 'bg-green-100'
        },
        {
            title: 'Technical Assistance',
            description: 'Performance Based Financing and dialogue structure enhancement across the region',
            icon: Award,
            color: 'text-purple-600',
            bgColor: 'bg-purple-100'
        }
    ]

    return (
        <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
                        <Award className="w-4 h-4 mr-2" />
                        Our Impact & Achievements
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        Transforming Health Across the
                        <span className="block text-green-600">South West Region</span>
                    </h2>
                    <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
                        For over three decades, we have been at the forefront of health promotion,
                        ensuring better health outcomes for the people of the South West Region of Cameroon.
                    </p>
                </div>

                {/* Animated Statistics */}
                <div ref={ref} className="mb-20">
                    <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Reach & Impact</h3>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {statistics.map((stat, index) => (
                            <div
                                key={index}
                                className={`text-center p-8 rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-700 transform hover:scale-105 ${isVisible
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-8 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-green-100 to-blue-100 mx-auto mb-6">
                                    {React.createElement(stat.icon, { className: "h-10 w-10 text-green-600" })}
                                </div>
                                <div className="text-4xl font-bold text-green-600 mb-3">
                                    <AnimatedCounter
                                        end={stat.value}
                                        suffix={stat.suffix}
                                        duration={2500}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.label}</h3>
                                <p className="text-gray-600">{stat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Key Achievements */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Achievements</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {achievements.map((achievement, index) => (
                            <div
                                key={achievement.title}
                                className={`p-8 rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-700 transform hover:scale-105 ${isVisible
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-8 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${(index + 4) * 200}ms` }}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className={`w-16 h-16 rounded-2xl ${achievement.bgColor} flex items-center justify-center flex-shrink-0`}>
                                        {React.createElement(achievement.icon, {
                                            className: `w-8 h-8 ${achievement.color}`
                                        })}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Impact Cards */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {impacts.map((impact, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-700 transform hover:scale-105 ${isVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-8 opacity-0'
                                }`}
                            style={{ transitionDelay: `${(index + 8) * 200}ms` }}
                        >
                            <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-green-100 to-blue-100 mb-6">
                                {React.createElement(impact.icon, { className: "h-8 w-8 text-green-600" })}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{impact.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{impact.description}</p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className={`mt-20 text-center transition-all duration-1000 transform ${isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                    }`}>
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white">
                        <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
                        <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
                            Together, we can continue to improve health outcomes and ensure quality healthcare
                            for all people in the South West Region of Cameroon.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/programs">
                                <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors duration-300">
                                    Learn About Our Programs
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-700 transition-colors duration-300">
                                    Partner With Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}