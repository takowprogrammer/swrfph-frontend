'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShieldX } from 'lucide-react'

export default function UnauthorizedPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="text-center">
                <ShieldX className="h-24 w-24 text-red-500 mx-auto mb-6" />
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Access Denied</h1>
                <p className="text-lg text-gray-600 mb-8">
                    You don't have permission to access this page.
                </p>
                <div className="space-x-4">
                    <Link href="/login">
                        <Button>Go to Login</Button>
                    </Link>
                    <Link href="/">
                        <Button variant="outline">Go Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

