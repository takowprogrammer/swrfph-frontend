"use client";

import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQs } from "@/components/sections/FAQs";
import { Hero } from "@/components/sections/Hero";
import { OperationalPillars } from "@/components/sections/OperationalPillars";
import { Stats } from "@/components/sections/Stats";

export default function RootPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <main className="flex-1">
        <Hero />
        <OperationalPillars />
        <Stats />
        <AboutSection />
        <ContactSection />
        <FAQs />
      </main>
    </div>
  );
}

