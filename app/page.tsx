"use client"

import Image from "next/image";
import Link from "next/link";
import gifBackground from "@/public/pwm1.gif";
import pic from "@/public/pic11.jpg";
import Footer from "@/components/small-components/footer";
import { homePageData ,aboutMe} from "@/lib/constants";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative h-screen w-full flex flex-col justify-center items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-65" 
          style={{ backgroundImage: `url(${gifBackground.src})` }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="name-gradient text-3xl sm:text-5xl md:text-7xl font-semibold text-center">
            Naveen Teja Beerakuppam
          </h1>
          <p className="text-lightBlue text-xs sm:text-sm md:text-lg mt-3 font-medium tracking-widest uppercase">
            Backend Engineer
          </p>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base mt-3">
            Production systems &nbsp;·&nbsp; APIs &amp; integrations
          </p>
          <div className="flex gap-4 justify-center mt-6">
            <Link href="/Experience" className="px-5 py-2 bg-lightBlue text-black font-semibold rounded-full text-sm hover:bg-white transition-colors duration-300">
              View My Work
            </Link>
            <Link href="/Contact" className="px-5 py-2 border border-lightBlue text-lightBlue font-semibold rounded-full text-sm hover:bg-lightBlue hover:text-black transition-colors duration-300">
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 space-y-10 ">
        <div className="w-4/5 mx-auto flex  gap-10 ">
          <div className=" w-[10px] h-[120px]">
            <div className="w-2/5 h-3/5 bg-lightBlue"></div>
            <div className="w-full h-2/5 bg-lightBlue"></div>
          </div>
          <div className="flex flex-col justify-center py-1 gap-4 ">
            <h4 className="text-xl text-lightBlue font-medium">About Me</h4>
            <span className="text-white text-lg md:text-2xl">{aboutMe}</span>
          </div>
        </div>

        <div className="w-90/100 mx-auto flex flex-col md:flex-row justify-center items-start gap-8">
          <div className="w-full md:w-45/100  rounded-lg overflow-hidden opacity-85">
            <Image 
              src={pic} 
              alt="Profile" 
              className="w-full h-full object-cover rounded-xl" 
              priority 
            />
          </div>
          <div className="w-full md:w-1/2 text-white text-base md:text-lg space-y-6 mt-5 ">
            {homePageData.map((value,i) => (
              <p key={i} className="indent-10">{value}</p>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
