'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BaggageClaim, BarChart, Bell, FileText, Package, PlusCircle, User, TrendingUp, TrendingDown, Clock, CheckCircle } from "lucide-react";
import { useAuth } from '@/contexts/AuthContext'
import { apiService } from '@/lib/api'
import { toast } from 'sonner'
import { StatCard } from '@/components/dashboard/StatCard'
import { StatCardSkeleton } from '@/components/dashboard/StatCardSkeleton'
import { AnimatedTable } from '@/components/dashboard/AnimatedTable'
import { StatusPill } from '@/components/dashboard/StatusPill'
import { SpendingChart } from '@/components/dashboard/SpendingChart'
import { QuickActions } from '@/components/dashboard/QuickActions'
import { OrderTrendsChart } from '@/components/dashboard/OrderTrendsChart'
import { TopOrderedMedicines } from '@/components/dashboard/TopOrderedMedicines'
import { SpendingAnalysis } from '@/components/dashboard/SpendingAnalysis'
import { OrderFrequencyMetrics } from '@/components/dashboard/OrderFrequencyMetrics'
import { OrderTemplates } from '@/components/dashboard/OrderTemplates'

interface DashboardStats {
    overview: {
        totalOrders: number;
        pendingOrders: number;
        completedOrders: number;
        totalSpent: number;
        pendingOrdersChange: number;
        completedOrdersChange: number;
        totalSpentChange: number;
    };
    recentOrders: Array<{
        id: string;
        createdAt: string;
        status: string;
        totalPrice: number;
        items: Array<{
            medicine: { name: string };
            quantity: number;
            price: number;
        }>;
    }>;
    monthlySpending: Array<{
        month: string;
        amount: number;
    }>;
    orderTrends: any[];
    topOrderedMedicines: any[];
    spendingAnalysis: any[];
    orderFrequencyMetrics: any;
    orderTemplates: any[];
}

