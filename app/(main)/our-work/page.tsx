"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Handshake,
  Pill,
  Building2,
  Users,
  HeartPulse,
  Truck,
  BookOpen,
  Baby,
  Megaphone,
  ClipboardCheck,
  Banknote,
  UserCheck,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { FaSackDollar, FaRibbon, FaTicket } from "react-icons/fa6";
import { MdChildCare } from "react-icons/md";

// ─── TAB DATA ────────────────────────────────────────────────────────────────

const tabs = [
  { id: "overview", label: "Areas of Intervention" },
  { id: "sections", label: "Our Sections" },
  { id: "uhc", label: "Universal Health Coverage" },
  { id: "partners", label: "Our Partners" },
];

// ─── AREAS OF INTERVENTION ──────────────────────────────────────────────────

const interventions = [
  {
    title: "Partner Collaboration",
    desc: "Working alongside UN Agencies, GIZ, GLOBAL FUND, CHEMONICS, CAMNAFAW, CARE, DWB, CBCHS, PCCHS, and community-based organizations.",
    icon: Handshake,
    image: "/collaboration.jpg",
  },
  {
    title: "Health Financing",
    desc: "Supporting Universal Health Coverage initiatives aimed at strengthening the overall performance of the health system.",
    icon: Banknote,
    image: "/health-financing.webp",
  },
  {
    title: "Community Participation",
    desc: "Fostering meaningful community engagement through structured dialogue systems that give citizens a voice in health decisions.",
    icon: Users,
    image: "/community.jfif",
  },
  {
    title: "Essential Medicines",
    desc: "Managing and distributing essential medicines to all public health structures including HIV, TB, NTDs, and Reproductive Health.",
    icon: Pill,
    image: "/re-stocking-medicines.jpeg",
  },
  {
    title: "Storage & Distribution",
    desc: "Operating storage and distribution of pharmaceutical products across all 21 health districts with cold-chain integrity.",
    icon: Truck,
    image: "/cargo.jpeg",
  },
  {
    title: "Health Education",
    desc: "Facilitating capacity building throughout the medicines supply chain and sensitization for priority health programs.",
    icon: BookOpen,
    image: "/health-education.jpg",
  },
  {
    title: "Maternal & Child Health",
    desc: "Improving maternal and child health outcomes through timely provision of obstetric kits and reproductive health commodities.",
    icon: Baby,
    image: "/maternal.jpg",
  },
  {
    title: "Community Sensitization",
    desc: "Promoting awareness on priority health issues, nutrition, and disease prevention through community outreach programs.",
    icon: Megaphone,
    image: "/sensitization.jpeg",
  },
];

// ─── SECTIONS DATA ──────────────────────────────────────────────────────────

const sections = [
  {
    num: "01",
    title: "Pharmaceutical Products Management",
    intro: "The bedrock of the SWRFHP healthcare delivery system.",
    desc: "PPM manages the entire pharmaceutical supply chain from procurement to distribution, ensuring quality medicines reach every health facility in compliance with WHO standards. The GPHF-MINILAB donated by DIFAEM enables rapid drug quality verification against falsified medicines.",
    points: [
      "Quality essential medicines availability",
      "Last Mile Delivery across 21 districts",
      "Standard Operating Procedures compliance",
      "Expired medicines management",
      "GPHF-MINILAB quality control",
      "Capacity building and refresher training",
    ],
    image: "/medicine-reception.jpeg",
  },
  {
    num: "02",
    title: "Administration & Finance",
    intro:
      "Managing the financial health and operational efficiency of SWRFHP.",
    desc: "This section handles budgeting, accounting, procurement, and human resources — ensuring smooth institutional operations through financial reporting, fixed asset management, payroll, and compliance. It also coordinates external audits to maintain full accountability.",
    points: [
      "Budgeting and financial reporting",
      "Procurement and asset management",
      "Human resources and payroll",
      "External audit coordination",
    ],
    image: "/front-view-of-office.jpeg",
  },
  {
    num: "03",
    title: "Partnership & Health Promotion",
    intro:
      "Strengthening the healthcare ecosystem through training and collaboration.",
    desc: "Works with the Regional Assembly, University of Buea, and community organizations to deliver sensitization programs, train dialogue structure members, and distribute health communication materials across all 21 health districts.",
    points: [
      "Sensitization on priority health programs",
      "Multi-sectorial partnerships",
      "Health communication materials",
      "Dialogue structure member training",
    ],
    image: "/community.jfif",
  },
];

