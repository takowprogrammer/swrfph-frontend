'use client';

import { Hero } from '@/components/sections/Hero'
import { Header } from '@/components/layout/Header'
import { Footer2 } from '@/components/layout/Footer2'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { BackToTop } from '@/components/ui/BackToTop'
import { HomePreview } from '@/components/sections/HomePreview'
import { OperationalPillars } from '@/components/sections/OperationalPillars'
import { Stats } from '@/components/sections/Stats'
import { AboutSection } from '@/components/sections/AboutSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ResourcesSection } from '@/components/sections/ResourcesSection'
import {FAQs} from '@/components/sections/FAQs'
import { LocateUs } from '@/components/sections/LocateUs'
import { ContactSection } from '@/components/sections/ContactSection'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ChatWidget } from '@/components/ui/ChatWidget';

export default function RootPage() {
    useEffect(() => {
    AOS.init({
      // Global settings for that "dense/smooth" feel
      duration: 1000, // 1 second for softness
      once: true,     // Only animate once
      easing: 'ease-out-quad', // Smooth deceleration
      delay: 100,     // Slight delay before starting
    })
  }, [])

    return (
        <div className="min-h-screen flex flex-col font-sans">
            {/* <ScrollProgress /> */}
            <Header />
            <main className="flex-1">
                <Hero />
                <OperationalPillars />
                <Stats />
                <AboutSection />
                <TestimonialsSection />
                <ContactSection />

                <FAQs />
                <ResourcesSection />
                
                
                <LocateUs />
            </main>
            <ChatWidget />
            <Footer2 />
            {/* <BackToTop /> */}
        </div>
    )
}