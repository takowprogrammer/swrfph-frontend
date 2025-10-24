'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Package, Plus, Star, Calendar } from 'lucide-react'
import { apiService, Medicine } from '@/lib/api'
import { toast } from 'sonner'

interface NewMedicinesSectionProps {
    onAddToCart: (medicine: Medicine) => void
    className?: string
}

export function NewMedicinesSection({ onAddToCart, className }: NewMedicinesSectionProps) {
    const [newMedicines, setNewMedicines] = useState<Medicine[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchNewMedicines = async () => {
            try {
                setLoading(true)
                const announcements = await apiService.getNewMedicineAnnouncements(6)
                // Transform NewMedicineAnnouncement to Medicine format
                const medicines: Medicine[] = (announcements as any[]).map((announcement: any) => ({
                    id: announcement.medicineId,
                    name: announcement.medicineName,
                    description: announcement.description,
                    price: announcement.price,
                    quantity: 100, // Default quantity for new medicines
                    category: announcement.category,
                    createdAt: announcement.addedDate,
                    updatedAt: announcement.addedDate
                }))
                setNewMedicines(medicines)
            } catch (error) {
                console.error('Failed to fetch new medicines:', error)
                toast.error('Failed to load new medicines')
            } finally {
                setLoading(false)
            }
        }

        fetchNewMedicines()
    }, [])

    if (loading) {
        return (
            <div className={`space-y-4 ${className || ''}`}>
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-gray-900">New Medicines</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[...Array(4)].map((_, index) => (
                        <Card key={index} className="animate-pulse">
                            <CardContent className="p-4">
                                <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                                <div className="h-2 bg-gray-200 rounded w-1/2 mb-3"></div>
                                <div className="h-6 bg-gray-200 rounded"></div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        )
    }

    if (!newMedicines || newMedicines.length === 0) {
        return null
    }

    return (
        <div className={`space-y-4 ${className || ''}`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <h2 className="text-lg font-bold text-gray-900">New Medicines</h2>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                        <Star className="h-3 w-3 mr-1" />
                        Recently Added
                    </Badge>
                </div>
                <Button variant="outline" size="sm" className="text-xs">
                    View All
                </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {newMedicines.map((medicine) => (
                    <Card key={medicine.id} className="group hover:shadow-lg transition-shadow duration-200">
                        <CardHeader className="pb-2">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <CardTitle className="text-sm group-hover:text-green-600 transition-colors line-clamp-2">
                                        {medicine.name}
                                    </CardTitle>
                                    <div className="flex items-center space-x-1 mt-1">
                                        <Badge variant="outline" className="text-xs px-1 py-0">
                                            {medicine.category || 'Uncategorized'}
                                        </Badge>
                                    </div>
                                </div>
                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                    <Package className="h-4 w-4 text-green-600" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                            {medicine.description && (
                                <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                                    {medicine.description}
                                </p>
                            )}

                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <p className="text-lg font-bold text-gray-900">
                                        {medicine.price.toLocaleString()} FCFA
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {medicine.quantity} in stock
                                    </p>
                                </div>
                            </div>

                            <Button
                                onClick={() => onAddToCart(medicine)}
                                disabled={medicine.quantity === 0}
                                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-xs py-1"
                            >
                                <Plus className="h-3 w-3 mr-1" />
                                {medicine.quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
