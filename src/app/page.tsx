import Hero from "@/app/_components/hero";
import About from "./_components/about";
import Project from "@/app/_components/project";
import Contact from "@/app/_components/contact";

export default function Home() {
    return (
        <div>
            <main className="bg-gray-50 dark:bg-black min-h-screen">
                <Hero />
                <About />
                <Project />
                <Contact />
            </main>
        </div>
    );
}
