'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ForgotPasswordPage() {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <div className="w-full max-w-md text-center">
                <h1 className="text-3xl font-bold text-gray-900">Account Recovery</h1>
                <p className="mt-2 text-gray-600">
                    Enter your email address or username associated with your account. We'll send you a link to reset your password.
                </p>
                <div className="mt-8 text-left">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="sr-only">Email or Username</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email or Username"
                                className="w-full px-4 py-3 bg-green-100/50 border-gray-200 rounded-md focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <div>
                            <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white">Send Reset Link</Button>
                        </div>
                    </form>
                </div>
                <p className="mt-6 text-sm text-gray-600">
                    Remember your password? <Link href="/login" className="font-medium text-green-600 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    )
}
