"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: "About", href: "#about", desc: "Who I am" },
    { name: "Services", href: "#services", desc: "What I do" },
    { name: "Projects", href: "#projects", desc: "My work" },
    { name: "Resume", href: "/resume.pdf", desc: "Experience" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center font-montserrat ${
        isScrolled ? 'pt-0' : 'pt-6'
      }`}>
        <div className={`relative flex items-center justify-between transition-all duration-700 border border-white/10 backdrop-blur-xl bg-[#111]/90 shadow-2xl
          ${isScrolled ? 'w-full rounded-none px-8 py-5' : 'w-[90%] max-w-6xl rounded-2xl px-6 py-4'}`}>
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-[120]">
            <div className="bg-[#70A9FF] w-9 h-9 rounded-lg flex items-center justify-center font-bold text-black shadow-lg">MD</div>
            <span className="font-bold text-xl tracking-tighter text-white uppercase">Mufeez<span className="text-[#70A9FF]">.dev</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-[#70A9FF] transition-all uppercase tracking-widest">
                {link.name}
              </Link>
            ))}
            <Link href="#contact" className="bg-[#70A9FF] text-black px-6 py-2 rounded-full font-bold text-xs uppercase hover:bg-white transition-all">
              Contact
            </Link>
          </div>

          {/* White Animated Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-[120] relative">
            <span className={`block absolute h-0.5 w-7 bg-white transition-all duration-300 ${isOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
            <span className={`block absolute h-0.5 w-7 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block absolute h-0.5 w-7 bg-white transition-all duration-300 ${isOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
          </button>
        </div>
      </nav>

      {/* NEW STUNNING MOBILE MENU DESIGN */}
      <div className={`fixed inset-0 z-[110] transition-all duration-700 ease-[cubic-bezier(0.9,0,0.1,1)] ${
        isOpen ? 'visible' : 'invisible'
      }`}>
        {/* Dark Overlay Background */}
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)} />

        {/* Sliding Menu Panel */}
        <div className={`absolute right-0 top-0 h-full w-[85%] md:w-[400px] bg-[#0f0f0f] border-l border-white/10 shadow-2xl flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.9,0,0.1,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          
          {/* Menu Content */}
          <div className="flex flex-col  h-full pt-32 px-10 pb-10">
            <p className="text-[#70A9FF] text-xs font-bold uppercase tracking-[0.3em] mb-8 opacity-50">Navigation</p>
            
            <div className="flex flex-col gap-6">
              {navLinks.concat({ name: "Contact", href: "#contact", desc: "Get in touch" }).map((link, i) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className={`group flex flex-col transition-all duration-500 transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                  style={{ transitionDelay: `${200 + (i * 100)}ms` }}
                >
                  <span className="text-4xl font-black text-white group-hover:text-[#70A9FF] transition-colors leading-none tracking-tighter uppercase">
                    {link.name}
                  </span>
                  <span className="text-gray-500 text-xs mt-1 font-medium uppercase tracking-widest group-hover:text-gray-300">
                    {link.desc}
                  </span>
                </Link>
              ))}
            </div>

            {/* Footer Section of Menu */}
            <div className={`mt-auto transition-all duration-700 delay-700 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              <div className="h-[1px] w-full bg-white/10 mb-8" />
              <div className="flex flex-col gap-4">
                <p className="text-gray-400 text-xs">Based in [Your Location]</p>
                <div className="flex gap-6">
                  <a href="https://www.linkedin.com/in/mufeez-692840211/" className="text-white hover:text-[#70A9FF] text-sm transition-colors">LinkedIn</a>
                  <a href="https://github.com/mufeez123-lab" className="text-white hover:text-[#70A9FF] text-sm transition-colors">GitHub</a>
                  <a href="mailto:mufizmalar@gmail.com" className="text-white hover:text-[#70A9FF] text-sm transition-colors">Email</a>
                  <a href="https://wa.me/916362514956" className="text-white hover:text-[#70A9FF] text-sm transition-colors">Whatsapp</a>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Corner Glow */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#70A9FF]/10 blur-[60px] rounded-full" />
        </div>
      </div>
    </>
  );
}