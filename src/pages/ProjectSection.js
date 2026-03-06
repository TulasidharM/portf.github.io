import { useState } from "react";

import healthyFoods from "../images/healthyFoods.png";
import expenseTracker from "../images/expense Tracker.png";
import ncogWallet from "../images/ncogwallet.png";
import oilRef from "../images/OilRef.png";
import omen from "../images/omen.png";
import serverSim from "../images/server.png";

import GooeyNav from "../components/GooeyNav";
import SkillTag from "./sub-comps/SkillTag";

const projectGroups = {
  "Web Projects": [
    {
      title: "Healthy Foods Website",
      description:
        "Built a fully functional React website for Healthy Foods, a food subscription service. Highlighted their strengths and showcased their business in a sleek and minimalistic way.",
      image: healthyFoods,
      imageWidth: 240,
      skills: ["React", "HTML & CSS3"],
    },
    {
      title: "Expense Tracker",
      description:
        "Developed a Spring Boot + React application to allow employees to submit expenses, managers to approve claims, and admins to oversee reports and analytics. Implemented Spring Security with role-based authentication.",
      image: expenseTracker,
      imageWidth: 440,
      skills: ["React", "Spring Boot", "Spring Security", "SQL"],
    },
    {
      title: "NCOG Wallet Browser Extension",
      description:
        "Spearheaded a wallet extension that handles post-quantum secure cryptography keys, with the primary goal of seamless integration with other NCOG applications like DMail and DChat.",
      image: ncogWallet,
      imageWidth: 240,
      skills: ["React", "TypeScript", "Tailwind", "Go", "Post-Quantum Cryptography"],
    },
  ],
  "Unity (AR/VR/Desktop)": [
    {
      title: "Omen of the Night",
      description:
        "Developed a complete FPS mini game for an IGDC game dev hackathon at Vishnu University. Led the team and secured 3rd place in the competition.",
      image: omen,
      imageWidth: 320,
      skills: ["Unity", "Blender", "Photoshop (2D Assets)"],
    },
    {
      title: "Oil Refinery VR Simulation",
      description:
        "Built a VR simulation POC of an oil refinery for a freelance project in Unity. Worked on terrain, architecture, and post-processing with immersive VR support.",
      image: oilRef,
      imageWidth: 320,
      skills: ["Unity", "Blender", "Post Processing"],
    },
    {
      title: "Server Simulation",
      description:
        "Spearheaded a server airflow simulation POC using Unity particle systems and mathematical modeling. Added visual indicators for airflow and temperature with automatic cut-off thresholds.",
      image: serverSim,
      imageWidth: 320,
      skills: ["Unity", "Particle System"],
    },
  ],
};

const ProjectSection = () => {
  const [projectType, setProjectType] = useState("Web Projects");

  const items = [
    { label: "Web Projects", setProjectType },
    { label: "Unity (AR/VR/Desktop)", setProjectType },
  ];

  return (
    <div className="flex flex-col m-5 justify-center items-center">
      <h1
        className="mb-9 text-xl black font-bold font-roboto
                        bg-white/5 outline outline-1 outline-white/20 p-5 backdrop-blur-sm rounded-lg"
      >
        Projects
      </h1>
      <div className="relative">
        <h1 className="text-6xl overflow-hidden font-cedarville opacity-40 absolute w-auto -top-[100px] -left-[95px] -z-10">
          Projects
        </h1>
      </div>

      <div className="mb-10 text-xs sm:text-sm sm:flex-row">
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={500}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projectGroups[projectType].map((project) => (
          <article
            key={project.title}
            className="group h-full rounded-2xl bg-white/5 p-4 outline outline-1 outline-white/20 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10"
          >
            <div className="flex h-full flex-col">
              <div className="mb-4 flex min-h-[220px] items-center justify-center rounded-xl bg-black/20 p-3">
                <img
                  width={project.imageWidth}
                  alt={project.title}
                  src={project.image}
                  className="max-h-[200px] object-contain"
                />
              </div>

              <h2 className="mb-3 text-lg font-bold">{project.title}</h2>
              <p className="mb-4 text-sm text-gray-200">{project.description}</p>

              <div className="mt-auto flex flex-wrap gap-y-3">
                {project.skills.map((skill) => (
                  <SkillTag key={`${project.title}-${skill}`} text={skill} />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
