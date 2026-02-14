const workHistory = [
  {
    company: "Sky Diamonds, Dubai(Remote)",
    period: "Sep 2024 - Nov 2024",
    role: "Software Development (Freelancer)",
    description: "Created Landing page for Jewellery businness using Reactjs , Built Billing Software for Business purposes",
    dotColor: "bg-[#F17B3C]"
  },
  {
    company: "Hindustan Builders, Mangalore",
    period: "Jan 2025 - June 2025",
    role: "Website Development (Freelancer)",
    description: "Built Real estate Web Application Using React js and Nodejs with admin Panel for custom operation",
       dotColor: "bg-[#F17B3C]"
  },
  {
    company: "Komquest Solutions",
    period: "July 2025 - Dec 2025",
    role: "React Js Developer",
    description: "Built React js websites for Manpower Companies overseas, Collaborated with Client , Understood the requirements",
    dotColor: "bg-[#F17B3C]"
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
  return (
    <div className=" bg-white py-24 px-6 relative font-sans">
      <h2 className="text-5xl font-bold text-black text-center mb-24">
        My <span className="text-[#F17B3C]">Work Experience</span>
      </h2>

      <div className="relative">
        {/* Central Dashed Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-gray-300 -translate-x-1/2" />

        <div className="space-y-24">
          {workHistory.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative">
              
              {/* Left Side */}
              <div className="md:text-right md:pr-16">
                <h3 className="text-3xl font-bold text-[#1D2939]">{item.company}</h3>
                <p className="text-gray-400 mt-2 font-medium">{item.period}</p>
              </div>

              {/* Center Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1 z-10 hidden md:block">
                <div className={`w-8 h-8 rounded-full border-4 border-white shadow-lg ${item.dotColor} relative flex items-center justify-center`}>
                  {/* Decorative outer dash ring */}
                  <div className="absolute w-12 h-12 rounded-full border border-dashed border-gray-300" />
                </div>
              </div>

              {/* Right Side */}
              <div className="md:pl-16">
                <h4 className="text-3xl font-bold text-[#1D2939]">{item.role}</h4>
                {item.description && <p className="text-gray-500 mt-4 leading-relaxed max-w-sm">{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}