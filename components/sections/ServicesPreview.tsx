'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, Shield, Activity, Globe, Stethoscope, Zap } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Button } from '@/components/ui/button'

export function ServicesPreview() {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

    const programs = [
        {
            title: 'Reproductive Health',
            description: 'Comprehensive reproductive health services including obstetric kits and health voucher mechanisms.',
            imageUrl: 'https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg',
            iconName: 'heart',
            color: 'from-pink-500 to-rose-600',
            bgColor: 'bg-pink-50',
            textColor: 'text-pink-700'
        },
        {
            title: 'Tuberculosis Control',
            description: 'TB prevention, diagnosis, and treatment programs with quality medicines and technical support.',
            imageUrl: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
            iconName: 'shield',
            color: 'from-blue-500 to-cyan-600',
            bgColor: 'bg-blue-50',
            textColor: 'text-blue-700'
        },
        {
            title: 'HIV/AIDS Programs',
            description: 'Comprehensive HIV prevention, treatment, and care services with essential medicines.',
            imageUrl: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
            iconName: 'activity',
            color: 'from-red-500 to-pink-600',
            bgColor: 'bg-red-50',
            textColor: 'text-red-700'
        },
        {
            title: 'Malaria Prevention',
            description: 'Malaria control initiatives including distribution of preventive medicines and mosquito nets.',
            imageUrl: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
            iconName: 'globe',
            color: 'from-green-500 to-emerald-600',
            bgColor: 'bg-green-50',
            textColor: 'text-green-700'
        },
        {
            title: 'Neglected Tropical Diseases',
            description: 'NTD control and elimination programs focusing on diseases like schistosomiasis and filariasis.',
            imageUrl: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
            iconName: 'stethoscope',
            color: 'from-purple-500 to-violet-600',
            bgColor: 'bg-purple-50',
            textColor: 'text-purple-700'
        },
        {
            title: 'Universal Health Coverage',
            description: 'Implementation of UHC Phase 1 including consultation services and health financing.',
            imageUrl: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
            iconName: 'zap',
            color: 'from-orange-500 to-amber-600',
            bgColor: 'bg-orange-50',
            textColor: 'text-orange-700'
        },
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
        <section id="programs" className="bg-gray-50 py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Health Programs</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                        Comprehensive health programs serving all 21 health districts across the South West Region.
                    </p>
                </div>

                <div ref={ref} className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {programs.map((program, index) => (
                        <div
                            key={program.title}
                            className={`group overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-700 transform hover:scale-105 hover:shadow-2xl ${isVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-8 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={program.imageUrl}
                                    alt={program.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute top-4 right-4 p-3 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    {renderIcon(program.iconName)}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                                    {program.title}
                                </h3>
                                <p className="text-base text-gray-600 mb-4 line-clamp-3">{program.description}</p>
                                <Button asChild variant="outline" className="w-full group/btn">
                                    <Link href="/programs">
                                        Learn More
                                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                        <Link href="/programs">
                            View All Programs
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
