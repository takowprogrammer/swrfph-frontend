'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { OrderTrendData } from '@/lib/api'

interface OrderTrendsChartProps {
    data: OrderTrendData[]
    className?: string
}

export function OrderTrendsChart({ data, className }: OrderTrendsChartProps) {
    if (!data || data.length === 0) {
        return (
            <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className || ''}`}>
                <div className="text-center text-gray-500">No trend data available</div>
            </div>
        )
    }

    return (
        <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className || ''}`}>
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Order Trends</h3>
                <p className="text-sm text-gray-600">Track your order volume and spending over time</p>
            </div>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                        dataKey="period"
                        stroke="#666"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        yAxisId="orders"
                        orientation="left"
                        stroke="#666"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        yAxisId="revenue"
                        orientation="right"
                        stroke="#666"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value.toFixed(0)} FCFA`}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                        formatter={(value: number, name: string) => {
                            if (name === 'orders') {
                                return [value, 'Orders']
                            }
                            return [`${value.toFixed(2)} FCFA`, 'Revenue']
                        }}
                        labelStyle={{ color: '#374151', fontWeight: '500' }}
                    />
                    <Legend />
                    <Line
                        yAxisId="orders"
                        type="monotone"
                        dataKey="orders"
                        stroke="#10b981"
                        strokeWidth={2}
                        dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
                        name="Orders"
                    />
                    <Line
                        yAxisId="revenue"
                        type="monotone"
                        dataKey="revenue"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
                        name="Revenue (FCFA)"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

