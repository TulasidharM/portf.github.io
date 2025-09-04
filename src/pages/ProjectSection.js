import Carousel from "../components/Carousel";
import healthyFoods from "../images/healthyFoods.png";
const ProjectSection = ()=>{
    return (
        <div className="flex flex-col m-5 justify-center items-center">
            <h1 className="mb-9 text-xl black font-bold font-roboto
                        bg-white/5 outline outline-1 outline-white/20 p-5 backdrop-blur-sm rounded-lg">
                            Projects
            </h1>
            <div className="relative">
                    {/* <SiReact className="text-6xl opacity-50 absolute -top-[130px] rotate-12 left-20 -z-10"/> */}
                    <h1 className="text-6xl opacity-40 absolute -top-[130px] rotate-12 left-[15px] -z-10">🚀</h1>
            </div>

            <div className="flex flex-col ">

                <div className="flex flex-col sm:flex-row items-center gap-5 ">

                    <img width={200} src={healthyFoods}></img>
                    <div className="flex flex-col p-10 gap-6 items-center justify-center">
                        <h2 className="text-xl font-bold">Healthy Foods Website</h2>
                        <p>
                            Built a fully functional react website for Healthy Foods a food subscription service.<br/>
                            Highlited their strenghs and showcased their bussiness in a sleek and minimalistic way. 
                        </p>
                    </div>
                
                </div>
            
            </div>

        </div>
        
    )
}


export default ProjectSection;