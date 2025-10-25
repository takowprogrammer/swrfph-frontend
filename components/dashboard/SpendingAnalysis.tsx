'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { SpendingAnalysis as SpendingAnalysisData } from '@/lib/api'

interface SpendingAnalysisProps {
    data: SpendingAnalysisData[]
    className?: string
}

const COLORS = [
    '#10b981', // green
    '#3b82f6', // blue
    '#f59e0b', // amber
    '#ef4444', // red
    '#8b5cf6', // violet
    '#06b6d4', // cyan
    '#84cc16', // lime
    '#f97316', // orange
]

export function SpendingAnalysis({ data, className }: SpendingAnalysisProps) {
    if (!data || data.length === 0) {
        return (
            <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className || ''}`}>
                <div className="text-center text-gray-500">No spending data available</div>
            </div>
        )
    }

    const chartData = data.map((item, index) => ({
        ...item,
        color: COLORS[index % COLORS.length]
    }))

    return (
        <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className || ''}`}>
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Spending Analysis</h3>
                <p className="text-sm text-gray-600">Breakdown by medicine categories</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Pie Chart */}
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ category, percentage }) => `${category}: ${(percentage as number).toFixed(1)}%`}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="totalSpent"
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                formatter={(value: number) => [`${value.toFixed(2)} FCFA`, 'Amount']}
                                contentStyle={{
                                    backgroundColor: 'white',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Detailed List */}
                <div className="space-y-3">
                    {data.map((item, index) => (
                        <div
                            key={item.category}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                            <div className="flex items-center space-x-3">
                                <div
                                    className="w-4 h-4 rounded-full"
                                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                />
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{item.category}</p>
                                    <p className="text-xs text-gray-500">{item.orderCount} orders</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-gray-900">
                                    {item.totalSpent.toFixed(2)} FCFA
                                </p>
                                <p className="text-xs text-gray-500">
                                    {item.percentage.toFixed(1)}%
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
