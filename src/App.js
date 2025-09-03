import HeroSection from "./pages/HeroSection";
import Navbar from "./pages/Navbar";

import Squares from "./components/Squares";
import { SiReact,
        SiBlender,
        SiTailwindcss
      } from 'react-icons/si';

import { 
  FaUnity,
  FaJs,
  FaHtml5,
 } from "react-icons/fa6";

import { BiLogoSpringBoot } from "react-icons/bi";

import LogoLoop from "./components/LogoLoop";

const techLogos = [
  { node: <SiReact />, title: "React", href: "" },
  { node: <BiLogoSpringBoot />, title: "Next.js", href: "" },
  { node: <FaUnity />, title: "TypeScript", href: "" },
  { node: <FaJs />, title: "Java Script", href: "" },
  { node: <FaHtml5 />, title: "Html", href: "" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "" },
  { node: <SiBlender />, title: "Blender CSS", href: "" },
];

function App() {
  return (
  <div className="flex flex-col" >   
    <div className="m-20"></div>
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
    <HeroSection/>
    
    {/* Empty Space to allow scrolling */}
    <div className="mb-[900px]"></div>

    <div className="w-full h-[200px] absolute top-[900px] lg:top-[720px] z-2 overflow-hidden">
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
  </div>
  );
}

export default App;
