import { ImageCarousel } from '@/components/sections/ImageCarousel'
import {Hero} from '@/components/sections/Hero'
import { Impact } from '@/components/sections/Impact'
import { Services } from '@/components/sections/Services'
import { SupportMission } from '@/components/sections/SupportMission'
import { OperationalPillars } from '@/components/sections/OperationalPillars'

export default function HomePage() {
    return (
        <main>
            <ImageCarousel />
            <Hero />
            <OperationalPillars />
            <Impact />
            <Services />
            <SupportMission />
        </main>
    )
}
