'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const testimonials = [
    {
        id: 1,
        name: 'Dr. Sarah Mbeki',
        role: 'Chief Medical Officer',
        hospital: 'Buea Regional Hospital',
        content: 'SWRFPH has been instrumental in ensuring our hospital never runs out of essential medicines. Their reliable delivery system has saved countless lives in our community.',
        rating: 5,
        image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg'
    },
    {
        id: 2,
        name: 'Dr. Emmanuel Ngu',
        role: 'Emergency Department Head',
        hospital: 'Limbe General Hospital',
        content: 'The quality of medicines and the speed of delivery from SWRFPH is exceptional. They understand the urgency of healthcare needs in remote areas.',
        rating: 5,
        image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg'
    },
    {
        id: 3,
        name: 'Dr. Grace Fon',
        role: 'Pediatric Specialist',
        hospital: 'Kumba District Hospital',
        content: 'Thanks to SWRFPH, we can focus on treating patients instead of worrying about medicine shortages. Their support has transformed our healthcare delivery.',
        rating: 5,
        image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg'
    },
    {
        id: 4,
        name: 'Dr. John Tabe',
        role: 'Hospital Administrator',
        hospital: 'Mamfe Central Hospital',
        content: 'The training and support provided by SWRFPH has improved our medicine management significantly. We are more efficient and effective in serving our patients.',
        rating: 5,
        image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg'
    }
]

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const { ref, isVisible } = useScrollAnimation()

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const currentTestimonial = testimonials[currentIndex]

    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        What Healthcare Professionals Say
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                        Hear from the doctors and healthcare workers who rely on our services
                    </p>
                </div>

                <div ref={ref} className="max-w-4xl mx-auto">
                    <div className={`transition-all duration-700 transform ${isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-8 opacity-0'
                        }`}>
                        <div className="bg-gradient-to-br from-health-50 to-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
                            {/* Quote icon */}
                            <div className="absolute top-6 right-6 text-health-200">
                                <Quote className="w-12 h-12" />
                            </div>

                            {/* Testimonial content */}
                            <div className="relative z-10">
                                <div className="flex items-center mb-6">
                                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>

                                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                                    "{currentTestimonial.content}"
                                </blockquote>

                                <div className="flex items-center">
                                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                                        <img
                                            src={currentTestimonial.image}
                                            alt={currentTestimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 text-lg">
                                            {currentTestimonial.name}
                                        </div>
                                        <div className="text-health-600 font-medium">
                                            {currentTestimonial.role}
                                        </div>
                                        <div className="text-gray-500 text-sm">
                                            {currentTestimonial.hospital}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex justify-center items-center mt-8 space-x-4">
                            <button
                                onClick={prevTestimonial}
                                className="p-3 rounded-full bg-health-100 text-health-700 hover:bg-health-200 transition-colors duration-300"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {/* Dots indicator */}
                            <div className="flex space-x-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                                ? 'bg-health-600 scale-125'
                                                : 'bg-gray-300 hover:bg-gray-400'
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextTestimonial}
                                className="p-3 rounded-full bg-health-100 text-health-700 hover:bg-health-200 transition-colors duration-300"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
