'use client'

import ProtectedRoute from '@/components/ProtectedRoute'
import { ProviderSidebar } from '@/components/layout/ProviderSidebar'

export default function ProviderLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ProtectedRoute requiredRole={["ADMIN", "PROVIDER"]}>
            <div className="flex h-screen bg-gray-50">
                {/* Sidebar */}
                <div className="hidden md:flex md:w-64 md:flex-col">
                    <ProviderSidebar />
                </div>

                {/* Main Content */}
                <div className="flex flex-1 flex-col overflow-hidden">
                    <main className="flex-1 overflow-y-auto">
                        <div className="py-6">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </ProtectedRoute>
    )
}

