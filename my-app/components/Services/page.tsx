"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css"

const services = [
  { title: "Fullstack Application", image: "/images/f.jpg" },
  { title: "Web Design", image: "/images/w.jpg" },
  { title: "Landing Page", image: "/images/l.jpg" },
  { title: "Software Development", image: "/images/s.jpg" }
]

export default function ServicePage() {
      useEffect(() => {
    AOS.init({
      duration: 1500,   // animation duration
      once: true        // animation happens only once
    })
  }, [])
  return (
    <section id="services" className="relative min-h-screen rounded-[80px] md:rounded-[50px] bg-[#050505] text-white py-20 px-6 md:px-10 overflow-hidden font-sans -mt-[80px] shadow-2xl">

      
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-br from-[#F17B3C] to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-20 w-48 h-48 bg-gradient-to-tr from-orange-600 to-transparent rounded-full blur-[100px] animate-float-delayed" />
      </div> 


       <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 max-w-[150vh] mx-auto">

        {/* Header */}
        <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs tracking-widest uppercase">
              My Expertise
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
              My <span className="text-[#F17B3C]">Projects</span>
            </h2>
          </div>

          <p className="max-w-md text-gray-400 text-lg font-light leading-relaxed border-l border-[#F17B3C] pl-6">
            Crafting digital experiences that blend aesthetic beauty with functional precision.
          </p>
        </div>

        {/* ✅ 4 Column Grid */}
{/* 1. Remove data-aos from this parent div */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

  {services.map((service, index) => (
    <a
      key={index}
      href="https://wa.me/916362514956"
      target="_blank"
      rel="noopener noreferrer"
      // 2. Add AOS attributes here to trigger them individually
      data-aos="fade-up"
      // 3. Stagger the delay: 100ms, 200ms, 300ms, etc.
      data-aos-delay={index * 150} 
      className="relative group bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[48px] p-8 h-[500px] flex flex-col justify-between transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20"
    >
      {/* ... rest of your content stays the same */}
      
      {/* Title */}
      <h3 className="text-2xl font-medium tracking-tight group-hover:text-[#F17B3C] transition-colors">
        {service.title}
      </h3>

      {/* Image and Bottom Section code... */}
      <div className="relative w-full h-[262px]">
        <div className="absolute inset-0 bg-[#1a1a1a] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl transform transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-[1.02]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-white/30 text-sm font-mono">0{index + 1}</span>
        <div className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-[#F17B3C] group-hover:text-white transition-all duration-500 transform group-hover:rotate-45">
          <ArrowUpRight size={22} />
        </div>
      </div>
    </a>
  ))}
</div>

        {/* Bottom Scroll Indicator */}
        <div className="flex items-center gap-4 mt-16">
          <div className="h-[2px] w-24 bg-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#F17B3C] w-1/2 animate-progress" />
          </div>
          <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
            Explore Services
          </span>
        </div>

      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 8s ease-in-out infinite 2s; }

        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-progress { animation: progress 3s linear infinite; }
      `}</style>

    </section>
  )
}
