'use client'

import { useState, useCallback } from 'react'

interface Ripple {
    x: number
    y: number
    id: number
}

export function useRipple() {
    const [ripples, setRipples] = useState<Ripple[]>([])

    const addRipple = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        const button = event.currentTarget
        const rect = button.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height)
        const x = event.clientX - rect.left - size / 2
        const y = event.clientY - rect.top - size / 2
        const id = Date.now()

        const newRipple = { x, y, id }
        setRipples(prev => [...prev, newRipple])

        // Remove ripple after animation
        setTimeout(() => {
            setRipples(prev => prev.filter(ripple => ripple.id !== id))
        }, 600)
    }, [])

    return { ripples, addRipple }
}
