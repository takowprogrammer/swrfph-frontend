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
        console.log('ProtectedRoute - EFFECT RUNNING:', {
            loading,
            isAuthenticated,
            user: user ? { id: user.id, email: user.email, role: user.role } : null,
            requiredRole,
            redirectTo
        })

        if (!loading) {
            if (!isAuthenticated) {
                console.log('ProtectedRoute - Redirecting: Not authenticated', redirectTo)
                router.push(redirectTo)
                return
            }

            if (requiredRole) {
                const allowedRoles = Array.isArray(requiredRole) ? requiredRole : [requiredRole]
                console.log('ProtectedRoute - Checking role:', { userRole: user?.role, allowedRoles })
                if (!user?.role || !allowedRoles.includes(user.role as 'ADMIN' | 'PROVIDER')) {
                    console.log('ProtectedRoute - Redirecting: Unauthorized role')
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

    // Render children if authenticated and authorized after loading
    return <>{children}</>
}
