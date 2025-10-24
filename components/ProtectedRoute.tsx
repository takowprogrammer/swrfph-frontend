'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface ProtectedRouteProps {
    children: React.ReactNode
    requiredRole?: 'ADMIN' | 'PROVIDER' | ('ADMIN' | 'PROVIDER')[]
    redirectTo?: string
}

export default function ProtectedRoute({
    children,
    requiredRole,
    redirectTo = '/login'
}: ProtectedRouteProps) {
    const { user, loading, isAuthenticated } = useAuth()
    const router = useRouter()

    useEffect(() => {
        console.log('ProtectedRoute - loading:', loading, 'isAuthenticated:', isAuthenticated, 'user:', user, 'requiredRole:', requiredRole)

        if (!loading) {
            if (!isAuthenticated) {
                console.log('Not authenticated, redirecting to:', redirectTo)
                router.push(redirectTo)
                return
            }

            if (requiredRole) {
                const allowedRoles = Array.isArray(requiredRole) ? requiredRole : [requiredRole]
                console.log('Checking role - user role:', user?.role, 'allowed roles:', allowedRoles)
                if (!user?.role || !allowedRoles.includes(user.role as 'ADMIN' | 'PROVIDER')) {
                    console.log('Unauthorized, redirecting to /unauthorized')
                    router.push('/unauthorized')
                    return
                }
            }
        }
    }, [user, loading, isAuthenticated, requiredRole, router, redirectTo])

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-lg">Loading...</div>
            </div>
        )
    }

    if (!isAuthenticated) {
        return null
    }

    if (requiredRole) {
        const allowedRoles = Array.isArray(requiredRole) ? requiredRole : [requiredRole]
        if (!user?.role || !allowedRoles.includes(user.role as 'ADMIN' | 'PROVIDER')) {
            return (
                <div className="flex items-center justify-center h-64">
                    <div className="text-lg text-red-600">Unauthorized access</div>
                </div>
            )
        }
    }

    return <>{children}</>
}
