'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { SWRFPHLogo } from '@/components/ui/SWRFPHLogo'
import { Menu, X, Heart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Intervention', href: '/intervention' },
        { name: 'Operational Pillars', href: '/sections' },
        { name: 'Team', href: '/team' },
        { name: 'Contact', href: '/contact' },
    ]

    const isHomePage = pathname === '/'

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 z-50 w-full transition-all duration-500 ${
                scrolled || !isHomePage
                    ? 'bg-white/80 backdrop-blur-2xl shadow-[0_1px_3px_rgba(0,0,0,0.05),0_20px_25px_-5px_rgba(0,0,0,0.02)] border-b border-gray-200/50'
                    : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 group">
                        <SWRFPHLogo size="md" showText={true} />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                        isActive
                                            ? 'text-brand-blue-700'
                                            : scrolled || !isHomePage
                                                ? 'text-gray-600 hover:text-brand-blue-700'
                                                : 'text-white/90 hover:text-white'
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute inset-0 bg-brand-blue-50 rounded-full"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{item.name}</span>
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center">
                        <Link href="/contact">
                            <Button
                                size="sm"
                                className={`rounded-full px-6 font-semibold transition-all duration-300 ${
                                    scrolled || !isHomePage
                                        ? 'bg-brand-blue-600 hover:bg-brand-blue-700 text-white shadow-lg shadow-brand-blue-200'
                                        : 'bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm border border-white/20'
                                }`}
                            >
                                <Heart className="w-4 h-4 mr-2" />
                                Partner With Us
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile menu toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`lg:hidden inline-flex items-center justify-center rounded-xl p-2.5 transition-colors ${
                            scrolled || !isHomePage
                                ? 'text-gray-700 hover:bg-gray-100'
                                : 'text-white hover:bg-white/10'
                        }`}
                    >
                        <span className="sr-only">Toggle menu</span>
                        {isMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:hidden overflow-hidden"
                    >
                        <div className="bg-white/95 backdrop-blur-2xl border-t border-gray-100 px-4 py-6 space-y-1">
                            {navigation.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                                            pathname === item.href
                                                ? 'bg-brand-blue-50 text-brand-blue-700'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-brand-blue-700'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="pt-4">
                                <Link href="/contact">
                                    <Button className="w-full rounded-xl bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-semibold py-3">
                                        <Heart className="w-4 h-4 mr-2" />
                                        Partner With Us
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
