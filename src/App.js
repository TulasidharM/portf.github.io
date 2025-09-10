import HeroSection from "./pages/HeroSection";
import Navbar from "./pages/Navbar";

import work from "./images/work.jpg";

import Squares from "./components/Squares";
import { SiReact,
        SiBlender,
        SiTailwindcss
      } from 'react-icons/si';

import { 
  FaUnity,
  FaJs,
  FaHtml5,
  FaS,
 } from "react-icons/fa6";

import { BiLogoSpringBoot } from "react-icons/bi";

import LogoLoop from "./components/LogoLoop";
import ExperienceSection from "./pages/ExperienceSection";

import './App.css';
import ProjectSection from "./pages/ProjectSection";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import Footer from "./pages/Footer";

const techLogos = [
  { node: <BiLogoSpringBoot />, title: "Next.js", href: "" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "" },
  { node: <SiReact />, title: "React", href: "" },
  { node: <FaJs />, title: "Java Script", href: "" },
  { node: <FaHtml5 />, title: "Html", href: "" },
  { node: <FaUnity />, title: "TypeScript", href: "" },
  { node: <SiBlender />, title: "Blender CSS", href: "" },
];

function App() {
  return (
  <div className="flex flex-col" >   
    <div id="hero" className="m-20"></div>
    <div className="bg-black w-full h-[1000px] lg:h-[720px] absolute -z-50 opacity-20" >
        <Squares 
          speed={0.2} 
          squareSize={30}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#fff'
          hoverFillColor='#222'
        />
    </div>

    <Navbar/>

    <div>
      <HeroSection/>
    </div>
    


    <div className="w-full my-5 top-[900px] lg:top-[720px] z-2 overflow-hidden">
      <LogoLoop
        logos={techLogos}
        speed={80}
        direction="right"
        logoHeight={48}
        gap={90}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
        ariaLabel="Skills"
      />  
    </div>

    <div id="experience" className="scroll-m-36 mt-20  bg-cover">
      <ExperienceSection/>
    </div>

    <div id="projects" className="scroll-m-36">
      <ProjectSection/>
    </div>

     <div id="about" className="scroll-m-36">
      <Contact/>
    </div>
  </div>
  );
}

export default App;