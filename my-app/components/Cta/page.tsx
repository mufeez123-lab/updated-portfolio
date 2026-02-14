"use client"
import { Star, Award, ShieldCheck } from 'lucide-react';
import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css"

export default function ContactCTA() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    })
  }, [])

  return (
    <section id='contact' className="py-16 md:py-24 overflow-hidden bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8 md:space-y-12 mb-16 md:mb-24">
        {/* Responsive Heading */}
        <h2 data-aos="fade-up" className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#2D3E50] leading-tight">
          Have an Awesome Project <br className="hidden sm:block" /> 
          Idea? <span className="text-[#F17B3C]">Let&apos;s Discuss</span>
        </h2>
        
        <div data-aos="fade-up" data-aos-delay="200">
          <a 
            href="https://wa.me/916362514956?text=Hello%20Mufeez,%20I%20am%20interested%20in%20your%20website%20development%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-[#F17B3C] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold hover:bg-[#d96a2f] transition-all transform active:scale-95 shadow-lg shadow-orange-200">
              Contact Me
            </button>
          </a>
        </div>

        {/* Responsive Stats/Trust Badges */}
        <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 md:gap-10 text-xs md:text-sm font-medium text-[#2D3E50]">
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full sm:bg-transparent sm:p-0">
            <Star size={16} className="text-[#F17B3C]" fill="currentColor" /> 
            <span>4.5/5 Average Ratings</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full sm:bg-transparent sm:p-0">
            <Award size={16} className="text-[#F17B3C]" /> 
            <span>800+ Github Contributions</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full sm:bg-transparent sm:p-0">
            <ShieldCheck size={16} className="text-[#F17B3C]" /> 
            <span>Certified Developer</span>
          </div>
        </div>
      </div>

      {/* Rotating Marquee Bar - Enhanced for Mobile */}
      <div className="relative py-4 md:py-8">
        <div className="bg-[#F17B3C] py-4 md:py-8 -rotate-2 scale-105 border-y-4 md:border-y-8 border-white overflow-hidden whitespace-nowrap flex shadow-xl">
          <div className="flex animate-marquee gap-8 md:gap-12 text-xl md:text-4xl font-bold text-white items-center">
            {["Web Design", "Fullstack Development", "Backend Development", "Landing Page", "Database", "React JS", "Node JS"].map((text, idx) => (
              <div key={idx} className="flex items-center gap-8 md:gap-12">
                <span>{text}</span>
                <span className="text-white/40 text-2xl md:text-4xl">✦</span>
              </div>
            ))}
            {/* Seamless Loop Duplicate */}
            {["Web Design", "Fullstack Development", "Backend Development", "Landing Page", "Database", "React JS", "Node JS"].map((text, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-8 md:gap-12">
                <span>{text}</span>
                <span className="text-white/40 text-2xl md:text-4xl">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Custom Animation Injection */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}</style>
    </section>
  );
}