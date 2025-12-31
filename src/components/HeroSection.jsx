import { ArrowDown } from "lucide-react"

export const HeroSection = () =>{
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
    <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in">Hi, i'm </span>
                <span className="text-primary opacity-0 animate-fade-in-delay-1">Alejandro </span>
                <span className="opacity-0 animate-fade-in-delay-2">Sanchez </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                I’m a Multimedia Engineer with a passion for crafting user-centered digital experiences. I specialize in modern web development using technologies like React, Tailwind CSS, and WordPress, as well as 3D and immersive media. My focus is on building clean, responsive, and accessible digital experiences that combine design, functionality, and performance.
            </p>
            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                <butto onClick={()=>{document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}} className="style-button cursor-pointer hover:scale-110">
                    My work
                </butto>
            </div>
        </div>
    </div>
    <div className="absolute bottom-8 flex flex-col items-center animate-bounce ">
        <span className="text-sm text-muted-foreground mb-2">
            Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary"></ArrowDown>

    </div>

    </section>
}