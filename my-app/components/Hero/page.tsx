"use client"
import Navbar from '../Navbar/page';
import Image from 'next/image';
import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css"

export default function Hero() {

    useEffect(() => {
    AOS.init({
      duration: 1500,   // animation duration
      once: true        // animation happens only once
    })
  }, [])
  return (
    <main className="relative min-height-screen bg-white overflow-hidden pt-32 pb-20 px-10">
      <Navbar />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Hello Bubble */}
        <div data-aos="fade-up" className="relative mb-4">
          <span className="border border-black px-4 py-2 rounded-full text-md text-black font-semibold tracking-wide font-montserrat">Hello!</span>
             <img className='absolute h-2 -top-2 -right-3 text-[#F17B3C] text-xl' src="/images/d.png" alt="icon" />
        </div>

        {/* Heading */}
        <h1 data-aos="fade-up" className="text-7xl text-black font-semibold leading-tight z-10">
          I'm <span className="text-[#F17B3C]">Mufeez</span>, <br />
          Software Developer 
          
        </h1>
            

        <div className="relative mt-[-40px] w-full flex justify-center">
          {/* Decorative Orange Circle Background */}
          <div data-aos="fade-up" className="absolute bottom-0 w-[600px] h-[300px] bg-[#F9B17A] rounded-t-full -z-0"></div>
    
          {/* Portrait Image */}
          <div data-aos="fade-up"  className="relative z-10 w-[600px] right-10 h-[600px]">
            <Image 
              src="/images/1.png" // Replace with your image path
              alt="Jenny Portfolio"
              fill
              className="object-contain "
              priority
            />
          </div>

          {/* Floating Call to Action */}
          <div data-aos="fade-up"  className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30">
         <a href="/">   <button className="bg-[#F17B3C] font-montserrat text-white px-8 py-4 rounded-full flex items-center gap-2 font-medium">
              Portfolio <span className="text-lg">↗</span>
            </button></a>
 <a
  href="https://wa.me/916362514956?text=Hello%20Mufeez,%20I%20am%20interested%20in%20your%20website%20development%20services."
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="text-white font-montserrat px-8 py-4 font-medium">
    Hire Me
  </button>
</a>

          </div>

          {/* Sidebar Info: Quote */}
          <div data-aos="fade-up" className="absolute left-10 top-1/2 -translate-y-1/2 text-left max-w-[400px] z-20">
        <img className='h-8 mb-10 rotate-180' src="/images/d.png" alt="icon" />
             <p className="text-gray-600 text-md font-semibold font-montserrat mt-[-10px]">
               Mufeez's Exceptional Software Development ensure our website's success. 
               <br /><strong>Highly Recommended</strong>
             </p>
           
          </div>

          {/* Sidebar Info: Experience */}
          <div data-aos="fade-up" className="absolute right-10 top-1/2 -translate-y-1/2 text-center z-20">

<div className="flex gap-1 justify-center mb-2">
  {[...Array(5)].map((_, i) => (
    <img 
      key={i} 
      className="h-5 w-5 object-contain" // Fixed typo 'mcoorect' and added width
      src="/images/star.png" 
      alt="star" 
    />
  ))}
</div>
            <h2 className="text-4xl font-bold">1 Year</h2>
            <p className="text-gray-500 uppercase tracking-widest text-xs">Experience</p>
          </div>
        </div>
      </div>
    </main>
  );
}