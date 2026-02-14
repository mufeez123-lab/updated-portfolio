import Hero from "@/components/Hero/page";
import Navbar from "@/components/Navbar/page";
import Service from "@/components/Services/page"
import Work from "@/components/Work/page"
import Hireme from "@/components/Hireme/page"
import Projects from "@/components/Projects/page"


export default function Home() {
  return (
   <>
   
   <Navbar/>
   <Hero/>
   <Service/>
   <Work/>
   <Hireme/>
   <Projects/>
   </>
  );
}
