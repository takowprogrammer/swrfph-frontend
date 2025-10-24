'use client'

import { Button } from '@/components/ui/button'
import { AnimatedButton } from '@/components/ui/AnimatedButton'
import { TypingAnimation } from '@/components/ui/TypingAnimation'
import { ArrowDown, Play, Shield, Heart, Users, Award } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useEffect, useState } from 'react'

export function Hero() {
    const { ref, isVisible } = useScrollAnimation()
    const [scrollY, setScrollY] = useState(0)
    const [particles, setParticles] = useState<Array<{ id: number, left: number, top: number, delay: number, duration: number }>>([])

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        // Generate particles only on client side
        const generatedParticles = [...Array(25)].map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 4,
            duration: 3 + Math.random() * 4
        }))
        setParticles(generatedParticles)
    }, [])

    const scrollToNext = () => {
        const nextSection = document.getElementById('impact-section')
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="relative text-white min-h-screen flex items-center overflow-hidden">
            {/* Background with Parallax */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 scale-110"
                    style={{
                        transform: `translateY(${scrollY * 0.3}px)`,
                        transition: 'transform 0.1s ease-out'
                    }}
                >
                    <Image
                        src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg"
                        alt="Healthcare professionals in Cameroon"
                        fill
                        quality={90}
                        className="object-cover brightness-40"
                        priority
                    />
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-blue-900/50 to-green-800/70" />

                {/* Animated geometric shapes */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white/20 rounded-full animate-pulse" />
                    <div className="absolute top-40 right-20 w-16 h-16 border-2 border-white/20 rotate-45 animate-pulse delay-1000" />
                    <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-white/20 rounded-full animate-pulse delay-2000" />
                    <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-white/20 rotate-12 animate-pulse delay-3000" />
                </div>

                {/* Floating particles - Client-side only */}
                <div className="absolute inset-0">
                    {particles.map((particle) => (
                        <div
                            key={particle.id}
                            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                            style={{
                                left: `${particle.left}%`,
                                top: `${particle.top}%`,
                                animationDelay: `${particle.delay}s`,
                                animationDuration: `${particle.duration}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <div ref={ref} className="max-w-5xl">
                    {/* Badge */}
                    <div className={`inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 transition-all duration-1000 transform ${isVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-8 opacity-0'
                        }`}>
                        <Shield className="w-4 h-4 mr-2 text-green-300" />
                        <span className="text-sm font-medium">Government Health Fund</span>
                    </div>

                    {/* Main Heading */}
                    <div className={`transition-all duration-1000 transform ${isVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-8 opacity-0'
                        }`}>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                            <span className="block text-white">
                                <TypingAnimation
                                    text="South West Regional"
                                    speed={80}
                                    delay={500}
                                />
                            </span>
                            <span className="block text-green-300">
                                <TypingAnimation
                                    text="Fund for Health"
                                    speed={80}
                                    delay={2000}
                                />
                            </span>
                            <span className="block text-white">
                                <TypingAnimation
                                    text="Promotion"
                                    speed={80}
                                    delay={3500}
                                />
                            </span>
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <div className={`transition-all duration-1000 transform delay-300 ${isVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-8 opacity-0'
                        }`}>
                        <p className="mt-6 text-xl md:text-2xl max-w-3xl text-gray-200 leading-relaxed font-light">
                            Ensuring better health for the population by improving the performance of the health system in the South West Region of Cameroon since 1989.
                        </p>
                    </div>

                    {/* Key Stats */}
                    <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 transform delay-500 ${isVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-8 opacity-0'
                        }`}>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">30+</div>
                            <div className="text-sm text-gray-300">Years of Service</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">21</div>
                            <div className="text-sm text-gray-300">Health Districts</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">6</div>
                            <div className="text-sm text-gray-300">Divisions Covered</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">100%</div>
                            <div className="text-sm text-gray-300">Public Health Focus</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className={`mt-12 flex flex-col sm:flex-row gap-6 transition-all duration-1000 transform delay-700 ${isVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-8 opacity-0'
                        }`}>
                        <Link href="/programs">
                            <AnimatedButton
                                size="lg"
                                variant="health"
                                className="group relative overflow-hidden px-8 py-4 text-lg"
                            >
                                <span className="relative z-10 flex items-center">
                                    <Heart className="w-5 h-5 mr-2" />
                                    Explore Our Programs
                                </span>
                                <div className="absolute inset-0 bg-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </AnimatedButton>
                        </Link>

                        <Link href="/impact">
                            <AnimatedButton
                                size="lg"
                                variant="outline"
                                className="group border-white/30 text-white hover:bg-white hover:text-gray-900 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg"
                            >
                                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                Watch Our Impact
                            </AnimatedButton>
                        </Link>
                    </div>

                    {/* Administrator Message Preview */}
                    <div className={`mt-16 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-1000 transform delay-900 ${isVisible
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-8 opacity-0'
                        }`}>
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2">Message from the Administrator</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    "Welcome to our official website! As the Administrator, I am thrilled to have you explore all that our institution has to offer.
                                    Together we can shape a brighter tomorrow and continue to ensure quality health for the people of the SWR as a premier institution of public health."
                                </p>
                                <p className="text-green-300 text-sm font-medium mt-2">— Mrs. Ngondo W. Musenja, Administrator</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <button
                    onClick={scrollToNext}
                    className="group flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300"
                >
                    <span className="text-sm mb-2 font-medium">Discover Our Impact</span>
                    <ArrowDown className="w-6 h-6 animate-bounce group-hover:scale-110 transition-transform" />
                </button>
            </div>
        </section>
    )
}