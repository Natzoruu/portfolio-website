import { ArrowUp } from "lucide-react"
export const Footer = () => {
    return (
        <footer className="relative p-16 md:p-6 px-4 bg-card mt-8">
            <a href="#hero" className="absolute right-4 top-4 md:right-8 md:top-8 style-button">
                <ArrowUp />
            </a>
            <div className="container text-center">
            <p className="text-sm text-muted-foreground">
                If you read this, you're awesome. Thanks for scrolling! 💜
            </p>
            <p className="text-sm text-muted-foreground">
                Built with React, Tailwind, and ☕
            </p>
            </div>
        </footer>
    )
}