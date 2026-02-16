"use client"
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, ArrowUp, Phone } from 'lucide-react';
import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css"

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0D0D0D] text-white pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-20 rounded-t-[50px] md:rounded-t-[120px] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-[#70A9FF]/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-[#F9B17A]/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 md:mb-16">
          
          {/* Brand Identity */}
          <div data-aos="fade-right" className="sm:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#70A9FF] w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg flex-shrink-0">
                MD
              </div>
              <span className="font-bold tracking-tighter text-2xl md:text-3xl uppercase font-sans">Mufeez dev</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed font-montserrat text-sm md:text-base">
              Building modern, high-performance websites that combine stunning design with powerful functionality. Delivering scalable digital solutions for clients worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <Phone size={18} />, href: "tel:+916362514956" },
                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/mufeez-692840211/" },
                { icon: <Github size={18} />, href: "https://github.com/mufeez123-lab" },
                { icon: <Mail size={18} />, href: "mailto:mufizmalar@gmail.com" }
              ].map((social, i) => (
                <Link target='_blank'
                  key={i} 
                  href={social.href}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#70A9FF] hover:border-[#70A9FF] transition-all duration-300 group"
                >
                  <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" className="space-y-4 md:space-y-6">
            <h4 className="text-lg md:text-xl font-bold font-sans">Quick Links</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-3 md:gap-4 text-gray-400 font-montserrat text-sm md:text-base">
              <li><Link href="#home" className="hover:text-[#70A9FF] transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-[#70A9FF] transition-colors">Services</Link></li>
              <li><Link href="#about" className="hover:text-[#70A9FF] transition-colors">Experience</Link></li>
              <li><Link href="#whyhireme" className="hover:text-[#70A9FF] transition-colors">Why Hire me</Link></li>
            </ul>
          </div>

          {/* Contact Trigger */}
          <div data-aos="fade-up" className="space-y-4 md:space-y-6">
            <h4 className="text-lg md:text-xl font-bold font-sans">Let&apos;s Connect</h4>
            <p className="text-gray-400 font-montserrat text-sm md:text-base">Have a project in mind?</p>
            <Link 
              href="mailto:mufizmalar@gmail.com" 
              className="inline-block bg-[#70A9FF] px-6 md:px-8 py-3 rounded-full font-bold hover:bg-[#d96a2f] transition-all shadow-lg shadow-orange-900/20 text-sm md:text-base"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-8" />

        {/* Bottom Bar */}
        <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs md:text-sm text-gray-500 font-montserrat">
          <p className="text-center md:text-left">© 2026 Mufeez Dev. All Rights Reserved. </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors group"
          >
            Back to top 
            <span className="p-2 bg-white/5 rounded-full group-hover:-translate-y-1 transition-transform">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}