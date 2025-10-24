'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Users, Shield, Award, Heart, Globe, Building, Target, CheckCircle, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const values = [
    {
        icon: Heart,
        title: 'Compassion',
        description: 'We approach every challenge with empathy and understanding, putting the needs of patients and healthcare providers first.'
    },
    {
        icon: Target,
        title: 'Excellence',
        description: 'We maintain the highest standards in everything we do, from medicine quality to service delivery.'
    },
    {
        icon: Users,
        title: 'Collaboration',
        description: 'We work closely with healthcare facilities, communities, and partners to achieve our shared goals.'
    },
    {
        icon: Award,
        title: 'Integrity',
        description: 'We operate with transparency, honesty, and accountability in all our interactions and decisions.'
    }
]

const achievements = [
    { number: '21', label: 'Health Districts Covered' },
    { number: '500,000+', label: 'People Reached' },
    { number: '35+', label: 'Years of Service' },
    { number: '94%', label: 'Program Success Rate' }
]

const timeline = [
    {
        year: '1989',
        title: 'Primary Health Care Essential Drug Program',
        description: 'Established with technical assistance from GTZ (German Technical Agency). Personnel and infrastructure provided by Ministry of Public Health, with Pharmacy Attendants from local authorities.',
        icon: Building,
        color: 'from-green-500 to-emerald-500'
    },
    {
        year: '1992',
        title: 'South West Provincial Special Fund for Health',
        description: 'Evolved to become an Association with legal personality, expanding its scope and formalizing its operations.',
        icon: Shield,
        color: 'from-blue-500 to-cyan-500'
    },
    {
        year: '2010',
        title: 'Public Interest Group (PIG) Law',
        description: 'Signing of the PIG Law on December 21, 2010, followed by Convention on June 10, 2010, establishing the legal framework for transformation.',
        icon: Award,
        color: 'from-purple-500 to-indigo-500'
    },
    {
        year: '2013',
        title: 'South West Regional Fund for Health Promotion',
        description: 'Created through Prime Ministerial Decree of January 21, 2013, marking the official establishment of SWRFHP as we know it today.',
        icon: Globe,
        color: 'from-orange-500 to-yellow-500'
    }
]

const keyAchievements = [
    {
        title: 'Essential Medicine Availability',
        description: 'Availability of affordable essential medicines and medical materials for all public health structures and commodities for priority health programs such as HIV, Tuberculosis, NTDs, Reproductive Health, Cholera and Disinfectants to the South West population, contributing to the attainment of the SDG.',
        icon: Heart
    },
    {
        title: 'Comprehensive Distribution Network',
        description: 'Storage and distribution of pharmaceutical products for health facilities (public, private, para-public and confessional) in all 21 health districts of the region.',
        icon: Globe
    },
    {
        title: 'Maternal and Child Health',
        description: 'Contribute to the improvement of Maternal and Child Health through the provision of obstetric kits and Health Voucher Mechanism.',
        icon: Users
    },
    {
        title: 'Technical and Financial Partnerships',
        description: 'Collaborate with technical and financial partners (GIZ, World Bank) in the execution of health promotion activities.',
        icon: Shield
    },
    {
        title: 'Dialogue Structure Strengthening',
        description: 'Strengthening of the dialogue structures through technical and financial support for enhancement of dialogue structure activities.',
        icon: Target
    },
    {
        title: 'Performance Based Financing',
        description: 'Provide technical assistance for the execution of Performance Based Financing within the South West Region.',
        icon: Award
    },
    {
        title: 'Multi-Partner Collaboration',
        description: 'Collaborate with partners such as GIZ, GLOBAL FUND, CHEMONICS, CAMNAFAW, CARE International etc in the execution of health promotional activities.',
        icon: Building
    },
    {
        title: 'Universal Health Coverage Phase 1',
        description: 'Coordinate the implementation of Universal Health Coverage Phase 1 (Consultation of Children 0-5 years, HIV User fees, TB User fees, Haemodialysis and Health Voucher) through verification, validation reimbursement of health facility declared bills for all the UHC phase 1 packages and sensitization with respect to the UHC Phase 1 services at the community and health facility level.',
        icon: CheckCircle
    },
    {
        title: 'Community Health Education',
        description: 'Promote community sensitization, and health education on various priority health issues and aspects of nutrition.',
        icon: Heart
    }
]


