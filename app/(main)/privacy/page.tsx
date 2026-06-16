"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
            <h2 className="text-2xl font-black text-primary-950 mb-4 tracking-tight">1. Introduction</h2>
            <p>
              Welcome to the South West Regional Fund for Health Promotion (SWRFHP). We are committed to protecting your personal information and your right to privacy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-primary-950 mb-4 tracking-tight">2. Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our services, or when you contact us. This may include your name, email address, phone number, and any other details you choose to provide via our contact forms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-primary-950 mb-4 tracking-tight">3. How We Use Your Information</h2>
            <p>
              We use personal information collected via our website for a variety of organizational purposes described below. We process your personal information for these purposes in reliance on our legitimate interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>To facilitate account creation and logon process.</li>
              <li>To respond to your inquiries and offer support.</li>
              <li>To send administrative information to you.</li>
              <li>To protect our website and operations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-black text-primary-950 mb-4 tracking-tight">4. Will Your Information Be Shared?</h2>
            <p>
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell or rent your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-primary-950 mb-4 tracking-tight">5. Contact Us</h2>
            <p>
              If you have questions or comments about this policy, you may email us at <strong className="text-primary-700">info@swrfhp.cm</strong> or contact us by post at our Regional Headquarters in Buea, South West Region, Cameroon.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
