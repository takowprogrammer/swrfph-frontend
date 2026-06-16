"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { OurJourney } from "./OurJourney";
import { AdministratorMessage } from "./AdminstratorMessage";
import { CoreValues } from "./Corevalues";
import { GoverningOrgans } from "./GoverningOrgans";
import Pillars from "./Pillars";
import AboutHero from "./AboutHero";
import { InterventionPartners } from "../interventions/Interventionpartners";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <AboutHero />
      <OurJourney />
      <Pillars />
      <AdministratorMessage />
      <CoreValues />
      <GoverningOrgans />
      <InterventionPartners />
    </div>
  );
}
