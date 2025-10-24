'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle, Users, Globe, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedButton } from '@/components/ui/AnimatedButton'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const contactDetails = [
    {
        icon: Phone,
        title: 'Phone',
        value: '+237 677 123 456',
        description: 'Call us during business hours',
        color: 'from-blue-500 to-blue-600'
    },
    {
        icon: Mail,
        title: 'Email',
        value: 'info@swrfhp.org',
        description: 'Send us an email anytime',
        color: 'from-green-500 to-green-600'
    },
    {
        icon: MapPin,
        title: 'Address',
        value: 'Buea, Southwest Region, Cameroon',
        description: 'Visit our main office',
        color: 'from-red-500 to-red-600'
    },
    {
        icon: Clock,
        title: 'Business Hours',
        value: 'Mon - Fri: 8:00 AM - 6:00 PM',
        description: 'Saturday: 9:00 AM - 2:00 PM',
        color: 'from-purple-500 to-purple-600'
    }
]

const faqs = [
    {
        question: 'How can I donate to support your mission?',
        answer: 'You can donate through our website by clicking the "Donate" button in the navigation. We accept various payment methods including mobile money, credit cards, and bank transfers. All donations go directly to medicine procurement and healthcare support programs.'
    },
    {
        question: 'What services do you offer to healthcare facilities?',
        answer: 'We offer comprehensive services including medicine procurement from verified suppliers, logistics and distribution with cold chain management, quality assurance testing, healthcare provider training programs, and community health education initiatives.'
    },
    {
        question: 'Where are you located and what areas do you serve?',
        answer: 'Our main office is located in Buea, the capital of the Southwest Region of Cameroon. We serve the entire Southwest Region, including remote areas, ensuring that all healthcare facilities have access to essential medicines regardless of their location.'
    },
    {
        question: 'How do you ensure medicine quality and safety?',
        answer: 'We conduct rigorous quality checks at every stage, including batch testing, certification verification, expiry monitoring, and adherence to international safety protocols. All our suppliers are verified and certified by relevant health authorities.'
    },
    {
        question: 'Can healthcare facilities request specific medicines?',
        answer: 'Yes, healthcare facilities can request specific medicines through our online platform or by contacting us directly. We work with our network of suppliers to source medicines that may not be in our standard inventory, ensuring we meet specific healthcare needs.'
    },
    {
        question: 'How can I volunteer or partner with SWRFPH?',
        answer: 'We welcome volunteers and partners who share our mission. You can contact us through this form or email us directly. We offer various opportunities including community outreach, training programs, and administrative support.'
    }
]

const stats = [
    { icon: Users, value: '100+', label: 'Healthcare Facilities Served' },
    { icon: MessageCircle, value: '24/7', label: 'Support Available' },
    { icon: Globe, value: '35+', label: 'Years of Service' },
    { icon: Award, value: '95%', label: 'Satisfaction Rate' }
]

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation()
    const { ref: formRef, isVisible: formVisible } = useScrollAnimation()
    const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation()
    const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation()
    const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000))

        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({ name: '', email: '', subject: '', message: '' })
        }, 3000)
    }

    return (
        <div className="bg-gradient-to-br from-health-50 to-white min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-health-600 to-health-700 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div ref={heroRef} className="text-center max-w-4xl mx-auto">
                        <div className={`transition-all duration-1000 transform ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                Get in <span className="text-health-300">Touch</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-health-100 mb-8 leading-relaxed">
                                We're here to help and answer any questions you might have.
                                We'd love to hear from you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`text-center p-6 bg-gradient-to-br from-health-50 to-white rounded-2xl shadow-lg border border-health-100 transition-all duration-700 transform hover:scale-105 ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="w-16 h-16 bg-health-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <stat.icon className="h-8 w-8 text-health-700" />
                                </div>
                                <div className="text-3xl font-bold text-health-700 mb-2">{stat.value}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form Section */}
                    <div ref={formRef}>
                        <div className={`transition-all duration-700 transform ${formVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                                Send us a Message
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Fill out the form below and we'll get back to you as soon as possible.
                            </p>

                            {isSubmitted ? (
                                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                                    <p className="text-green-600">Thank you for contacting us. We'll get back to you soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Enter your full name"
                                                required
                                                className="w-full rounded-xl border border-gray-300 bg-white shadow-sm focus:border-health-500 focus:ring-health-500 transition-all duration-300 p-4 text-gray-900 placeholder-gray-500"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Your Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Enter your email address"
                                                required
                                                className="w-full rounded-xl border border-gray-300 bg-white shadow-sm focus:border-health-500 focus:ring-health-500 transition-all duration-300 p-4 text-gray-900 placeholder-gray-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            placeholder="What's this about?"
                                            required
                                            className="w-full rounded-xl border border-gray-300 bg-white shadow-sm focus:border-health-500 focus:ring-health-500 transition-all duration-300 p-4 text-gray-900 placeholder-gray-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={6}
                                            placeholder="Tell us how we can help you..."
                                            required
                                            className="w-full rounded-xl border border-gray-300 bg-white shadow-sm focus:border-health-500 focus:ring-health-500 transition-all duration-300 p-4 text-gray-900 placeholder-gray-500 resize-none"
                                        />
                                    </div>

                                    <div className="text-right">
                                        <AnimatedButton
                                            type="submit"
                                            variant="health"
                                            size="lg"
                                            disabled={isSubmitting}
                                            className="px-8 py-4 text-lg font-semibold"
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center">
                                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                                    Sending...
                                                </div>
                                            ) : (
                                                <div className="flex items-center">
                                                    <Send className="w-5 h-5 mr-2" />
                                                    Send Message
                                                </div>
                                            )}
                                        </AnimatedButton>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Contact Details & FAQ Section */}
                    <div ref={contactRef} className="space-y-12">
                        <div className={`transition-all duration-700 transform ${contactVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`} style={{ transitionDelay: '200ms' }}>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Ways to Reach Us</h2>
                            <div className="space-y-6">
                                {contactDetails.map((item, index) => (
                                    <div
                                        key={item.title}
                                        className={`group bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${contactVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                            }`}
                                        style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className={`flex-shrink-0 h-14 w-14 flex items-center justify-center bg-gradient-to-r ${item.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                                                <item.icon className="h-7 w-7 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                                                <p className="text-gray-900 font-medium mb-1">{item.value}</p>
                                                <p className="text-gray-600 text-sm">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div ref={faqRef} className={`transition-all duration-700 transform ${faqVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`} style={{ transitionDelay: '400ms' }}>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                                <Accordion type="single" collapsible className="w-full">
                                    {faqs.map((faq, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`item-${index}`}
                                            className="border-b border-gray-100 last:border-b-0"
                                        >
                                            <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:text-health-600 transition-colors duration-200">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-health-600 to-health-700 text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
                    <p className="text-xl text-health-100 mb-8 max-w-2xl mx-auto">
                        Join us in our mission to improve healthcare access across Southwest Cameroon.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/donate">
                            <AnimatedButton
                                size="lg"
                                className="bg-white text-health-700 hover:bg-health-50 font-semibold px-8 py-3"
                            >
                                Donate Now
                            </AnimatedButton>
                        </Link>
                        <Link href="/about">
                            <AnimatedButton
                                size="lg"
                                variant="outline"
                                className="border-white/30 text-white hover:bg-white hover:text-health-700 font-semibold px-8 py-3 bg-white/10 backdrop-blur-sm"
                            >
                                Learn More
                            </AnimatedButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}