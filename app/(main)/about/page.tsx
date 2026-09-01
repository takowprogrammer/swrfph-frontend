"use client";

import React from "react";
import { OurJourney } from "./OurJourney";
import { CoreValues } from "./Corevalues";
import { GoverningOrgans } from "./GoverningOrgans";
import Pillars from "./Pillars";
import AboutHero from "./AboutHero";

function LeadershipBlock() {
  return (
    <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-[10px] font-black text-accent-500 uppercase tracking-[0.25em] mb-3">
            Leadership
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-primary-950 tracking-tight">
            The Administrator
          </h2>
        </div>
        <div className="bg-white border border-slate-100 rounded-xl p-8 md:p-10 flex flex-col items-center text-center gap-4">
          <div>
            <h3 className="text-xl font-bold text-primary-950 mb-1">
              Mrs. Ngondo W. Musenja
            </h3>
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4">
              Administrator, SWRFHP
            </p>
            <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto">
              Mrs. Ngondo W. Musenja has been instrumental in leading the South West Regional Fund for Health Promotion. With proven experience in business administration and public health, she has led the successful implementation of Universal Health Coverage Phase 1, strengthened community participation, and ensured the continued management and distribution of medicines across the region despite significant challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      <AboutHero />
      <OurJourney />
      <Pillars />
      <CoreValues />
      <GoverningOrgans />
      <LeadershipBlock />
    </div>
  );
}

