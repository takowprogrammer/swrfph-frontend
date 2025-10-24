'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

interface TransitionLinkProps {
    href: string
    children: React.ReactNode
    className?: string
    onClick?: () => void
}

export function TransitionLink({ href, children, className = '', onClick }: TransitionLinkProps) {
    const [isNavigating, setIsNavigating] = useState(false)
    const router = useRouter()

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()

        if (onClick) {
            onClick()
        }

        setIsNavigating(true)

        // Add a small delay for the transition effect
        setTimeout(() => {
            router.push(href)
            // Reset navigation state after a short delay
            setTimeout(() => {
                setIsNavigating(false)
            }, 500)
        }, 150)
    }

    // Reset navigation state when component unmounts or href changes
    useEffect(() => {
        return () => {
            setIsNavigating(false)
        }
    }, [href])

    return (
        <Link
            href={href}
            onClick={handleClick}
            className={`relative overflow-hidden group ${className}`}
        >
            {/* Ripple effect overlay */}
            <div className={`absolute inset-0 bg-health-100 transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center ${isNavigating ? 'scale-100' : ''
                }`} />

            {/* Content */}
            <span className="relative z-10">{children}</span>

            {/* Navigation indicator */}
            {isNavigating && (
                <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                    <div className="w-4 h-4 border-2 border-health-600 rounded-full border-t-transparent animate-spin"></div>
                </div>
            )}
        </Link>
    )
}