const partnerCategories = [
    {
        title: 'State',
        description: 'Government representatives and administrative authorities',
        members: [
            'Ministry of Public Health',
            'Administrative Council Authorities',
            'Municipal Council Authorities'
        ],
        icon: Building,
        color: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'Technical and Financial Partners',
        description: 'International development organizations providing technical and financial support',
        members: [
            'GIZ (German Technical Agency)',
            'AFD (French Development Agency)',
            'KFW (German Development Bank)',
            'World Bank'
        ],
        icon: Globe,
        color: 'from-green-500 to-emerald-500'
    },
    {
        title: 'Community',
        description: 'Regional representation and community health services',
        members: [
            '6 Divisions of the SWR represented by 21 Health Districts in rotating manner',
            '3 Representatives from Confessional Health Services'
        ],
        icon: Users,
        color: 'from-purple-500 to-indigo-500'
    }
]

const governingOrgans = [
    {
        title: 'The General Assembly',
        description: 'The highest decision-making body of SWRFHP, responsible for strategic oversight, policy direction, and major organizational decisions.',
        members: 'Representatives from Ministry of Public Health, Regional Council, Partner Organizations, and key stakeholders'
    },
    {
        title: 'Management Committee',
        description: 'Oversees day-to-day operations, implementation of policies, and coordination of health programs across the South West Region.',
        members: 'Senior management team including technical directors, department heads, and program coordinators'
    },
    {
        title: 'The Administrator',
        description: 'Chief executive officer responsible for overall leadership, strategic implementation, and representation of SWRFHP.',
        members: 'Mrs. Ngondo W. Musenja - Administrator of SWRFHP'
    }
]

