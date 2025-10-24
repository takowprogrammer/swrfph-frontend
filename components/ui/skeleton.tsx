'use client'

interface SkeletonProps {
    className?: string
    variant?: 'text' | 'circular' | 'rectangular'
    width?: string | number
    height?: string | number
}

export function Skeleton({ 
    className = '', 
    variant = 'rectangular', 
    width, 
    height 
}: SkeletonProps) {
    const baseClasses = 'animate-pulse bg-gray-200'
    
    const variantClasses = {
        text: 'h-4 rounded',
        circular: 'rounded-full',
        rectangular: 'rounded'
    }

    const style = {
        width: width || '100%',
        height: height || '1rem'
    }

    return (
        <div 
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
            style={style}
        />
    )
}

export function SkeletonCard() {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4 mb-4">
                <Skeleton variant="circular" width={48} height={48} />
                <div className="flex-1">
                    <Skeleton width="60%" height={20} className="mb-2" />
                    <Skeleton width="40%" height={16} />
                </div>
            </div>
            <Skeleton height={16} className="mb-2" />
            <Skeleton height={16} className="mb-2" />
            <Skeleton width="80%" height={16} />
        </div>
    )
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
    return (
        <div className="space-y-2">
            {Array.from({ length: lines }).map((_, i) => (
                <Skeleton 
                    key={i} 
                    width={i === lines - 1 ? '60%' : '100%'} 
                    height={16} 
                />
            ))}
        </div>
    )
}