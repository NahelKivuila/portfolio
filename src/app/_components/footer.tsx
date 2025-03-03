"use client";

import Link from "next/link"
import { Github, Linkedin, Heart } from "lucide-react"

const Footer = () => {

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className={'relative z-50 bg-white dark:bg-black'}>
            <footer className=" border-t py-8 md:py-12">
                <div className="container m-auto flex flex-col items-center justify-center gap-4 md:gap-6 text-center">
                    <div className="flex items-center justify-center space-x-6">
                        <Link href="https://github.com/NahelKivuila" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className="h-5 w-5 hover:text-primary transition-colors"/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/nahel-fran%C3%A7ois-kivuila-27b79b276/" target="_blank" rel="noopener noreferrer"
                              aria-label="LinkedIn">
                            <Linkedin className="h-5 w-5 hover:text-primary transition-colors"/>
                        </Link>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                        <ul className="flex space-x-6">
                            {["accueil", "à propos", "projets", "compétence", "contact"].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => scrollToSection(item)}
                                        className="dark:text-gray-300 dark:hover:text-white text-primary cursor-pointer hover:text-gray-500 transition-colors"
                                    >
                                        {item.charAt(0).toUpperCase() + item.slice(1)}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <p className="text-sm text-muted-foreground flex items-center">
                        Réalisé avec <Heart className="h-4 w-4 mx-1 text-red-500"/> par Nahel
                        Kivuila &copy; {new Date().getFullYear()}
                    </p>
                </div>
            </footer>
        </div>

    )
}

export default Footer;
