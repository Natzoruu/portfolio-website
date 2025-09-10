import { Code, User, Briefcase } from "lucide-react"

export const AboutSection = () =>{
    return(
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-primary-foreground">Web developer</h3>
                        <p className="text-muted-foreground">
                            I’m a Multimedia Engineer with a strong foundation in web development, digital design, and 3D. I enjoy creating elegant and efficient solutions that blend visual appeal with performance and usability.
                        </p>
                        <p className="text-muted-foreground">
                            My main tools include React, Tailwind CSS, JavaScript, and WordPress — where I build dynamic, scalable, and fully customized websites. I’m particularly focused on creating responsive and accessible user experiences, whether starting from scratch, enhancing existing platforms, or exploring immersive media.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="style-button">
                                Get in touch
                            </a>
                            <a href="/CV.pdf"  target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration:300">
                                View CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"></Code></div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Front-End Development</h4>
                                    <p className="text-muted-foreground">I develop clean, responsive interfaces using React, Tailwind CSS, and modern JavaScript frameworks with a focus on performance and accessibility.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"></User></div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">WordPress Solutions</h4>
                                    <p className="text-muted-foreground">I create modern and responsive websites using WordPress, combining built-in tools with plugins and visual builders to deliver fast, functional, and visually appealing results.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"></Briefcase></div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Developer</h4>
                                    <p className="text-muted-foreground">
                                        I’ve collaborated with local clients and teams on diverse website projects, handling both design and development. These experiences have strengthened my communication, planning, and technical skills while delivering real-world solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )        
};