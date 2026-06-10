"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT COLUMN: Authority Anchor */}
          <div className="space-y-12">
            <div>
              <h2 
              data-aos="slide-right"
                data-aos-duration="1000"
                // data-aos-delay="100"
              className="text-3xl text-center lg:text-5xl font-bold  leading-tight mb-6">
                Connect with our
                <span className="text-primary-900 ml-2">support.</span>
              </h2>
              <p 
              data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              className=" text-lg max-w-md leading-relaxed text-center">
                Our administrative and logistics teams are available to assist
                with supply inquiries, partnership proposals, and healthcare
                coordination.
              </p>
            </div>

            <div 
             data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="300"
            className="flex flex-col md:flex-row gap-8 justify-center">
              {/* <ContactInfo 
                icon={<MapPin className="text-primary-400" size={24} />}
                title="Regional Headquarters"
                detail="SWRFHP Building, Buea, Southwest Region, Cameroon"
              /> */}
              <ContactInfo
                icon={<Phone className="text-primary-500" size={24} />}
                title="Direct Support Line"
                detail="+237 6XX XXX XXX"
               
              />
              <ContactInfo
                icon={<Mail className="text-primary-500" size={24} />}
                title="Official Correspondence"
                detail="info@swrfph.org"                
              />
              {/* <ContactInfo 
                icon={<Clock className="text-primary-400" size={24} />}
                title="Operational Hours"
                detail="Monday — Friday: 8:00 AM - 4:00 PM"
              /> */}
            </div>
          </div>

          {/* RIGHT COLUMN: The Form (Surgical Cleanliness) */}
          <div
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="bg-gradient-to-br from-primary-600 to-primary-900 p-6 md:p-8 lg:p-12 shadow-md border border-primary-500/20"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 border-b border-slate-200 py-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors text-slate-800 placeholder:text-slate-300"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-3 border-b border-slate-200 py-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors text-slate-800 placeholder:text-slate-300"
                    placeholder="john@hospital.org"
                  />
                </div>

                
              </div>

              <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 border-b border-slate-200 py-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors text-slate-800 placeholder:text-slate-300"
                    placeholder="+237 XXX XXX XXX"
                  />
                </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Department Inquiry
                </label>
                <select required defaultValue="" className="w-full border-b border-slate-200 py-3 focus:border-slate-200  outline-none bg-transparent text-slate-300">
                  <option value="" disabled>Select a department</option>
                  <option value="Medical Supply Procurement">Medical Supply Procurement</option>
                  <option value="Logistics & Distribution">Logistics & Distribution</option>
                  <option value="Human Resources">Human Resources</option>
                  <option value="Partnerships & Donations">Partnerships & Donations</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-3 border-b border-slate-200 py-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors text-slate-800 resize-none placeholder:text-slate-300"
                  placeholder="How can we assist your facility?"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-600 hover:bg-accent-500 text-white py-5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-200 flex items-center justify-center gap-3 hover:-translate-y-1 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-500/50 disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? "Sending..." : "Send Official Inquiry"}
                {!isSubmitting && <Send size={14} />}
              </button>
              {isSubmitted && (
                <div className="text-accent-300 text-sm font-semibold text-center mt-4">
                  Message sent successfully! We will get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({
  icon,
  title,
  detail,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
}) {
  return (
    <div className="flex items-start gap-5 p-4 border border-slate-400">
      <div className="mt-1">{icon}</div>
      <div>
        <h4 className=" font-bold text-sm tracking-tight">{title}</h4>
        <p className="text-primary-700 text-sm mt-1">{detail}</p>
      </div>
    </div>
  );
}
