import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react"
import { cn } from "@/lib/util"

export const ContactSection = () => {
    return(
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get in <span className="text-primary">Contact</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm currently open to new opportunities and collaborations. If you're looking for someone to help you build or improve your website — whether it's with WordPress, React, or general front-end development — feel free to reach out. I'll get back to you as soon as possible.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-bold text-left">Email</h4>
                                    <a href="mailto:alejsz05.22@gmail.com">alejsz05.22@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-bold text-left">Phone</h4>
                                    <a href="tel:+573143538752">+57 314-353-8752</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-bold text-left">Location</h4>
                                    <a href="mailto:alejsz05.22@gmail.com">Colombia, Norte de Santander</a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <div className="font-bold items-center mb-4">My <span className="text-primary text-center">Socials</span></div>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://linkedin.com/in/ajsz2205" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 text-primary"><Linkedin/></a>
                                <a href="https://github.com/Natzoruu" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary/10 text-primary"><Github/></a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
                        <form className="space-y-6" action="https://formsubmit.co/alejsz05.22@gmail.com" method="POST">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-left px-2">Your name</label>
                                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="What's your name?"></input>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-left px-2">Your email</label>
                                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Your email here"></input>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-left px-2">Your message</label>
                                <input type="text" id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Leave a message..."></input>
                            </div>
                            <button type="submit" className={cn("style-button w-full flex items-center justify-center gap-2 cursor-pointer", )}>Send message<Send size={16}/></button> 
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}