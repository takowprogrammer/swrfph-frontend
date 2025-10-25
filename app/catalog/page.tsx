'use client'

import { useState, useEffect } from 'react';
import { Search, ShoppingCart, PlusCircle, MinusCircle, XCircle, Filter, Grid, List, ChevronLeft, ChevronRight, User, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { apiService, Medicine } from '@/lib/api';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { NewMedicinesSection } from '@/components/catalog/NewMedicinesSection';
import { CategoryBrowser } from '@/components/catalog/CategoryBrowser';


interface CartItem extends Medicine {
    orderQuantity: number;
}

export default function CatalogPage() {
    const [medicines, setMedicines] = useState<Medicine[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [totalItems, setTotalItems] = useState(0);
    const { user } = useAuth();
    const router = useRouter();


    useEffect(() => {
        const fetchMedicines = async () => {
            try {
                setLoading(true);
                console.log('Fetching medicines...');

                // Simple fetch without complex parameters first
                const response = await fetch('http://localhost:5000/medicines?page=1&limit=12');
                const data = await response.json();
                console.log('API Response:', data);

                if (data.data) {
                    setMedicines(data.data);
                    if (data.pagination) {
                        setTotalItems(data.pagination.total);
                    } else {
                        setTotalItems(data.data.length);
                    }
                } else {
                    setMedicines(data);
                    setTotalItems(data.length);
                }
            } catch (error) {
                console.error("Failed to fetch medicines:", error);
                toast.error(`Failed to load medicine catalog: ${error instanceof Error ? error.message : 'Unknown error'}`);
                setMedicines([]);
                setTotalItems(0);
            } finally {
                setLoading(false);
            }
        };

        fetchMedicines();
    }, []);

    const handleAddToCart = (medicine: Medicine) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === medicine.id);
            if (existingItem) {
                if (existingItem.orderQuantity < medicine.quantity) {
                    toast.success(`${medicine.name} quantity updated in cart.`);
                    return prevCart.map(item =>
                        item.id === medicine.id ? { ...item, orderQuantity: item.orderQuantity + 1 } : item
                    );
                } else {
                    toast.warning(`No more ${medicine.name} in stock.`);
                    return prevCart;
                }
            } else {
                toast.success(`${medicine.name} added to cart.`);
                return [...prevCart, { ...medicine, orderQuantity: 1 }];
            }
        });
    };

    const handleUpdateQuantity = (medicineId: string, newQuantity: number) => {
        setCart(prevCart => {
            const itemToUpdate = prevCart.find(item => item.id === medicineId);
            if (!itemToUpdate) return prevCart;

            if (newQuantity > 0 && newQuantity <= itemToUpdate.quantity) {
                return prevCart.map(item => item.id === medicineId ? { ...item, orderQuantity: newQuantity } : item);
            } else if (newQuantity === 0) {
                return prevCart.filter(item => item.id !== medicineId);
            } else {
                toast.warning(`Only ${itemToUpdate.quantity} of ${itemToUpdate.name} available.`);
                return prevCart;
            }
        });
    };

    const handleRemoveFromCart = (medicineId: string) => {
        setCart(prevCart => prevCart.filter(item => item.id !== medicineId));
        toast.info("Item removed from cart.");
    };

    const handlePlaceOrder = async () => {
        if (cart.length === 0) {
            toast.error("Your cart is empty.");
            return;
        }

        if (!user) {
            toast.error('Please log in to place an order');
            router.push('/login');
            return;
        }

        const orderItems = cart.map(item => ({
            medicineId: item.id,
            quantity: item.orderQuantity,
        }));

        try {
            await apiService.createOrder({ userId: user.id, items: orderItems });

            toast.success('Order placed successfully!');
            setCart([]);
            router.push('/orders'); // Redirect to order history page
        } catch (error: any) {
            console.error("Failed to place order:", error);
            toast.error(`Order failed: ${error.message}`);
        }
    };

    const cartTotal = cart.reduce((total, item) => total + (item.price * item.orderQuantity), 0);

    // Get unique categories (we'll need to fetch all categories separately)
    const [categories, setCategories] = useState<string[]>([]);

    // Fetch categories separately
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await apiService.getMedicinesPublic({ limit: 1000 }); // Get all for categories
                const allMedicines = data.data || data;
                const uniqueCategories = Array.from(new Set(allMedicines.map((med: any) => med.category).filter(Boolean))) as string[];
                setCategories(uniqueCategories);
            } catch (error) {
                console.error("Failed to fetch categories:", error);
            }
        };
        fetchCategories();
    }, []);

    // Pagination calculations
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    // Pagination handlers
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleItemsPerPageChange = (newItemsPerPage: number) => {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1); // Reset to first page
    };

    // Reset to first page when search or category changes
    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
        setCurrentPage(1);
    };

    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value);
        setCurrentPage(1);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Hero Section */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        Medicine Catalog
                    </h1>
                    <p className="text-base text-gray-600 max-w-xl mx-auto">
                        Browse our comprehensive collection of essential medicines for healthcare facilities
                    </p>
                </div>

                {/* User Profile Panel */}
                {user && (
                    <div className="mb-8">
                        <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                                            <User className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">Welcome back, {user.email}</h3>
                                            <p className="text-sm text-gray-600">Ready to place your next order?</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Button
                                            variant="outline"
                                            onClick={() => router.push('/orders')}
                                            className="border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600"
                                        >
                                            <Package className="h-4 w-4 mr-2" />
                                            View Orders
                                        </Button>
                                        <Button
                                            onClick={() => router.push('/dashboard')}
                                            className="bg-green-600 hover:bg-green-700 text-white"
                                        >
                                            Go to Dashboard
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* New Medicines Section */}
                <NewMedicinesSection onAddToCart={handleAddToCart} className="mb-4" />

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Enhanced Category Browser */}
                    <div className="lg:col-span-1">
                        <div className="space-y-6">
                            {/* Search */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Search</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Search medicines..."
                                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            value={searchTerm}
                                            onChange={(e) => handleSearchChange(e.target.value)}
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Category Browser */}
                            <CategoryBrowser
                                categories={categories}
                                selectedCategory={selectedCategory}
                                onCategorySelect={handleCategoryChange}
                                onViewModeChange={setViewMode}
                                viewMode={viewMode}
                            />

                            {/* Items Per Page */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Display Options</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Items per page</label>
                                        <select
                                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            value={itemsPerPage}
                                            onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                                        >
                                            <option value={6}>6 per page</option>
                                            <option value={12}>12 per page</option>
                                            <option value={24}>24 per page</option>
                                            <option value={48}>48 per page</option>
                                        </select>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Medicine Grid/List */}
                    <div className="lg:col-span-2">
                        {loading ? (
                            <div className="flex items-center justify-center h-64">
                                <div className="text-lg text-gray-500">Loading medicines...</div>
                            </div>
                        ) : medicines.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-64 text-center">
                                <div className="text-6xl text-gray-300 mb-4">💊</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">No medicines found</h3>
                                <p className="text-gray-500 mb-4">
                                    {searchTerm || selectedCategory
                                        ? "Try adjusting your search or filter criteria"
                                        : "No medicines are currently available"
                                    }
                                </p>
                                {(searchTerm || selectedCategory) && (
                                    <Button
                                        variant="outline"
                                        onClick={() => {
                                            setSearchTerm('');
                                            setSelectedCategory('');
                                            setCurrentPage(1);
                                        }}
                                        className="border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600"
                                    >
                                        Clear filters
                                    </Button>
                                )}
                            </div>
                        ) : (
                            <>

                                <div className="flex justify-between items-center mb-6">
                                    <p className="text-gray-600">
                                        Showing {startItem}-{endItem} of {totalItems} medicines
                                    </p>
                                    <div className="text-sm text-gray-500">
                                        Page {currentPage} of {totalPages}
                                    </div>
                                </div>

                                {viewMode === 'grid' ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {medicines.map((med) => (
                                            <Card key={med.id} className="hover:shadow-lg transition-shadow duration-200">
                                                <CardHeader>
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <CardTitle className="text-lg">{med.name}</CardTitle>
                                                            <p className="text-sm text-gray-500 mt-1">{med.category}</p>
                                                        </div>
                                                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${med.quantity > 50 ? 'bg-green-100 text-green-800' :
                                                            med.quantity > 20 ? 'bg-yellow-100 text-yellow-800' :
                                                                'bg-red-100 text-red-800'
                                                            }`}>
                                                            {med.quantity} in stock
                                                        </span>
                                                    </div>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{med.description}</p>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-2xl font-bold text-green-600">
                                                            {med.price.toFixed(2)} FCFA
                                                        </span>
                                                        <Button
                                                            onClick={() => handleAddToCart(med)}
                                                            disabled={med.quantity === 0}
                                                            className="bg-green-600 hover:bg-green-700 text-white"
                                                        >
                                                            {med.quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
                                                        </Button>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {medicines.map((med) => (
                                            <Card key={med.id} className="hover:shadow-md transition-shadow duration-200">
                                                <CardContent className="p-6">
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex-1">
                                                            <h3 className="text-lg font-semibold text-gray-900">{med.name}</h3>
                                                            <p className="text-sm text-gray-500 mt-1">{med.category}</p>
                                                            <p className="text-gray-600 mt-2">{med.description}</p>
                                                        </div>
                                                        <div className="flex items-center space-x-4">
                                                            <div className="text-right">
                                                                <p className="text-2xl font-bold text-green-600">
                                                                    {med.price.toFixed(2)} FCFA
                                                                </p>
                                                                <p className="text-sm text-gray-500">
                                                                    {med.quantity} in stock
                                                                </p>
                                                            </div>
                                                            <Button
                                                                onClick={() => handleAddToCart(med)}
                                                                disabled={med.quantity === 0}
                                                                className="bg-green-600 hover:bg-green-700 text-white"
                                                            >
                                                                {med.quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                )}

                                {/* Pagination Controls */}
                                {totalPages > 1 && (
                                    <div className="mt-8 flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handlePageChange(currentPage - 1)}
                                                disabled={currentPage === 1}
                                                className="border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600"
                                            >
                                                <ChevronLeft className="h-4 w-4 mr-1" />
                                                Previous
                                            </Button>

                                            <div className="flex items-center space-x-1">
                                                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                                    let pageNum;
                                                    if (totalPages <= 5) {
                                                        pageNum = i + 1;
                                                    } else if (currentPage <= 3) {
                                                        pageNum = i + 1;
                                                    } else if (currentPage >= totalPages - 2) {
                                                        pageNum = totalPages - 4 + i;
                                                    } else {
                                                        pageNum = currentPage - 2 + i;
                                                    }

                                                    return (
                                                        <Button
                                                            key={pageNum}
                                                            variant={currentPage === pageNum ? "default" : "outline"}
                                                            size="sm"
                                                            onClick={() => handlePageChange(pageNum)}
                                                            className={`w-10 ${currentPage === pageNum
                                                                ? "bg-green-600 hover:bg-green-700 text-white"
                                                                : "border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600"
                                                                }`}
                                                        >
                                                            {pageNum}
                                                        </Button>
                                                    );
                                                })}
                                            </div>

                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handlePageChange(currentPage + 1)}
                                                disabled={currentPage === totalPages}
                                                className="border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600"
                                            >
                                                Next
                                                <ChevronRight className="h-4 w-4 ml-1" />
                                            </Button>
                                        </div>

                                        <div className="text-sm text-gray-500">
                                            {totalItems} total items
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    {/* Shopping Cart Sidebar */}
                    <div className="lg:col-span-1">
                        <Card className="sticky top-8">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <ShoppingCart className="mr-2 h-5 w-5" />
                                    Your Cart ({cart.length})
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {cart.length === 0 ? (
                                    <div className="text-center py-8">
                                        <ShoppingCart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                                        <p className="text-gray-500">Your cart is empty</p>
                                        <p className="text-sm text-gray-400 mt-1">Add some medicines to get started</p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {cart.map(item => (
                                            <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                                <div className="flex-1">
                                                    <p className="font-semibold text-sm">{item.name}</p>
                                                    <p className="text-xs text-gray-500">{item.price.toFixed(2)} FCFA</p>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Button size="sm" variant="ghost" onClick={() => handleUpdateQuantity(item.id, item.orderQuantity - 1)}>
                                                        <MinusCircle className="h-4 w-4" />
                                                    </Button>
                                                    <span className="text-sm font-medium w-6 text-center">{item.orderQuantity}</span>
                                                    <Button size="sm" variant="ghost" onClick={() => handleUpdateQuantity(item.id, item.orderQuantity + 1)}>
                                                        <PlusCircle className="h-4 w-4" />
                                                    </Button>
                                                    <Button size="sm" variant="ghost" className="text-red-500" onClick={() => handleRemoveFromCart(item.id)}>
                                                        <XCircle className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                        <hr className="my-4" />
                                        <div className="flex justify-between font-bold text-lg">
                                            <span>Total:</span>
                                            <span className="text-green-600">{cartTotal.toFixed(2)} FCFA</span>
                                        </div>
                                        <Button
                                            className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white"
                                            onClick={handlePlaceOrder}
                                        >
                                            {user ? 'Place Order' : 'Login to Place Order'}
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

