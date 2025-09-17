"use client"
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import educationImg from "./education.png"; // chemin relatif

function Education() {
    return (
        <div
            id="education"
            className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
        >
            <Image
                src="/section.svg"
                alt="Hero"
                width={1572}
                height={795}
                className="absolute top-0 -z-10"
            />
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                </div>
            </div>

            {/* Title */}
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Educations
          </span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            {/* Educations list */}
            <div className="py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex justify-center items-start">
                        {/* Ici plus de Lottie → image statique */}
                        <Image
                            src={educationImg}
                            alt="Education Illustration"
                            width={450}
                            height={450}
                            className="opacity-80"
                        />
                    </div>

                    <div>
                        <div className="flex flex-col gap-6">
                            {educations.map((education) => (
                                <div
                                    key={education.id}
                                    className="relative p-3 text-white rounded-lg border border-[#25213b] shadow-md
                             bg-[#0f0a2c] overflow-hidden group"
                                >
                                    {/* Effet Glow animé */}
                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 opacity-30 blur-xl group-hover:opacity-60 transition duration-500"></div>

                                    <div className="relative z-10">
                                        <Image
                                            src="/blur-23.svg"
                                            alt="Hero"
                                            width={1080}
                                            height={200}
                                            className="absolute bottom-0 opacity-60"
                                        />
                                        <div className="flex justify-center">
                                            <p className="text-xs sm:text-sm text-[#16f2b3]">
                                                {education.duration}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-x-8 px-3 py-5">
                                            <div className="text-violet-500 transition-all duration-300 group-hover:scale-125">
                                                <BsPersonWorkspace size={36} />
                                            </div>
                                            <div>
                                                <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                                                    {education.title}
                                                </p>
                                                <p className="text-sm sm:text-base">
                                                    {education.institution}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
