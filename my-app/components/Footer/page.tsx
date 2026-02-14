"use client"
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, ArrowUp, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0D0D0D] text-white pt-24 pb-12 px-6 md:px-20 rounded-t-[80px] md:rounded-t-[120px] overflow-hidden">
      {/* Background Glows to match Service Section */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F17B3C]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F9B17A]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Identity */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#F17B3C] w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">
                MD
              </div>
              <span className="font-bold tracking-tighter text-3xl uppercase font-sans">Mufeez dev</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed font-montserrat">
             Building modern, high-performance websites that combine stunning design with powerful functionality. Delivering scalable digital solutions for clients worldwide.
            </p>
            <div className="flex gap-4" >
              {[
                { icon: <Phone size={20} />, href: "tel:+916362514956" },
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/mufeez-692840211/" },
                { icon: <Github size={20} />, href: "https://github.com/mufeez123-lab" },
                { icon: <Mail size={20} />, href: "mailto:mufizmalar@gmail.com" }
              ].map((social, i) => (
                <Link target='__blank'
                  key={i} 
                  href={social.href}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#F17B3C] hover:border-[#F17B3C] transition-all duration-300 group"
                >
                  <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold font-sans">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 font-montserrat">
              <li><Link href="#home" className="hover:text-[#F17B3C] transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-[#F17B3C] transition-colors">Services</Link></li>
              <li><Link href="#about" className="hover:text-[#F17B3C] transition-colors">Experience</Link></li>
              <li><Link href="#whyhireme" className="hover:text-[#F17B3C] transition-colors">Why Hire me</Link></li>
            </ul>
          </div>

          {/* Contact Trigger */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold font-sans">Let&apos;s Connect</h4>
            <p className="text-gray-400 font-montserrat">Have a project in mind?</p>
            <Link 
              href="mailto:mufizmalar@gmail.com" 
              className="inline-block bg-[#F17B3C] px-8 py-3 rounded-full font-bold hover:bg-[#d96a2f] transition-all shadow-lg shadow-orange-900/20"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 font-montserrat">
          <p>© 2026 Mufeez Dev. All Rights Reserved. </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors group"
          >
            Back to top 
            <span className="p-2 bg-white/5 rounded-full group-hover:-translate-y-1 transition-transform">
              <ArrowUp size={16} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}