import { href } from "react-router-dom";
import { cn } from "../lib/util";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

export const Navbar = () =>{
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(()=>{
        const handleScroll = () =>{
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    },[]);
    return <nav className={cn("fixed w-full z-40 transition-all duration-300",
    isScrolled? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"  )}>
        <div className="container flex items-center justify-between">
            <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                <span className="relative z-10">
                    <span className="text-glow text-foreground">Bachoru</span>Portfolio
                </span>
            </a>
            {/* desktop */}
            <div className="hidden md:flex space-x-8">
                {navItems.map((item,key)=>(
                    <a key={key} href={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    onClick={(e)=>{
                        e.preventDefault();
                        const id = item.href.replace('#', '');
                        const el = document.getElementById(id);
                        if (el) {
                            el.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                    >
                        {item.name}
                    </a>
                ))}
                <ThemeToggle className={cn("absolute transition-all duration-300", isScrolled? "top-1 right-4" : "top-3 right-4")}/>
            </div>
            {/* mobile */}
            <button onClick={()=> setIsMenuOpen((prev)=>!prev)} className="md:hidden p-2 text-foreground z-50" aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
            <div className={cn("fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item,key)=>(
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        onClick={()=>setIsMenuOpen(false)}>
                            {item.name}
                        </a>
                    ))}<ThemeToggle className="mx-auto"/>
                </div>
            </div>
        </div>
    </nav>;
}