// ─── UHC PACKAGES DATA ─────────────────────────────────────────────────────

const uhcPackages = [
  {
    title: "Children 0–5 Years",
    subtitle: "Free Malaria Treatment",
    desc: "Free medical consultation and treatment for malaria (simple or severe) in public health facilities for children between 0–5 years. This aims at reducing child mortality and eliminating financial barriers to healthcare.",
    icon: MdChildCare,
    highlights: [
      "Free consultation for children 0–5",
      "Complete malaria treatment coverage",
      "All public health facilities",
    ],
  },
  {
    title: "Maternal & Child Health",
    subtitle: "Health Voucher — 6,000 FCFA",
    desc: "The health voucher system provides pregnant women with affordable access to quality antenatal care, safe delivery and postnatal services. Every mother receives access to skilled care during pregnancy, childbirth, and 42 days after delivery.",
    icon: FaTicket,
    highlights: [
      "4 antenatal visits",
      "Delivery (vaginal or cesarean)",
      "Postnatal care up to 42 days",
    ],
  },
  {
    title: "Hemodialysis Services",
    subtitle: "97% Cost Reduction",
    desc: "Offered at the Buea Regional Hospital Annex, patients access dialysis for a subsidized annual package of 15,000 FCFA compared to the normal cost of at least 520,000 FCFA — a 97% treatment cost reduction that has greatly reduced patient default rate.",
    icon: FaSackDollar,
    highlights: [
      "15,000 FCFA vs 520,000 FCFA annually",
      "97% cost reduction",
      "Buea Regional Hospital Annex",
    ],
  },
  {
    title: "HIV/AIDS & TB Treatment",
    subtitle: "Completely Free",
    desc: "All persons living with HIV/AIDS and Tuberculosis receive comprehensive care at no cost — including free medications, regular consultation, laboratory tests, counselling and prevention programs.",
    icon: FaRibbon,
    highlights: [
      "Free ARV distribution & monitoring",
      "TB directly observed therapy",
      "Prevention of mother-to-child transmission",
    ],
  },
];

// ─── PARTNER LOGOS ───────────────────────────────────────────────────────────

const partnerLogos = [
  { name: "Ministry of Public Health", src: "/logos/minsante.png" },
  { name: "GIZ", src: "/logos/giz.jpg" },
  { name: "Global Fund", src: "/logos/global-fund.jpg" },
  { name: "Chemonics", src: "/logos/chemonics.jfif" },
  { name: "CAMNAFAW", src: "/logos/camnafaw.png" },
  { name: "CARE", src: "/logos/CARE.png" },
  { name: "Médecins Sans Frontières", src: "/logos/msf.png" },
  { name: "World Bank", src: "/logos/world-bank.png" },
  { name: "AFD", src: "/logos/AFD.png" },
  { name: "KFW", src: "/logos/kfw.png" },
];

const partnerCategories = [
  {
    title: "The State",
    desc: "Administrative and Local Authorities, regional actors, managers of health facilities, and representatives of district health services.",
  },
  {
    title: "Technical & Financial Partners",
    desc: "GIZ, AFD, KFW, World Bank and other international development organizations supporting healthcare infrastructure.",
  },
  {
    title: "The Community",
    desc: "Community representatives from the six divisions of the South West Region and representatives from Confessional Health Services (CBCHS, PCCHS).",
  },
];

// ═════════════════════════════════════════════════════════════════════════════
// TAB CONTENT COMPONENTS
// ═════════════════════════════════════════════════════════════════════════════

