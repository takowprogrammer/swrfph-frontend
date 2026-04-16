import React from 'react';
import { Twitter, Facebook, Linkedin, Instagram, MapPin, Mail, Phone, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer2() {
  return (
    <footer className="bg-emerald-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row w-full">
        
        {/* LEFT BRAND SECTION (Primary 500 Background) */}
        <div className="bg-emerald-900 p-6 md:px-8 py-16 lg:w-[35%] flex flex-col justify-between ">
          <div>
            {/* Logo placeholder - replace with your actual img tag if needed */}
            <Link href="/" className="flex items-center gap-3 group mb-6">
                        <div className="relative">
                           <Image
                                src="/swrfph-logo.png"
                                alt="SWRFPH Logo"
                                width={48}
                                height={48}
                                className="ring-2 ring-emerald-800 group-hover:ring-amber-400 transition-all"
                            />
                            {/* Small "Online" indicator for a slicker look */}
                            {/* <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-950 rounded-full"></span> */}
                        </div>
                        <div className=" sm:block">
                            <span className=" font-normal text-sm block tracking-tighter leading-none">SouthWest Region Fund For Health Promotion</span>
                            <span className="text-[9px] !text-emerald-200 uppercase font-bold tracking-[0.2em]">Buea, Cameroon</span>
                        </div>
                    </Link>
            
            <p className="text-white/90 leading-relaxed text-sm md:text-base">
              Established as the Primary Health Care Essential Drug Program to ensure a constant supply of quality essential medicines,
              ensuring better health for the population in the South West Region of Cameroon since 1989.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex gap-4 text-sm font-medium">
              <a href="/privacy" className="hover:underline">Privacy Policy</a>
              <span className="opacity-50">|</span>
              <a href="/terms" className="hover:underline">Terms and Conditions</a>
            </div>
          </div>
        </div>

        {/* RIGHT LINKS SECTION (Dark Background) */}
        <div className=" py-12 px-6 md:px-8 lg:w-[65%] grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Get In Touch */}
          <div>
            <h3 className="text-xl font-bold mb-2">Get In Touch</h3>
            <div className="h-1 w-12 bg-primary-800 mb-8 relative">
                 
            </div>
            
            <ul className="space-y-6 text-gray-400">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-primary-800 shrink-0 mt-1" />
                <span className="text-sm">Buea, South West Region, Cameroon</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-primary-800 shrink-0" />
                <span className="text-sm">info@swrfhp.cm</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-primary-800 shrink-0" />
                <span className="text-sm">(+237) 633 322 943</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-8">
              {[Twitter, Facebook, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-primary-800 flex items-center justify-center rounded hover:bg-primary-700 transition-colors">
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <div className="h-1 w-12 bg-primary-800 mb-8 relative">
                 
            </div>
            
            <ul className="space-y-4">
              {['Our History', 'Our Vision', 'Our Mission', 'Meet the Team', 'Our Partners', 'Testimonials',].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary-800 text-sm flex items-center gap-2 transition-colors group">
                     
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Links */}
          <div>
            <h3 className="text-xl font-bold mb-2">Popular Links</h3>
            <div className="h-1 w-12 bg-primary-800 mb-8 relative">
                 
            </div>
            
            <ul className="space-y-4">
              {['Home Page', 'Operational pillars', 'Contact Us', 'Resources', 'Latest Blog', 'Locate Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary-800 text-sm flex items-center gap-2 transition-colors group">
                     
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='text-white md:hidden border-t border-white/20 pt-8 text-sm'>
           © 2025 LoopTech. All rights reserved.
          </div>

        </div>
        
      </div>
      
    </footer>
  );
}