import { ImageCarousel } from '@/components/sections/ImageCarousel'
import { Hero } from '@/components/sections/Hero'
import { Impact } from '@/components/sections/Impact'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { CallToAction } from '@/components/sections/CallToAction'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { BackToTop } from '@/components/ui/BackToTop'

export default function RootPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <ScrollProgress />
            <Header />
            <main className="flex-1">
                <ImageCarousel />
                <Hero />
                <div id="impact-section">
                    <Impact />
                </div>
                <ServicesPreview />
                <CallToAction />
            </main>
            <Footer />
            <BackToTop />
        </div>
    )
}