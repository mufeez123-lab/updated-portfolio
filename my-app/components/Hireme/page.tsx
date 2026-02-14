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
    <section id='whyhireme' className="py-20 bg-[#F8F9FB] px-6 md:px-20 mx-8 rounded-[40px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Image with organic shape - Slides in from left */}
        <div 
          data-aos="fade-right" 
          className="relative flex justify-center"
        >
          <div className="bg-[#F9B17A] w-[350px] h-[450px] rounded-[100px] relative overflow-hidden">
            <Image 
              src="/images/chairman1.png" 
              alt="Profile" 
              fill 
              className="object-cover object-top pt-10"
            />
          </div>
        </div>

        {/* Right: Content - Staggered fade-up */}
        <div className="space-y-6">
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-5xl font-bold text-[#2D3E50]">
            Why <span className="text-[#F17B3C]">Hire me?</span>
          </h2>
          
          <p data-aos="fade-up" data-aos-delay="200" className="text-gray-500 max-w-md leading-relaxed font-montserrat">
            I build modern, fast, and scalable websites that not only look beautiful but also perform exceptionally well. My focus is on creating digital experiences that help businesses grow, attract customers, and increase conversions.
            <br /><br />
            With strong expertise in MERN Stack (MongoDB, Express.js, React.js, Node.js), I develop full-stack applications that are secure, responsive, and optimized for performance.
          </p>
          
          <div data-aos="fade-up" data-aos-delay="300" className="flex gap-16 py-4">
            <div>
              <h3 className="text-3xl font-bold text-[#2D3E50]">8+</h3>
              <p className="text-gray-400 text-sm">Project Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#2D3E50]">20+</h3>
              <p className="text-gray-400 text-sm">Github Repositories</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <a
              href="https://wa.me/916362514956?text=Hello%20Mufeez,%20I%20am%20interested%20in%20your%20website%20development%20services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-10 py-4 border-2 border-black text-black rounded-3xl font-bold hover:bg-black hover:text-white transition-all">
                Hire me
              </button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}