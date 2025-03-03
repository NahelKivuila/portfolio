"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {FileText} from "lucide-react";
import Image from "next/image";

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id="about" className="relative z-10 py-20">
            <div className="container relative mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{opacity: 0, y: 20}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.5}}
                    ref={ref}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold dark:text-white px-4 py-2"
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.2}}>
                        About Me
                    </motion.h2>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center">
                        {/*<div*/}
                        {/*    className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/20">*/}

                        {/*</div>*/}
                        <motion.div
                            className="relative w-1/3 h-1/3 lg:w-3/4 lg:h-3/4"
                            initial={{opacity: 0, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{
                                duration: 0.5,
                                ease: [0.6, -0.05, 0.01, 0.99],
                            }}
                        >
                            <div className="relative w-full pb-[100%] sm:pb-[75%]">
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-30 animate-pulse"/>
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

                    <div className="space-y-6 justify-items-center md:justify-items-start">
                        <h3 className="text-2xl font-bold text-center sm:text-start">Nahel Kivuila</h3>
                        <p className="text-muted-foreground text-center sm:text-start">
                            Je suis en formation pour obtenir mon CFC d'informaticien en développement d'applications, accompagné d'une maturité professionnelle.
                            Cette combinaison me permet de développer des compétences techniques solides et une vision stratégique pour créer des solutions innovantes.
                        </p>
                        <p className="text-muted-foreground text-center md:text-start">
                            Je suis constamment en quête d'apprentissage, passionné par l'exploration de nouvelles technologies et la découverte de nouvelles compétences.
                            J'adore échanger et discuter avec les autres, car je crois que chaque conversation est une opportunité d'apprendre et de grandir.
                        </p>
                        <p className="text-muted-foreground text-center md:text-start">
                            Quand je ne suis pas en train de coder tu peux me trouver,
                            en train de m'entrainer, de lire un livre ou bien d'apprendre une nouvelle langue
                        </p>

                        <Button asChild variant="outline" className="mt-4">
                            <Link href="/" download>
                                <FileText className="mr-2 h-4 w-4"/>
                                Afficher mon CV
                            </Link>
                        </Button>
                    </div>
                </div>
                {/*<motion.div*/}
                {/*    className="max-w-3xl mx-auto text-center"*/}
                {/*    initial={{ opacity: 0, y: 20 }}*/}
                {/*    animate={inView ? { opacity: 1, y: 0 } : {}}*/}
                {/*    transition={{ duration: 0.5, delay: 0.2 }}*/}
                {/*>*/}
                {/*    {[*/}
                {/*        "Je suis en formation pour obtenir mon CFC d'informaticien en développement d'applications, accompagné d'une maturité professionnelle. Cette combinaison me permet de développer des compétences techniques solides et une vision stratégique pour créer des solutions innovantes.",*/}
                {/*        "Je suis constamment en quête d'apprentissage, passionné par l'exploration de nouvelles technologies et la découverte de nouvelles compétences. J'adore échanger et discuter avec les autres, car je crois que chaque conversation est une opportunité d'apprendre et de grandir."*/}
                {/*    ].map((paragraph, index) => (*/}
                {/*        <motion.p*/}
                {/*            key={index}*/}
                {/*            className="dark:text-gray-300 mb-6"*/}
                {/*            whileHover={{ scale: 1.05, color: "#60A5FA" }}*/}
                {/*            transition={{ duration: 0.2 }}*/}
                {/*        >*/}
                {/*            {paragraph}*/}
                {/*        </motion.p>*/}
                {/*    ))}*/}
                {/*</motion.div>*/}
            </div>
        </section>
    )
}

export default About

