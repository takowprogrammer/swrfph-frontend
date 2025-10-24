'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import {
    Bell,
    CheckCircle,
    Clock,
    AlertTriangle,
    Info,
    Package,
    DollarSign,
    Calendar,
    Filter,
    CheckCheck,
    Trash2,
    Eye
} from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { apiService, Notification, NotificationStats } from '@/lib/api'
import { toast } from 'sonner'

const notificationTypes = {
    ORDER: {
        icon: Package,
        color: 'bg-blue-100 text-blue-800',
        iconColor: 'text-blue-600'
    },
    PRICE_CHANGE: {
        icon: DollarSign,
        color: 'bg-yellow-100 text-yellow-800',
        iconColor: 'text-yellow-600'
    },
    STOCK_ALERT: {
        icon: AlertTriangle,
        color: 'bg-red-100 text-red-800',
        iconColor: 'text-red-600'
    },
    SYSTEM: {
        icon: Info,
        color: 'bg-gray-100 text-gray-800',
        iconColor: 'text-gray-600'
    },
    PROMOTION: {
        icon: Bell,
        color: 'bg-green-100 text-green-800',
        iconColor: 'text-green-600'
    },
    INVENTORY: {
        icon: Package,
        color: 'bg-purple-100 text-purple-800',
        iconColor: 'text-purple-600'
    },
    SHIPMENT: {
        icon: Package,
        color: 'bg-indigo-100 text-indigo-800',
        iconColor: 'text-indigo-600'
    }
}

