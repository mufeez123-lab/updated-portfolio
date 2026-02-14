"use client"
import Image from 'next/image';
import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css"

export default function WhyHireMe() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    })
  }, [])

  return (
    <section id='whyhireme' className="py-12 md:py-20 bg-[#F8F9FB] px-6 md:px-20 mx-4 md:mx-8 rounded-[30px] md:rounded-[40px] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        
        {/* Left: Image with organic shape */}
        {/* Changed w-[350px] to a responsive max-width and aspect ratio */}
        <div 
          data-aos="fade-right" 
          className="relative flex justify-center order-2 lg:order-1"
        >
          <div className="bg-[#F9B17A] w-full max-w-[300px] md:max-w-[350px] aspect-[3/4] rounded-[60px] md:rounded-[100px] relative overflow-hidden shadow-xl">
            <Image 
              src="/images/1.png" 
              alt="Profile" 
              fill 
              className="object-cover object-top pt-6 md:pt-10"
              sizes="(max-width: 768px) 300px, 350px"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="space-y-6 text-center lg:text-left order-1 lg:order-2 flex flex-col items-center lg:items-start">
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl md:text-5xl font-bold text-[#2D3E50] leading-tight">
            Why <span className="text-[#F17B3C]">Hire me?</span>
          </h2>
          
          <p data-aos="fade-up" data-aos-delay="200" className="text-gray-500 max-w-md leading-relaxed font-montserrat text-sm md:text-base">
            I build modern, fast, and scalable websites that not only look beautiful but also perform exceptionally well. My focus is on creating digital experiences that help businesses grow, attract customers, and increase conversions.
            <br /><br className="hidden md:block" />
            With strong expertise in MERN Stack (MongoDB, Express.js, React.js, Node.js), I develop full-stack applications that are secure, responsive, and optimized for performance.
          </p>
          
          {/* Stats section - Center on mobile, left-aligned on desktop */}
          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-row gap-8 md:gap-16 py-4">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-[#2D3E50]">8+</h3>
              <p className="text-gray-400 text-xs md:text-sm whitespace-nowrap">Projects Completed</p>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-[#2D3E50]">20+</h3>
              <p className="text-gray-400 text-xs md:text-sm whitespace-nowrap">Github Repositories</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="400" className="w-full lg:w-auto">
            <a
              href="https://wa.me/916362514956?text=Hello%20Mufeez,%20I%20am%20interested%20in%20your%20website%20development%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button className="w-full md:w-auto px-10 py-4 border-2 border-black text-black rounded-3xl font-bold hover:bg-black hover:text-white transition-all transform active:scale-95">
                Hire me
              </button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}