'use client'

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function ProviderRegistrationPage() {
    return (
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-2xl space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Register as a Healthcare Provider
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                            sign in to your existing account
                        </Link>
                    </p>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Facility & Account Details</CardTitle>
                        <CardDescription>All fields are required to create an account.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Facility Information */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-800 border-b pb-2">Facility Information</h3>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <Label htmlFor="facility-name">Facility Name</Label>
                                    <Input id="facility-name" placeholder="e.g., Buea General Hospital" />
                                </div>
                                <div>
                                    <Label htmlFor="facility-type">Facility Type</Label>
                                    <Input id="facility-type" placeholder="e.g., Clinic, Hospital" />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="address">Full Address</Label>
                                <Input id="address" placeholder="123 Health St, Buea, Cameroon" />
                            </div>
                        </div>

                        {/* Account Administrator */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-800 border-b pb-2">Account Administrator</h3>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <Label htmlFor="contact-person">Full Name</Label>
                                    <Input id="contact-person" placeholder="Dr. John Doe" />
                                </div>
                                <div>
                                    <Label htmlFor="contact-email">Work Email</Label>
                                    <Input id="contact-email" type="email" placeholder="you@facility.com" />
                                </div>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" type="password" />
                                </div>
                                <div>
                                    <Label htmlFor="confirm-password">Confirm Password</Label>
                                    <Input id="confirm-password" type="password" />
                                </div>
                            </div>
                        </div>

                        <Button type="submit" className="w-full">Create Account</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

