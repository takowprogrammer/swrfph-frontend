'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Package, ChevronRight, Grid, List } from 'lucide-react'

interface CategoryBrowserProps {
    categories: string[]
    selectedCategory: string
    onCategorySelect: (category: string) => void
    onViewModeChange: (mode: 'grid' | 'list') => void
    viewMode: 'grid' | 'list'
    className?: string
}

export function CategoryBrowser({
    categories,
    selectedCategory,
    onCategorySelect,
    onViewModeChange,
    viewMode,
    className
}: CategoryBrowserProps) {
    const [expandedCategories, setExpandedCategories] = useState<string[]>([])

    const toggleCategory = (category: string) => {
        setExpandedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        )
    }

    const getCategoryIcon = (category: string) => {
        // You can customize icons for different categories
        return <Package className="h-4 w-4" />
    }

    const getCategoryColor = (category: string) => {
        const colors = [
            'bg-blue-100 text-blue-800',
            'bg-green-100 text-green-800',
            'bg-purple-100 text-purple-800',
            'bg-orange-100 text-orange-800',
            'bg-pink-100 text-pink-800',
            'bg-indigo-100 text-indigo-800',
            'bg-yellow-100 text-yellow-800',
            'bg-red-100 text-red-800',
        ]

        const index = category.charCodeAt(0) % colors.length
        return colors[index]
    }

    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle className="text-lg">Browse by Category</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* All Categories Option */}
                <Button
                    variant={selectedCategory === '' ? 'default' : 'ghost'}
                    className={`w-full justify-start ${selectedCategory === ''
                            ? 'bg-green-600 hover:bg-green-700 text-white'
                            : 'hover:bg-gray-100'
                        }`}
                    onClick={() => onCategorySelect('')}
                >
                    <Package className="h-4 w-4 mr-2" />
                    All Categories
                    <Badge variant="secondary" className="ml-auto">
                        {categories.length}
                    </Badge>
                </Button>

                {/* Category List */}
                <div className="space-y-2">
                    {categories.map((category, index) => (
                        <div key={category}>
                            <Button
                                variant={selectedCategory === category ? 'default' : 'ghost'}
                                className={`w-full justify-start ${selectedCategory === category
                                        ? 'bg-green-600 hover:bg-green-700 text-white'
                                        : 'hover:bg-gray-100'
                                    }`}
                                onClick={() => onCategorySelect(category)}
                            >
                                {getCategoryIcon(category)}
                                <span className="ml-2 flex-1 text-left">{category}</span>
                                <Badge
                                    variant="secondary"
                                    className={`ml-auto ${selectedCategory === category
                                            ? 'bg-white text-green-600'
                                            : getCategoryColor(category)
                                        }`}
                                >
                                    {index + 1}
                                </Badge>
                            </Button>
                        </div>
                    ))}
                </div>

                {/* View Mode Toggle */}
                <div className="pt-4 border-t">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">View Mode</span>
                    </div>
                    <div className="flex space-x-2">
                        <Button
                            variant={viewMode === 'grid' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => onViewModeChange('grid')}
                            className={`flex-1 ${viewMode === 'grid'
                                    ? 'bg-green-600 hover:bg-green-700 text-white'
                                    : ''
                                }`}
                        >
                            <Grid className="h-4 w-4 mr-1" />
                            Grid
                        </Button>
                        <Button
                            variant={viewMode === 'list' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => onViewModeChange('list')}
                            className={`flex-1 ${viewMode === 'list'
                                    ? 'bg-green-600 hover:bg-green-700 text-white'
                                    : ''
                                }`}
                        >
                            <List className="h-4 w-4 mr-1" />
                            List
                        </Button>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="pt-4 border-t">
                    <div className="text-sm text-gray-600">
                        <div className="flex justify-between">
                            <span>Total Categories:</span>
                            <span className="font-medium">{categories.length}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Selected:</span>
                            <span className="font-medium">
                                {selectedCategory || 'All Categories'}
                            </span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

