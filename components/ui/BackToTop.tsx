'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 p-3 bg-health-600 text-white rounded-full shadow-lg hover:bg-health-700 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                } hover:scale-110 hover:shadow-xl`}
            aria-label="Back to top"
        >
            <ArrowUp className="h-5 w-5" />
        </button>
    )
}
