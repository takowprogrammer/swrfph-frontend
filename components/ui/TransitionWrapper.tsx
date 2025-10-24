'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

interface TransitionWrapperProps {
    children: React.ReactNode
}

export function TransitionWrapper({ children }: TransitionWrapperProps) {
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [displayChildren, setDisplayChildren] = useState(children)
    const pathname = usePathname()

    useEffect(() => {
        if (displayChildren !== children) {
            setIsTransitioning(true)

            const timer = setTimeout(() => {
                setDisplayChildren(children)
                setIsTransitioning(false)
            }, 250)

            return () => clearTimeout(timer)
        }
    }, [children, displayChildren])

    return (
        <div className="relative min-h-screen">
            {/* Transition overlay */}
            <div className={`fixed inset-0 bg-gradient-to-br from-health-50 to-white z-40 transition-all duration-300 ${isTransitioning ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                        <div className="relative mb-4">
                            <div className="w-12 h-12 border-4 border-health-200 rounded-full"></div>
                            <div className="absolute top-0 left-0 w-12 h-12 border-4 border-health-600 rounded-full border-t-transparent animate-spin"></div>
                        </div>
                        <div className="text-health-600 font-medium">Loading...</div>
                    </div>
                </div>
            </div>

            {/* Page content */}
            <div className={`transition-all duration-500 ease-out ${isTransitioning
                    ? 'opacity-0 transform translate-y-8 scale-95'
                    : 'opacity-100 transform translate-y-0 scale-100'
                }`}>
                {displayChildren}
            </div>
        </div>
    )
}
