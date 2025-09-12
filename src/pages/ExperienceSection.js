

const ExperienceSection = ()=>{
return(
    <div className="flex flex-col m-5 justify-center items-center">
        
        <h1 className="mb-9 text-lg lg:text-xl black font-bold font-roboto
                    bg-white/5 outline outline-1 outline-white/20 p-3 lg:p-5 backdrop-blur-sm rounded-lg">
                        Education & Work Experience
        </h1>
    <div className="relative">
        {/* <SiReact className="text-6xl opacity-50 absolute -top-[130px] rotate-12 left-20 -z-10"/> */}
        <h1 className="text-6xl lg:text-7xl opacity-80 absolute -top-[120px] -rotate-12 right-[80px] -z-10">🎓</h1> 
    </div>
        

        <ol className="relative border-s  border-gray-200 dark:border-gray-700">

            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    July 2025 - Present
                </time>

                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                    Software Developent Intern @ MedPlus
                </h3>

                <p className="mb-4 lg:text-lg text-base font-normal text-gray-500 dark:text-gray-400">
                    Went through extensive training in Spring Boot and React, Going through onboarding into live industry grade applciations.
                </p>

                <a href="https://www.linkedin.com/company/medplusindia/" target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                    Learn more about Medplus & Optival
                    <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>  
                </a>
            </li>

            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    January 2025 - June 2025
                </time>

                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                    React Dev @ NCOG earth.
                </h3>

                <p className="mb-4 text-base lg:text-lg font-normal text-gray-500 dark:text-gray-400">
                    Built a wallet extention to store POST QUANTUM SECURE cryptography keys and provided seamless integration with other NCOG application.    
                </p>

                <a href="https://www.linkedin.com/company/ncog-earth/posts/?feedView=all" target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                    Learn more about NCOG
                    <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>  
                </a>
            </li>

            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    August 2021 - March 2025
                </time>

                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                    B.Tech in Computer Science 
                </h3>

                <p className="mb-4 text-base lg:text-lg font-normal text-gray-500 dark:text-gray-400">
                    Graduated with a 9.27 CGPA from KL University, Specialized in UI/UX Design and Game Development. Learned and solodified my understanding in CS fundamentals.
                </p>

                <a href="https://www.kluniversity.in/" target="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                    Learn more about KLU
                    <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>  
                </a>
            </li>
        </ol>
    </div>
)}

export default ExperienceSection;