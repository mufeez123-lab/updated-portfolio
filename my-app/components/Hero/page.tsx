"use client"
import Navbar from '../Navbar/page';
import Image from 'next/image';
import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css"

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    })
  }, [])

  return (
    <main className="relative min-h-screen bg-white overflow-hidden pt-20 md:pt-32 pb-10 md:pb-20 px-4 md:px-10">
      <Navbar />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Hello Bubble */}
        <div data-aos="fade-up" className="relative mb-4 inline-block">
          <span className="border border-black px-4 py-2 rounded-full text-sm md:text-md text-black font-semibold tracking-wide font-montserrat">
            Hello!
          </span>
          <img className='absolute h-2 -top-2 -right-3' src="/images/d.png" alt="icon" />
        </div>

        {/* Heading */}
        <h1 data-aos="fade-up" className="text-4xl md:text-6xl lg:text-7xl text-black font-semibold leading-tight z-10">
          I'm <span className="text-[#70A9FF]">Mufeez</span>, <br />
          Software Developer 
        </h1>

        {/* Hero Image Section */}
        <div className="relative mt-4 md:mt-[-40px] w-full flex flex-col items-center justify-center">
          
          {/* Decorative Orange Circle - Sized relative to viewport */}
          <div data-aos="fade-up" className="absolute bottom-0 w-[90%] md:w-[600px] h-[45%] md:h-[300px] bg-[#F9B17A] rounded-t-full -z-0"></div>
    
          {/* Portrait Image */}
          <div data-aos="fade-up" className="relative z-10 w-full max-w-[300px] md:max-w-[500px] lg:max-w-[600px] aspect-square">
            <Image 
              src="/images/myph.png"
              alt="Mufeez Portfolio"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Floating Call to Action */}
          <div data-aos="fade-up" className="absolute bottom-5 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center bg-white/20 backdrop-blur-md p-1.5 md:p-2 rounded-full border border-white/30 whitespace-nowrap scale-75 md:scale-100">
            <a href="/">
              <button className="bg-[#70A9FF] font-montserrat text-white px-5 md:px-8 py-3 md:py-4 rounded-full flex items-center gap-2 font-medium text-sm md:text-base transition-transform hover:scale-105">
                Portfolio <span className="text-lg">↗</span>
              </button>
            </a>
            <a
              href="https://wa.me/916362514956?text=Hello%20Mufeez,%20I%20am%20interested%20in%20your%20website%20development%20services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-white md:text-black font-montserrat px-5 md:px-8 py-3 md:py-4 font-medium text-sm md:text-base">
                Hire Me
              </button>
            </a>
          </div>

          {/* Responsive Sidebar Info: Quote (Hidden on mobile, shown on md+) */}
          <div data-aos="fade-up" className="hidden lg:block absolute left-0 xl:left-10 top-1/2 -translate-y-1/2 text-left max-w-[300px] z-20">
            <img className='h-6 mb-6 rotate-180' src="/images/d.png" alt="icon" />
            <p className="text-gray-600 text-sm xl:text-md font-semibold font-montserrat mt-[-10px]">
              Mufeez's Exceptional Software Development ensure our website's success. 
              <br /><strong>Highly Recommended</strong>
            </p>
          </div>

          {/* Responsive Sidebar Info: Experience (Hidden on mobile, shown on md+) */}
          <div data-aos="fade-up" className="hidden lg:block absolute right-0 xl:right-10 top-1/2 -translate-y-1/2 text-center z-20">
            <div className="flex gap-1 justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <img key={i} className="h-4 w-4 object-contain" src="/images/star.png" alt="star" />
              ))}
            </div>
            <h2 className="text-3xl xl:text-4xl font-bold text-black">1 Year</h2>
            <p className="text-gray-500 uppercase tracking-widest text-[10px]">Experience</p>
          </div>
        </div>

        {/* Mobile-only Stats/Quote (Shown only on small screens) */}
        <div className="flex lg:hidden flex-col gap-8 mt-12 w-full px-4">
            <div className="flex flex-col items-center">
                <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                        <img key={i} className="h-4 w-4" src="/images/star.png" alt="star" />
                    ))}
                </div>
                <h2 className="text-3xl font-bold text-black">1 Year</h2>
                <p className="text-gray-500 uppercase tracking-widest text-[10px]">Experience</p>
            </div>
            <p className="text-gray-600 text-sm font-semibold font-montserrat italic">
                "Mufeez's Exceptional Software Development ensures our success."
            </p>
        </div>

      </div>
    </main>
  );
}