"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { Footer2 } from "@/components/layout/Footer2";
import { LocateUs } from "@/components/sections/LocateUs";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import { InterventionCTA } from "./interventions/Interventioncta";
import { CookieBanner } from "@/components/ui/CookieBanner";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      // Global settings for that "dense/smooth" feel
      duration: 1000, // 1 second for softness
      once: true, // Only animate once
      easing: "ease-out-quad", // Smooth deceleration
      delay: 100, // Slight delay before starting
    });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      AOS.refresh();
    }, 300);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* <ScrollProgress /> */}
      <Header />
      <main className="flex-1">{children}</main>
      <InterventionCTA />
      <LocateUs />
      <Footer2 />
      <CookieBanner />
      {/* <BackToTop /> */}
    </div>
  );
}
