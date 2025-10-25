'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Package, TrendingUp, Clock, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'
import { apiService } from '@/lib/api'
import { toast } from 'sonner'

interface StockDetails {
    medicine: {
        id: string;
        name: string;
        quantity: number;
        category: string;
        price: number;
        description: string;
        createdAt: string;
        updatedAt: string;
    };
    stockLevel: 'critical' | 'low' | 'warning' | 'good';
    averageDailyUsage: number;
    daysRemaining: number | null;
    recentActivity: Array<{
        id: string;
        quantity: number;
        order: {
            id: string;
            status: string;
            createdAt: string;
            user: {
                email: string;
            };
        };
    }>;
    recommendations: string[];
}

interface StockDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    medicineId: string | null;
}

export function StockDetailsModal({ isOpen, onClose, medicineId }: StockDetailsModalProps) {
    const [details, setDetails] = useState<StockDetails | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isOpen && medicineId) {
            fetchStockDetails();
        }
    }, [isOpen, medicineId]);

    const fetchStockDetails = async () => {
        if (!medicineId) return;

        try {
            setLoading(true);
            const data = await apiService.getStockDetails(medicineId) as StockDetails;
            setDetails(data);
        } catch (error) {
            console.error('Failed to fetch stock details:', error);
            toast.error('Failed to load stock details');
        } finally {
            setLoading(false);
        }
    };

    const getStockLevelColor = (level: string) => {
        switch (level) {
            case 'critical': return 'bg-red-100 text-red-800 border-red-200';
            case 'low': return 'bg-orange-100 text-orange-800 border-orange-200';
            case 'warning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'good': return 'bg-green-100 text-green-800 border-green-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getStockLevelIcon = (level: string) => {
        switch (level) {
            case 'critical': return <XCircle className="w-4 h-4" />;
            case 'low': return <AlertTriangle className="w-4 h-4" />;
            case 'warning': return <Clock className="w-4 h-4" />;
            case 'good': return <CheckCircle className="w-4 h-4" />;
            default: return <Package className="w-4 h-4" />;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'PENDING': return 'bg-yellow-100 text-yellow-800';
            case 'CONFIRMED': return 'bg-blue-100 text-blue-800';
            case 'SHIPPED': return 'bg-purple-100 text-purple-800';
            case 'DELIVERED': return 'bg-green-100 text-green-800';
            case 'CANCELLED': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    if (!details && !loading) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="flex items-center space-x-2">
                        <Package className="w-5 h-5" />
                        <span>Stock Details</span>
                    </DialogTitle>
                </DialogHeader>

                {loading ? (
                    <div className="flex items-center justify-center py-8">
                        <div className="text-lg">Loading stock details...</div>
                    </div>
                ) : details ? (
                    <div className="space-y-6">
                        {/* Medicine Overview */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle className="text-xl">{details.medicine.name}</CardTitle>
                                        <p className="text-sm text-gray-500 mt-1">{details.medicine.category}</p>
                                    </div>
                                    <Badge className={getStockLevelColor(details.stockLevel)}>
                                        {getStockLevelIcon(details.stockLevel)}
                                        <span className="ml-1 capitalize">{details.stockLevel}</span>
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500">Current Stock</p>
                                        <p className="text-2xl font-bold text-gray-900">{details.medicine.quantity}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Price</p>
                                        <p className="text-2xl font-bold text-green-600">{details.medicine.price.toFixed(2)} FCFA</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Daily Usage</p>
                                        <p className="text-2xl font-bold text-blue-600">{details.averageDailyUsage}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Days Remaining</p>
                                        <p className="text-2xl font-bold text-orange-600">
                                            {details.daysRemaining || 'N/A'}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 mt-4">{details.medicine.description}</p>
                            </CardContent>
                        </Card>

                        {/* Recommendations */}
                        {details.recommendations.length > 0 && (
                            <Alert className={details.stockLevel === 'critical' ? 'border-red-200 bg-red-50' :
                                details.stockLevel === 'low' ? 'border-orange-200 bg-orange-50' :
                                    'border-yellow-200 bg-yellow-50'}>
                                <AlertTriangle className="h-4 w-4" />
                                <AlertDescription>
                                    <div className="space-y-1">
                                        {details.recommendations.map((rec, index) => (
                                            <p key={index} className="text-sm">{rec}</p>
                                        ))}
                                    </div>
                                </AlertDescription>
                            </Alert>
                        )}

                        {/* Recent Activity */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <TrendingUp className="w-5 h-5" />
                                    <span>Recent Activity (Last 30 Days)</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {details.recentActivity.length === 0 ? (
                                    <p className="text-gray-500 text-center py-4">No recent activity</p>
                                ) : (
                                    <div className="space-y-3">
                                        {details.recentActivity.map((activity) => (
                                            <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                        <Package className="w-4 h-4 text-blue-600" />
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-gray-900">
                                                            {activity.quantity} units ordered
                                                        </p>
                                                        <p className="text-sm text-gray-500">
                                                            by {activity.order.user.email}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <Badge className={getStatusColor(activity.order.status)}>
                                                        {activity.order.status}
                                                    </Badge>
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        {new Date(activity.order.createdAt).toLocaleDateString()}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Action Buttons */}
                        <div className="flex justify-end space-x-3">
                            <Button variant="outline" onClick={onClose}>
                                Close
                            </Button>
                            <Button
                                className="bg-green-600 hover:bg-green-700"
                                onClick={() => {
                                    // Navigate to inventory management
                                    window.open('/inventory', '_blank');
                                }}
                            >
                                Manage Inventory
                            </Button>
                        </div>
                    </div>
                ) : null}
            </DialogContent>
        </Dialog>
    );
}
