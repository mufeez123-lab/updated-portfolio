"use client";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState, useCallback } from "react"
import { ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css"

const portfolioItems = [
  { id: 1, title: "Hindustan Builders", image: "/images/ss1.png", link: "https://hindustanbuilders.in" },
  { id: 2, title: "Sky Diamond Dreams", image: "/images/ss2.png", link: "" },
  { id: 3, title: "Prestige Events", image: "/images/ss3.png", link: "https://prestige-event.vercel.app/demo" },
  { id: 4, title: "Badger Scoop", image: "/images/123.png", link: "https://badgerscoop.com" },
  { id: 5, title: "Afera Plywood", image: "/images/12345.png", link: "https://aferaplywood.vercel.app/" },
];  

export default function PortfolioCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => { 
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center', // Changed to center for a more premium look
    skipSnaps: false 
  }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section id='projects' className="bg-[#080808] py-20 md:py-32 px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-20">
          <h4 data-aos="fade-up" className="text-[#70A9FF] text-xs font-bold uppercase tracking-[0.3em] mb-4">Portfolio</h4>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-7xl font-black text-white leading-none uppercase tracking-tighter">
            My <br /> <span className="text-[#70A9FF]">Works</span>
          </h2>
        </div>

        {/* Carousel Viewport */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="200" 
          className="overflow-visible cursor-grab active:cursor-grabbing" 
          ref={emblaRef}
        >
          <div className="flex gap-6 md:gap-10">
            {portfolioItems.map((item) => (
              <div 
                key={item.id} 
                className="flex-[0_0_90%] md:flex-[0_0_80%] lg:flex-[0_0_70%] min-w-0"
              >
                {/* Wrap the item in a Link */}
                <Link target="_blank" href={item.link} className="block group relative h-[400px] md:h-[600px] rounded-[24px] md:rounded-[40px] overflow-hidden border border-white/5 shadow-2xl">
                  
                  {/* Project Image */}
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />

                  {/* Content Container */}
                  <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
                    <div className="flex items-end justify-between translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div>
                        <p className="text-[#70A9FF] text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">View Project</p>
                        <h3 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter">
                          {item.title}
                        </h3>
                      </div>
                      
                      {/* Floating Link Icon */}
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center text-black scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                        <ExternalLink size={24} />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Pagination / Progress Bar */}
        <div className="flex justify-between items-center mt-12 px-2">
          <div className="flex gap-2">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                className={`transition-all duration-500 rounded-full h-1.5 ${
                  index === selectedIndex ? "w-12 bg-[#70A9FF]" : "w-4 bg-white/10 hover:bg-white/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="hidden md:block text-white/20 font-black text-2xl tracking-tighter uppercase italic">
            0{selectedIndex + 1} / 0{portfolioItems.length}
          </div>
        </div>
      </div>
    </section>
  );
}