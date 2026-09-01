'use client'

import { SearchX } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('query') || ''

  return (
    <>
      <div className="border-b border-slate-100 py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl">
          <h1 className="text-3xl md:text-5xl text-center font-black text-emerald-950 tracking-tight leading-tight">
            {query
              ? <span>Results for <span className="text-slate-400">"{query}"</span></span>
              : 'Search'
            }
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-8 max-w-4xl py-24 md:py-36 flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6">
          <SearchX size={52} className="text-slate-300 w-full h-full" />
        </div>
        <h2 className="text-xl font-black text-emerald-950 tracking-tight mb-2">
          No results found
        </h2>
        <p className="text-slate-400 text-base leading-relaxed max-w-sm">
          {query
            ? `Nothing matched "${query}". Try a different keyword or browse our pages directly.`
            : 'Enter a keyword in the search bar to find pages, resources, and more.'
          }
        </p>
      </div>
    </>
  )
}

export default function SearchPage() {
  return (
    <div className="bg-white min-h-[70vh]">
      <Suspense fallback={<div className="py-24 text-center">Loading search results...</div>}>
        <SearchResults />
      </Suspense>
    </div>
  )
}