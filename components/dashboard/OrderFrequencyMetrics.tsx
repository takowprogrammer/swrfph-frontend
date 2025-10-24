'use client'

import { OrderFrequencyMetrics as OrderFrequencyMetricsData } from '@/lib/api'
import { TrendingUp, TrendingDown, Minus, Calendar, BarChart3 } from 'lucide-react'

interface OrderFrequencyMetricsProps {
    data: OrderFrequencyMetricsData
    className?: string
}

export function OrderFrequencyMetrics({ data, className }: OrderFrequencyMetricsProps) {
    if (!data) {
        return (
            <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className || ''}`}>
                <div className="text-center text-gray-500">No frequency data available</div>
            </div>
        )
    }

    const getTrendIcon = () => {
        switch (data.trend) {
            case 'increasing':
                return <TrendingUp className="h-4 w-4 text-green-500" />
            case 'decreasing':
                return <TrendingDown className="h-4 w-4 text-red-500" />
            default:
                return <Minus className="h-4 w-4 text-gray-500" />
        }
    }

    const getTrendColor = () => {
        switch (data.trend) {
            case 'increasing':
                return 'text-green-600'
            case 'decreasing':
                return 'text-red-600'
            default:
                return 'text-gray-600'
        }
    }

    return (
        <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className || ''}`}>
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Order Frequency</h3>
                <p className="text-sm text-gray-600">Your ordering patterns over {data.period}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                        <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="text-sm font-medium text-gray-600">Per Week</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">
                        {data.averageOrdersPerWeek.toFixed(1)}
                    </p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                        <BarChart3 className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-sm font-medium text-gray-600">Per Month</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">
                        {data.averageOrdersPerMonth.toFixed(1)}
                    </p>
                </div>
            </div>

            <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-900">Total Orders</p>
                        <p className="text-2xl font-bold text-gray-900">{data.totalOrders}</p>
                    </div>

                    <div className="text-right">
                        <div className="flex items-center space-x-2">
                            {getTrendIcon()}
                            <span className={`text-sm font-medium ${getTrendColor()}`}>
                                {data.trend.charAt(0).toUpperCase() + data.trend.slice(1)}
                            </span>
                        </div>
                        <p className="text-xs text-gray-500">
                            {data.changePercentage.toFixed(1)}% change
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

