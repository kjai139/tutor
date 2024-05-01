
import Image from "next/image";
import Link from "next/link";
import tutorImg from "../../public/images/backgroundtutor.webp"
import dynamic from "next/dynamic";
import { GlobeDemo } from "@/components/ui/globeDisplay";

export default function Home() {
  
 
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center lg:gap-8">
        <div className="flex flex-col gap-2 lg:gap-4 max-w-[500px]">
      <h1 className="text-lg lg:text-5xl font-semibold">Find your own ideal tutor today</h1>
      <Link href={'/home'} className="lg:text-3xl">Enter now!</Link>
      </div>
      <div className="relative">
        <Image priority src={tutorImg} alt="Picture of someone tutoring who could be you" width={300}></Image>
        {/* <GlobeDemo></GlobeDemo> */}
        
      </div>
      </div>
    </main>
  );
}
