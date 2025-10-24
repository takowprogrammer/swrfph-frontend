'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface TableColumn {
    key: string
    label: string
    className?: string
}

interface TableRow {
    [key: string]: React.ReactNode
}

interface AnimatedTableProps {
    columns: TableColumn[]
    data: TableRow[]
    emptyMessage?: string
    className?: string
}

export function AnimatedTable({
    columns,
    data,
    emptyMessage = "No data available",
    className
}: AnimatedTableProps) {
    if (data.length === 0) {
        return (
            <div className={cn("bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center", className)}>
                <div className="text-gray-500 text-lg">{emptyMessage}</div>
            </div>
        )
    }

    return (
        <div className={cn("bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden", className)}>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
                        <tr>
                            {columns.map((column) => (
                                <th
                                    key={column.key}
                                    className={cn(
                                        "px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        column.className
                                    )}
                                >
                                    {column.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((row, index) => (
                            <tr
                                key={typeof row.id === 'string' ? row.id : index}
                                className="hover:bg-gray-50 transition-colors duration-150"
                            >
                                {columns.map((column) => (
                                    <td
                                        key={column.key}
                                        className={cn(
                                            "px-6 py-4 whitespace-nowrap text-sm",
                                            column.className
                                        )}
                                    >
                                        {row[column.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}