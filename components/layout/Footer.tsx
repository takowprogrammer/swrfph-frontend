'use client'

import Link from 'next/link'
import { SWRFPHLogo } from '@/components/ui/SWRFPHLogo'
import { Shield, Heart, Users, Globe, Mail, Phone, MapPin, Twitter, Facebook, Instagram } from 'lucide-react'

const footerLinks = {
    'About': [
        { name: 'Our History', href: '/about' },
        { name: 'Our Mission', href: '/about' },
        { name: 'Leadership', href: '/about' },
        { name: 'Partners', href: '/about' },
    ],
    'Programs': [
        { name: 'Reproductive Health', href: '/programs' },
        { name: 'Tuberculosis Control', href: '/programs' },
        { name: 'HIV/AIDS Programs', href: '/programs' },
        { name: 'Malaria Prevention', href: '/programs' },
        { name: 'Universal Health Coverage', href: '/programs' },
    ],
    'Resources': [
        { name: 'Medicine Catalog', href: '/catalog' },
        { name: 'Annual Reports', href: '#' },
        { name: 'Health Education', href: '#' },
        { name: 'Policy Documents', href: '#' },
        { name: 'News & Updates', href: '#' },
    ],
    'Contact': [
        { name: 'Get in Touch', href: '/contact' },
        { name: 'Partner With Us', href: '/contact' },
        { name: 'Careers', href: '/contact' },
        { name: 'Feedback', href: '/contact' },
    ]
}

export function Footer() {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-green-900 to-blue-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Main Footer Content - All 5 sections in one line */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Logo and Description */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <SWRFPHLogo
                                size="md"
                                showText={true}
                                textClassName="text-white"
                            />
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                            Ensuring better health for the population by improving the performance of the health system
                            in the South West Region of Cameroon since 1989.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Footer Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-lg font-semibold mb-4 text-green-300">{category}</h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-300 hover:text-white transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact Information */}
                <div className="border-t border-gray-700 pt-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                                <MapPin className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <h5 className="font-semibold text-green-300">Address</h5>
                                <p className="text-gray-300 text-sm">
                                    South West Region<br />
                                    Cameroon
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Phone className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <h5 className="font-semibold text-green-300">Phone</h5>
                                <p className="text-gray-300 text-sm">
                                    +237 XXX XXX XXX
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                                <Mail className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <h5 className="font-semibold text-green-300">Email</h5>
                                <p className="text-gray-300 text-sm">
                                    info@swrfhp.cm
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} South West Regional Fund for Health Promotion. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                Accessibility
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}