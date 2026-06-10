'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Search } from 'lucide-react'

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300)
  }, [open])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const q = inputRef.current?.value.trim()
    if (!q) return
    onClose()
    router.push(`/search?query=${encodeURIComponent(q)}`)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-primary-950/95 backdrop-blur-sm flex flex-col items-center justify-center px-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className="w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-[10px] font-black text-accent-400 uppercase tracking-[0.25em] mb-6">Search</p>

            <form onSubmit={handleSubmit} className="flex items-center gap-4 border-b-2 border-white/20 pb-4 focus-within:border-accent-400 transition-colors duration-300">
              <Search size={20} className="text-white/40 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Type and press Enter…"
                className="flex-1 bg-transparent text-white text-2xl md:text-3xl font-bold placeholder:text-white/20 outline-none tracking-tight"
              />
            </form>

            <p className="text-white/30 text-xs mt-4 tracking-wide">Press <span className="text-white/50 font-bold">ESC</span> to close</p>
          </motion.div>

          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}