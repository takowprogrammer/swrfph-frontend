'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Search, Filter, X, Calendar, Package, Download } from 'lucide-react'

interface OrderSearchFiltersProps {
    onSearch: (filters: OrderFilters) => void
    onExport: () => void
    onBulkAction: (action: string, selectedIds: string[]) => void
    selectedOrders: string[]
    className?: string
}

export interface OrderFilters {
    search: string
    status: string
    dateFrom: string
    dateTo: string
    medicineName: string
    sortBy: string
    sortOrder: 'asc' | 'desc'
}

export function OrderSearchFilters({
    onSearch,
    onExport,
    onBulkAction,
    selectedOrders,
    className
}: OrderSearchFiltersProps) {
    const [filters, setFilters] = useState<OrderFilters>({
        search: '',
        status: '',
        dateFrom: '',
        dateTo: '',
        medicineName: '',
        sortBy: 'createdAt',
        sortOrder: 'desc'
    })

    const [showFilters, setShowFilters] = useState(false)

    const handleFilterChange = (key: keyof OrderFilters, value: string) => {
        setFilters(prev => ({ ...prev, [key]: value }))
    }

    const handleSearch = () => {
        onSearch(filters)
    }

    const handleClearFilters = () => {
        const clearedFilters = {
            search: '',
            status: '',
            dateFrom: '',
            dateTo: '',
            medicineName: '',
            sortBy: 'createdAt',
            sortOrder: 'desc' as const
        }
        setFilters(clearedFilters)
        onSearch(clearedFilters)
    }

    const hasActiveFilters = Object.values(filters).some(value => value !== '' && value !== 'createdAt' && value !== 'desc')

    return (
        <div className={`space-y-4 ${className || ''}`}>
            {/* Search Bar */}
            <div className="flex items-center space-x-4">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Search orders by ID, status, or medicine name..."
                        value={filters.search}
                        onChange={(e) => handleFilterChange('search', e.target.value)}
                        className="pl-10"
                    />
                </div>
                <Button
                    variant="outline"
                    onClick={() => setShowFilters(!showFilters)}
                    className={showFilters ? 'bg-gray-100' : ''}
                >
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                </Button>
                <Button onClick={handleSearch} className="bg-green-600 hover:bg-green-700">
                    Search
                </Button>
                {hasActiveFilters && (
                    <Button variant="outline" onClick={handleClearFilters}>
                        <X className="h-4 w-4 mr-2" />
                        Clear
                    </Button>
                )}
            </div>

            {/* Advanced Filters */}
            {showFilters && (
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Advanced Filters</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Status
                                </label>
                                <select
                                    value={filters.status}
                                    onChange={(e) => handleFilterChange('status', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    <option value="">All Statuses</option>
                                    <option value="PENDING">Pending</option>
                                    <option value="PROCESSING">Processing</option>
                                    <option value="COMPLETED">Completed</option>
                                    <option value="CANCELLED">Cancelled</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Date From
                                </label>
                                <Input
                                    type="date"
                                    value={filters.dateFrom}
                                    onChange={(e) => handleFilterChange('dateFrom', e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Date To
                                </label>
                                <Input
                                    type="date"
                                    value={filters.dateTo}
                                    onChange={(e) => handleFilterChange('dateTo', e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Medicine Name
                                </label>
                                <Input
                                    placeholder="Filter by medicine..."
                                    value={filters.medicineName}
                                    onChange={(e) => handleFilterChange('medicineName', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Sort By
                                    </label>
                                    <select
                                        value={filters.sortBy}
                                        onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    >
                                        <option value="createdAt">Date Created</option>
                                        <option value="totalPrice">Total Price</option>
                                        <option value="status">Status</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Order
                                    </label>
                                    <select
                                        value={filters.sortOrder}
                                        onChange={(e) => handleFilterChange('sortOrder', e.target.value as 'asc' | 'desc')}
                                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    >
                                        <option value="desc">Newest First</option>
                                        <option value="asc">Oldest First</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Bulk Actions */}
            {selectedOrders.length > 0 && (
                <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Package className="h-5 w-5 text-blue-600" />
                                <span className="text-sm font-medium text-blue-900">
                                    {selectedOrders.length} order{selectedOrders.length !== 1 ? 's' : ''} selected
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => onBulkAction('export', selectedOrders)}
                                >
                                    <Download className="h-4 w-4 mr-2" />
                                    Export Selected
                                </Button>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => onBulkAction('cancel', selectedOrders)}
                                >
                                    Cancel Selected
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Export All Button */}
            <div className="flex justify-end">
                <Button
                    variant="outline"
                    onClick={onExport}
                    className="text-green-600 border-green-500 hover:bg-green-50"
                >
                    <Download className="h-4 w-4 mr-2" />
                    Export All Orders
                </Button>
            </div>
        </div>
    )
}

