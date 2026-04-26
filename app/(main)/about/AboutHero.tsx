import Image from 'next/image'
import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
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
            {/* <span className="inline-block text-sm font-bold tracking-[0.2em] text-brand-green-300 uppercase mb-4">Get to Know More</span> */}
            <p className="text-[10px] font-black text-amber-400 uppercase tracking-[0.25em] mb-4">Get to know more</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight">
              About SWRFHP
            </h1>
            
          </motion.div>
        </div>
      </div>
  )
}

export default AboutHero