export default function AboutPage() {
    const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>()
    const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation<HTMLDivElement>()
    const { ref: achievementsRef, isVisible: achievementsVisible } = useScrollAnimation<HTMLDivElement>()
    const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation<HTMLDivElement>()
    const { ref: keyAchievementsRef, isVisible: keyAchievementsVisible } = useScrollAnimation<HTMLDivElement>()

    return (
        <div className="bg-white">
            <main>
                {/* Enhanced Hero Section */}
                <div className="relative h-[70vh] overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg"
                            alt="Healthcare professionals in Cameroon"
                            fill
                            className="object-cover brightness-75"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
                    </div>

                    <div ref={heroRef} className="relative h-full flex items-center justify-center">
                        <div className={`text-center transition-all duration-1000 transform ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                About <span className="text-green-400">SWRFHP</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                                Serving the South West Region of Cameroon since 1989 through comprehensive health promotion and essential medicine distribution
                            </p>
                        </div>
                    </div>
                </div>

                {/* Administrator Message */}
                <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-16 sm:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold mb-4">Message from the Administrator</h2>
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
                                        Universal Health Coverage Phase 1 and much more.
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

                {/* Mission, Vision, History Section */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className={`transition-all duration-700 transform ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`} style={{ transitionDelay: '200ms' }}>
                                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg border border-green-100">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                                        <Target className="h-6 w-6 text-green-700" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        Ensure better health for the population by improving the performance of the health system in the South West Region through comprehensive health promotion, essential medicine distribution, and health system strengthening.
                                    </p>
                                </div>
                            </div>

                            <div className={`transition-all duration-700 transform ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`} style={{ transitionDelay: '400ms' }}>
                                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg border border-green-100">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                                        <Heart className="h-6 w-6 text-green-700" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        A South West Region where every citizen has access to quality healthcare services, essential medicines, and health promotion programs, contributing to the achievement of Universal Health Coverage.
                                    </p>
                                </div>
                            </div>

                            <div className={`transition-all duration-700 transform ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`} style={{ transitionDelay: '600ms' }}>
                                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg border border-green-100">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                                        <Award className="h-6 w-6 text-green-700" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Our History</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        From Primary Health Care Essential Drug Program in 1989 to South West Regional Fund for Health Promotion in 2013, we've evolved to serve all 21 health districts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Historical Timeline */}
                <div className="bg-gray-50 py-16 sm:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Our Historical Journey
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                From a small essential drug program to a comprehensive health promotion fund serving the entire South West Region
                            </p>
                        </div>

                        <div ref={timelineRef} className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>

                            <div className="space-y-12">
                                {timeline.map((milestone, index) => (
                                    <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                            <div className={`transition-all duration-700 transform ${timelineVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                                }`} style={{ transitionDelay: `${index * 200}ms` }}>
                                                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                                    <div className="flex items-center space-x-4 mb-4">
                                                        <div className={`w-12 h-12 bg-gradient-to-br ${milestone.color} rounded-lg flex items-center justify-center`}>
                                                            <milestone.icon className="h-6 w-6 text-white" />
                                                        </div>
                                                        <div>
                                                            <div className="text-2xl font-bold text-gray-900">{milestone.year}</div>
                                                            <div className="text-lg font-semibold text-gray-700">{milestone.title}</div>
                                                        </div>
                                                    </div>
                                                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-8 h-8 bg-white border-4 border-green-500 rounded-full flex items-center justify-center z-10">
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        </div>

                                        <div className="w-1/2"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Achievements */}
                <div className="py-16 sm:py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Our Key Achievements
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Significant contributions to health outcomes across the South West Region
                            </p>
                        </div>

                        <div ref={keyAchievementsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {keyAchievements.map((achievement, index) => (
                                <div key={achievement.title} className={`transition-all duration-700 transform ${keyAchievementsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    }`} style={{ transitionDelay: `${index * 100}ms` }}>
                                    <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                            <achievement.icon className="h-6 w-6 text-green-700" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Core Values Section */}
                <div className="bg-gray-50 py-16 sm:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div ref={valuesRef} className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Our Core Values
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                The principles that guide our work and define our commitment to the community
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <div key={value.title} className={`transition-all duration-700 transform ${valuesVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    }`} style={{ transitionDelay: `${index * 150}ms` }}>
                                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                                        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                            <value.icon className="h-8 w-8 text-green-700" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Statistics Section */}
                <div className="py-16 sm:py-24 bg-gradient-to-br from-green-600 to-blue-600 text-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div ref={achievementsRef} className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                Our Impact in Numbers
                            </h2>
                            <p className="text-xl text-green-100 max-w-3xl mx-auto">
                                The measurable impact of our health programs across the South West Region
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {achievements.map((achievement, index) => (
                                <div key={achievement.label} className={`text-center transition-all duration-700 transform ${achievementsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    }`} style={{ transitionDelay: `${index * 150}ms` }}>
                                    <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                                    <div className="text-green-200">{achievement.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Partners Section */}
                <div className="py-16 sm:py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Our Partners
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Working together with government, international organizations, and community representatives to improve health outcomes
                            </p>
                        </div>

                        {/* Partner Categories */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                            {partnerCategories.map((category, index) => (
                                <div key={category.title} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                                        <category.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{category.title}</h3>
                                    <p className="text-gray-600 mb-6 text-center">{category.description}</p>
                                    <div className="space-y-3">
                                        {category.members.map((member, memberIndex) => (
                                            <div key={memberIndex} className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-sm text-gray-700">{member}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Governing Organs */}
                <div className="bg-gray-50 py-16 sm:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Governing Organs
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                The organizational structure that ensures effective governance and management
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {governingOrgans.map((organ, index) => (
                                <div key={organ.title} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{organ.title}</h3>
                                    <p className="text-gray-600 mb-4">{organ.description}</p>
                                    <div className="text-sm text-gray-500">
                                        <strong>Members:</strong> {organ.members}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="py-16 sm:py-24 bg-gradient-to-br from-green-600 to-blue-600 text-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Join Our Mission
                        </h2>
                        <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                            Help us continue making a positive impact on health outcomes across the South West Region.
                            Together, we can build a healthier future for all.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <button className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center">
                                    Partner With Us
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </button>
                            </Link>
                            <Link href="/programs">
                                <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}