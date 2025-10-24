'use client'

import { TopOrderedMedicine } from '@/lib/api'
import { Package, TrendingUp, Calendar } from 'lucide-react'

interface TopOrderedMedicinesProps {
    data: TopOrderedMedicine[]
    className?: string
}

export function TopOrderedMedicines({ data, className }: TopOrderedMedicinesProps) {
    if (!data || data.length === 0) {
        return (
            <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className || ''}`}>
                <div className="text-center text-gray-500">No medicine data available</div>
            </div>
        )
    }

    return (
        <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className || ''}`}>
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Top Ordered Medicines</h3>
                <p className="text-sm text-gray-600">Your most frequently ordered items</p>
            </div>

            <div className="space-y-4">
                {data.map((medicine, index) => (
                    <div
                        key={medicine.medicineId}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-sm font-semibold text-green-600">
                                        {index + 1}
                                    </span>
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    {medicine.medicineName}
                                </p>
                                <div className="flex items-center space-x-4 text-xs text-gray-500">
                                    <span className="flex items-center">
                                        <Package className="h-3 w-3 mr-1" />
                                        {medicine.totalQuantity} units
                                    </span>
                                    <span className="flex items-center">
                                        <TrendingUp className="h-3 w-3 mr-1" />
                                        {medicine.totalOrders} orders
                                    </span>
                                    <span className="flex items-center">
                                        <Calendar className="h-3 w-3 mr-1" />
                                        {new Date(medicine.lastOrdered).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">
                                {medicine.averageQuantity.toFixed(1)} avg
                            </p>
                            <p className="text-xs text-gray-500">per order</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

