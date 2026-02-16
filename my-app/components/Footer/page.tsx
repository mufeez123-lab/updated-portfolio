"use client";
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, ArrowUp, Phone, ExternalLink } from 'lucide-react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/mufeez-692840211/", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "https://github.com/mufeez123-lab", label: "GitHub" },
    { icon: <Mail size={20} />, href: "mailto:mufizmalar@gmail.com", label: "Email" },
    { icon: <Phone size={20} />, href: "tel:+916362514956", label: "Call" }
  ];

  return (
    <footer className="relative bg-[#080808] text-white pt-20 pb-10 px-6 md:px-20 overflow-hidden">
      {/* Subtle Background Elements to match Navbar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#70A9FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Section: Large CTA */}
       

        {/* Middle Section: Bento Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-t border-white/5 pt-12">
          
          {/* Brand Card */}
          <div data-aos="fade-up" data-aos-delay="100" className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#70A9FF] w-10 h-10 rounded-xl flex items-center justify-center font-black text-black rotate-3">
                MD
              </div>
              <span className="font-black tracking-tighter text-2xl uppercase italic">Mufeez<span className="text-[#70A9FF]">.dev</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Crafting digital experiences where high-end design meets flawless performance.
            </p>
          </div>

          {/* Nav Links */}
          <div data-aos="fade-up" data-aos-delay="200" className="md:ml-auto">
            <h4 className="text-[#70A9FF] text-xs font-bold uppercase tracking-[0.3em] mb-6">Explore</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Projects', 'Experience'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div data-aos="fade-up" data-aos-delay="300" className="md:ml-auto">
            <h4 className="text-[#70A9FF] text-xs font-bold uppercase tracking-[0.3em] mb-6">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  className="p-3 rounded-xl border border-white/10 hover:border-[#70A9FF] hover:bg-[#70A9FF]/10 text-gray-400 hover:text-[#70A9FF] transition-all"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
          <p className="text-xs font-medium text-gray-600 uppercase tracking-widest">
            © 2026 Mufeez Dev — Designed & Developed By Mahammad Mufeez
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all"
          >
            Back to Top
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#70A9FF] group-hover:-translate-y-1 transition-all">
              <ArrowUp size={16} className="group-hover:text-[#70A9FF]" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}