'use client'

import { ArrowRight, User } from 'lucide-react'

export function ResourcesSection() {
  const posts = [
    {
      id: 1,
      title: "Optimizing Personnel for Last-Mile Delivery",
      desc: "How we train and deploy specialized health workers to ensure supply integrity in remote regional zones.",
      image: "/hr-training.webp",
      date: "April 21 2026",
      author: { name: "Dr. Njume F.", role: "HR Director", avatar: "/avatar1.jpg" }
    },
    {
      id: 2,
      title: "Warehouse Management Standards 2026",
      desc: "Updated protocols for biomedical equipment handling and sterile environment maintenance for staff.",
      image: "/warehouse-staff.jpeg",
      date: "April 07 2026",
      author: { name: "Sarah M.", role: "Logistics Lead", avatar: "/avatar2.jpg" }
    },
    {
      id: 3,
      title: "Community Health Worker Integration",
      desc: "Bridging the gap between regional distribution centers and local community health representatives.",
      image: "/community-hr.jpeg",
      date: "April 21 2026",
      author: { name: "Paul Atabong", role: "Field Coordinator", avatar: "/avatar3.jpg" }
    },
    {
      id: 4,
      title: "Digital Tracking for HR Performance",
      desc: "Implementing new software tools to monitor and improve delivery times across all 21 health districts.",
      image: "/digital-tools.jpeg",
      date: "May 07 2026",
      author: { name: "Steve Jones", role: "Systems Dev", avatar: "/avatar4.jpg" }
    }
  ]

  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        
        {/* Header - Simple Fade Up */}
        <div className="max-w-7xl mb-8 md:mb-12 text-center">
          <p 
            className="text-accent-400 font-black uppercase mb-3"
          >
              Reports from SWRFHP
          </p>
          <h2 
            className="text-3xl md:text-5xl mx-auto max-w-3xl lg:text-6xl font-black text-gray-800/80 tracking-tighter leading-[1.05]"
          >
            Resources & Insights
          </h2>
        </div>

        {/* Grid - Card-level animation only */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
          {posts.map((post, index) => (
            <div 
              key={post.id} 
              className="group flex flex-row lg:flex-col gap-5 items-center lg:items-start"
            >
              {/* Image Container */}
              <div className="w-1/3 lg:w-full aspect-square lg:aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>

              {/* Content Area */}
              <div className="w-2/3 lg:w-full flex flex-col">
                <h3 className="text-lg cursor-pointer lg:text-xl font-bold text-[#064E3B] mb-2 leading-snug hover:underline transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.desc}
                </p>

                <p className='text-slate-400 text-sm'>
                  {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}