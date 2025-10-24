'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatCardProps {
    title: string
    value: string
    icon: LucideIcon
    trend?: {
        value: number
        isPositive: boolean
    }
    delay?: number
    className?: string
}

export function StatCard({
    title,
    value,
    icon: Icon,
    trend,
    delay = 0,
    className
}: StatCardProps) {
    return (
        <div className={cn("group", className)}>
            <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                    <CardTitle className="text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors">
                        {title}
                    </CardTitle>
                    <div className="group-hover:rotate-5 group-hover:scale-110 transition-transform duration-200">
                        <Icon className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors" />
                    </div>
                </CardHeader>

                <CardContent className="relative z-10">
                    <div className="text-2xl font-bold text-gray-900">
                        {value}
                    </div>

                    {trend && (
                        <div className={cn(
                            "flex items-center text-xs font-medium mt-1",
                            trend.isPositive ? "text-green-600" : "text-red-600"
                        )}>
                            <span className="animate-pulse">
                                {trend.isPositive ? '↗' : '↘'}
                            </span>
                            <span className="ml-1">
                                {Math.abs(trend.value)}% from last month
                            </span>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}