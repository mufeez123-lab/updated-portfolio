"use client"
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect } from "react"
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
    useEffect(() => { 
    AOS.init({
      duration: 1500,   // animation duration
      once: true        // animation happens only once
    })
  }, [])
  // Initialize Embla with Autoplay
  const [emblaRef] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false 
  }, [
    Autoplay({ delay: 2000, stopOnInteraction: false })
  ]);

  return (
    <section id='projects' className="py-24 px-6 md:px-20  max-w-[150vh] mx-auto font-sans">
      {/* Header with See All Button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
        <h2 data-aos="fade-up" className="text-5xl md:text-6xl font-bold text-[#2D3E50] leading-tight">
          Lets have a look at <br /> my <span className="text-[#F17B3C]"> Recent Projects</span>
        </h2>

      </div>

      {/* Auto-Sliding Viewport */}
      <div data-aos="fade-up" data-aos-delay="200" className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex gap-8">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className="flex-[0_0_100%] md:flex-[0_0_85%] min-w-0"
            >
              <div className="relative h-[400px] md:h-[550px]  rounded-[40px] overflow-hidden shadow-2xl group">
                {/* Portfolio Image */}
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Branding Text Over Image */}
                <div className="absolute bottom-12 left-12 text-white text-6xl md:text-8xl font-bold drop-shadow-2xl opacity-90">
                  {item.title}
                </div>

                {/* Optional: Hover Overlay */}
                {/* <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-300" /> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Pagination Dots */}
      <div className="flex justify-center gap-3 mt-12">
        <div className="w-12 h-2.5 bg-[#F17B3C] rounded-full transition-all" />
        <div className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
        <div className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
        <div className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
      </div>
    </section>
  );
}