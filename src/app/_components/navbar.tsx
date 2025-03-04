"use client"

import {useEffect, useState} from "react"
import Link from "next/link"
import {AnimatePresence, motion} from "framer-motion"
import {useTheme} from "next-themes";
import {Button} from "@/components/ui/button"
import {Moon, Sun} from "lucide-react"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"

const menuToMap = [
    {id: 'home', name: "accueil"},
    {id: 'about', name: "à propos"},
    {id: 'projects', name: "projets"},
    {id: 'skills', name: "compétence"},
    {id: 'contact', name: "contact"}]

const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
        section.scrollIntoView({behavior: "smooth"})
    }
}

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    return (
        <motion.header
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled ? "dark:bg-black bg-white shadow-lg" : "bg-transparent"
            }`}
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{duration: 0.5}}
        >
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold dark:text-white">
                    Nahel Kivuila
                </Link>
                <ul className="space-x-4 lg:space-x-6 hidden md:flex">
                    {menuToMap.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className="dark:text-gray-300 dark:hover:text-white hover:text-gray-500 transition-colors"
                            >
                                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className={'hidden md:flex'}>
                    <ThemeButton/>
                </div>
                <div className={'flex: md:hidden'}>
                    <MobileMenuBar isScrolled={isScrolled}/>
                </div>
            </nav>
        </motion.header>
    )
}

interface MobileMenuBarProps {
    isScrolled?: boolean
}

const MobileMenuBar = ({isScrolled}: MobileMenuBarProps) => {
    const [isOpen, setIsOpen] = useState(false)

    function toggleAndScroll(item: { name: string; id: string }) {
        scrollToSection(item.id)
        setIsOpen(false)

    }

    return (
        <div>
            {!isOpen
                ?
                (<AnimatePresence>
                    <motion.div
                        initial={{rotateZ: -180}}
                        animate={{rotateZ: 0}}
                        exit={{rotateZ: 180}}
                        onClick={() => setIsOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                             strokeLinejoin="round" className="lucide lucide-menu">
                            <line x1="4" x2="20" y1="12" y2="12"/>
                            <line x1="4" x2="20" y1="6" y2="6"/>
                            <line x1="4" x2="20" y1="18" y2="18"/>
                        </svg>
                    </motion.div>
                </AnimatePresence>)
                : (<AnimatePresence>
                    <motion.div
                        animate={{rotateZ: 180}}
                        exit={{rotateZ: -180}}
                        onClick={() => setIsOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                             strokeLinejoin="round" className="lucide lucide-x">
                            <path d="M18 6 6 18"/>
                            <path d="m6 6 12 12"/>
                        </svg>
                    </motion.div>
                </AnimatePresence>)
            }
            {isOpen &&
                <div>
                    <AnimatePresence>
                        <motion.div
                            initial={{scale: 0, opacity: 0}}
                            animate={{scale: 1, opacity: 1}}
                            exit={{scale: 0, opacity: 0}}
                            className={`fixed left-0 r-0 mt-4 pb-6 w-screen z-10 dark:bg-black ${isScrolled ? "bg-white" : "bg-gray-50"} px-1 justify-items-center`}>
                            <div className={'flex-col w-full '}>
                                {menuToMap.map(item => (
                                    <div key={item.id}
                                         className={'py-1'}
                                    >
                                        <Button
                                            className={`w-full text ${isScrolled ? "bg-white" : "bg-gray-50"} text-black dark:text-white dark:bg-black font-semibold px-6 mx-auto justify-start`}
                                            onClick={() => toggleAndScroll(item)}>
                                            {item.name}
                                        </Button>
                                    </div>

                                ))}
                            </div>
                            <div className="relative w-full mb-4">
                                <div aria-hidden="true" className="absolute px-4 inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"/>
                                </div>
                                <div className="relative flex justify-center">
                                <span
                                    className={`bg-gray-50 dark:bg-black ${isScrolled ? "bg-white" : "bg-gray-50"} px-2 text-sm text-gray-500`}>
                                    Thème
                                </span>
                                </div>
                            </div>
                            <ThemeButton/>
                        </motion.div>
                    </AnimatePresence>
                    <motion.div initial={{opacity:0}} animate={{opacity: 0.15}}  className={'fixed z-0 mt-5 right-0 left-0 w-screen h-screen bg-black opacity-15'}
                         onClick={() => setIsOpen(false)}/>
                </div>

            }
        </div>
    )
}

const ThemeButton = () => {
    const {setTheme} = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun
                        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                    <Moon
                        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Navbar

