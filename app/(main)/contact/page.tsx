'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import { AnimatedButton } from '@/components/ui/AnimatedButton'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const contactDetails = [
    {
        icon: Phone,
        title: 'Phone',
        value: '+237 33 32 29 43',
        description: 'Mon - Fri, 8am - 6pm',
    },
    {
        icon: Mail,
        title: 'Email',
        value: 'info@swrfhp.org',
        description: 'Send us an email anytime',
    },
    {
        icon: MapPin,
        title: 'Address',
        value: 'Buea, Southwest Region',
        description: 'Visit our main office',
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

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        setIsSubmitted(true)
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        }, 3000)
    }

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    }

    // scroll variants for FAQ
    const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation<HTMLDivElement>()

    return (
        <div className="bg-slate-50 min-h-screen pt-20">
            {/* 50/50 Split Section */}
            <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
                
                {/* LEFT SIDE: Photography & Glassmorphic Details */}
                <div className="relative w-full lg:w-[55%] flex flex-col justify-center p-6 sm:p-12 lg:p-16 xl:p-24 overflow-hidden">
                    {/* Background Images */}
                    <div className="absolute inset-0">
                        <img 
                            src="/front-view-of-office.jpeg" 
                            alt="Office view" 
                            className="object-cover w-full h-full scale-105" 
                        />
                        {/* Deep Navy/Green gradient overlay */}
                        <div className="absolute inset-0 bg-brand-blue-950/80 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-950/90 via-brand-blue-900/80 to-brand-green-950/80" />
                    </div>

                    <motion.div 
                        variants={containerVariants} 
                        initial="hidden" 
                        animate="visible" 
                        className="relative z-10 w-full max-w-2xl mx-auto lg:mx-0"
                    >
                        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tighter mb-6 leading-[1.1]">
                            Let's Drive <span className="text-brand-green-400">Health</span> Forward.
                        </motion.h1>
                        
                        <motion.p variants={itemVariants} className="text-lg sm:text-xl text-brand-blue-100 mb-12 max-w-xl leading-relaxed">
                            Partner with SWRFHP to optimize healthcare delivery and secure essential medicine supplies across the Southwest Region.
                        </motion.p>

                        {/* Dunamis-Style Floating Glassmorphic Grid */}
                        <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
                            {contactDetails.map((item, idx) => (
                                <motion.div 
                                    key={idx} 
                                    variants={itemVariants} 
                                    className="group relative bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-[2rem] hover:bg-white/20 hover:border-brand-green-400/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                                >
                                    {/* Shadow Bloom on Hover */}
                                    <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_-10px_rgba(19,177,75,0.4)] pointer-events-none" />
                                    
                                    <div className="flex flex-col xl:flex-row items-start xl:items-center gap-4 relative z-10">
                                        <div className="w-12 h-12 shrink-0 rounded-2xl bg-brand-green-500/20 flex items-center justify-center border border-brand-green-400/30 group-hover:scale-110 transition-transform duration-500">
                                            <item.icon className="h-5 w-5 text-brand-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xs uppercase tracking-widest text-brand-blue-200 font-semibold mb-1">{item.title}</h3>
                                            <p className="text-white font-medium text-lg mb-0.5">{item.value}</p>
                                        </div>
                                    </div>
                                    <p className="text-white/60 text-sm mt-4 relative z-10">{item.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* RIGHT SIDE: Luptek-Style Dark Form Card */}
                <div className="w-full lg:w-[45%] bg-slate-50 flex items-center justify-center p-6 sm:p-12 lg:p-16 relative">
                    {/* Subtle background element */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue-900/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 40 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} 
                        className="w-full max-w-lg relative z-10"
                    >
                        <div className="bg-brand-blue-950 rounded-[2.5rem] shadow-2xl p-8 sm:p-10 relative overflow-hidden border border-brand-blue-800/50">
                            {/* Card internal glow */}
                            <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-green-500/20 rounded-full blur-3xl pointer-events-none" />
                            
                            <h2 className="text-3xl font-bold text-white mb-2 relative z-10 tracking-tight">Send a Message</h2>
                            <p className="text-brand-blue-200/80 mb-8 relative z-10 text-sm">Fill out the form below and our team will get back to you promptly.</p>
                            
                            <AnimatePresence mode="wait">
                                {isSubmitted ? (
                                    <motion.div 
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="bg-brand-green-500/10 border border-brand-green-500/20 rounded-3xl p-8 text-center"
                                    >
                                        <div className="w-16 h-16 bg-brand-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle className="h-8 w-8 text-brand-green-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                                        <p className="text-brand-blue-200 text-sm">Thank you for reaching out. We'll be in touch shortly.</p>
                                    </motion.div>
                                ) : (
                                    <motion.form 
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit} 
                                        className="space-y-5 relative z-10"
                                    >
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold uppercase tracking-wider text-brand-blue-200">Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent transition-all"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold uppercase tracking-wider text-brand-blue-200">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent transition-all"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold uppercase tracking-wider text-brand-blue-200">Phone</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent transition-all"
                                                    placeholder="+237 XXXXXXXX"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-semibold uppercase tracking-wider text-brand-blue-200">Subject</label>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    required
                                                    value={formData.subject}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent transition-all"
                                                    placeholder="Inquiry"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold uppercase tracking-wider text-brand-blue-200">Message</label>
                                            <textarea
                                                name="message"
                                                required
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-green-500 focus:border-transparent transition-all resize-none"
                                                placeholder="How can we help you?"
                                            />
                                        </div>

                                        <div className="pt-2">
                                            <AnimatedButton
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full rounded-full py-4 text-base font-bold bg-brand-green-500 hover:bg-brand-green-400 text-brand-blue-950 shadow-[0_0_20px_rgba(19,177,75,0.3)] hover:shadow-[0_0_30px_rgba(19,177,75,0.5)] transition-all duration-300"
                                            >
                                                {isSubmitting ? 'Sending...' : (
                                                    <span className="flex items-center justify-center">
                                                        Send Message <Send className="w-4 h-4 ml-2" />
                                                    </span>
                                                )}
                                            </AnimatedButton>
                                        </div>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Interactive Map Section */}
            <section className="relative w-full h-[50vh] min-h-[400px] bg-slate-200">
                <iframe
                    src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=563M+4FP,Buea+(South%20West%20Regional%20Fund%20for%20Health%20Promotion)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SWRFHP Location in Buea"
                    className="absolute inset-0 select-none pointer-events-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                />
                
                {/* Overlay Gradient for seamless integration */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                
                {/* Floating Location Badge */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-[0_10px_40px_-10px_rgba(36,60,138,0.3)] border border-gray-100 flex items-center gap-3 pointer-events-none">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-green-500 animate-pulse shadow-[0_0_10px_rgba(19,177,75,0.8)]" />
                    <span className="font-bold text-brand-blue-950 text-sm tracking-widest uppercase">Buea, Southwest Region</span>
                </div>
            </section>

            {/* FAQs Section */}
            <div className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div ref={faqRef} className={`transition-all duration-1000 transform ${faqVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue-950 tracking-tight mb-4">Frequently Asked Questions</h2>
                            <p className="text-lg text-gray-500">Everything you need to know about partnering with SWRFHP.</p>
                        </div>
                        
                        <div className="bg-slate-50 rounded-[2.5rem] p-6 sm:p-10 border border-slate-100 shadow-sm">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="border-b border-slate-200 last:border-b-0 py-2"
                                    >
                                        <AccordionTrigger className="px-2 text-left font-bold text-lg text-brand-blue-950 hover:text-brand-green-600 transition-colors duration-200">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="px-2 pt-2 pb-6 text-gray-600 leading-relaxed text-base">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Minimal CTA */}
            <div className="bg-brand-blue-950 text-white py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/front-view-of-office.jpeg')] bg-cover bg-center mix-blend-overlay" />
                <div className="relative z-10 container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Ready to make an impact?</h2>
                    <Link href="/intervention">
                        <AnimatedButton className="bg-brand-green-500 text-brand-blue-950 hover:bg-brand-green-400 font-bold px-8 py-3 rounded-full">
                            Explore Our Interventions
                        </AnimatedButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}