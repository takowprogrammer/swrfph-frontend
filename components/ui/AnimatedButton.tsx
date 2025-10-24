'use client'

import React from 'react'
import { Button } from './button'
import { useRipple } from '@/hooks/useRipple'

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'health' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    children: React.ReactNode
    className?: string
}

export function AnimatedButton({
    variant = 'default',
    size = 'md',
    children,
    className = '',
    onClick,
    ...props
}: AnimatedButtonProps) {
    const { ripples, addRipple } = useRipple()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        addRipple(event)
        if (onClick) {
            onClick(event)
        }
    }

    // Map custom sizes to Button component sizes
    const getButtonSize = (size: 'sm' | 'md' | 'lg') => {
        switch (size) {
            case 'sm': return 'sm'
            case 'md': return 'default'
            case 'lg': return 'lg'
            default: return 'default'
        }
    }

    return (
        <Button
            variant={variant}
            size={getButtonSize(size)}
            className={`relative overflow-hidden ${className}`}
            onClick={handleClick}
            {...props}
        >
            {children}
            {ripples.map(ripple => (
                <span
                    key={ripple.id}
                    className="absolute pointer-events-none animate-ping"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(255, 255, 255, 0.3)',
                        borderRadius: '50%',
                        transform: 'scale(0)',
                        animation: 'ripple 0.6s linear'
                    }}
                />
            ))}
            <style jsx>{`
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `}</style>
        </Button>
    )
}