export default function NotificationsPage() {
    const { user, loading: authLoading } = useAuth()
    const [notifications, setNotifications] = useState<Notification[]>([])
    const [stats, setStats] = useState<NotificationStats | null>(null)
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all')
    const [typeFilter, setTypeFilter] = useState<string>('all')
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Don't redirect - let the auth context handle it
    // useEffect(() => {
    //     console.log('Notifications page auth check:', { authLoading, user: !!user, userEmail: user?.email });
    //     if (!authLoading && !user) {
    //         console.log('Redirecting to login - no user found');
    //         window.location.href = '/login'
    //     }
    // }, [user, authLoading])

    useEffect(() => {
        const fetchNotifications = async () => {
            console.log('fetchNotifications called with user:', !!user, user?.email);
            if (!user) {
                console.log('No user, skipping fetch');
                setLoading(false)
                return
            }

            try {
                console.log('Fetching notifications...');
                setLoading(true)

                // Fetch from backend API
                const response = await apiService.getNotifications({
                    page: currentPage,
                    limit: 20,
                    type: typeFilter === 'all' ? undefined : typeFilter,
                    sortBy: 'createdAt',
                    sortOrder: 'desc'
                })

                console.log('Notifications response:', response);
                setNotifications((response as any).data || [])
                setTotalPages((response as any).pagination?.pages || 1)
            } catch (error: any) {
                console.error('Failed to fetch notifications:', error)
                toast.error('Unable to load notifications at this time')
            } finally {
                setLoading(false)
            }
        }

        fetchNotifications()
    }, [user, currentPage, typeFilter])

    useEffect(() => {
        const fetchStats = async () => {
            if (!user) return

            try {
                const stats = await apiService.getNotificationStats()
                setStats(stats)
            } catch (error) {
                console.error('Failed to fetch notification stats:', error)
            }
        }

        fetchStats()
    }, [user])

    const filteredNotifications = notifications.filter(notification => {
        const matchesFilter = filter === 'all' ||
            (filter === 'unread' && !notification.isRead) ||
            (filter === 'read' && notification.isRead)

        const matchesType = typeFilter === 'all' || notification.type === typeFilter

        return matchesFilter && matchesType
    })

    const unreadCount = stats?.unread || 0

    const handleNotificationClick = (notification: Notification) => {
        setSelectedNotification(notification)
        setIsModalOpen(true)

        // Mark as read if unread
        if (!notification.isRead) {
            markAsRead(notification.id)
        }
    }

    const markAsRead = async (notificationId: string) => {
        try {
            await apiService.markNotificationAsRead(notificationId)
            // Refresh notifications from backend to get updated state
            const response = await apiService.getNotifications({
                page: currentPage,
                limit: 20,
                type: typeFilter === 'all' ? undefined : typeFilter,
                sortBy: 'createdAt',
                sortOrder: 'desc'
            })
            setNotifications((response as any).data || [])
            // Refresh stats
            const statsResponse = await apiService.getNotificationStats()
            setStats(statsResponse)
            // Dispatch event to update sidebar count
            window.dispatchEvent(new CustomEvent('notificationUpdated'))
            toast.success('Notification marked as read')
        } catch (error) {
            console.error('Failed to mark notification as read:', error)
            toast.error('Failed to mark notification as read')
        }
    }

    const markAllAsRead = async () => {
        try {
            await apiService.markAllNotificationsAsRead()
            // Refresh notifications from backend to get updated state
            const response = await apiService.getNotifications({
                page: currentPage,
                limit: 20,
                type: typeFilter === 'all' ? undefined : typeFilter,
                sortBy: 'createdAt',
                sortOrder: 'desc'
            })
            setNotifications((response as any).data || [])
            // Refresh stats
            const statsResponse = await apiService.getNotificationStats()
            setStats(statsResponse)
            // Dispatch event to update sidebar count
            window.dispatchEvent(new CustomEvent('notificationUpdated'))
            toast.success('All notifications marked as read')
        } catch (error) {
            console.error('Failed to mark all notifications as read:', error)
            toast.error('Failed to mark all notifications as read')
        }
    }

    const deleteNotification = async (notificationId: string) => {
        try {
            await apiService.deleteNotification(notificationId)
            setNotifications(prev => prev.filter(n => n.id !== notificationId))
            // Update stats
            if (stats) {
                const deletedNotification = notifications.find(n => n.id === notificationId)
                if (deletedNotification && !deletedNotification.isRead) {
                    setStats(prev => prev ? { ...prev, unread: Math.max(0, prev.unread - 1), total: prev.total - 1 } : null)
                } else if (deletedNotification) {
                    setStats(prev => prev ? { ...prev, total: prev.total - 1 } : null)
                }
            }
            toast.success('Notification deleted')
        } catch (error) {
            console.error('Failed to delete notification:', error)
            toast.error('Failed to delete notification')
        }
    }

    const formatTimeAgo = (dateString: string) => {
        const date = new Date(dateString)
        const now = new Date()
        const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))

        if (diffInMinutes < 1) return 'Just now'
        if (diffInMinutes < 60) return `${diffInMinutes}m ago`
        if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`
        return `${Math.floor(diffInMinutes / 1440)}d ago`
    }

    // Show loading while checking authentication
    if (authLoading) {
        return (
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex items-center justify-center h-64">
                    <div className="text-lg text-gray-500">Loading...</div>
                </div>
            </div>
        )
    }

    // Don't render if not authenticated (will redirect)
    if (!user) {
        return null
    }

    if (loading) {
        return (
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="space-y-6">
                    <div className="h-8 bg-gray-200 rounded w-64 animate-pulse" />
                    <div className="space-y-4">
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="h-20 bg-gray-200 rounded animate-pulse" />
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
                        <p className="mt-1 text-gray-600">
                            Stay updated with your orders and important alerts
                        </p>
                    </div>
                    <div className="flex items-center space-x-3">
                        {unreadCount > 0 && (
                            <Badge variant="destructive" className="text-sm">
                                {unreadCount} unread
                            </Badge>
                        )}
                        <Button
                            onClick={markAllAsRead}
                            variant="outline"
                            size="sm"
                            disabled={unreadCount === 0}
                        >
                            <CheckCheck className="h-4 w-4 mr-2" />
                            Mark All Read
                        </Button>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                        <Filter className="h-4 w-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-700">Filter:</span>
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value as any)}
                            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                            <option value="all">All</option>
                            <option value="unread">Unread</option>
                            <option value="read">Read</option>
                        </select>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-700">Type:</span>
                        <select
                            value={typeFilter}
                            onChange={(e) => setTypeFilter(e.target.value)}
                            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                            <option value="all">All Types</option>
                            <option value="ORDER">Order Updates</option>
                            <option value="PRICE_CHANGE">Price Changes</option>
                            <option value="STOCK_ALERT">Stock Alerts</option>
                            <option value="SYSTEM">System</option>
                            <option value="PROMOTION">Promotions</option>
                            <option value="INVENTORY">Inventory</option>
                            <option value="SHIPMENT">Shipment</option>
                        </select>
                    </div>
                </div>

                {/* Notifications List */}
                <div className="space-y-4">
                    {filteredNotifications.length === 0 ? (
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center py-12">
                                <Bell className="h-12 w-12 text-gray-300 mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">No notifications</h3>
                                <p className="text-gray-500 text-center">
                                    {filter === 'unread'
                                        ? "You're all caught up! No unread notifications."
                                        : "No notifications match your current filters."
                                    }
                                </p>
                            </CardContent>
                        </Card>
                    ) : (
                        filteredNotifications.map((notification) => {
                            const typeConfig = notificationTypes[notification.type] || notificationTypes.SYSTEM
                            const IconComponent = typeConfig.icon

                            return (
                                <Card
                                    key={notification.id}
                                    className={`transition-all duration-200 hover:shadow-md cursor-pointer ${!notification.isRead ? 'border-l-4 border-l-green-500 bg-green-50/30' : ''
                                        }`}
                                    onClick={() => handleNotificationClick(notification)}
                                >
                                    <CardContent className="p-4">
                                        <div className="flex items-start space-x-3">
                                            <div className={`p-1.5 rounded-full ${typeConfig.color}`}>
                                                <IconComponent className={`h-4 w-4 ${typeConfig.iconColor}`} />
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between">
                                                    <div className="flex-1">
                                                        <div className="flex items-center space-x-2 mb-1">
                                                            <h3 className={`text-sm font-semibold line-clamp-1 ${!notification.isRead ? 'text-gray-900' : 'text-gray-700'
                                                                }`}>
                                                                {notification.event}
                                                            </h3>
                                                            {!notification.isRead && (
                                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                                                            )}
                                                        </div>
                                                        <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                                                            {notification.details}
                                                        </p>
                                                        <div className="flex items-center space-x-3 text-xs text-gray-500">
                                                            <div className="flex items-center space-x-1">
                                                                <Calendar className="h-3 w-3" />
                                                                <span>{formatTimeAgo(notification.createdAt)}</span>
                                                            </div>
                                                            <Badge
                                                                variant="outline"
                                                                className={`text-xs px-1.5 py-0.5 ${typeConfig.color}`}
                                                            >
                                                                {notification.type.replace('_', ' ')}
                                                            </Badge>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center space-x-1 ml-2">
                                                        <Button
                                                            size="sm"
                                                            variant="ghost"
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                handleNotificationClick(notification)
                                                            }}
                                                            className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-1 h-6 w-6"
                                                        >
                                                            <Eye className="h-3 w-3" />
                                                        </Button>
                                                        {!notification.isRead && (
                                                            <Button
                                                                size="sm"
                                                                variant="ghost"
                                                                onClick={(e) => {
                                                                    e.stopPropagation()
                                                                    markAsRead(notification.id)
                                                                }}
                                                                className="text-green-600 hover:text-green-700 hover:bg-green-50 p-1 h-6 w-6"
                                                            >
                                                                <CheckCircle className="h-3 w-3" />
                                                            </Button>
                                                        )}
                                                        <Button
                                                            size="sm"
                                                            variant="ghost"
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                deleteNotification(notification.id)
                                                            }}
                                                            className="text-red-600 hover:text-red-700 hover:bg-red-50 p-1 h-6 w-6"
                                                        >
                                                            <Trash2 className="h-3 w-3" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })
                    )}
                </div>
            </div>

            {/* Notification Details Modal */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className="flex items-center space-x-2">
                            {selectedNotification && (
                                <>
                                    <div className={`p-2 rounded-full ${notificationTypes[selectedNotification.type]?.color || notificationTypes.SYSTEM.color}`}>
                                        {(() => {
                                            const IconComponent = notificationTypes[selectedNotification.type]?.icon || notificationTypes.SYSTEM.icon
                                            return <IconComponent className={`h-5 w-5 ${notificationTypes[selectedNotification.type]?.iconColor || notificationTypes.SYSTEM.iconColor}`} />
                                        })()}
                                    </div>
                                    <span>{selectedNotification.event}</span>
                                    {!selectedNotification.isRead && (
                                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                                            New
                                        </Badge>
                                    )}
                                </>
                            )}
                        </DialogTitle>
                        <div className="space-y-4">
                            {selectedNotification && (
                                <>
                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                        <div className="flex items-center space-x-1">
                                            <Calendar className="h-4 w-4" />
                                            <span>{new Date(selectedNotification.createdAt).toLocaleString()}</span>
                                        </div>
                                        <Badge
                                            variant="outline"
                                            className={`${notificationTypes[selectedNotification.type]?.color || notificationTypes.SYSTEM.color}`}
                                        >
                                            {selectedNotification.type.replace('_', ' ')}
                                        </Badge>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-medium text-gray-900 mb-2">Details</h4>
                                        <p className="text-gray-700 whitespace-pre-wrap">{selectedNotification.details}</p>
                                    </div>

                                    <div className="flex justify-end space-x-2">
                                        <Button
                                            variant="outline"
                                            onClick={() => setIsModalOpen(false)}
                                        >
                                            Close
                                        </Button>
                                        {!selectedNotification.isRead && (
                                            <Button
                                                onClick={() => {
                                                    markAsRead(selectedNotification.id)
                                                    setIsModalOpen(false)
                                                }}
                                            >
                                                Mark as Read
                                            </Button>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}
