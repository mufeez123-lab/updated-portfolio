"use client"
import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css"

const workHistory = [
  {
    company: "Sky Diamonds, Dubai (Remote)",
    period: "Sep 2024 - Nov 2024",
    role: "Software Development (Freelancer)",
    description: "Created Landing page for Jewellery business using Reactjs, Built Billing Software for Business purposes",
    dotColor: "bg-[#70A9FF]"
  },
  {
    company: "Hindustan Builders, Mangalore",
    period: "Jan 2025 - June 2025",
    role: "Website Development (Freelancer)",
    description: "Built Real estate Web Application Using React js and Nodejs with admin Panel for custom operation",
    dotColor: "bg-[#70A9FF]"
  },
   {
    company: "Badger Scoop USA(Remote)",
    period: "Jan 2025 - June 2025",
    role: "Website Development (Freelancer)",
    description: "Built a Cleaning Service Web Application Using Wordpress with custom plugins and themes, Integrated Payment Gateway for online transactions",
    dotColor: "bg-[#70A9FF]"
  },
  {
    company: "Komquest Solutions",
    period: "July 2025 - Dec 2025",
    role: "React Js Developer",
    description: "Built React js websites for Manpower Companies overseas, Collaborated with Client, Understood the requirements",
    dotColor: "bg-[#70A9FF]"
  },
  {
    company: "GD Edu Tech",
    period: "Jan 2026 - Present",
    role: "Software Developer and Trainer",
    description: "Developed robust software solutions using PHP for server-side logic and efficiently operated SQL databases for secure data management and retrieval.",
    dotColor: "bg-[#1D2939]"
  }
];

export default function WorkExperience() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    })
  }, [])

  return (
    <div id="about" className="bg-white py-16 md:py-24 px-6 relative font-sans overflow-hidden">
      <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-black text-center mb-16 md:mb-24">
        My <span className="text-[#70A9FF]">Work Experience</span>
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Responsive Timeline Line */}
        {/* Mobile: Left aligned | Desktop: Center aligned */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-gray-300 md:-translate-x-1/2" />

        <div className="space-y-16 md:space-y-24">
          {workHistory.map((item, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 100} 
              className="relative flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-12 items-start"
            >
              
              {/* Left Side: Company & Period */}
              {/* Desktop: Right Aligned | Mobile: Left Aligned with padding for line */}
              <div className="pl-10 md:pl-0 md:text-right md:pr-16 w-full order-1 md:order-none">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1D2939] leading-tight">{item.company}</h3>
                <p className="text-[#70A9FF] md:text-gray-400 mt-1 md:mt-2 font-semibold md:font-medium text-sm md:text-base">{item.period}</p>
              </div>

              {/* Center Dot */}
              {/* Mobile: Anchored to the left line | Desktop: Centered */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1 md:top-2 z-10">
                <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-white shadow-lg ${item.dotColor} relative flex items-center justify-center`}>
                  {/* Decorative outer circle - hidden on very small screens to avoid clutter */}
                  <div className="absolute w-10 h-10 md:w-12 md:h-12 rounded-full border border-dashed border-gray-300 hidden sm:block" />
                </div>
              </div>

              {/* Right Side: Role & Description */}
              <div className="pl-10 md:pl-16 w-full order-2">
                <h4 className="text-xl md:text-3xl font-bold text-[#1D2939] leading-tight">{item.role}</h4>
                {item.description && (
                  <p className="text-gray-500 mt-3 md:mt-4 leading-relaxed text-sm md:text-base max-w-md">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}