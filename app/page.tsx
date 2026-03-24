import { Hero } from '@/components/sections/Hero'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { BackToTop } from '@/components/ui/BackToTop'
import { HomePreview } from '@/components/sections/HomePreview'

export default function RootPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <ScrollProgress />
            <Header />
            <main className="flex-1">
                <Hero />
                <HomePreview />
            </main>
            <Footer />
            <BackToTop />
        </div>
    )
}