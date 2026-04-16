'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send } from 'lucide-react'

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      
      {/* The Chat Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="mb-4 w-[350px] md:w-[400px] bg-white border border-slate-200 shadow-2xl overflow-hidden flex flex-col"
            style={{ borderRadius: '2px' }} // Strict 2px radius
          >
            {/* Header */}
            <div className="bg-[#064E3B] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-emerald-600 overflow-hidden flex items-center justify-center rounded-full">
                   <img src="/swrfph-logo.png" alt="Logo" className=" w-8 h-8 object-contain" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold leading-none">SWRFHP Support</p>
                  <p className="text-emerald-400/80 text-[10px] uppercase tracking-widest mt-1">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Message Area */}
            <div className="h-[350px] bg-slate-50 p-4 overflow-y-auto flex flex-col gap-4">
              <div className="bg-white border border-slate-200 p-3 max-w-[80%] text-sm text-slate-700 self-start shadow-sm" style={{ borderRadius: '2px' }}>
                Hello! How can we assist you with medical supply information today?
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
              <input 
                type="text" 
                placeholder="Type your message..."
                className="flex-grow text-sm bg-slate-50 border border-slate-200 px-3 py-2 focus:outline-none focus:border-emerald-600 transition-colors"
                style={{ borderRadius: '2px' }}
              />
              <button className="bg-[#064E3B] text-white p-2 hover:bg-emerald-800 transition-colors" style={{ borderRadius: '2px' }}>
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#064E3B] !rounded-full text-white w-14 h-14 shadow-xl flex items-center justify-center hover:bg-emerald-800 transition-all active:scale-95"
        style={{ borderRadius: '2px' }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  )
}