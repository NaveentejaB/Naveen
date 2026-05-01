"use client"
import ProjectCard from "@/components/reusable-ui/project-card"
import Footer from "@/components/small-components/footer"
import { projectData } from "@/lib/constants"
import Link from "next/link"

export default function Page(){
    return(
        <div className="w-full min-h-screen">
                <div className="w-full py-16 md:py-24 flex justify-center items-center">
                    <h2 className="gradient-text text-4xl md:text-6xl font-semibold">PROJECTS</h2>
                </div>
                <div className="w-full h-auto flex flex-col justify-start items-center gap-20">
                    {projectData.map((data,i)=>(
                        <ProjectCard data={data} index={i} key={i}/>
                    ))}
                </div>
                <div className="w-full flex flex-col items-center gap-4 mt-20 mb-6">
                    <p className="text-slate-400 text-sm md:text-base">Want to see the code or discuss the architecture?</p>
                    <Link href="/Contact" className="px-6 py-2 bg-lightBlue text-black font-semibold rounded-full text-sm hover:bg-white transition-colors duration-300">
                        Let&apos;s Talk
                    </Link>
                </div>
                <div className="w-full mt-4">
                    <Footer/>
                </div>
        </div>
    )
}