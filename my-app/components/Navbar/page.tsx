"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
    // 1. Initialize AOS (Now correctly at the top level of the effect)
    AOS.init({
      duration: 1500,   // animation duration
      once: true        // animation happens only once
    });

    // 2. Scroll Logic
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav  
      className={`fixed font-montserrat top-0 left-0 right-0 z-50 flex justify-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isScrolled ? 'pt-0' : 'pt-8'
      }`}
    >
      <div data-aos="fade-down" 
        className={`bg-[#111]/90 backdrop-blur-md text-white flex items-center justify-between shadow-2xl border border-white/10 transition-all duration-1000 ease-in-out-[cubic-bezier(0.23,1,0.32,1)] ${
          isScrolled 
            ? 'w-full max-w-none rounded-none px-12 py-5 border-transparent' 
            : 'w-[90%] max-w-5xl rounded-full px-4 py-2'
        }`}
      >
        {/* Navigation Group 1 */}
        <div className="flex items-center gap-8 flex-1">
          <Link 
            href="/" 
            className="bg-[#70A9FF] px-6 py-2 rounded-full font-medium whitespace-nowrap hover:bg-[#d96a2f] transition-colors"
          >
            Home
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-light tracking-wide text-gray-300">
            <Link href="#about" className="hover:text-white transition">About</Link>
            <Link href="#services" className="hover:text-white transition">Service</Link>
            </div>
          </div>
        
        {/* Logo Section - Scale it slightly when scrolled */}
        <div className={`flex items-center gap-3 transition-transform duration-500 ${isScrolled ? 'scale-110' : 'scale-100'}`}>
          <div className="bg-[#70A9FF] w-9 h-9 rounded-full flex items-center justify-center font-bold shadow-lg">
            MD
          </div>
          <span className="font-bold tracking-tighter text-2xl uppercase">Mufeez dev</span>
        </div>

        {/* Navigation Group 2 */}
        <div className="flex items-center justify-end gap-8 flex-1">
          <div className="hidden md:flex gap-8 text-sm font-light tracking-wide text-gray-300">
            <Link href="/resume.pdf" target='__blank' className="hover:text-white transition">Resume</Link>
            <Link href="#projects" className="hover:text-white transition">Project</Link>
          </div>
          <Link href="#contact" className="hover:text-[#70A9FF] transition text-sm font-medium">Contact</Link>
        </div>
      </div>
    </nav>
  );
}