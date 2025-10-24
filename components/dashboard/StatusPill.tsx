'use client'

import { cn } from '@/lib/utils'

interface StatusPillProps {
    status: string
    className?: string
}

const statusConfig = {
    pending: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-800',
        dot: 'bg-yellow-400'
    },
    processing: {
        bg: 'bg-blue-100',
        text: 'text-blue-800',
        dot: 'bg-blue-400'
    },
    completed: {
        bg: 'bg-green-100',
        text: 'text-green-800',
        dot: 'bg-green-400'
    },
    cancelled: {
        bg: 'bg-red-100',
        text: 'text-red-800',
        dot: 'bg-red-400'
    },
    shipped: {
        bg: 'bg-purple-100',
        text: 'text-purple-800',
        dot: 'bg-purple-400'
    },
    delivered: {
        bg: 'bg-emerald-100',
        text: 'text-emerald-800',
        dot: 'bg-emerald-400'
    }
}

export function StatusPill({ status, className }: StatusPillProps) {
    const config = statusConfig[status.toLowerCase() as keyof typeof statusConfig] || statusConfig.pending

    return (
        <span
            className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105",
                config.bg,
                config.text,
                className
            )}
        >
            <span
                className={cn(
                    "w-1.5 h-1.5 rounded-full mr-1.5 animate-pulse",
                    config.dot
                )}
            />
            {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
    )
}