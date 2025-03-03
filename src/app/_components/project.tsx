"use client"

import {motion} from "framer-motion"
import {useInView} from "react-intersection-observer"
import Image from "next/image"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {ExternalLink, Github} from "lucide-react"
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const projects = [
    {
        title: "Portfolio",
        description:
            "J'ai developpé un portfolio",
        image:
            "/portfolio.png",
        code: "https://github.com/NahelKivuila/portfolio",
        demo: "https://nahelkivuila.com",
        technologies: ["Next.js", "TailWindCSS", "Jenkins", "Docker"],
    },
    {
        title: "Chef buddy",
        description:
            "Une application avec une inteligence artificiel qui gener des recette de cuisine en fonction de ce que l'utilisateur entre en input",
        image:
            "/chef-buddy.png",
        code: "https://github.com/NahelKivuila/chef-buddy",
        demo: "https://chef-buddy.nahelkivuila.com",
        technologies: ["Next.JS", "Open AI", "TailWindCSS", "Jenkins", "Docker"],
    },
    {
        title: "Wiiseto",
        description:
            "est un gestionnaire de projets de construction conçu pour faciliter la collaboration entre les différentes parties prenantes. Partager des fichiers, communiquer des mises à jour ou suivre les étapes du projet.",
        image:
            "/wiiseto.png",
        demo: "https://wiiseto.com",
        technologies: ["Java", "Spring Boot", "LiquiBase", "PostgresSql", "Angular", "TailWindCSS", "Docker"],
    },
]

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id="projects" className="relative z-10 py-20">
            <div className="container mx-auto px-6">
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
                        Projets
                    </motion.h2>
                    <p className="text-gray-400">Quelques projets que j&#39;ai réaliés</p>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={inView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.5}}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <Card key={project.title} className="overflow-hidden flex flex-col h-full">
                            <div className="relative h-auto w-full p-6">
                                <motion.div
                                    className="relative"
                                    whileHover={{scale: 1.05}}
                                >
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        width={1200}
                                        height={700}
                                        onClick={() => window.open(project.demo)}
                                        className="object-cover rounded-2xl cursor-alias"/>

                                </motion.div>
                            </div>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tag) => (
                                        <Badge key={tag} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex gap-2">
                                {project.code && (
                                    <Button asChild variant="outline" size="sm">
                                        <Link href={project.code} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4"/>
                                            Code
                                        </Link>
                                    </Button>
                                )}

                                {project.demo && (
                                    <Button asChild size="sm">
                                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4"/>
                                            Demo
                                        </Link>
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Projects

