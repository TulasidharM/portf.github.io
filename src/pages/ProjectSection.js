import healthyFoods from "../images/healthyFoods.png";
import expenseTracker from "../images/expense Tracker.png";
import ncogWallet from "../images/ncogwallet.png"

import oilRef from "../images/OilRef.png";
import omen from "../images/omen.png";
import serverSim from "../images/server.png";

import GooeyNav from "../components/GooeyNav";


import { useState } from "react";
import SkillTag from "./sub-comps/SkillTag";



const ProjectSection = ()=>{

    const [projectType,setProjectType] = useState("Web Projects");

    const items = [
        { label: "Web Projects" ,setProjectType},
        { label: "Unity (AR/VR/Desktop)",setProjectType },
    ];

    
    return (
        <div className="flex flex-col m-5 justify-center items-center">
            <h1 className="mb-9 text-xl black font-bold font-roboto
                        bg-white/5 outline outline-1 outline-white/20 p-5 backdrop-blur-sm rounded-lg">
                            Projects
            </h1>
            <div className="relative">
                    {/* <h1 className="text-6xl opacity-40 absolute -top-[130px] rotate-12 left-[15px] -z-10">🚀</h1> */}
                <h1 className="text-6xl overflow-hidden font-cedarville opacity-40 absolute w-auto -top-[100px] -left-[95px] -z-10">
                    Projects
                </h1>
            </div>
            
            <div className="mb-10 text-xs   sm:text-sm sm:flex-row">
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

            {/* <div className="flex">
                <div className="p-4">
                    Web Projects
                </div>
            </div> */}

            {projectType === "Web Projects" 
            &&
            <div className="flex flex-col gap-5 w-5/6 items-center">
                {/* Healthy Foods */}
                <div className="flex flex-col lg:flex-row items-center gap-5 ">

                    <img width={200} alt="" src={healthyFoods}></img>
                    <div className="flex flex-col p-4 gap-6 items-center justify-center">
                        <h2 className="text-xl font-bold">Healthy Foods Website</h2>
                        <p>
                            Built a fully functional react website for Healthy Foods a food subscription service.
                            Highlited their strenghs and showcased their bussiness in a sleek and minimalistic way. 
                        </p>
                        <div className="mr-auto flex flex-wrap gap-y-3">
                            <SkillTag text={"React"}/>
                            <SkillTag text={"Html & css3"}/>
                        </div>
                    </div>
                
                </div>
                {/* Expense Tracker  */}
                <div className="flex flex-col lg:flex-row gap-5 items-center">

                    <img className="block lg:hidden" alt="" width={400} src={expenseTracker}></img>

                    <div className="flex flex-col p-4 gap-6 items-center justify-center">
                        <h2 className="text-xl font-bold">Expense Tracker</h2>
                        <p>
                            Developed a SpringBoot + React Application to allow employees to submit expenses, managers to approve claims and admin can overlook entire stats and reports.
                            Implemented proper spring security and role based authentication. Was part of training in Optival Health Solutions internship
                        </p>
                        <div className="mr-auto flex flex-wrap gap-y-3">
                            <SkillTag text={"React"}/>
                            <SkillTag text={"Spring Boot"}/>
                            <SkillTag text={"Spring Security"}/>
                            <SkillTag text={"Sql"}/>
                        </div>
                    </div>

                    <img className="hidden lg:block" alt="" width={400} src={expenseTracker}></img>
                
                </div>
                {/* NCOG Wallet */}
                <div className="flex flex-col lg:flex-row items-center gap-5 ">

                    <img width={200} alt="" src={ncogWallet}></img>
                    <div className="flex flex-col p-4 gap-6 items-center justify-center">
                        <h2 className="text-xl font-bold">NCOG Wallet Browser Extension</h2>
                        <p>
                            Spearheaded a wallet extention that handles POST QUANTUM SECURE cryptography keys , Which has the primary goal to seamlessly integrate with other NCOG applications.
                            Developed Event-Listener based integration with other NCOG applications like DMail, DChat etc 
                        </p>
                        <div className="mr-auto flex flex-wrap gap-y-3">
                            <SkillTag text={"React"}/>
                            <SkillTag text={"TypeScript"}/>
                            <SkillTag text={"Tailwind"}/>
                            <SkillTag text={"Go Language"}/>
                            <SkillTag text={"PostQuantum Cryptography"}/>
                        </div>
                    </div>
                
                </div>
            
            </div>}

            {projectType === "Unity (AR/VR/Desktop)" &&
            <div className="flex flex-col gap-5 w-5/6 items-center">

                <div className="flex flex-col sm:flex-row items-center gap-5 ">

                    <img width={300} alt="" src={omen}></img>
                    <div className="flex flex-col p-4 gap-6 items-center justify-center">
                        <h2 className="text-xl font-bold">Omen Of the Night</h2>
                        <p>
                            Developed a complete FPS mini game for a IGDC Game Dev Hackathon conducted in Vishnu University.
                            Lead my entire team and managed to grab the 3rd position in the competition.
                        </p>
                        <div className="mr-auto flex flex-wrap gap-y-3">
                            <SkillTag text={"Unity"}/>
                            <SkillTag text={"Blender"}/>
                            <SkillTag text={"Photoshop for 2d assets"}/>
                        </div>
                    </div>
                
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-5 ">

                    <img className="block lg:hidden" alt="" width={300} src={oilRef}></img>

                    <div className="flex flex-col p-4 gap-6 items-center justify-center">
                        <h2 className="text-xl font-bold">Oil Refinery</h2>
                        <p>
                            Built a VR simulation POC of an Oil Refinery as my second Freelance project in Unity 3d projects. Worked on Terrain building, Architecting the Refinary 
                            identical to the real deal and some post-processing. Integrated seamless VR integration with Unity VR support. 
                        </p>
                        <div className="mr-auto flex flex-wrap gap-y-3">
                            <SkillTag text={"Unity"}/>
                            <SkillTag text={"Blender"}/>
                            <SkillTag text={"Post Processing"}/>
                        </div>
                    </div>

                    <img className="hidden lg:block" alt="" width={300} src={oilRef}></img>
                
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-5 ">

                    <img width={300} alt="" src={serverSim}></img>
                    <div className="flex flex-col p-2 gap-6 items-center justify-center">
                        <h2 className="text-xl font-bold">Server Simulation</h2>
                        <p>
                            Spearheaded a server airflow simulation POC with Unity particle system and some simple maths. Visual indications for air flow and temperature, Automatic cut off after thershold temperature.
                            Implemented ServerLoad - AC temperature - Server Temperature relation seamlessly. 
                        </p>
                        <div className="mr-auto flex flex-wrap gap-y-3">
                            <SkillTag text={"Unity"}/>
                            <SkillTag text={"Particle System"}/>
                        </div>
                    </div>
                
                </div>
                
            </div>}

        </div>
        
    )
}


export default ProjectSection;