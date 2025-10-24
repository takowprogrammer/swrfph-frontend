'use client'

import React from 'react'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
    Heart,
    Shield,
    Activity,
    Globe,
    Stethoscope,
    Zap,
    Users,
    Target,
    CheckCircle,
    ArrowRight,
    MapPin,
    Calendar,
    Award
} from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Image from 'next/image'

export default function ProgramsPage() {
    const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>()
    const { ref: programsRef, isVisible: programsVisible } = useScrollAnimation<HTMLDivElement>()

    const programs = [
        {
            title: 'Reproductive Health',
            description: 'Comprehensive reproductive health services including obstetric kits and health voucher mechanisms to improve maternal and child health outcomes.',
            imageUrl: 'https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg',
            iconName: 'heart',
            progress: 94,
            color: 'from-pink-500 to-rose-600',
            bgColor: 'bg-pink-50',
            textColor: 'text-pink-700',
            achievements: [
                '94% of health facilities equipped with obstetric kits',
                'Over 15,000 mothers supported through health vouchers',
                'Maternal mortality reduced by 40% in target areas'
            ],
            coverage: 'All 21 health districts',
            duration: 'Ongoing since 2010',
            budget: '2.5M FCFA annually'
        },
        {
            title: 'Tuberculosis Control',
            description: 'Comprehensive TB prevention, diagnosis, and treatment programs with community-based DOTS implementation across the region.',
            imageUrl: 'https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg',
            iconName: 'shield',
            progress: 89,
            color: 'from-blue-500 to-cyan-600',
            bgColor: 'bg-blue-50',
            textColor: 'text-blue-700',
            achievements: [
                '89% treatment success rate achieved',
                'Over 8,000 TB cases detected and treated',
                'Community DOTS coverage in 95% of health areas'
            ],
            coverage: 'All 21 health districts',
            duration: 'Ongoing since 2005',
            budget: '1.8M FCFA annually'
        },
        {
            title: 'HIV/AIDS Programs',
            description: 'Comprehensive HIV prevention, testing, treatment, and care services with emphasis on PMTCT and community support.',
            imageUrl: 'https://images.pexels.com/photos/3952244/pexels-photo-3952244.jpeg',
            iconName: 'activity',
            progress: 92,
            color: 'from-red-500 to-pink-600',
            bgColor: 'bg-red-50',
            textColor: 'text-red-700',
            achievements: [
                '92% of HIV+ patients on ART',
                'PMTCT coverage of 95% in target areas',
                'Over 12,000 people tested annually'
            ],
            coverage: 'All 21 health districts',
            duration: 'Ongoing since 2003',
            budget: '3.2M FCFA annually'
        },
        {
            title: 'Malaria Prevention',
            description: 'Integrated malaria control including ITN distribution, indoor residual spraying, and community education programs.',
            imageUrl: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
            iconName: 'globe',
            progress: 87,
            color: 'from-green-500 to-emerald-600',
            bgColor: 'bg-green-50',
            textColor: 'text-green-700',
            achievements: [
                '87% ITN coverage in target households',
                'Malaria cases reduced by 60%',
                'Over 50,000 ITNs distributed annually'
            ],
            coverage: 'All 21 health districts',
            duration: 'Ongoing since 2008',
            budget: '2.1M FCFA annually'
        },
        {
            title: 'Universal Health Coverage',
            description: 'Phase 1 implementation of UHC with comprehensive health services, health insurance schemes, and quality improvement initiatives.',
            imageUrl: 'https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg',
            iconName: 'stethoscope',
            progress: 76,
            color: 'from-purple-500 to-indigo-600',
            bgColor: 'bg-purple-50',
            textColor: 'text-purple-700',
            achievements: [
                '76% of population covered by health insurance',
                'Quality improvement in 45 health facilities',
                'Over 200,000 people enrolled in health schemes'
            ],
            coverage: '6 pilot health districts',
            duration: 'Phase 1: 2020-2025',
            budget: '5.5M FCFA annually'
        },
        {
            title: 'Health Promotion',
            description: 'Community-based health education, nutrition programs, and health awareness campaigns across all age groups.',
            imageUrl: 'https://images.pexels.com/photos/3952244/pexels-photo-3952244.jpeg',
            iconName: 'zap',
            progress: 91,
            color: 'from-orange-500 to-yellow-600',
            bgColor: 'bg-orange-50',
            textColor: 'text-orange-700',
            achievements: [
                '91% of communities reached with health education',
                'Over 100,000 people trained in health promotion',
                'Nutrition programs in 80% of health areas'
            ],
            coverage: 'All 21 health districts',
            duration: 'Ongoing since 2012',
            budget: '1.5M FCFA annually'
        }
    ]

    const renderIcon = (iconName: string) => {
        switch (iconName) {
            case 'heart':
                return <Heart className="h-6 w-6 text-green-700" />
            case 'shield':
                return <Shield className="h-6 w-6 text-green-700" />
            case 'activity':
                return <Activity className="h-6 w-6 text-green-700" />
            case 'globe':
                return <Globe className="h-6 w-6 text-green-700" />
            case 'stethoscope':
                return <Stethoscope className="h-6 w-6 text-green-700" />
            case 'zap':
                return <Zap className="h-6 w-6 text-green-700" />
            default:
                return <Heart className="h-6 w-6 text-green-700" />
        }
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div
                            ref={heroRef}
                            className={`text-center max-w-4xl mx-auto transition-all duration-1000 transform ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}
                        >
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                                Our Health Programs
                            </h1>
                            <p className="text-xl sm:text-2xl text-green-100 mb-8 leading-relaxed">
                                Comprehensive health initiatives serving the South West Region of Cameroon since 1989
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                                    View All Programs
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                                    Partner With Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Programs Overview */}
                <section className="py-16 sm:py-24 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Comprehensive Health Solutions
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Our programs address the most critical health challenges in the South West Region,
                                from maternal health to infectious disease control and health system strengthening.
                            </p>
                        </div>

                        <div
                            ref={programsRef}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 transform ${programsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}
                        >
                            {programs.map((program, index) => (
                                <Card key={program.title} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                    <div className="relative h-64">
                                        <Image
                                            src={program.imageUrl}
                                            alt={program.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute top-4 left-4">
                                            <Badge className={`${program.bgColor} ${program.textColor} border-0`}>
                                                {program.progress}% Complete
                                            </Badge>
                                        </div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                                            <div className="flex items-center space-x-2 text-green-200">
                                                {renderIcon(program.iconName)}
                                                <span className="text-sm">{program.coverage}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <CardContent className="p-6">
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {program.description}
                                        </p>

                                        <div className="space-y-4 mb-6">
                                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                                                <MapPin className="h-4 w-4" />
                                                <span>Coverage: {program.coverage}</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                                                <Calendar className="h-4 w-4" />
                                                <span>Duration: {program.duration}</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                                                <Award className="h-4 w-4" />
                                                <span>Budget: {program.budget}</span>
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                                                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                                                Key Achievements
                                            </h4>
                                            <ul className="space-y-2">
                                                {program.achievements.map((achievement, idx) => (
                                                    <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex space-x-3">
                                            <Button className="flex-1 bg-green-600 hover:bg-green-700">
                                                Learn More
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                            <Button variant="outline" className="px-6">
                                                <Users className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Impact Statistics */}
                <section className="py-16 sm:py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Our Impact in Numbers
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                The measurable impact of our health programs across the South West Region
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { number: '21', label: 'Health Districts Covered', icon: MapPin },
                                { number: '500K+', label: 'People Reached', icon: Users },
                                { number: '94%', label: 'Program Success Rate', icon: Target },
                                { number: '35+', label: 'Years of Service', icon: Award }
                            ].map((stat, index) => (
                                <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl">
                                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <stat.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                                    <div className="text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section id="partner-section" className="py-16 sm:py-24 bg-gradient-to-br from-green-600 to-blue-600 text-white relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-400"></div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <div className="mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                                <Users className="h-8 w-8 text-white" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                                Partner With Us
                            </h2>
                            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                                Join us in our mission to improve health outcomes across the South West Region.
                                Together, we can build a healthier future for all.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <Link href="/contact">
                                <button className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                                    Become a Partner
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </button>
                            </Link>
                            <Link href="/contact">
                                <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                                    Contact Us
                                </button>
                            </Link>
                        </div>

                        {/* Scroll indicator */}
                        <div className="mt-12 text-center">
                            <p className="text-green-200 text-sm mb-4">Scroll to see more</p>
                            <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex justify-center">
                                <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
