'use client'

import Link from 'next/link'
import { SWRFPHLogo } from '@/components/ui/SWRFPHLogo'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const footerLinks = {
    'About': [
        { name: 'Our History', href: '/about' },
        { name: 'Vision & Mission', href: '/about' },
        { name: 'Partners', href: '/intervention' },
        { name: 'Our Team', href: '/team' },
    ],
    'Operational Pillars': [
        { name: 'Pharmaceutical Management', href: '/sections' },
        { name: 'Administration & Finance', href: '/sections' },
        { name: 'Partnership & Promotion', href: '/sections' },
        { name: 'Universal Health Coverage', href: '/sections' },
    ],
    'Programs': [
        { name: 'Essential Medicines', href: '/intervention' },
        { name: 'Health Education', href: '/intervention' },
        { name: 'Maternal & Child Health', href: '/intervention' },
        { name: 'Disease Management', href: '/sections' },
    ],
}

export function Footer() {
    return (
        <footer className="relative bg-[#0c132b] text-white overflow-hidden">
            {/* Gradient accent line */}
            <div className="h-px bg-gradient-to-r from-transparent via-brand-green-500 to-transparent" />

            {/* Decorative blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-green-500/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <SWRFPHLogo size="md" showText={true} textClassName="text-white" />
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-8 max-w-md text-sm">
                            Ensuring better health for the population by improving the performance of the health system in the South West Region of Cameroon since 1989.
                        </p>

                        {/* Contact cards */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm">
                                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                                    <MapPin className="h-4 w-4 text-brand-green-400" />
                                </div>
                                <span className="text-gray-400">South West Region, Cameroon</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                                    <Phone className="h-4 w-4 text-brand-green-400" />
                                </div>
                                <span className="text-gray-400">+237 33 32 29 43</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                                    <Mail className="h-4 w-4 text-brand-green-400" />
                                </div>
                                <span className="text-gray-400">info@swrfhp.cm</span>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-white mb-6">{category}</h4>
                            <ul className="space-y-3.5">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="group text-gray-400 hover:text-white text-sm transition-colors duration-300 flex items-center gap-1"
                                        >
                                            {link.name}
                                            <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} South West Regional Fund for Health Promotion. All rights reserved.
                        </p>
                        <div className="flex gap-8 text-sm">
                            <Link href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}