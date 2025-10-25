'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Package, Calendar, User, CreditCard, MapPin, Phone, Mail } from 'lucide-react'
// Using native JavaScript date formatting instead of date-fns

interface OrderItem {
    medicine: {
        name: string;
        description: string;
        price: number;
    };
    quantity: number;
    price: number;
}

interface Order {
    id: string;
    userId: string;
    status: string;
    totalPrice: number;
    createdAt: string;
    updatedAt: string;
    items: OrderItem[];
    user?: {
        email: string;
        name?: string;
    };
    shippingAddress?: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    };
    paymentMethod?: string;
}

interface OrderDetailsModalProps {
    order: Order | null;
    isOpen: boolean;
    onClose: () => void;
}

export function OrderDetailsModal({ order, isOpen, onClose }: OrderDetailsModalProps) {
    if (!order) return null;

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            case 'processing':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status.toLowerCase()) {
            case 'completed':
                return '✅';
            case 'pending':
                return '⏳';
            case 'cancelled':
                return '❌';
            case 'processing':
                return '🔄';
            default:
                return '📦';
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Package className="h-5 w-5" />
                        Order Details - {order.id}
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                    {/* Order Status and Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg">Order Status</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">{getStatusIcon(order.status)}</span>
                                    <Badge className={getStatusColor(order.status)}>
                                        {order.status.toUpperCase()}
                                    </Badge>
                                </div>
                                <p className="text-sm text-gray-600 mt-2">
                                    Last updated: {new Date(order.updatedAt).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: '2-digit',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg">Order Summary</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Order ID:</span>
                                        <span className="font-mono text-sm">{order.id}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Total Items:</span>
                                        <span>{order.items.length}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Total Amount:</span>
                                        <span className="font-semibold text-lg">
                                            {(() => {
                                                // Remove any $ symbols and parse as number
                                                const cleanPrice = typeof order.totalPrice === 'string'
                                                    ? parseFloat(order.totalPrice.replace(/[$,]/g, ''))
                                                    : order.totalPrice;
                                                return cleanPrice.toFixed(2);
                                            })()} FCFA
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Order Items */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Order Items</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {order.items.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                                        <div className="flex-1">
                                            <h4 className="font-medium">{item.medicine.name}</h4>
                                            <p className="text-sm text-gray-600 mt-1">
                                                {item.medicine.description}
                                            </p>
                                            <div className="flex items-center gap-4 mt-2">
                                                <span className="text-sm text-gray-600">
                                                    Quantity: {item.quantity}
                                                </span>
                                                <span className="text-sm text-gray-600">
                                                    Unit Price: {(() => {
                                                        const cleanPrice = typeof item.medicine.price === 'string' 
                                                            ? parseFloat(item.medicine.price.replace(/[$,]/g, ''))
                                                            : item.medicine.price;
                                                        return cleanPrice.toFixed(2);
                                                    })()} FCFA
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold">
                                                {(() => {
                                                    const cleanPrice = typeof item.medicine.price === 'string' 
                                                        ? parseFloat(item.medicine.price.replace(/[$,]/g, ''))
                                                        : item.medicine.price;
                                                    return (item.quantity * cleanPrice).toFixed(2);
                                                })()} FCFA
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Customer Information */}
                    {order.user && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <User className="h-5 w-5" />
                                    Customer Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-gray-500" />
                                        <span className="text-sm">{order.user.email}</span>
                                    </div>
                                    {order.user.name && (
                                        <div className="flex items-center gap-2">
                                            <User className="h-4 w-4 text-gray-500" />
                                            <span className="text-sm">{order.user.name}</span>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Shipping Address */}
                    {order.shippingAddress && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <MapPin className="h-5 w-5" />
                                    Shipping Address
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-sm">
                                    <p>{order.shippingAddress.street}</p>
                                    <p>
                                        {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                                    </p>
                                    <p>{order.shippingAddress.country}</p>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Payment Information */}
                    {order.paymentMethod && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <CreditCard className="h-5 w-5" />
                                    Payment Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-2">
                                    <CreditCard className="h-4 w-4 text-gray-500" />
                                    <span className="text-sm">{order.paymentMethod}</span>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Order Timeline */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Calendar className="h-5 w-5" />
                                Order Timeline
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <div>
                                        <p className="text-sm font-medium">Order Placed</p>
                                        <p className="text-xs text-gray-600">
                                            {new Date(order.createdAt).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: '2-digit',
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </p>
                                    </div>
                                </div>
                                {order.status === 'completed' && (
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <div>
                                            <p className="text-sm font-medium">Order Completed</p>
                                            <p className="text-xs text-gray-600">
                                                {new Date(order.updatedAt).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: '2-digit',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex justify-end gap-2 pt-4 border-t">
                    <Button variant="outline" onClick={onClose}>
                        Close
                    </Button>
                    {order.status === 'pending' && (
                        <Button className="bg-red-600 hover:bg-red-700">
                            Cancel Order
                        </Button>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}
