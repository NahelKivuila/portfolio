"use client";

import {Code, Database, Server, Wrench} from "lucide-react";
import {motion} from 'framer-motion'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card} from "@/components/ui/card";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const skillCategories = [
    {
        id: "frontend",
        label: "Frontend",
        icon: <Code className="h-5 w-5 mr-2"/>,
        skills: [
            {name: "HTML", image: "/front/html.png"},
            {name: "CSS", image: "/front/css.png"},
            {name: "JavaScript", image: "/front/js.png"},
            {name: "TypeScript", image: "/front/ts.png"},
            {name: "React", image: "/front/react.png"},
            {name: "Next.js", image: "/front/next.png"},
            {name: "Angular", image: "/front/angular.png"},
            {name: "Tailwind CSS", image: "/front/tailwind.png"},
        ],
    },
    {
        id: "backend",
        label: "Backend",
        icon: <Server className="h-5 w-5 mr-2"/>,
        skills: [
            {name: "Java", image: "/back/java.png"},
            {name: "Spring Boot", image: "/back/spring.png"},
            {name: "Python", image: "/back/python.png"},
            {name: "PHP", image: "/back/php.png"},
            {name: "RESTful APIs", image: "/back/api.png"},
            {name: "C#", image: "/back/csharp.png"},
        ],
    },
    {
        id: "database",
        label: "Database",
        icon: <Database className="h-5 w-5 mr-2"/>,
        skills: [
            {name: "Oracle", image: "/db/oracle.png"},
            {name: "PostgreSQL", image: "/db/postgres.png"},
            {name: "MySQL", image: "/db/mysql.png"},
            {name: "LiquiBase", image: "/db/liquibase.png"},
        ],
    },
    {
        id: "tools",
        label: "Tools & Others",
        icon: <Wrench className="h-5 w-5 mr-2"/>,
        skills: [
            {name: "Git/GitHub", image: "/tools/git.png"},
            {name: "Docker", image: "/tools/docker.png"},
            {name: "CI/CD", image: "/tools/cicd.png"},
            {name: "Junit/Testing", image: "/tools/junit.png"},
            {name: "AWS", image: "/tools/aws.png"},
            {name: "Figma", image: "/tools/figma.png"},
            {name: "Jenkins", image: "/tools/jenkins.png"},
            {name: "Jira", image: "/tools/jira.png"},
        ],
    },
]

const Skills = () => {

    return (
        <section id="skills" className={'relative z-10'}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl px-6 md:text-5xl text-center mb-12">My
                    Skills</h2>

                <Tabs defaultValue="frontend" className="w-full">
                    <div className="flex justify-center mb-8">
                        <TabsList className="grid grid-cols-2 md:grid-cols-4">
                            {skillCategories.map((category) => (
                                <TabsTrigger key={category.id} value={category.id} className="flex items-center">
                                    {category.icon}
                                    <span className="hidden sm:inline">{category.label}</span>
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>
                    {skillCategories.map((category) => (
                        <TabsContent key={category.id} value={category.id}>
                            <Card className="grid px-6">
                                <div
                                    className="grid grid-cols-2 md:grid-cols-4 lg:auto-cols-auto gap-6 justify-items-center">
                                    {category.skills.map((skill) => (

                                        <TooltipProvider key={skill.name}>
                                            <Tooltip delayDuration={500}>
                                                <TooltipTrigger asChild>
                                                    <div key={skill.name} className="rounded-md m-4 text-center">
                                                        <motion.img
                                                            whileHover={{scale:1.2, rotateY: [-10, 10]}}
                                                            src={`/skills${skill.image}`}
                                                            alt={'Skill name'}
                                                            className={'h-14 w-14'}
                                                            width={256}
                                                            height={256}

                                                        >
                                                            {/*<Image*/}
                                                            {/*    src={`/skills${skill.image}`}*/}
                                                            {/*    alt={'Skill name'}*/}
                                                            {/*    className={'h-14 w-14'}*/}
                                                            {/*    width={256}*/}
                                                            {/*    height={256}*/}
                                                            {/*/>*/}
                                                        </motion.img>

                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    ))}
                                </div>
                            </Card>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    )
}

export default Skills;