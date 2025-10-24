'use client'

import { useEffect, useState, useRef } from 'react'

interface AnimatedCounterProps {
    end: number
    duration?: number
    suffix?: string
    prefix?: string
    className?: string
}

export function AnimatedCounter({
    end,
    duration = 2000,
    suffix = '',
    prefix = '',
    className = ''
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const counterRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (counterRef.current) {
            observer.observe(counterRef.current)
        }

        return () => observer.disconnect()
    }, [isVisible])

    useEffect(() => {
        if (!isVisible) return

        let startTime: number
        const startValue = 0

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart)

            setCount(currentCount)

            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }

        requestAnimationFrame(animate)
    }, [isVisible, end, duration])

    return (
        <span ref={counterRef} className={className}>
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    )
}
