'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TransitionLink } from '@/components/ui/TransitionLink'
import { SWRFPHLogo } from '@/components/ui/SWRFPHLogo'
import { Menu, X, Shield, Heart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '@/contexts/AuthContext'

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { user } = useAuth()

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Programs', href: '/programs' },
        { name: 'Impact', href: '/impact' },
        { name: 'Catalog', href: '/catalog' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <SWRFPHLogo size="md" showText={true} />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navigation.map((item) => (
                                <TransitionLink
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-600 hover:text-health-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {item.name}
                                </TransitionLink>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-2">
                        <Button variant="health" size="sm" className="flex items-center">
                            <Heart className="w-4 h-4 mr-2" />
                            Partner With Us
                        </Button>
                        {!user && (
                            <Button asChild variant="outline" size="sm">
                                <Link href="/login">Provider Portal</Link>
                            </Button>
                        )}
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center rounded-md bg-gray-100 p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="md:hidden space-y-1 px-2 pt-2 pb-3 sm:px-3">
                            {navigation.map((item) => (
                                <TransitionLink
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-health-600"
                                >
                                    {item.name}
                                </TransitionLink>
                            ))}
                        </div>
                        <div className="border-t border-gray-200 pt-4 pb-3">
                            <div className="flex flex-col space-y-2 px-2">
                                <Button variant="health" className="w-full flex items-center justify-center">
                                    <Heart className="w-4 h-4 mr-2" />
                                    Partner With Us
                                </Button>
                                {!user && (
                                    <Button asChild variant="outline" className="w-full">
                                        <Link href="/login">Provider Portal</Link>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