export default function ProviderDashboardPage() {
    const { user } = useAuth()
    const router = useRouter()
    const [stats, setStats] = useState<DashboardStats | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchStats = async () => {
            if (!user) {
                console.log('User not authenticated, skipping stats fetch')
                setLoading(false)
                return
            }

            try {
                console.log('Fetching provider stats...')

                // Fetch dashboard data with individual error handling
                console.log('Fetching dashboard stats...')
                let dashboardStats = null
                try {
                    dashboardStats = await apiService.getProviderStats()
                    console.log('Dashboard stats loaded:', dashboardStats)
                } catch (error) {
                    console.error('Failed to load dashboard stats:', error)
                    throw error // Re-throw this error since it's critical
                }

                console.log('Fetching order trends...')
                let orderTrends: any[] = []
                try {
                    orderTrends = await apiService.getOrderTrends()
                    console.log('Order trends loaded:', orderTrends)
                } catch (error: any) {
                    console.error('Failed to load order trends:', error)
                    console.error('Order trends error details:', error.message, error.status)
                }

                console.log('Fetching top ordered medicines...')
                let topOrderedMedicines: any[] = []
                try {
                    topOrderedMedicines = await apiService.getTopOrderedMedicines()
                    console.log('Top ordered medicines loaded:', topOrderedMedicines)
                } catch (error: any) {
                    console.error('Failed to load top ordered medicines:', error)
                    console.error('Top ordered medicines error details:', error.message, error.status)
                }

                console.log('Fetching spending analysis...')
                let spendingAnalysis: any[] = []
                try {
                    spendingAnalysis = await apiService.getSpendingAnalysis()
                    console.log('Spending analysis loaded:', spendingAnalysis)
                } catch (error: any) {
                    console.error('Failed to load spending analysis:', error)
                    console.error('Spending analysis error details:', error.message, error.status)
                }

                console.log('Fetching order frequency metrics...')
                let orderFrequencyMetrics: any = null
                try {
                    orderFrequencyMetrics = await apiService.getOrderFrequencyMetrics()
                    console.log('Order frequency metrics loaded:', orderFrequencyMetrics)
                } catch (error: any) {
                    console.error('Failed to load order frequency metrics:', error)
                    console.error('Order frequency metrics error details:', error.message, error.status)
                }

                console.log('Fetching order templates...')
                let orderTemplates: any[] = []
                try {
                    // Temporarily disable order templates to fix 500 error
                    // orderTemplates = await apiService.getOrderTemplates()
                    console.log('Order templates temporarily disabled')
                } catch (error: any) {
                    console.error('Failed to load order templates:', error)
                }

                const data: DashboardStats = {
                    overview: (dashboardStats as any)?.overview || {
                        totalOrders: 0,
                        pendingOrders: 0,
                        completedOrders: 0,
                        totalSpent: 0,
                        pendingOrdersChange: 0,
                        completedOrdersChange: 0,
                        totalSpentChange: 0
                    },
                    recentOrders: (dashboardStats as any)?.recentOrders || [],
                    monthlySpending: (dashboardStats as any)?.monthlySpending || [],
                    orderTrends: (orderTrends as any) || [],
                    topOrderedMedicines: (topOrderedMedicines as any) || [],
                    spendingAnalysis: (spendingAnalysis as any) || [],
                    orderFrequencyMetrics: (orderFrequencyMetrics as any) || null,
                    orderTemplates: (orderTemplates as any) || []
                }

                console.log('Provider stats received:', data)
                setStats(data)
            } catch (error) {
                console.error('Failed to fetch provider stats:', error)
                toast.error('Failed to load dashboard data')
            } finally {
                setLoading(false)
            }
        }

        fetchStats()
    }, [user])

    if (loading) {
        return (
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Loading...
                        </h1>
                        <p className="mt-2 text-gray-600">Please wait while we load your dashboard data.</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {[...Array(4)].map((_, index) => (
                            <StatCardSkeleton key={index} delay={index * 0.1} />
                        ))}
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <div className="h-6 bg-gray-200 rounded w-32 mb-4 animate-pulse" />
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                <div className="space-y-4">
                                    {[...Array(3)].map((_, index) => (
                                        <div key={index} className="flex space-x-4">
                                            <div className="h-4 bg-gray-200 rounded flex-1 animate-pulse" />
                                            <div className="h-4 bg-gray-200 rounded flex-1 animate-pulse" />
                                            <div className="h-4 bg-gray-200 rounded flex-1 animate-pulse" />
                                            <div className="h-4 bg-gray-200 rounded flex-1 animate-pulse" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="h-6 bg-gray-200 rounded w-32 mb-4 animate-pulse" />
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                <div className="space-y-4">
                                    {[...Array(3)].map((_, index) => (
                                        <div key={index} className="h-12 bg-gray-200 rounded animate-pulse" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!user) {
        router.push('/login')
        return null
    }

    if (!stats) {
        return (
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-64">
                    <div className="text-lg text-red-600">Failed to load dashboard data</div>
                </div>
            </div>
        );
    }

    const quickStats = [
        {
            title: "Total Orders",
            value: stats.overview.totalOrders.toString(),
            icon: BaggageClaim,
            trend: {
                value: Math.abs(stats.overview.pendingOrdersChange),
                isPositive: stats.overview.pendingOrdersChange >= 0
            }
        },
        {
            title: "Pending Orders",
            value: stats.overview.pendingOrders.toString(),
            icon: Clock,
            trend: {
                value: Math.abs(stats.overview.pendingOrdersChange),
                isPositive: stats.overview.pendingOrdersChange >= 0
            }
        },
        {
            title: "Completed Orders",
            value: stats.overview.completedOrders.toString(),
            icon: CheckCircle,
            trend: {
                value: Math.abs(stats.overview.completedOrdersChange),
                isPositive: stats.overview.completedOrdersChange >= 0
            }
        },
        {
            title: "Total Spent",
            value: `${stats.overview.totalSpent.toLocaleString()} FCFA`,
            icon: BarChart,
            trend: {
                value: Math.abs(stats.overview.totalSpentChange),
                isPositive: stats.overview.totalSpentChange >= 0
            }
        },
    ]

    const quickActions = [
        {
            label: "Place a New Order",
            icon: PlusCircle,
            onClick: () => router.push('/catalog')
        },
        {
            label: "View Order History",
            icon: FileText,
            onClick: () => router.push('/orders')
        },
        {
            label: "Notifications",
            icon: Bell,
            onClick: () => router.push('/notifications')
        },
        {
            label: "Manage Profile",
            icon: User,
            onClick: () => router.push('/settings')
        }
    ]

    const tableColumns = [
        { key: 'id', label: 'Order', className: 'font-medium text-gray-800 w-2/5' },
        { key: 'date', label: 'Date', className: 'text-gray-600 w-1/5' },
        { key: 'status', label: 'Status', className: 'w-1/5' },
        { key: 'total', label: 'Total', className: 'text-right font-medium text-gray-900 w-1/5' },
    ]

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        })
    }

    const tableData = stats.recentOrders.map(order => ({
        id: (
            <div className="flex items-center space-x-2">
                <Package className="h-4 w-4 text-gray-400" />
                <span>#{order.id.substring(0, 8)}...</span>
                <span className="text-xs text-gray-500">({order.items?.length || 0} items)</span>
            </div>
        ),
        date: formatDate(order.createdAt),
        status: <StatusPill status={order.status} />,
        total: `${order.totalPrice.toLocaleString()} FCFA`,
    }))

    return (
        <div>
            <div className="px-4 sm:px-6 lg:px-8 space-y-8">
                {/* Header */}
                <div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        Welcome, {user?.email || 'Healthcare Provider'}
                    </h1>
                    <p className="mt-2 text-gray-600">Here's a summary of your account activity.</p>
                </div>

                {/* Quick Stats */}
                <div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {quickStats.map((stat, index) => (
                            <StatCard
                                key={stat.title}
                                title={stat.title}
                                value={stat.value}
                                icon={stat.icon}
                                trend={stat.trend}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>

                {/* Recent Orders Section */}
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800">Recent Orders</h2>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => router.push('/orders')}
                            className="text-green-600 border-green-500 hover:bg-green-50"
                        >
                            View All
                        </Button>
                    </div>
                    <AnimatedTable
                        columns={tableColumns}
                        data={tableData}
                        emptyMessage="No recent orders found"
                    />
                </div>

                {/* Quick Actions & Monthly Spending Section */}
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Quick Actions Card */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Quick Actions</h2>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <QuickActions actions={quickActions} />
                        </div>
                    </div>

                    {/* Monthly Spending Card */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Monthly Spending</h2>
                        <SpendingChart data={stats.monthlySpending} />
                    </div>
                </div>

                {/* Analytics Section */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Analytics & Insights</h2>

                    {/* Order Trends and Top Medicines */}
                    <div className="grid gap-8 lg:grid-cols-2">
                        <OrderTrendsChart data={stats.orderTrends} />
                        <TopOrderedMedicines data={stats.topOrderedMedicines} />
                    </div>

                    {/* Spending Analysis and Order Frequency */}
                    <div className="grid gap-8 lg:grid-cols-2">
                        <SpendingAnalysis data={stats.spendingAnalysis} />
                        <OrderFrequencyMetrics data={stats.orderFrequencyMetrics} />
                    </div>

                    {/* Order Templates - Temporarily disabled due to 500 error */}
                    {/* <OrderTemplates
                        templates={stats.orderTemplates}
                        onTemplateSelect={(template) => {
                            // Handle template selection - could create order from template
                            toast.success(`Selected template: ${template.name}`)
                        }}
                        onTemplateDelete={async (templateId) => {
                            try {
                                await apiService.deleteOrderTemplate(templateId)
                                // Refresh templates
                                const updatedTemplates = await apiService.getOrderTemplates()
                                setStats(prev => prev ? { ...prev, orderTemplates: updatedTemplates } : null)
                            } catch (error) {
                                toast.error('Failed to delete template')
                            }
                        }}
                        onCreateTemplate={() => {
                            // Navigate to template creation page or open modal
                            toast.info('Template creation feature coming soon!')
                        }}
                    /> */}
                </div>

            </div>
        </div>
    )
}