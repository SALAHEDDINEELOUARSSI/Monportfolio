// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import dynamic from "next/dynamic";

function Skills() {
    return (
        <div
            id="skills"
            className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
        >
            {/* Glow effect */}
            <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

            {/* Divider */}
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
                </div>
            </div>

            {/* Section Title */}
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            {/* Skills Marquee */}
            <div className="w-full my-12">
                <Marquee
                    gradient={false}
                    speed={80}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    play={true}
                    direction="left"
                >
                    {skillsData.map((skill) => {
                        const icon = skillsImage(skill);
                        return (
                            <div
                                key={skill}
                                className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                            >
                                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                                    {/* Top divider */}
                                    <div className="flex -translate-y-[1px] justify-center">
                                        <div className="w-3/4">
                                            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                                        </div>
                                    </div>
                                    {/* Icon + Label */}
                                    <div className="flex flex-col items-center justify-center gap-3 p-6">
                                        <div className="h-8 sm:h-10">
                                            {icon ? (
                                                <Image
                                                    src={icon.src}
                                                    alt={skill}
                                                    width={40}
                                                    height={40}
                                                    title={skill}
                                                    className="h-full w-auto rounded-lg"
                                                />
                                            ) : (
                                                <div className="h-10 w-10 flex items-center justify-center bg-gray-700 text-white text-xs rounded">
                                                    ?
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-white text-sm sm:text-lg max-w-[120px] text-center">
                                            {skill}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Marquee>
            </div>
        </div>
    );
}

export default Skills;
