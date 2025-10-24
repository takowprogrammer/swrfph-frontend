'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { toast } from 'sonner'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const { login, user } = useAuth()
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            await login(email, password)
            toast.success('Login successful!')

            // Wait a moment for the auth context to update
            setTimeout(() => {
                // Redirect based on user role - use user from context if available, otherwise localStorage
                const userRole = user?.role || localStorage.getItem('user_role')
                console.log('User role after login:', userRole) // Debug log

                if (userRole === 'ADMIN') {
                    window.location.href = 'http://localhost:3001' // Redirect to admin dashboard
                } else if (userRole === 'PROVIDER') {
                    console.log('Redirecting to provider dashboard') // Debug log
                    // Try redirecting to the provider dashboard directly
                    window.location.href = '/dashboard'
                } else {
                    console.log('Redirecting to home page') // Debug log
                    router.push('/') // Redirect to home page for other roles
                }
            }, 100)
        } catch (error: any) {
            toast.error(error.message || 'Login failed')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center py-20">
            <div className="w-full max-w-md text-center">
                <h1 className="text-3xl font-bold text-gray-900">Welcome to HealthFirst</h1>
                <div className="mt-8 text-left bg-white p-8 shadow-lg rounded-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-3 bg-green-100/50 border-gray-200 rounded-md focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-3 bg-green-100/50 border-gray-200 rounded-md focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <Link href="/forgot-password" className="font-medium text-green-600 hover:underline">
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>
                        <div>
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full bg-green-600 hover:bg-green-700 text-white"
                                disabled={loading}
                            >
                                {loading ? 'Logging in...' : 'Login'}
                            </Button>
                        </div>
                    </form>
                </div>
                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account? <Link href="/register" className="font-medium text-green-600 hover:underline">Register</Link>
                </p>
                <div className="mt-4 text-xs text-gray-500">
                    <p>Test accounts:</p>
                    <p>Admin: admin@swrfph.com / admin123</p>
                    <p>Provider: provider@swrfph.com / provider123</p>
                </div>
            </div>
        </div>
    )
}
