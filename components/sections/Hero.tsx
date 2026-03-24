'use client'

import { Button } from '@/components/ui/button'
import { AnimatedButton } from '@/components/ui/AnimatedButton'
import { TypingAnimation } from '@/components/ui/TypingAnimation'
import { ArrowDown, Heart, Shield } from 'lucide-react'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function Hero() {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()
    const [scrollY, setScrollY] = useState(0)
    const [particles, setParticles] = useState<Array<{ id: number, left: number, top: number, delay: number, duration: number, size: number }>>([])

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const generatedParticles = [...Array(40)].map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 3 + Math.random() * 5,
            size: 1 + Math.random() * 3
        }))
        setParticles(generatedParticles)
    }, [])

    const scrollToNext = () => {
        const nextSection = document.getElementById('about')
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
                        src="/front-view-of-office.jpeg"
                        alt="SWRFHP Office Front View"
                        fill
                        quality={90}
                        className="object-cover brightness-[0.9] saturate-[1.1]"
                        priority
                    />
                </div>

                {/* Multi-layer gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-950/40 via-brand-blue-900/20 to-brand-green-950/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Animated gradient blobs */}
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-blue-600/30 rounded-full blur-3xl animate-blob" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-green-600/30 rounded-full blur-3xl animate-blob animation-delay-2000" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-red-600/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

                {/* Floating particles */}
                <div className="absolute inset-0">
                    {particles.map((particle) => (
                        <div
                            key={particle.id}
                            className="absolute rounded-full bg-white/20 animate-pulse"
                            style={{
                                left: `${particle.left}%`,
                                top: `${particle.top}%`,
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                animationDelay: `${particle.delay}s`,
                                animationDuration: `${particle.duration}s`
                            }}
                        />
                    ))}
                </div>

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32">
                <div ref={ref} className="max-w-5xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-10"
                    >
                        <Shield className="w-4 h-4 mr-2.5 text-emerald-400" />
                        <span className="text-sm font-medium text-emerald-200 tracking-wide">Public Interest Group (PIG) • Est. 1989</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold leading-[1.05] mb-8 tracking-tight">
                            <span className="block text-white">
                                <TypingAnimation text="South West Regional" speed={60} delay={500} />
                            </span>
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300">
                                <TypingAnimation text="Fund for Health" speed={60} delay={1800} />
                            </span>
                            <span className="block text-white/90">
                                <TypingAnimation text="Promotion" speed={60} delay={3200} />
                            </span>
                        </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg md:text-xl lg:text-2xl max-w-3xl text-gray-300 leading-relaxed font-light"
                    >
                        Ensuring better health for the population by improving the performance of the health system in the South West Region of Cameroon.
                    </motion.p>

                    {/* Key Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm"
                    >
                        {[
                            { value: '35+', label: 'Years of Service' },
                            { value: '21', label: 'Health Districts' },
                            { value: '6', label: 'Divisions Covered' },
                            { value: '100%', label: 'Public Health Focus' },
                        ].map((stat, i) => (
                            <div key={stat.label} className="text-center py-6 px-4 bg-white/5 hover:bg-white/10 transition-colors duration-300">
                                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight">{stat.value}</div>
                                <div className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                        className="mt-14 flex flex-col sm:flex-row gap-5"
                    >
                        <a href="#sections">
                            <AnimatedButton
                                size="lg"
                                variant="health"
                                className="group relative overflow-hidden rounded-full px-8 py-4 text-base font-semibold bg-gradient-to-r from-brand-green-500 to-brand-green-600 hover:from-brand-green-600 hover:to-brand-green-700 shadow-xl shadow-brand-green-900/20 transition-all duration-300 active:scale-[0.98] hover:shadow-2xl hover:shadow-brand-green-900/40"
                            >
                                <span className="relative z-10 flex items-center">
                                    <Heart className="w-5 h-5 mr-2.5" />
                                    Explore Our Sections
                                </span>
                            </AnimatedButton>
                        </a>

                        <a href="#about">
                            <AnimatedButton
                                size="lg"
                                variant="outline"
                                className="group rounded-full border-white/20 text-white hover:bg-white hover:text-brand-blue-950 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold transition-all duration-300 active:scale-[0.98]"
                            >
                                Learn More About Us
                            </AnimatedButton>
                        </a>
                    </motion.div>
                </div>
            </div>


        </section>
    )
}