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
      duration: 1500,
      once: true
    })
  }, [])

  return (
    <section id="services" className="relative min-h-screen rounded-[40px] md:rounded-[80px] bg-[#050505] text-white py-16 md:py-24 px-6 md:px-10 overflow-hidden font-sans -mt-10 md:-mt-[80px] shadow-2xl">

      {/* Background Orbs - Adjusted for mobile */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-5 md:left-10 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#F17B3C] to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-10 md:right-20 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-tr from-orange-600 to-transparent rounded-full blur-[80px] md:blur-[100px] animate-float-delayed" />
      </div> 

      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header - Changed items-end to items-start for mobile flow */}
        <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs tracking-widest uppercase">
              My Expertise
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              My <span className="text-[#F17B3C]">Projects</span>
            </h2>
          </div>

          <p className="max-w-md text-gray-400 text-base md:text-lg font-light leading-relaxed border-l border-[#F17B3C] pl-6">
            Crafting digital experiences that blend aesthetic beauty with functional precision.
          </p>
        </div>

        {/* Grid - Adjusted gap and columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href="https://wa.me/916362514956"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={index * 100} 
              // Changed h-[500px] to min-h-[450px] for flexibility
              className="relative group bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[32px] md:rounded-[48px] p-6 md:p-8 min-h-[450px] flex flex-col justify-between transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20"
            >
              <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-[#F17B3C] transition-colors">
                {service.title}
              </h3>

              <div className="relative w-full h-[200px] md:h-[240px] my-6">
                <div className="absolute inset-0 bg-[#1a1a1a] rounded-[24px] md:rounded-[32px] overflow-hidden border border-white/10 shadow-2xl transform transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-[1.02]">
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
                <div className="bg-white text-black w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center group-hover:bg-[#F17B3C] group-hover:text-white transition-all duration-500 transform group-hover:rotate-45">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Scroll Indicator - Center on mobile */}
        <div className="flex items-center justify-center md:justify-start gap-4 mt-12 md:mt-16">
          <div className="h-[2px] w-16 md:w-24 bg-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#F17B3C] w-1/2 animate-progress" />
          </div>
          <span className="text-[10px] md:text-xs font-mono text-white/40 uppercase tracking-widest">
            Explore Services
          </span>
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
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