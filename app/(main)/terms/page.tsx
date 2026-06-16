"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TermsOfServicePage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      {/* Simple Hero */}
      <section className="bg-primary-950 py-24 text-center border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/50 to-primary-950/90" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
          >
            Terms of Service
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary-300 text-lg uppercase tracking-wider font-semibold"
          >
            Last updated: October 2026
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl space-y-10 text-lg leading-relaxed text-slate-600">
          <div>
            <h2 className="text-2xl font-black text-primary-950 mb-4 tracking-tight">1. Agreement to Terms</h2>
            <p>
              By accessing this website, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-primary-950 mb-4 tracking-tight">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on SWRFHP's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
            <p className="mt-4">Under this license, you may not:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on the website;</li>
              <li>remove any copyright or other proprietary notations from the materials;</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-black text-primary-950 mb-4 tracking-tight">3. Disclaimer</h2>
            <p>
              The materials on SWRFHP's website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-primary-950 mb-4 tracking-tight">4. Limitations</h2>
            <p>
              In no event shall SWRFHP or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-primary-950 mb-4 tracking-tight">5. Contact Information</h2>
            <p>
              If you have any questions or concerns regarding these terms, please contact us at <strong className="text-primary-700">info@swrfhp.cm</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
