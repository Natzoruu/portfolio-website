import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="relative py-12 px-4 bg-card mt-8">
                <div className="container text-center items-center">
                    <p className="text-sm text-muted-foreground">
                        If you read this, you're awesome. Thanks for scrolling! 💜
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Built with React, Tailwind, and ☕
                    </p>
                </div>
                <a href="#hero" className="absolute right-4 top-4 style-button">
                <ArrowUp />
            </a>
        </footer>)
}




