'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProviderSettingsPage() {
    return (
        <div className="px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Profile & Settings</h1>
                <p className="mt-2 text-gray-600">Manage your facility's information and your account settings.</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Facility Information */}
                <Card className="lg:col-span-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-800">Facility Information</CardTitle>
                        <CardDescription>Update your hospital or clinic's details.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <Label htmlFor="facility-name">Facility Name</Label>
                                <Input id="facility-name" defaultValue="Buea General Hospital" />
                            </div>
                            <div>
                                <Label htmlFor="facility-type">Facility Type</Label>
                                <Input id="facility-type" defaultValue="General Hospital" />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="address">Address</Label>
                            <Input id="address" defaultValue="123 Health St, Buea, Cameroon" />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <Label htmlFor="contact-person">Primary Contact Person</Label>
                                <Input id="contact-person" defaultValue="Dr. John Doe" />
                            </div>
                            <div>
                                <Label htmlFor="contact-email">Contact Email</Label>
                                <Input id="contact-email" type="email" defaultValue="contact@bgh.cm" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between pt-2">
                            <p className="text-xs text-gray-500">Make sure all details are accurate before saving.</p>
                            <Button className="bg-green-600 hover:bg-green-700 text-white">Save Changes</Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Account Settings */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold text-gray-800">Account Settings</CardTitle>
                        <CardDescription>Change your password.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <Label htmlFor="current-password">Current Password</Label>
                            <Input id="current-password" type="password" />
                        </div>
                        <div>
                            <Label htmlFor="new-password">New Password</Label>
                            <Input id="new-password" type="password" />
                        </div>
                        <div>
                            <Label htmlFor="confirm-password">Confirm New Password</Label>
                            <Input id="confirm-password" type="password" />
                        </div>
                        <div className="flex items-center justify-between pt-2">
                            <p className="text-xs text-gray-500">Use a strong password you don't use elsewhere.</p>
                            <Button className="bg-green-600 hover:bg-green-700 text-white">Update Password</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

