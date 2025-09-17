import dynamic from "next/dynamic";
import { personalData } from "@/utils/data/personal-data";
const AboutSection = dynamic(() => import("./components/homepage/about"), { ssr: false });
const Blog = dynamic(() => import("./components/homepage/blog"), { ssr: false });
const ContactSection = dynamic(() => import("./components/homepage/contact"), { ssr: false });
const HeroSection = dynamic(() => import("./components/homepage/hero-section"), { ssr: false });
const Projects = dynamic(() => import("./components/homepage/projects"), { ssr: false });
const Skills = dynamic(() => import("./components/homepage/skills"), { ssr: false });
const Experience = dynamic(() => import("./components/homepage/experience"), { ssr: false });
const Education = dynamic(() => import("./components/homepage/education"), { ssr: false });
import { Awards, certificates } from "../utils/data/blogs-data";

// Import client-only components dynamically
const Experience = dynamic(() => import("./components/homepage/experience"), { ssr: false });
const Education = dynamic(() => import("./components/homepage/education"), { ssr: false });

export default function Home() {
    return (
        <div suppressHydrationWarning>
            <HeroSection />
            <AboutSection />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Blog certificates={certificates} titre="Certifications" />
            <Blog certificates={Awards} titre="Awards and Distinctions" />
            <ContactSection />
        </div>
    );
}
