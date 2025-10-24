'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Heart, Shield, Users, Globe } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const carouselData = [
    {
        image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
        title: 'Essential Medicines',
        subtitle: 'Serving the South West Region since 1989',
        description: 'Ensuring availability of affordable essential medicines across all 21 health districts',
        icon: Shield
    },
    {
        image: 'https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg',
        title: 'Maternal & Child Health',
        subtitle: 'Improving health outcomes for families',
        description: 'Obstetric kits and Health Voucher Mechanism programs',
        icon: Heart
    },
    {
        image: 'https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg',
        title: 'Universal Health Coverage',
        subtitle: 'Ensuring healthcare access for all',
        description: 'UHC Phase 1 implementation with comprehensive health services',
        icon: Users
    },
    {
        image: 'https://images.pexels.com/photos/3952244/pexels-photo-3952244.jpeg',
        title: 'Community Health',
        subtitle: 'Strengthening health systems',
        description: 'Health promotion and education across 6 divisions',
        icon: Globe
    },
]

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }
    },
}

export function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const nextSlide = () => {
        setDirection(1)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length)
    }

    const prevSlide = () => {
        setDirection(-1)
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length)
    }

    const goToSlide = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1)
        setCurrentIndex(index)
    }

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative h-96 md:h-[500px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    className="absolute inset-0"
                >
                    <div className="relative h-full">
                        <Image
                            src={carouselData[currentIndex].image}
                            alt={carouselData[currentIndex].title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex items-center">
                            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="max-w-2xl">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                                            {React.createElement(carouselData[currentIndex].icon, {
                                                className: "h-6 w-6 text-white"
                                            })}
                                        </div>
                                        <div className="text-green-300 text-sm font-medium">
                                            {carouselData[currentIndex].subtitle}
                                        </div>
                                    </div>

                                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                        {carouselData[currentIndex].title}
                                    </h1>

                                    <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                                        {carouselData[currentIndex].description}
                                    </p>

                                    <div className="flex space-x-4">
                                        <Link href="/about">
                                            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                                                Learn More
                                            </button>
                                        </Link>
                                        <Link href="/programs">
                                            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                                                Our Programs
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-white scale-125'
                            : 'bg-white/50 hover:bg-white/75'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                <motion.div
                    className="h-full bg-green-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    key={currentIndex}
                />
            </div>
        </div>
    )
}
