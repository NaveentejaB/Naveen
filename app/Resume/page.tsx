"use client"
import Footer from "@/components/small-components/footer"
export default function Page(){
    return(
        <div className="w-full min-h-screen">
            <div className="w-full py-16 md:py-24 flex justify-center items-center">
                <h2 className="gradient-text text-4xl md:text-6xl font-semibold">RESUME</h2>
            </div>
            <div className="w-full h-[500px] md:h-[720px] flex justify-center px-4 pb-10">
                <div className="w-full max-w-[95%] h-full bg-gray-100 flex justify-center items-center border border-gray-400">
                    <iframe
                        src='/Naveen_Teja_Resume.pdf'
                        className="w-full h-full"
                        title="PDF Viewer"
                    />
                </div>
            </div>
            <Footer/>
        </div>
    )
}