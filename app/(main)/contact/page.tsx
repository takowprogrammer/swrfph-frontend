"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQs } from "@/components/sections/FAQs";

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    value: "+237 333 322 943",
    description: "Mon - Fri, 8am - 6pm",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@swrfhp.org",
    description: "Send us an email anytime",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Buea, Southwest Region",
    description: "Visit our main office",
  },
];

const faqs = [
  {
    question: "How can I donate to support your mission?",
    answer:
      'You can donate through our website by clicking the "Donate" button in the navigation. We accept various payment methods including mobile money, credit cards, and bank transfers. All donations go directly to medicine procurement and healthcare support programs.',
  },
  {
    question: "What services do you offer to healthcare facilities?",
    answer:
      "We offer comprehensive services including medicine procurement from verified suppliers, logistics and distribution with cold chain management, quality assurance testing, healthcare provider training programs, and community health education initiatives.",
  },
  {
    question: "Where are you located and what areas do you serve?",
    answer:
      "Our main office is located in Buea, the capital of the Southwest Region of Cameroon. We serve the entire Southwest Region, including remote areas, ensuring that all healthcare facilities have access to essential medicines regardless of their location.",
  },
  {
    question: "How do you ensure medicine quality and safety?",
    answer:
      "We conduct rigorous quality checks at every stage, including batch testing, certification verification, expiry monitoring, and adherence to international safety protocols. All our suppliers are verified and certified by relevant health authorities.",
  },
  {
    question: "Can healthcare facilities request specific medicines?",
    answer:
      "Yes, healthcare facilities can request specific medicines through our online platform or by contacting us directly. We work with our network of suppliers to source medicines that may not be in our standard inventory, ensuring we meet specific healthcare needs.",
  },
  {
    question: "How can I volunteer or partner with SWRFPH?",
    answer:
      "We welcome volunteers and partners who share our mission. You can contact us through this form or email us directly. We offer various opportunities including community outreach, training programs, and administrative support.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // scroll variants for FAQ
  const { ref: faqRef, isVisible: faqVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Hero */}
      <div className="relative h-[200px] md:h-[320px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/re-stocking-medicines.jpeg"
            alt="SWRFHP Front View"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/55 to-emerald-950/90" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] font-black text-amber-400 uppercase tracking-[0.25em] mb-4">
              Together, let's
            </p>
            {/* <span className="inline-block text-sm font-bold tracking-[0.2em] text-brand-green-300 uppercase mb-4">Get to Know More</span> */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
              Drive Health Forward.
            </h1>
          </motion.div>
        </div>
      </div>

      <ContactSection />

      {/* FAQs Section */}
      {/* <div className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div
            ref={faqRef}
            className={`transition-all duration-1000 transform ${faqVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue-950 tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-500">
                Everything you need to know about partnering with SWRFHP.
              </p>
            </div>

            <div className="bg-slate-50 rounded-[2.5rem] p-6 sm:p-10 border border-slate-100 shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-slate-200 last:border-b-0 py-2"
                  >
                    <AccordionTrigger className="px-2 text-left font-bold text-lg text-brand-blue-950 hover:text-brand-green-600 transition-colors duration-200">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-2 pt-2 pb-6 text-gray-600 leading-relaxed text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div> */}
      <FAQs />

      {/* Minimal CTA */}
      {/* <div className="bg-brand-blue-950 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/front-view-of-office.jpeg')] bg-cover bg-center mix-blend-overlay" />
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to make an impact?
          </h2>
          <Link href="/intervention">
            <AnimatedButton className="bg-brand-green-500 text-brand-blue-950 hover:bg-brand-green-400 font-bold px-8 py-3 rounded-full">
              Explore Our Interventions
            </AnimatedButton>
          </Link>
        </div>
      </div> */}
    </div>
  );
}
