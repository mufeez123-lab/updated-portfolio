"use client"
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState, useCallback } from "react"
import AOS from "aos";
import "aos/dist/aos.css"

const portfolioItems = [
  { id: 1, title: "Hindustan Builders", image: "/images/ss1.png" },
  { id: 2, title: "Sky Diamond Dreams", image: "/images/ss2.png" },
  { id: 3, title: "Prestige Events", image: "/images/ss3.png" },
  { id: 4, title: "Badger Scoop", image: "/images/123.png" },
  { id: 5, title: "Afera Plywood", image: "/images/12345.png" },
];  

export default function PortfolioCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => { 
    AOS.init({
      duration: 1500,
      once: true
    })
  }, [])

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false 
  }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);

  // Update dots when slide changes
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
    <section id='projects' className="py-16 md:py-24 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto font-sans overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-16 gap-6">
        <h2 data-aos="fade-up" className="text-4xl md:text-6xl font-bold text-[#2D3E50] leading-tight">
          Lets have a look at <br /> my <span className="text-[#F17B3C]"> Recent Projects</span>
        </h2>
      </div>

      {/* Auto-Sliding Viewport */}
      <div 
        data-aos="fade-up" 
        data-aos-delay="200" 
        className="overflow-visible md:overflow-hidden cursor-grab active:cursor-grabbing" 
        ref={emblaRef}
      >
        <div className="flex gap-4 md:gap-8">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className="flex-[0_0_90%] md:flex-[0_0_85%] lg:flex-[0_0_75%] min-w-0"
            >
              <div className="relative h-[350px] md:h-[550px] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl group">
                {/* Portfolio Image */}
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                {/* Branding Text Over Image - Responsive Text sizes */}
                <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-2xl group-hover:text-[#F17B3C] transition-colors duration-300">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Pagination Dots */}
      <div className="flex justify-center items-center gap-2 mt-10 md:mt-12">
        {portfolioItems.map((_, index) => (
          <div 
            key={index}
            className={`transition-all duration-300 rounded-full ${
              index === selectedIndex ? "w-10 md:w-12 h-2 md:h-2.5 bg-[#F17B3C]" : "w-2 md:w-2.5 h-2 md:h-2.5 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}