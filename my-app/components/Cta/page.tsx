// components/ContactCTA.tsx
import { Mail, Star, Award, ShieldCheck } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id='contact' className="py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-12 mb-20">
        <h2 className="text-6xl font-bold text-[#2D3E50]">
          Have an Awesome Project <br /> Idea? <span className="text-[#F17B3C]">Let&apos;s Discuss</span>
        </h2>
        
  <div>
       <a
  href="https://wa.me/916362514956?text=Hello%20Mufeez,%20I%20am%20interested%20in%20your%20website%20development%20services."
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-[#F17B3C] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#d96a2f] transition-colors">
    Contact Me
  </button>
  </a>
  </div>

        <div className="flex flex-wrap justify-center gap-10 text-sm font-medium text-[#2D3E50]">
          <div className="flex items-center gap-2"><Star size={16} fill="currentColor" /> 4.5/5 Average Ratings</div>
          <div className="flex items-center gap-2"><Award size={16} /> 800+ Github Contributions</div>
          <div className="flex items-center gap-2"><ShieldCheck size={16} /> Certified Software Developer</div>
        </div>
      </div>

      {/* Rotating Marquee Bar */}
      <div className="bg-[#F17B3C] py-8 -rotate-2 scale-105 border-y-8 border-white overflow-hidden whitespace-nowrap flex">
        <div className="flex animate-marquee gap-12 text-4xl font-bold text-white items-center">
          {["Web Design", "Fullstack Development", "Backend Development", "Landing Page", "Database"].map((text) => (
            <div key={text} className="flex items-center gap-12">
              <span>{text}</span>
              <span className="text-white/40">✦</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {["Web Design", "Fullstack Development", "Backend Development", "Landing Page", "Database"].map((text) => (
            <div key={text + '2'} className="flex items-center gap-12">
              <span>{text}</span>
              <span className="text-white/40">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}