"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    ref={ref}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold dark:text-white px-4 py-2"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}>
                        About Me
                    </motion.h2>
                </motion.div>
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {[
                        "Je suis en formation pour obtenir mon CFC d'informaticien en développement d'applications, accompagné d'une maturité professionnelle. Cette combinaison me permet de développer des compétences techniques solides et une vision stratégique pour créer des solutions innovantes.",
                        "Je suis constamment en quête d'apprentissage, passionné par l'exploration de nouvelles technologies et la découverte de nouvelles compétences. J'adore échanger et discuter avec les autres, car je crois que chaque conversation est une opportunité d'apprendre et de grandir."
                    ].map((paragraph, index) => (
                        <motion.p
                            key={index}
                            className="dark:text-gray-300 mb-6"
                            whileHover={{ scale: 1.05, color: "#60A5FA" }}
                            transition={{ duration: 0.2 }}
                        >
                            {paragraph}
                        </motion.p>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default About

