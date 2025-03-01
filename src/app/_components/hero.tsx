"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Spotlight } from "./ui/spotlight"

const Hero = () => {
    return (
        <Spotlight className="min-h-screen flex items-center justify-center dark:bg-black overflow-hidden">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                <motion.div
                    className="md:w-1/2 text-center md:text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-black dark:from-white to-gray-500">
                        Hi, I&#39;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-500">Nahel Kivuila</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 relative">
                        Data Analyst & Machine Learning Enthusiast
                        <motion.span
                            className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-400"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Master&#39;s student in Applied Data Analytics at Boston University, with a background in Computer Science and
                        Communication Engineering. Passionate about leveraging data to drive insights and solve complex problems.
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <motion.a
                            href="#contact"
                            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-transform duration-300 ease-out hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="relative text-white font-semibold">Get in Touch</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[length:200%_100%] animate-gradient-x" />
                        </motion.a>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="md:w-1/2 mt-12 md:mt-0 relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: [0.6, -0.05, 0.01, 0.99],
                    }}
                >
                    <div className="relative w-full h-0 pb-[100%] md:pb-[75%]">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-30 animate-pulse" />
                        <div className="absolute inset-0">
                            <div className="bg-gray-100 dark:bg-black rounded-2xl h-full w-full relative">
                                <Image
                                    src="/avatar.PNG"
                                    alt="Nahel Kivuila Avatar"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Spotlight>
    )
}

export default Hero

