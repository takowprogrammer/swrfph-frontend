'use client'

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Download, Search, Filter, Package, Calendar, DollarSign } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { apiService } from '@/lib/api';
import { toast } from 'sonner';
import { OrderSearchFilters, OrderFilters } from '@/components/orders/OrderSearchFilters';
import { ExportService } from '@/lib/exportService';
import { OrderDetailsModal } from '@/components/orders/OrderDetailsModal';

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
    createdAt: string;
    updatedAt: string;
    status: string;
    totalPrice: number;
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

export default function OrderHistoryPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        const fetchOrders = async () => {
            if (!user) return;

            try {
                const data = await apiService.getUserOrders(user.id) as Order[];
                setOrders(data);
                setFilteredOrders(data);
            } catch (error) {
                console.error('Failed to fetch orders:', error);
                toast.error('Failed to load order history');
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [user]);

    const handleSearch = (filters: OrderFilters) => {
        let filtered = [...orders];

        // Apply search filter
        if (filters.search) {
            const searchTerm = filters.search.toLowerCase();
            filtered = filtered.filter(order =>
                order.id.toLowerCase().includes(searchTerm) ||
                order.status.toLowerCase().includes(searchTerm) ||
                order.items.some(item =>
                    item.medicine.name.toLowerCase().includes(searchTerm)
                )
            );
        }

        // Apply status filter
        if (filters.status) {
            filtered = filtered.filter(order =>
                order.status.toLowerCase() === filters.status.toLowerCase()
            );
        }

        // Apply date filters
        if (filters.dateFrom) {
            filtered = filtered.filter(order =>
                new Date(order.createdAt) >= new Date(filters.dateFrom!)
            );
        }

        if (filters.dateTo) {
            filtered = filtered.filter(order =>
                new Date(order.createdAt) <= new Date(filters.dateTo!)
            );
        }

        // Apply medicine name filter
        if (filters.medicineName) {
            const medicineTerm = filters.medicineName.toLowerCase();
            filtered = filtered.filter(order =>
                order.items.some(item =>
                    item.medicine.name.toLowerCase().includes(medicineTerm)
                )
            );
        }

        // Apply sorting
        filtered.sort((a, b) => {
            let aValue, bValue;

            switch (filters.sortBy) {
                case 'totalPrice':
                    aValue = a.totalPrice;
                    bValue = b.totalPrice;
                    break;
                case 'status':
                    aValue = a.status;
                    bValue = b.status;
                    break;
                default:
                    aValue = new Date(a.createdAt).getTime();
                    bValue = new Date(b.createdAt).getTime();
            }

            if (filters.sortOrder === 'asc') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });

        setFilteredOrders(filtered);
    };

    const handleSelectOrder = (orderId: string, checked: boolean) => {
        if (checked) {
            setSelectedOrders(prev => [...prev, orderId]);
        } else {
            setSelectedOrders(prev => prev.filter(id => id !== orderId));
        }
    };

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedOrders(filteredOrders.map(order => order.id));
        } else {
            setSelectedOrders([]);
        }
    };

    const handleBulkAction = async (action: string, orderIds: string[]) => {
        switch (action) {
            case 'export':
                await ExportService.exportOrders(orders, {
                    format: 'csv',
                    orderIds: orderIds
                });
                toast.success('Orders exported successfully');
                break;
            case 'cancel':
                // Implement cancel orders logic
                toast.info('Cancel orders feature coming soon');
                break;
            default:
                toast.error('Unknown action');
        }
    };

    const handleExportAll = async () => {
        await ExportService.exportOrders(orders, {
            format: 'pdf'
        });
        toast.success('All orders exported successfully');
    };

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'processing':
                return 'bg-blue-100 text-blue-800';
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    if (loading) {
        return (
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Order History</h1>
                        <p className="mt-2 text-gray-600">Loading your order history...</p>
                    </div>
                    <div className="grid gap-4">
                        {[...Array(3)].map((_, index) => (
                            <Card key={index} className="animate-pulse">
                                <CardContent className="p-6">
                                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Order History</h1>
                    <p className="mt-2 text-gray-600">View and manage your order history</p>
                </div>

                {/* Search and Filters */}
                <OrderSearchFilters
                    onSearch={handleSearch}
                    onExport={handleExportAll}
                    onBulkAction={handleBulkAction}
                    selectedOrders={selectedOrders}
                />

                {/* Orders List */}
                <div className="space-y-4">
                    {filteredOrders.length === 0 ? (
                        <Card>
                            <CardContent className="p-8 text-center">
                                <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Orders Found</h3>
                                <p className="text-gray-600">
                                    {orders.length === 0
                                        ? "You haven't placed any orders yet."
                                        : "No orders match your current filters."
                                    }
                                </p>
                            </CardContent>
                        </Card>
                    ) : (
                        <>
                            {/* Orders Table Header */}
                            <Card>
                                <CardContent className="p-4">
                                    <div className="flex items-center space-x-4">
                                        <Checkbox
                                            checked={selectedOrders.length === filteredOrders.length && filteredOrders.length > 0}
                                            onCheckedChange={handleSelectAll}
                                        />
                                        <span className="text-sm font-medium text-gray-700">
                                            Select All ({filteredOrders.length} orders)
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Orders List */}
                            {filteredOrders.map((order) => (
                                <Card key={order.id} className="hover:shadow-md transition-shadow">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-start space-x-4">
                                                <Checkbox
                                                    checked={selectedOrders.includes(order.id)}
                                                    onCheckedChange={(checked) =>
                                                        handleSelectOrder(order.id, checked as boolean)
                                                    }
                                                />
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-4 mb-2">
                                                        <h3 className="text-lg font-semibold text-gray-900">
                                                            Order #{order.id.substring(0, 8)}...
                                                        </h3>
                                                        <Badge className={getStatusColor(order.status)}>
                                                            {order.status}
                                                        </Badge>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <Calendar className="h-4 w-4 mr-2" />
                                                            {new Date(order.createdAt).toLocaleDateString()}
                                                        </div>
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <Package className="h-4 w-4 mr-2" />
                                                            {order.items.length} items
                                                        </div>
                                                        <div className="flex items-center text-sm text-gray-600">
                                                            <DollarSign className="h-4 w-4 mr-2" />
                                                            {(() => {
                                                                // Remove any $ symbols and parse as number
                                                                const price = order.totalPrice;
                                                                const cleanPrice = typeof price === 'string' 
                                                                    ? parseFloat((price as string).replace(/[$,]/g, ''))
                                                                    : Number(price);
                                                                return cleanPrice.toFixed(2);
                                                            })()} FCFA
                                                        </div>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <h4 className="text-sm font-medium text-gray-900">Medicines:</h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {order.items.map((item, index) => (
                                                                <span
                                                                    key={index}
                                                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                                                                >
                                                                    {item.medicine.name} (x{item.quantity})
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center space-x-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => {
                                                        setSelectedOrder(order);
                                                        setIsModalOpen(true);
                                                    }}
                                                >
                                                    <Package className="h-4 w-4 mr-2" />
                                                    View Details
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() =>
                                                        ExportService.exportOrders([order], { format: 'pdf' })
                                                    }
                                                >
                                                    <Download className="h-4 w-4 mr-2" />
                                                    Export
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </>
                    )}
                </div>
            </div>

            {/* Order Details Modal */}
            <OrderDetailsModal
                order={selectedOrder}
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setSelectedOrder(null);
                }}
            />
        </div>
    );
}