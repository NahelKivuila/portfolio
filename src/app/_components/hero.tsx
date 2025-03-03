"use client"

import { motion } from "framer-motion"
import {ArrowDown} from "lucide-react";
import {useEffect, useState} from "react";

const Hero = () => {
    const [typedText, setTypedText] = useState("")
    const fullText = "Développeur d'applications"
    const typingSpeed = 150

    useEffect(() => {
        if (typedText.length < fullText.length) {
            const timeout = setTimeout(() => {
                setTypedText(fullText.slice(0, typedText.length + 1))
            }, typingSpeed)

            return () => clearTimeout(timeout)
        }
    }, [typedText])

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <section id="home" className={'relative z-10'}>
                <div className="container min-h-screen justify-center overflow-hidden mx-auto px-6 flex flex-col md:flex-row items-center">
                    <motion.div
                        className="md:w-1/2 text-center md:text-left justify-items-center"
                        initial={{opacity: 0, x: -20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5, ease: "easeOut"}}
                    >
                        <h1 className="text-4xl text-center md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black dark:from-white to-gray-500">
                            Salut je m&#39;appelle <br/><span
                            className="bg-clip-text text-transparent bg-gradient-to-r from-violet-900 to-indigo-500">Nahel Kivuila</span>
                        </h1>
                        <div className="h-12 mt-4">
                            <h2 className="text-2xl text-center sm:text-3xl md:text-4xl font-medium text-muted-foreground">
                                {typedText}
                                <span className="animate-blink">|</span>
                            </h2>
                        </div>
                        <p className="text-gray-400 text-center my-8 pr-2">
                            Développeur d’applications, j’aime créer des solutions qui facilitent la vie des autres.
                            Ce qui me motive, c’est de rendre la technologie accessible et utile au quotidien.
                        </p>
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.8}}
                            className={'justify-items-center'}
                        >
                            <motion.button
                                onClick={() => scrollToSection("contact")}
                                className="group cursor-pointer relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-full bg-gradient-to-r from-violet-950 to-violet-800 transition-transform duration-300 ease-out hover:scale-105"
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                transition={{duration: 0.2}}
                            >
                                <span className="relative text-white font-semibold">Me contacter</span>
                                <span
                                    className="absolute inset-0 bg-gradient-to-r from-violet-800 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[length:200%_100%] animate-gradient-x"/>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                    <button
                        onClick={() => scrollToSection("about")}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
                        aria-label="Scroll down"
                    >
                        <ArrowDown className="dark:text-white h-10 w-10" />
                    </button>
                </div>
        </section>
    )
}

export default Hero

