"use client";

import React from "react";
import Image from "next/image";
import { TeamHero } from "./TeamHero";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import { InterventionPartners } from "../interventions/Interventionpartners";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Nso Besong",
      role: "Head of Finance & Accounting",
      image: "/nso.png",
      socials: { linkedin: "#", facebook: "#", instagram: "#", x: "#" },
    },
    {
      name: "TBD",
      role: "Head of Partnership & Health Promotion",
      image: "",
      socials: { linkedin: "#", facebook: "#", instagram: "#", x: "#" },
    },
    {
      name: "TBD",
      role: "Head of Logistics & Procurement",
      image: "",
      socials: { linkedin: "#", facebook: "#", instagram: "#", x: "#" },
    },
    {
      name: "TBD",
      role: "Head of Administrative Support",
      image: "",
      socials: { linkedin: "#", facebook: "#", instagram: "#", x: "#" },
    },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-slate-900 selection:text-white">
      <TeamHero />

      {/* 1. EXECUTIVE LEADERSHIP (STANDALONE) */}
      <section className="py-24 border-b border-slate-100">
        <div className="container hidden md:block mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-16">
            {/* Admin Image */}
            <div className="w-full lg:w-2/5 max-w-md">
              <div className="relative aspect-[4/5] rounded-sm bg-slate-100 overflow-hidden border border-slate-200">
                <Image
                  src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg"
                  alt="Mrs. Ngondo W. Musenja"
                  fill
                  className="object-cover border-2 border-slate-300 transition-all duration-700"
                />
              </div>
            </div>

            {/* Admin Content */}
            <div className="w-full lg:w-3/5 flex flex-col justify-center">
              {/* <div className="inline-block px-3 py-1 bg-slate-900 text-white text-[10px] uppercase tracking-[0.2em] font-bold rounded-sm mb-6 w-fit">
                Executive Administration
              </div> */}
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                Mrs. Ngondo W. Musenja
              </h2>
              <p className="text-xl font-medium text-slate-500 mb-8 pb-8 border-b border-slate-100">
                The Administrator, SWRFHP
              </p>

              <div className="space-y-6 text-slate-600 leading-relaxed text-lg max-w-2xl">
                <p>
                  Instrumental in leading the South West Regional Fund for
                  Health Promotion, Mrs. Ngondo W. Musenja oversees the
                  strategic wellness initiatives across the region.
                </p>
                <p>
                  Her tenure is defined by the successful implementation of
                  Universal Health Coverage Phase 1 and maintaining
                  institutional stability while ensuring the distribution of
                  vital medical resources during challenging regional crises.
                </p>
              </div>

              {/* Admin Socials - Industrial Style */}
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="p-2 bg-slate-50 border border-slate-200 rounded-sm hover:bg-slate-900 hover:text-white transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-slate-50 border border-slate-200 rounded-sm hover:bg-slate-900 hover:text-white transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-slate-50 border border-slate-200 rounded-sm hover:bg-slate-900 hover:text-white transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-slate-50 border border-slate-200 rounded-sm hover:bg-slate-900 hover:text-white transition-colors"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container md:hidden mx-auto px-6 max-w-6xl text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <img src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg" alt="" className="w-44 h-44 rounded-full object-cover" />
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              Strategic Oversight
            </h4>
            <h5 className="text-xl font-bold">Mrs. Ngondo W. Musenja</h5>
            <p className="text-slate-500 mt-1 italic text-sm mb-6">
              The Executive Administrator, SWRFHP
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="text-slate-400 hover:text-slate-900 transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-slate-900 transition-colors"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE MANAGEMENT TEAM (GRID) */}
      <section className="py-24 bg-[#fcfcfc]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12 text-center">
            <p
              data-aos="fade-up"
              className="text-[10px] font-black text-accent-400 uppercase tracking-[0.25em] mb-3"
            >
              See our
            </p>
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-3xl md:text-5xl font-black text-primary-950 tracking-tight leading-tight"
            >
              Heads of Sections
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative aspect-square bg-slate-200 rounded-sm overflow-hidden mb-4 border border-slate-200">
                  {member.image && (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  )}
                  {/* Subtle Overlaid Socials for Team */}
                  <div className="absolute bottom-2 left-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.socials.linkedin}
                      className="p-1.5 bg-white border border-slate-200 rounded-sm hover:bg-slate-900 hover:text-white transition-colors"
                    >
                      <Linkedin size={14} />
                    </a>
                    <a
                      href={member.socials.facebook}
                      className="p-1.5 bg-white border border-slate-200 rounded-sm hover:bg-slate-900 hover:text-white transition-colors"
                    >
                      <Facebook size={14} />
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold tracking-tight">
                    {member.name}
                  </h4>
                  <p className="text-sm text-slate-500 font-medium mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ADVISORY / REGIONAL DELEGATE */}
      <section className="py-20 border-t border-slate-100">
        <div className="container md:hidden mx-auto px-6 max-w-6xl text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <img src="/eko.png" alt="" className="w-44 h-44 rounded-full" />
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              Strategic Oversight
            </h4>
            <h5 className="text-xl font-bold">Dr. Eko Eko Filbert</h5>
            <p className="text-slate-500 mt-1 italic text-sm mb-6">
              Regional Delegate of Public Health for the South West
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="text-slate-400 hover:text-slate-900 transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-slate-900 transition-colors"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="container hidden md:block mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-16">
            {/* Admin Image */}
            <div className="w-full lg:w-2/5 max-w-md">
              <div className="relative aspect-[4/5] rounded-sm bg-slate-100 overflow-hidden border border-slate-200">
                <Image
                  src="/eko.png"
                  alt="Mrs. Ngondo W. Musenja"
                  fill
                  className="object-cover border-2 border-slate-300 transition-all duration-700"
                />
              </div>
            </div>

            {/* Admin Content */}
            <div className="w-full lg:w-3/5 flex flex-col justify-center">
              {/* <div className="inline-block px-3 py-1 bg-slate-900 text-white text-[10px] uppercase tracking-[0.2em] font-bold rounded-sm mb-6 w-fit">
                Executive Administration
              </div> */}
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                Dr. Eko Eko Filbert
              </h2>
              <p className="text-xl font-medium text-slate-500 mb-8 pb-8 border-b border-slate-100">
                Regional Delegate of Public Health for the South West
              </p>

              <div className="space-y-6 text-slate-600 leading-relaxed text-lg max-w-2xl">
                <p>
                  Instrumental in leading the South West Regional Fund for
                  Health Promotion, Mrs. Ngondo W. Musenja oversees the
                  strategic wellness initiatives across the region.
                </p>
                <p>
                  Her tenure is defined by the successful implementation of
                  Universal Health Coverage Phase 1 and maintaining
                  institutional stability while ensuring the distribution of
                  vital medical resources during challenging regional crises.
                </p>
              </div>

              {/* Admin Socials - Industrial Style */}
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="p-2 bg-slate-50 border border-slate-200 rounded-sm hover:bg-slate-900 hover:text-white transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-slate-50 border border-slate-200 rounded-sm hover:bg-slate-900 hover:text-white transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-slate-50 border border-slate-200 rounded-sm hover:bg-slate-900 hover:text-white transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-slate-50 border border-slate-200 rounded-sm hover:bg-slate-900 hover:text-white transition-colors"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <InterventionPartners />
      </section>
    </div>
  );
}
