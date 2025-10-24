'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

interface PageTransitionProps {
    children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
    const [isLoading, setIsLoading] = useState(false)
    const [displayChildren, setDisplayChildren] = useState(children)
    const pathname = usePathname()

    useEffect(() => {
        if (displayChildren !== children) {
            setIsLoading(true)
            const timer = setTimeout(() => {
                setDisplayChildren(children)
                setIsLoading(false)
            }, 300)

            return () => clearTimeout(timer)
        }
    }, [children, displayChildren])

    return (
        <div className="relative">
            {/* Loading overlay */}
            <div className={`fixed inset-0 bg-white z-50 transition-opacity duration-300 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                <div className="flex items-center justify-center h-full">
                    <div className="flex flex-col items-center space-y-4">
                        {/* Animated logo or spinner */}
                        <div className="relative">
                            <div className="w-16 h-16 border-4 border-health-200 rounded-full"></div>
                            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-health-600 rounded-full border-t-transparent animate-spin"></div>
                        </div>
                        <div className="text-health-600 font-medium">Loading...</div>
                    </div>
                </div>
            </div>

            {/* Page content with transition */}
            <div className={`transition-all duration-500 ease-in-out ${isLoading ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
                }`}>
                {displayChildren}
            </div>
        </div>
    )
}
