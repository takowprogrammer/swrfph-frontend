'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronDown, ChevronUp } from 'lucide-react'

type ConsentState = {
  accepted: boolean
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const STORAGE_KEY = 'swrfhp_cookie_consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [customizing, setCustomizing] = useState(false)
  const [prefs, setPrefs] = useState({ analytics: false, marketing: false })

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setTimeout(() => setVisible(true), 1200)
  }, [])

  const save = (consent: ConsentState) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent))
    setVisible(false)
  }

  const acceptAll = () => save({ accepted: true, necessary: true, analytics: true, marketing: true })
  const acceptNecessary = () => save({ accepted: true, necessary: true, analytics: false, marketing: false })
  const saveCustom = () => save({ accepted: true, necessary: true, ...prefs })

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          className="fixed bottom-0 left-0 right-0 z-[200] md:bottom-6 md:left-auto md:right-6 md:max-w-[420px]"
        >
          <div className="bg-white border border-slate-200 shadow-2xl shadow-slate-900/10 md:border">

            {/* Top bar */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="text-base">🍪</span>
                <p className="text-xs font-black text-emerald-950 uppercase tracking-[0.15em]">Cookie Preferences</p>
              </div>
              <button
                onClick={acceptNecessary}
                className="text-slate-300 hover:text-slate-500 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Body */}
            <div className="px-5 py-5">
              <p className="text-slate-500 text-xs leading-relaxed mb-5">
                We use cookies to improve your experience on our site. Some are essential for the site to work, others help us understand how you use it.{' '}
                <a href="/privacy" className="text-emerald-700 font-bold underline underline-offset-2">
                  Privacy Policy
                </a>
              </p>

              {/* Customize panel */}
              <AnimatePresence>
                {customizing && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-3 pb-5">

                      {/* Necessary — always on */}
                      <div className="flex items-center justify-between py-3 border-t border-slate-100">
                        <div>
                          <p className="text-xs font-black text-emerald-950 tracking-tight">Necessary</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">Required for the site to function.</p>
                        </div>
                        <div className="w-9 h-5 bg-emerald-600 rounded-full flex items-center justify-end px-0.5 shrink-0">
                          <div className="w-4 h-4 bg-white rounded-full" />
                        </div>
                      </div>

                      {/* Analytics */}
                      <div className="flex items-center justify-between py-3 border-t border-slate-100">
                        <div>
                          <p className="text-xs font-black text-emerald-950 tracking-tight">Analytics</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">Helps us understand site usage.</p>
                        </div>
                        <button
                          onClick={() => setPrefs(p => ({ ...p, analytics: !p.analytics }))}
                          className={`w-9 h-5 rounded-full flex items-center px-0.5 transition-colors duration-200 shrink-0 ${prefs.analytics ? 'bg-emerald-600 justify-end' : 'bg-slate-200 justify-start'}`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                        </button>
                      </div>

                      {/* Marketing */}
                      <div className="flex items-center justify-between py-3 border-t border-slate-100">
                        <div>
                          <p className="text-xs font-black text-emerald-950 tracking-tight">Marketing</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">Used for relevant communications.</p>
                        </div>
                        <button
                          onClick={() => setPrefs(p => ({ ...p, marketing: !p.marketing }))}
                          className={`w-9 h-5 rounded-full flex items-center px-0.5 transition-colors duration-200 shrink-0 ${prefs.marketing ? 'bg-emerald-600 justify-end' : 'bg-slate-200 justify-start'}`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                        </button>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Actions */}
              <div className="flex flex-col gap-2">
                {customizing ? (
                  <button
                    onClick={saveCustom}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-black uppercase tracking-[0.2em] py-3 transition-colors duration-200"
                  >
                    Save Preferences
                  </button>
                ) : (
                  <button
                    onClick={acceptAll}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-black uppercase tracking-[0.2em] py-3 transition-colors duration-200"
                  >
                    Accept All
                  </button>
                )}

                <div className="flex gap-2">
                  <button
                    onClick={acceptNecessary}
                    className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-[0.15em] py-3 transition-colors duration-200 border border-slate-100"
                  >
                    Necessary Only
                  </button>
                  <button
                    onClick={() => setCustomizing(c => !c)}
                    className="flex items-center gap-1.5 px-4 bg-slate-50 hover:bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-[0.15em] py-3 transition-colors duration-200 border border-slate-100"
                  >
                    Customize
                    {customizing ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}