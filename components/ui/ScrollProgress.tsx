'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
            setScrollProgress(progress)
        }

        window.addEventListener('scroll', updateScrollProgress, { passive: true })
        return () => window.removeEventListener('scroll', updateScrollProgress)
    }, [])

    return (
        <div className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-transparent">
            <div
                className="h-full bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    )
}
