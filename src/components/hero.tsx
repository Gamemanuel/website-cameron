import {Spotlight} from "@/components/ui/Spotlight";
import {TextGenerateEffect} from "@/components/ui/TextGenerateEffect";
import {AudioPlayer} from "@/components/AudioPlayer";
import Image from "next/image";
import { ELearningDemo, AudiobookDemo, CommercialDemo, VideoGameDemo}  from "@/data"

const Hero = () => {
    return (<div className="pb-10 md:pt-10 sm:pt-10">
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue"/>
            </div>
            <div
                className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
            >
                {/* Radial gradient for the container to give a faded look */}
                <div
                    // change the bg to bg-black-100, so it matches the bg color and will blend in
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            <div className="flex w-full justify-center relative z-10">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-start flex-wrap-reverse justify-center lg:h-[700px] ">
                        <div className="md:w-[600px] sm:w-[400px]">
                            <TextGenerateEffect
                                words="Demos"
                                className=" text-[40px] md:text-5xl lg:text-6xl pt-0 flex justify-center lg:flex-none lg:justify-start mt-10 md:mt-0"
                            />
                            <div className="w-full md:w-[600px] space-y-6 pb-0 mb-0">
                                <AudioPlayer track={ELearningDemo}/>
                                <AudioPlayer track={AudiobookDemo}/>
                                <AudioPlayer track={CommercialDemo}/>
                                <AudioPlayer track={VideoGameDemo}/>
                            </div>
                        </div>
                        <Image
                            className=" md:mb-4 rounded-2xl lg:h-[575px] lg:w-[450px] md:w-[600px] md:h-[700px] mt-4 lg:ml-10 ml-0"
                            src="/src/NingaTurtle.jpg" alt="hey" width="1000" height="1000"/>
                    </div>
                </div>
            </div>
        </div>);
}

export default Hero;
