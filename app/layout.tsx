import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { AuthProvider } from '@/contexts/AuthContext'
import { TransitionWrapper } from '@/components/ui/TransitionWrapper'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-jakarta',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'SWRFHP — South West Regional Fund for Health Promotion',
    description: 'South West Regional Fund for Health Promotion (PIG) — Ensuring better health for the population by improving the performance of the health system in the South West Region of Cameroon since 1989.',
    keywords: 'healthcare, medicine, Cameroon, Southwest, public health, medical supplies, health promotion, regional fund, PIG',
    authors: [{ name: 'SWRFHP Team' }],
    icons: {
        icon: '/swrfph-logo.png',
        shortcut: '/swrfph-logo.png',
        apple: '/swrfph-logo.png',
    },
    openGraph: {
        title: 'SWRFHP — South West Regional Fund for Health Promotion',
        description: 'Ensuring better health for the population by improving the performance of the health system in the South West Region of Cameroon since 1989.',
        type: 'website',
        locale: 'en_US',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`scroll-smooth ${inter.variable} ${jakarta.variable}`} suppressHydrationWarning>
            <body className={`${jakarta.className} antialiased`} suppressHydrationWarning>
                <AuthProvider>
                    <TransitionWrapper>
                        {children}
                    </TransitionWrapper>
                    <Toaster />
                </AuthProvider>
            </body>
        </html>
    )
}
