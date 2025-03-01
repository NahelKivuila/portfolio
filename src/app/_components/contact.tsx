"use client";

import { motion } from "framer-motion"
import {FileText, Github, GithubIcon, Linkedin, Mail, Phone} from "lucide-react";
import Link from "next/link";
import {useInView} from "react-intersection-observer";

const Contact = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const contactInfo = [
        { icon: Mail, text: "nahel.kivuila@gmail.com", href: "mailto:nahel.kivuila@gmail.com" },
        { icon: Linkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/nahelkivuila" },
        { icon: GithubIcon, text: "GitHub", href: "https://www.linkedin.com/in/nahelkivuila" },
    ]


    return (
        <section id="contact" className="py-20 dark:bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{opacity: 0, y: 20}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.5}}
                    ref={ref}
                >
                        <h2 className="text-3xl md:text-4xl font-bold px-4 py-2">Me contacter</h2>
                </motion.div>
                <div className="max-w-2xl mx-auto">
                    {contactInfo.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            className="flex items-center justify-center mb-6 p-4 border-1 bg-white hover:bg-zinc-100 dark:bg-zinc-800 rounded-lg dark:hover:bg-zinc-700 transition-colors duration-300"
                            initial={{opacity: 0, y: 20}}
                            animate={inView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            <item.icon className="w-6 h-6 mr-4 text-blue-400"/>
                            <span className="text-lg">{item.text}</span>
                        </motion.a>
                    ))}
                    <Link href="/" className="w-full">
                        <motion.div
                            className="flex items-center justify-center p-4 border-1 bg-white hover:bg-zinc-100 dark:bg-zinc-800 rounded-lg darkhover:bg-zinc-700 transition-colors duration-300"
                            initial={{opacity: 0, y: 20}}
                            animate={inView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.5, delay: 0.4}}
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            <FileText className="w-6 h-6 mr-4 text-blue-400"/>
                            <span className="text-lg">Mon CV</span>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Contact;
