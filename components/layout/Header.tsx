"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Heart, Bell, Facebook, Linkedin, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Medical Supply", href: "/supply" },
    { name: "Districts", href: "/districts" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <>
      <div className="bg-amber-600 text-white px-6 md:px-8 py-2 ">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p>
            <span className="text-sm">Emergency Supply Line:</span> +237 333 322
            943
          </p>

          <div className="items-center gap-4 hidden md:flex">
            <a href="#" className="text-white bg-white/20 p-2 rounded-full hover:text-amber-400 transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="text-white bg-white/20 p-2 rounded-full hover:text-amber-400 transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="#" className="text-white bg-white/20 p-2 rounded-full hover:text-amber-400 transition-colors">
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-50 w-full bg-white border-b">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          {/* MOBILE: MENU + LOGO LEFT */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-emerald-950  rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  src="/swrfph-logo.png"
                  alt="SWRFPH Logo"
                  width={48}
                  height={48}
                  className="rounded-full ring-2 ring-emerald-800 group-hover:ring-amber-400 transition-all"
                />
                {/* Small "Online" indicator for a slicker look */}
                {/* <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-950 rounded-full"></span> */}
              </div>
              <div className="hidden sm:block">
                <span className=" font-black text-sm block tracking-tighter leading-none">
                  SWRFHP
                </span>
                <span className="text-[9px] text-emerald-700 uppercase font-bold tracking-[0.2em]">
                  Cameroon
                </span>
              </div>
            </Link>
          </div>

          {/* DESKTOP NAV: CLEAN & SPACED */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-5 py-2 text-[13px] font-bold uppercase tracking-wider transition-all hover:text-amber-400 ${
                  pathname === item.href ? "text-amber-400" : "text-emerald-950"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE: UTILITY */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-emerald-950 hover:text-emerald-950 transition-colors">
              <Search size={20} />
            </button>

            {/* The Red CTA - Using your Logo Red */}
            <Link href="/contact">
              <Button className="bg-emerald-600 hidden md:block hover:bg-emerald-800 text-white rounded-none px-6 h-11 font-semibold text-[11px] uppercase tracking-[0.15em]">
                Partner with us
              </Button>

              <Button className="bg-emerald-600 hover:bg-emerald-800 text-white md:hidden rounded-none px-4 py-3 text-[11px] tracking-[0.15em] ">
                Partner
              </Button>
            </Link>
          </div>
        </div>

        {/* FULL SCREEN MOBILE OVERLAY */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 top-20 bg-white z-40 lg:hidden p-8"
            >
              <div className="flex flex-col gap-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl font-black text-emerald-950 hover:text-amber-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <hr className="border-emerald-800 my-4" />
                <p className="text-emerald-500 text-sm font-bold uppercase tracking-widest">
                  Emergency Supply Line
                </p>
                <p className="text-emerald-950 text-xl font-mono">
                  +237 XXX XXX XXX
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
