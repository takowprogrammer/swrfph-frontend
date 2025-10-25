'use client'

import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
    Users,
    Heart,
    Shield,
    Target,
    TrendingUp,
    Award,
    MapPin,
    Calendar,
    CheckCircle,
    ArrowRight,
    Activity,
    Globe,
    Stethoscope,
    Zap
} from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Image from 'next/image'
import Link from 'next/link'

export default function ImpactPage() {
    const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>()
    const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>()
    const { ref: achievementsRef, isVisible: achievementsVisible } = useScrollAnimation<HTMLDivElement>()

    const keyStats = [
        {
            number: '500,000+',
            label: 'People Reached',
            description: 'Direct beneficiaries across all health programs',
            icon: Users,
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-50',
            textColor: 'text-blue-700'
        },
        {
            number: '21',
            label: 'Health Districts',
            description: 'Complete coverage across the South West Region',
            icon: MapPin,
            color: 'from-green-500 to-emerald-500',
            bgColor: 'bg-green-50',
            textColor: 'text-green-700'
        },
        {
            number: '94%',
            label: 'Success Rate',
            description: 'Average program completion and effectiveness',
            icon: Target,
            color: 'from-purple-500 to-indigo-500',
            bgColor: 'bg-purple-50',
            textColor: 'text-purple-700'
        },
        {
            number: '35+',
            label: 'Years of Service',
            description: 'Serving the South West Region since 1989',
            icon: Award,
            color: 'from-orange-500 to-yellow-500',
            bgColor: 'bg-orange-50',
            textColor: 'text-orange-700'
        }
    ]

    const programImpacts = [
        {
            title: 'Maternal & Child Health',
            icon: Heart,
            color: 'from-pink-500 to-rose-500',
            bgColor: 'bg-pink-50',
            textColor: 'text-pink-700',
            stats: [
                { label: 'Maternal Mortality Reduction', value: '40%', description: 'Since program implementation' },
                { label: 'Obstetric Kits Distributed', value: '15,000+', description: 'To health facilities' },
                { label: 'Health Vouchers Issued', value: '25,000+', description: 'For maternal health services' },
                { label: 'Facilities Equipped', value: '94%', description: 'Of target health centers' }
            ],
            achievements: [
                'Reduced maternal mortality by 40% in target areas',
                'Equipped 94% of health facilities with obstetric kits',
                'Supported over 15,000 mothers through health vouchers',
                'Trained 500+ healthcare workers in maternal health'
            ]
        },
        {
            title: 'Infectious Disease Control',
            icon: Shield,
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-50',
            textColor: 'text-blue-700',
            stats: [
                { label: 'TB Treatment Success', value: '89%', description: 'Treatment completion rate' },
                { label: 'HIV Testing Coverage', value: '95%', description: 'Of target population' },
                { label: 'Malaria Cases Reduced', value: '60%', description: 'In intervention areas' },
                { label: 'ITN Distribution', value: '50,000+', description: 'Insecticide-treated nets' }
            ],
            achievements: [
                'Achieved 89% TB treatment success rate',
                'Reduced malaria cases by 60% in target areas',
                'Distributed 50,000+ insecticide-treated nets',
                'Tested 12,000+ people for HIV annually'
            ]
        },
        {
            title: 'Health System Strengthening',
            icon: Activity,
            color: 'from-green-500 to-emerald-500',
            bgColor: 'bg-green-50',
            textColor: 'text-green-700',
            stats: [
                { label: 'Health Insurance Coverage', value: '76%', description: 'Of target population' },
                { label: 'Facilities Improved', value: '45', description: 'Quality enhancement projects' },
                { label: 'Health Workers Trained', value: '1,200+', description: 'Professional development' },
                { label: 'Community Health Workers', value: '800+', description: 'Trained and deployed' }
            ],
            achievements: [
                'Achieved 76% health insurance coverage in pilot areas',
                'Improved quality in 45 health facilities',
                'Trained 1,200+ healthcare workers',
                'Deployed 800+ community health workers'
            ]
        },
        {
            title: 'Health Promotion & Education',
            icon: Globe,
            color: 'from-purple-500 to-indigo-500',
            bgColor: 'bg-purple-50',
            textColor: 'text-purple-700',
            stats: [
                { label: 'Communities Reached', value: '91%', description: 'With health education' },
                { label: 'People Trained', value: '100,000+', description: 'In health promotion' },
                { label: 'Nutrition Programs', value: '80%', description: 'Of health areas covered' },
                { label: 'Awareness Campaigns', value: '200+', description: 'Community events conducted' }
            ],
            achievements: [
                'Reached 91% of communities with health education',
                'Trained 100,000+ people in health promotion',
                'Implemented nutrition programs in 80% of health areas',
                'Conducted 200+ community awareness campaigns'
            ]
        }
    ]

    const regionalImpact = [
        {
            division: 'Fako',
            districts: 7,
            population: '1,200,000',
            programs: 6,
            successRate: '96%',
            keyAchievement: 'Highest maternal health improvement'
        },
        {
            division: 'Meme',
            districts: 4,
            population: '800,000',
            programs: 6,
            successRate: '92%',
            keyAchievement: 'Best TB control outcomes'
        },
        {
            division: 'Manyu',
            districts: 3,
            population: '600,000',
            programs: 5,
            successRate: '89%',
            keyAchievement: 'Leading malaria prevention'
        },
        {
            division: 'Ndian',
            districts: 2,
            population: '400,000',
            programs: 5,
            successRate: '87%',
            keyAchievement: 'Strong community engagement'
        },
        {
            division: 'Kupe Muanenguba',
            districts: 3,
            population: '500,000',
            programs: 4,
            successRate: '85%',
            keyAchievement: 'Excellent health promotion'
        },
        {
            division: 'Lebialem',
            districts: 2,
            population: '300,000',
            programs: 4,
            successRate: '83%',
            keyAchievement: 'Rapid UHC implementation'
        }
    ]

    const timeline = [
        {
            year: '1989',
            title: 'Foundation',
            description: 'SWRFHP established as Primary Health Care Essential Drug Program',
            icon: Award,
            color: 'from-green-500 to-emerald-500'
        },
        {
            year: '1995',
            title: 'Expansion',
            description: 'Extended services to all 21 health districts in the South West Region',
            icon: Globe,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            year: '2003',
            title: 'HIV/AIDS Response',
            description: 'Launched comprehensive HIV/AIDS prevention and treatment programs',
            icon: Heart,
            color: 'from-red-500 to-pink-500'
        },
        {
            year: '2010',
            title: 'Maternal Health',
            description: 'Introduced obstetric kits and health voucher mechanism programs',
            icon: Stethoscope,
            color: 'from-pink-500 to-rose-500'
        },
        {
            year: '2020',
            title: 'Universal Health Coverage',
            description: 'Phase 1 implementation of UHC across 6 pilot health districts',
            icon: Shield,
            color: 'from-purple-500 to-indigo-500'
        },
        {
            year: '2024',
            title: 'Digital Innovation',
            description: 'Launched digital health initiatives and telemedicine services',
            icon: Zap,
            color: 'from-orange-500 to-yellow-500'
        }
    ]

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
                                Our Impact
                            </h1>
                            <p className="text-xl sm:text-2xl text-green-100 mb-8 leading-relaxed">
                                Transforming health outcomes across the South West Region of Cameroon through
                                innovative programs and dedicated service since 1989
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/programs">
                                    <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 relative overflow-hidden group">
                                        <span className="relative z-10 opacity-100 flex items-center">
                                            View Our Programs
                                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <div className="absolute inset-0 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                    </Button>
                                </Link>
                                <Button size="lg" variant="outline" className="border-white text-white bg-green-700/20 hover:bg-white hover:text-green-600">
                                    Download Report
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Statistics */}
                <section className="py-16 sm:py-24 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Impact by the Numbers
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                The measurable impact of our health programs across the South West Region
                            </p>
                        </div>

                        <div
                            ref={statsRef}
                            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 transform ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}
                        >
                            {keyStats.map((stat, index) => (
                                <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300 group">
                                    <CardContent className="p-0">
                                        <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                            <stat.icon className="h-10 w-10 text-white" />
                                        </div>
                                        <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                                        <div className="text-xl font-semibold text-gray-700 mb-2">{stat.label}</div>
                                        <div className="text-gray-600">{stat.description}</div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Program Impact Details */}
                <section className="py-16 sm:py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Program Impact Details
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Detailed impact metrics for each of our major health programs
                            </p>
                        </div>

                        <div
                            ref={achievementsRef}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 transform ${achievementsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}
                        >
                            {programImpacts.map((program, index) => (
                                <Card key={program.title} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                                    <CardHeader className={`${program.bgColor} p-6`}>
                                        <div className="flex items-center space-x-4">
                                            <div className={`w-12 h-12 bg-gradient-to-br ${program.color} rounded-lg flex items-center justify-center`}>
                                                <program.icon className="h-6 w-6 text-white" />
                                            </div>
                                            <div>
                                                <CardTitle className={`text-xl ${program.textColor}`}>{program.title}</CardTitle>
                                                <CardDescription className="text-gray-600">
                                                    Comprehensive impact metrics and achievements
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="p-6">
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            {program.stats.map((stat, idx) => (
                                                <div key={idx} className="text-center p-4 bg-gray-50 rounded-lg">
                                                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                                    <div className="text-sm font-medium text-gray-700 mb-1">{stat.label}</div>
                                                    <div className="text-xs text-gray-500">{stat.description}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div>
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
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Regional Impact */}
                <section className="py-16 sm:py-24 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Regional Impact by Division
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Our impact across all 6 divisions of the South West Region
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {regionalImpact.map((division, index) => (
                                <Card key={division.division} className="p-6 hover:shadow-lg transition-all duration-300">
                                    <CardContent className="p-0">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xl font-bold text-gray-900">{division.division}</h3>
                                            <Badge className="bg-green-100 text-green-800">
                                                {division.successRate}
                                            </Badge>
                                        </div>

                                        <div className="space-y-3 mb-4">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Districts:</span>
                                                <span className="font-medium">{division.districts}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Population:</span>
                                                <span className="font-medium">{division.population}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Programs:</span>
                                                <span className="font-medium">{division.programs}</span>
                                            </div>
                                        </div>

                                        <div className="pt-4 border-t border-gray-200">
                                            <p className="text-sm text-gray-600">
                                                <strong>Key Achievement:</strong> {division.keyAchievement}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="py-16 sm:py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Our Journey Through Time
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Key milestones in our mission to improve health outcomes
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>

                            <div className="space-y-12">
                                {timeline.map((milestone, index) => (
                                    <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                            <Card className="hover:shadow-lg transition-all duration-300">
                                                <CardContent className="p-6">
                                                    <div className="flex items-center space-x-4">
                                                        <div className={`w-12 h-12 bg-gradient-to-br ${milestone.color} rounded-lg flex items-center justify-center`}>
                                                            <milestone.icon className="h-6 w-6 text-white" />
                                                        </div>
                                                        <div>
                                                            <div className="text-2xl font-bold text-gray-900">{milestone.year}</div>
                                                            <div className="text-lg font-semibold text-gray-700">{milestone.title}</div>
                                                        </div>
                                                    </div>
                                                    <p className="mt-4 text-gray-600">{milestone.description}</p>
                                                </CardContent>
                                            </Card>
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
                </section>

                {/* Call to Action */}
                <section className="py-16 sm:py-24 bg-gradient-to-br from-green-600 to-blue-600 text-white">
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
                                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                                    Partner With Us
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/programs">
                                <Button size="lg" variant="outline" className="border-white text-white bg-green-700/20 hover:bg-white hover:text-green-600">
                                    View Our Programs
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
