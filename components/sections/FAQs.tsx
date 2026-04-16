'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How can I donate to support your mission?',
    answer: 'You can donate through our website by clicking the "Donate" button in the navigation. We accept various payment methods. ',
    linkText: 'Access Donation Portal',
    url: '/donate'
  },
  {
    question: 'What services do you offer to healthcare facilities?',
    answer: 'We offer comprehensive services including medicine procurement, logistics with cold chain management, and quality assurance. ',
    linkText: 'View Service Catalog',
    url: '/services'
  },
  {
    question: 'Where are you located and what areas do you serve?',
    answer: 'Our main office is located in Buea. We serve the entire Southwest Region, including remote areas across all 21 districts.'
  },
  {
    question: 'How do you ensure medicine quality and safety?',
    answer: 'We conduct rigorous quality checks at every stage, including batch testing and adherence to international safety protocols.'
  },
  {
    question: 'How can I volunteer or partner with SWRFPH?',
    answer: 'We welcome volunteers and partners who share our mission. You can reach out via our contact form or ',
    linkText: 'email our HR team',
    url: 'mailto:hr@swrfph.org'
  }
]

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-[800px] mx-auto px-6">
        
        {/* Header */}
        <div 
         data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="400"
        className="mb-16">
          <h2 className="text-3xl font-bold text-[#064E3B] mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-base text-center">Quick answers to common inquiries about our regional operations.</p>
        </div>

        <div className='md:hidden'
        data-aos="flip-right"
                data-aos-duration="1000"
                data-aos-delay="400">
            <img src="/faq.png" alt="" className="w-full h-auto" />
        </div>

        {/* FAQ List */}
        <div className="md:p-6 md:border border-slate-700">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div 
                key={index} 
                className="border-b border-slate-400 last:border-0"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-3 flex items-center justify-between text-left group transition-all"
                >
                  <span className={`text-base font-semibold transition-colors duration-300 ${isOpen ? '' : 'text-slate-800 group-hover:text-[#064E3B]'}`}>
                    {faq.question}
                  </span>
                  
                  {/* Rotating Chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className={`text-slate-400 ${isOpen ? '' : ''}`}
                  >
                    <ChevronDown size={20} strokeWidth={2.5} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pr-12 text-slate-600 leading-relaxed text-base">
                        {faq.answer}
                        {faq.url && (
                          <a 
                            href={faq.url} 
                            className="text-emerald-500 font-bold underline underline-offset-4 hover:text-emerald-500 transition-colors inline-block ml-1"
                          >
                            {faq.linkText}
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}