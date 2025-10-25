'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeartPulse } from 'lucide-react'

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-green-50/30 min-h-screen">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-2">
                                <span className="font-bold text-xl text-gray-800"></span>
                            </Link>
                        </div>
                        <nav className="hidden md:flex items-center space-x-4">
                            <Link href="/about" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                            <Link href="/services" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                            <Link href="/contact" className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">Login</Button>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main>
                {children}
            </main>
        </div>
    )
}
