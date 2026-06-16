"use client";

import { Footer2 } from "@/components/layout/Footer2";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQs } from "@/components/sections/FAQs";
import { Hero } from "@/components/sections/Hero";
import { OperationalPillars } from "@/components/sections/OperationalPillars";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { Stats } from "@/components/sections/Stats";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ChatWidget } from "@/components/ui/ChatWidget";

export default function RootPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <main className="flex-1">
        <Hero />
        <OperationalPillars />
        <Stats />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />

        <FAQs />
        <ResourcesSection />
      </main>
    </div>
  );
}
