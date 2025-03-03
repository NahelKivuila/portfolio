"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
        link: "https://github.com/NahelKivuila/portfolio",
        technologies: ["Next.js", "TailWindCSS", "Jenkins", "Docker"],
    },
    {
        title: "Chef buddy",
        description:
            "Une application avec une inteligence artificiel qui gener des recette de cuisine en fonction de ce que l'utilisateur entre en input",
        image:
            "/chef-buddy.png",
        link: "https://github.com/NahelKivuila/chef-buddy",
        technologies: ["Next.JS", "Open AI", "TailWindCSS", "Jenkins", "Docker"],
    },
    {
        title: "Wiiseto",
        description:
            "est un gestionnaire de projets de construction conçu pour faciliter la collaboration entre les différentes parties prenantes. Partager des fichiers, communiquer des mises à jour ou suivre les étapes du projet.",
        image:
            "/wiiseto.png",
        link: "https://wiiseto.com",
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <Card key={project.title} className="overflow-hidden flex flex-col h-full">
                            <div className="relative h-48 w-full">
                                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill
                                       className="object-cover"/>
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
                                <Button asChild variant="outline" size="sm">
                                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2 h-4 w-4"/>
                                        Code
                                    </Link>
                                </Button>
                                {project.link && (
                                    <Button asChild size="sm">
                                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4"/>
                                            Demo
                                        </Link>
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects

