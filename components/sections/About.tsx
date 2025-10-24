'use client'

import React from 'react'
import Image from 'next/image'
import { Calendar, Users, Shield, Award, Heart, Globe, Building, Target } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function About() {
    const { ref, isVisible } = useScrollAnimation()

    const timeline = [
        {
            year: '1989',
            title: 'Primary Health Care Essential Drug Program',
            description: 'Started with technical assistance from GTZ (German Technical Agency) with personnel and infrastructure provided by the Ministry of Public Health.',
            icon: Heart
        },
        {
            year: '1992',
            title: 'South West Provincial Special Fund for Health',
            description: 'Evolved into an Association with legal personality, expanding our reach and impact across the region.',
            icon: Shield
        },
        {
            year: '2010',
            title: 'Public Interest Group (PIG) Law',
            description: 'Signed the PIG Law on December 21, 2010, followed by the Convention on June 10, 2010.',
            icon: Building
        },
        {
            year: '2013',
            title: 'South West Regional Fund for Health Promotion',
            description: 'Created through Prime Ministerial Decree of January 21, 2013, establishing our current structure and mission.',
            icon: Award
        }
    ]

    const achievements = [
        {
            title: 'Essential Medicines Distribution',
            description: 'Availability of affordable essential medicines and medical materials for all public health structures',
            icon: Globe,
            color: 'text-blue-600',
            bgColor: 'bg-blue-100'
        },
        {
            title: 'Regional Coverage',
            description: 'Storage and distribution across all 21 health districts in the South West Region',
            icon: Target,
            color: 'text-green-600',
            bgColor: 'bg-green-100'
        },
        {
            title: 'Maternal & Child Health',
            description: 'Improvement through obstetric kits and Health Voucher Mechanism programs',
            icon: Heart,
            color: 'text-pink-600',
            bgColor: 'bg-pink-100'
        },
        {
            title: 'Universal Health Coverage',
            description: 'Implementation of UHC Phase 1 with comprehensive health services',
            icon: Shield,
            color: 'text-purple-600',
            bgColor: 'bg-purple-100'
        }
    ]

    const partners = [
        { name: 'State of Cameroon', type: 'Government' },
        { name: 'South West Community', type: 'Community' },
        { name: 'GIZ', type: 'Technical Partner' },
        { name: 'World Bank', type: 'Financial Partner' },
        { name: 'AFD', type: 'Financial Partner' },
        { name: 'KFW', type: 'Financial Partner' }
    ]

    return (
        <section id="about" className="bg-white py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
                        <Calendar className="w-4 h-4 mr-2" />
                        Our Story Since 1989
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        Three Decades of
                        <span className="block text-green-600">Health Transformation</span>
                    </h2>
                    <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
                        From a small essential drug program to a comprehensive regional health fund,
                        discover our journey of improving health outcomes in the South West Region.
                    </p>
                </div>

                {/* Timeline */}
                <div ref={ref} className="mb-20">
                    <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Evolution</h3>
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-blue-500 hidden md:block" />

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div
                                    key={item.year}
                                    className={`relative flex items-start space-x-8 transition-all duration-700 transform ${isVisible
                                        ? 'translate-x-0 opacity-100'
                                        : 'translate-x-8 opacity-0'
                                        }`}
                                    style={{ transitionDelay: `${index * 200}ms` }}
                                >
                                    {/* Timeline Dot */}
                                    <div className="hidden md:flex items-center justify-center w-16 h-16 bg-white border-4 border-green-500 rounded-full shadow-lg z-10">
                                        {React.createElement(item.icon, { className: "w-8 h-8 text-green-600" })}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <div className="flex items-center space-x-4 mb-4">
                                            <span className="text-2xl font-bold text-green-600">{item.year}</span>
                                            <div className="w-8 h-0.5 bg-green-300" />
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Achievements */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Achievements</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((achievement, index) => (
                            <div
                                key={achievement.title}
                                className={`text-center p-6 rounded-2xl transition-all duration-700 transform hover:scale-105 ${achievement.bgColor} ${isVisible
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-8 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${achievement.bgColor} flex items-center justify-center`}>
                                    {React.createElement(achievement.icon, {
                                        className: `w-8 h-8 ${achievement.color}`
                                    })}
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-3">{achievement.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Partners */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-12">
                    <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Partners</h3>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        We work closely with government institutions, international organizations,
                        and community representatives to achieve our health promotion goals.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {partners.map((partner, index) => (
                            <div
                                key={partner.name}
                                className={`text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${isVisible
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-8 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="w-12 h-12 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
                                    <Users className="w-6 h-6 text-green-600" />
                                </div>
                                <h4 className="font-semibold text-gray-900 text-sm mb-1">{partner.name}</h4>
                                <p className="text-xs text-gray-500">{partner.type}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Administrator Message */}
                <div className={`mt-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl p-12 text-white transition-all duration-1000 transform ${isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                    }`}>
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold mb-4">Message from the Administrator</h3>
                        </div>

                        <div className="flex flex-col lg:flex-row items-start gap-8">
                            {/* Administrator Photo */}
                            <div className="flex-shrink-0 mx-auto lg:mx-0">
                                <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                                    <Image
                                        src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg"
                                        alt="Mrs. Ngondo W. Musenja, Administrator - SWRFHP"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                                <div className="text-center mt-4">
                                    <p className="text-xl font-semibold">Mrs. Ngondo W. Musenja</p>
                                    <p className="text-green-200">Administrator – SWRFHP</p>
                                </div>
                            </div>

                            {/* Message Text */}
                            <div className="flex-1">
                                <blockquote className="text-lg leading-relaxed text-green-100">
                                    "Welcome to our official website! As the Administrator, I am thrilled to have you explore all that our institution has to offer.
                                    This website serves as a gateway to exploring the different health services offered by the South West Regional Fund such as the
                                    availability of affordable quality essential medicines; quality control of medicines; Health Promotion, Dialogue Structure;
                                    Universal Health Coverage Phase 1 etc.
                                    <br /><br />
                                    The Fund is deeply committed to ensure better health for the population by improving the performance of the health system in the
                                    South West Region in the following domains:
                                    <br /><br />
                                    • Strengthening multi-sectoral participation in health governance<br />
                                    • Mobilization and management of resources for health care financing<br />
                                    • Management and distribution of good quality pharmaceutical products<br />
                                    • Maintenance of health facilities medical equipment and infrastructure<br />
                                    • Participation in the regional medicines regional observatory<br />
                                    • Enhancing the quality of health care provision<br />
                                    • Decentralization and deconcentration of the health system<br />
                                    • Promotion of health education and nutrition
                                    <br /><br />
                                    As you navigate through this website, I encourage you to get a glimpse of our achievements, unique identity, and tremendous visions for the future.
                                    I hope our journey will inspire you to connect with us whether as a prospective customer or as a valued partner. Together we can shape a brighter
                                    tomorrow and continue to ensure quality health for the people of the SWR as a premier institution of public health."
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
