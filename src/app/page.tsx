import Hero from "@/app/_components/hero";
import About from "./_components/about";
import Project from "@/app/_components/project";
import Contact from "@/app/_components/contact";
import Skills from "./_components/skills";

export default function Home() {
    return (
        <div>
            <main className="relative bg-gray-50 dark:bg-black min-h-screen">
                <Hero />
                <About />
                <Project />
                <Skills />
                <Contact />
            </main>
        </div>
    );
}
