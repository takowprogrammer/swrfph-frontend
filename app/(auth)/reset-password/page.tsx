'use client'

import { Button } from '@/components/ui/button'

export default function ResetPasswordPage() {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <div className="w-full max-w-md text-center">
                <h1 className="text-3xl font-bold text-gray-900">Reset Your Password</h1>
                <p className="mt-2 text-gray-600">
                    Enter your new password below. Make sure it's strong and secure.
                </p>
                <div className="mt-8 text-left">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="new-password">New Password</label>
                            <input
                                type="password"
                                id="new-password"
                                placeholder="Enter your new password"
                                className="mt-2 w-full px-4 py-3 bg-green-100/50 border-gray-200 rounded-md focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="confirm-password">Confirm New Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                placeholder="Confirm your new password"
                                className="mt-2 w-full px-4 py-3 bg-green-100/50 border-gray-200 rounded-md focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                        <p className="text-sm text-gray-500">
                            Password must be at least 8 characters long and include a mix of letters, numbers, and symbols.
                        </p>
                        <div>
                            <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white">Reset Password</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