function OverviewTab() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {interventions.map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            data-aos="fade-up"
            data-aos-delay={i * 50}
            className="group bg-white border border-slate-100 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary-900/5 transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-4 h-4 text-primary-600" />
                <h3 className="text-lg font-bold text-primary-950 tracking-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SectionsTab() {
  return (
    <div className="flex flex-col gap-0">
      {sections.map((s, i) => {
        const imageLeft = i % 2 === 0;
        return (
          <div key={s.num} className="flex flex-col md:flex-row md:mb-16">
            <div
              data-aos={imageLeft ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
              className={`w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[400px] overflow-hidden rounded-xl ${!imageLeft ? "md:order-2" : ""}`}
            >
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className={`w-full md:w-1/2 flex flex-col justify-center px-0 py-8 md:px-12 md:py-16 ${!imageLeft ? "md:order-1" : ""}`}
            >
              <p className="text-[10px] font-black text-primary-600 uppercase tracking-[0.25em] mb-3">
                Section {s.num}
              </p>
              <h3 className="text-2xl md:text-3xl font-black text-primary-950 tracking-tight leading-tight mb-3">
                {s.title}
              </h3>
              <p className="text-base font-bold text-slate-700 mb-4 leading-snug">
                {s.intro}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {s.desc}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 ml-6 md:ml-0">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <span className="w-[6px] h-[6px] md:w-2 md:h-2 bg-primary-600 rounded-full shrink-0 mt-2" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function UHCTab() {
  return (
    <div>
      {/* UHC intro */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <p className="text-slate-600 text-lg leading-relaxed">
          Universal Health Coverage is an initiative to ensure that every
          resident of the South West Region has access to quality healthcare
          without facing financial hardship. The Phase 1 scheme covers four
          key packages:
        </p>
      </div>

      {/* Package cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {uhcPackages.map((pkg, i) => {
          const Icon = pkg.icon;
          return (
            <div
              key={pkg.title}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary-100 transition-all duration-300"
            >
              {/* Top accent */}
              <div
                className="h-1.5 bg-primary-500"
              />
              <div className="p-8">
                <div
                  className="w-14 h-14 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 text-primary-600"
                >
                  <Icon className="w-7 h-7" />
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  {pkg.subtitle}
                </p>
                <h3 className="text-xl font-black text-primary-950 tracking-tight mb-3">
                  {pkg.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {pkg.desc}
                </p>
                <ul className="space-y-2">
                  {pkg.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <ClipboardCheck className="w-4 h-4 text-primary-500 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PartnersTab() {
  return (
    <div>
      {/* Partner categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {partnerCategories.map((cat, i) => (
          <div
            key={cat.title}
            data-aos="fade-up"
            data-aos-delay={i * 80}
            className="bg-slate-50 border border-slate-100 rounded-xl p-6"
          >
            <h3 className="text-lg font-bold text-primary-950 mb-2">
              {cat.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {cat.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Logo grid */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-primary-950">
          Technical & Financial Partners
        </h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
        {partnerLogos.map((logo) => (
          <div
            key={logo.name}
            title={logo.name}
            className="bg-white flex items-center justify-center p-6 md:p-8 group hover:bg-slate-50 transition-colors duration-200"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-16 md:h-20 w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═════════════════════════════════════════════════════════════════════════════

export default function OurWorkPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabContent: Record<string, React.ReactNode> = {
    overview: <OverviewTab />,
    sections: <SectionsTab />,
    uhc: <UHCTab />,
    partners: <PartnersTab />,
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      {/* Hero */}
      <section className="relative h-[240px] md:h-[320px] overflow-hidden">
        <Image
          src="/re-stocking-medicines.jpeg"
          alt="Our Work"
          fill
          className="object-cover brightness-[0.55]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/40 to-primary-950/90" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10">
          <p className="text-[10px] font-black text-accent-400 uppercase tracking-[0.25em] mb-4">
            Explore
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05]">
            Our Work
          </h1>
        </div>
      </section>

      {/* Tab Bar */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex justify-center overflow-x-auto scrollbar-hide -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative whitespace-nowrap px-5 py-4 text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "text-primary-700"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary-600 rounded-t-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {tabContent[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
