"use client";

import { Header } from "@/components/layout/Header";
import { Footer2 } from "@/components/layout/Footer2";
import { LocateUs } from "@/components/sections/LocateUs";
import { CallToActionBanner } from "@/components/sections/CallToActionBanner";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      easing: "ease-out-quad",
      delay: 100,
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
      <Header />
      <main className="flex-1">{children}</main>
      <CallToActionBanner />
      <LocateUs />
      <Footer2 />
      <CookieBanner />
    </div>
  );
}

