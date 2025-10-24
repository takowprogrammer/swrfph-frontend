'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
    LayoutDashboard,
    Package,
    ShoppingBag,
    Settings,
    HeartPulse,
    LogOut,
    Bell,
    User
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useAuth } from '@/contexts/AuthContext'
import { useState, useEffect } from 'react'
import { apiService } from '@/lib/api'

const navigation = [
    {
        name: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard,
    },
    {
        name: 'Catalog',
        href: '/catalog',
        icon: Package,
    },
    {
        name: 'Orders',
        href: '/orders',
        icon: ShoppingBag,
    },
    {
        name: 'Settings',
        href: '/settings',
        icon: Settings,
    },
]

export function ProviderSidebar() {
    const pathname = usePathname()
    const { user, logout } = useAuth()
    const [unreadCount, setUnreadCount] = useState(0)

    const fetchNotificationStats = async () => {
        if (!user) return
        try {
            const stats = await apiService.getNotificationStats()
            setUnreadCount(stats.unread || 0)
        } catch (error) {
            console.error('Failed to fetch notification stats:', error)
        }
    }

    useEffect(() => {
        fetchNotificationStats()
        // Refresh every 30 seconds
        const interval = setInterval(fetchNotificationStats, 30000)
        return () => clearInterval(interval)
    }, [user])

    // Listen for notification updates
    useEffect(() => {
        const handleNotificationUpdate = () => {
            fetchNotificationStats()
        }

        window.addEventListener('notificationUpdated', handleNotificationUpdate)
        return () => window.removeEventListener('notificationUpdated', handleNotificationUpdate)
    }, [])

    const handleLogout = async () => {
        try {
            await logout()
        } catch (error) {
            console.error('Logout failed:', error)
        }
    }

    return (
        <div className="flex h-full flex-col bg-white border-r border-gray-200">
            {/* Logo */}
            <div className="flex h-16 items-center px-6 border-b border-gray-200">
                <Link href="/" className="flex items-center space-x-2">
                    <HeartPulse className="h-8 w-8 text-green-600" />
                    <span className="font-bold text-xl text-gray-800">HealthFirst</span>
                </Link>
            </div>

            {/* User Info */}
            <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                            {user?.email || 'Provider'}
                        </p>
                        <p className="text-xs text-gray-500">Healthcare Provider</p>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2">
                {navigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                'flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                                isActive
                                    ? 'bg-green-100 text-green-700 border border-green-200'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            )}
                        >
                            <item.icon className="h-5 w-5" />
                            <span>{item.name}</span>
                        </Link>
                    )
                })}
            </nav>

            {/* Bottom Actions */}
            <div className="px-4 py-4 border-t border-gray-200 space-y-2">
                <Link
                    href="/notifications"
                    className={cn(
                        'flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full',
                        pathname === '/notifications'
                            ? 'bg-green-100 text-green-700 border border-green-200'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    )}
                >
                    <div className="flex items-center space-x-3">
                        <Bell className="h-4 w-4" />
                        <span>Notifications</span>
                    </div>
                    {unreadCount > 0 && (
                        <Badge variant="destructive" className="text-xs">
                            {unreadCount}
                        </Badge>
                    )}
                </Link>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLogout}
                    className="w-full justify-start text-gray-600 hover:text-red-600 hover:bg-red-50"
                >
                    <LogOut className="h-4 w-4 mr-3" />
                    Sign Out
                </Button>
            </div>
        </div>
    )
}
