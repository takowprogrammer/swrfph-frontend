'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Heart, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function CallToAction() {
    const { ref, isVisible } = useScrollAnimation()

    const actions = [
        {
            title: 'Partner With Us',
            description: 'Join us in improving health outcomes across the South West Region',
            iconName: 'handshake',
            href: '/contact',
            variant: 'default' as const,
            className: 'bg-green-600 hover:bg-green-700'
        },
        {
            title: 'Access Medicine Catalog',
            description: 'Browse our comprehensive catalog of essential medicines',
            iconName: 'heart',
            href: '/catalog',
            variant: 'outline' as const,
            className: 'border-green-600 text-green-600 hover:bg-green-50'
        },
        {
            title: 'Learn About Our Impact',
            description: 'Discover how we\'re transforming healthcare in the region',
            iconName: 'users',
            href: '/impact',
            variant: 'outline' as const,
            className: 'border-blue-600 text-blue-600 hover:bg-blue-50'
        }
    ]

    const renderIcon = (iconName: string) => {
        switch (iconName) {
            case 'handshake':
                return <Users className="h-8 w-8 text-white" />
            case 'heart':
                return <Heart className="h-8 w-8 text-white" />
            case 'users':
                return <Users className="h-8 w-8 text-white" />
            default:
                return <Heart className="h-8 w-8 text-white" />
        }
    }

    return (
        <section className="bg-gradient-to-br from-green-600 to-blue-600 py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={ref} className={`text-center transition-all duration-1000 transform ${isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                    }`}>
                    <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
                        Ready to Make a Difference?
                    </h2>
                    <p className="text-xl text-green-100 max-w-3xl mx-auto mb-12">
                        Join us in our mission to improve health outcomes and ensure access to quality healthcare
                        for all people in the South West Region of Cameroon.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {actions.map((action, index) => (
                            <div
                                key={action.title}
                                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center transition-all duration-700 transform hover:scale-105 hover:bg-white/20 ${isVisible
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-8 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                                    {renderIcon(action.iconName)}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {action.title}
                                </h3>
                                <p className="text-green-100 mb-6">
                                    {action.description}
                                </p>
                                <Button asChild variant={action.variant} className={action.className}>
                                    <Link href={action.href}>
                                        Get Started
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-green-100 mb-4">
                            Have questions? We're here to help.
                        </p>
                        <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                            <Link href="/contact">
                                Contact Us
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
