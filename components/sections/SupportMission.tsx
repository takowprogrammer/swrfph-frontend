'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AnimatedButton } from '@/components/ui/AnimatedButton'
import { Heart, Target, TrendingUp, Users } from 'lucide-react'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function SupportMission() {
    const { ref, isVisible } = useScrollAnimation()
    const progress = (32500 / 50000) * 100

    const goals = [
        {
            icon: Target,
            label: 'Goal',
            value: 50000,
            suffix: ' FCFA',
            description: 'Monthly target for medicine procurement'
        },
        {
            icon: TrendingUp,
            label: 'Raised',
            value: 32500,
            suffix: ' FCFA',
            description: 'Amount raised this month'
        },
        {
            icon: Users,
            label: 'Donors',
            value: 127,
            suffix: '+',
            description: 'People supporting our mission'
        }
    ]

    return (
        <section className="bg-gradient-to-br from-health-600 via-health-700 to-health-800 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
                <div className="text-center">
                    <div className={`transition-all duration-700 transform ${isVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-8 opacity-0'
                        }`}>
                        <div className="flex items-center justify-center mb-6">
                            <Heart className="w-8 h-8 text-red-400 mr-3 animate-pulse" />
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Support Our Mission
                            </h2>
                        </div>
                        <p className="mt-4 text-lg leading-8 text-health-100 max-w-2xl mx-auto">
                            Your donation can help us reach more hospitals and improve healthcare for communities in Southwest Cameroon.
                        </p>
                    </div>

                    {/* Progress Section */}
                    <div ref={ref} className="mt-12 max-w-2xl mx-auto">
                        <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition-all duration-700 transform ${isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-8 opacity-0'
                            }`}>
                            <h3 className="text-xl font-semibold mb-6">Current Campaign Progress</h3>

                            {/* Progress bar */}
                            <div className="mb-8">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-health-100">Monthly Goal</span>
                                    <span className="text-white font-semibold">{progress.toFixed(0)}%</span>
                                </div>
                                <div className="w-full bg-white/20 rounded-full h-3">
                                    <div
                                        className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full transition-all duration-1000 ease-out"
                                        style={{
                                            width: isVisible ? `${progress}%` : '0%',
                                            transitionDelay: '500ms'
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {goals.map((goal, index) => (
                                    <div
                                        key={index}
                                        className="text-center"
                                    >
                                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white/20 mx-auto mb-3">
                                            {React.createElement(goal.icon, { className: "h-6 w-6 text-white" })}
                                        </div>
                                        <div className="text-2xl font-bold text-white mb-1">
                                            <AnimatedCounter
                                                end={goal.value}
                                                suffix={goal.suffix}
                                                duration={2000}
                                            />
                                        </div>
                                        <div className="text-health-100 font-medium text-sm mb-1">{goal.label}</div>
                                        <div className="text-health-200 text-xs">{goal.description}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className={`mt-8 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 transform delay-300 ${isVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-8 opacity-0'
                        }`}>
                        <AnimatedButton
                            size="lg"
                            className="bg-white text-health-700 hover:bg-health-50 font-semibold px-8 py-3 text-lg group relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center">
                                <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                Donate Now
                            </span>
                            <div className="absolute inset-0 bg-health-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </AnimatedButton>

                        <Link href="/about">
                            <AnimatedButton
                                size="lg"
                                variant="outline"
                                className="border-white/30 text-white hover:bg-white hover:text-health-700 font-semibold px-8 py-3 text-lg bg-white/10 backdrop-blur-sm"
                            >
                                Learn More
                            </AnimatedButton>
                        </Link>
                    </div>

                    {/* Trust indicators */}
                    <div className={`mt-8 text-center transition-all duration-700 transform delay-500 ${isVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-8 opacity-0'
                        }`}>
                        <p className="text-health-200 text-sm">
                            🔒 Secure donations • 💯 100% goes to medicine procurement • 📊 Transparent reporting
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}