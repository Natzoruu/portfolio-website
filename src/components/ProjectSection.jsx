const projects = [
    {
        id: 1,
        title: "Trendify",
        description: "A responsive fashion e-commerce platform built on WordPress. Leveraging Elementor for custom layout design, the site features a mobile-first architecture optimized for visual storytelling and product showcasing, ensuring seamless navigation and high user engagement.",
        image: "/projects/Trendify.jpg",
        state: "Online",
        link: "https://trendify.infinityfree.me/",
        built: "Wordpress",
    },
    {
        id: 2,
        title: "Conduce tus emociones",
        description: "A specialized service platform designed for emotional management coaching. The UI/UX focuses on accessibility and trust-building, utilizing a calming color psychology and intuitive information architecture to deliver resources to users overcoming driving anxiety.",
        image: "/projects/Conducir.jpg",
        state: "Online",
        link: "https://www.conducetusemociones.pro",
        built: "Wordpress",
    },
    {
        id: 3,
        title: "El Xef de la Memoria",
        description: "A cultural branding website dedicated to historical Spanish cuisine. The project integrates rich media content with a bespoke design system that reflects Valencian heritage, focusing on sustainable gastronomy and storytelling through an immersive web experience.",
        image: "/projects/Chef.jpg",
        state: "Online",
        link: "https://www.joanclement.com",
        built: "Wordpress",
    },
    {
        id: 4,
        title: "Siue.ch",
        description: "An institutional academic portal featuring complex information architecture. Designed to organize multi-level data (faculties, undergraduate, and postgraduate programs), the site streamlines the user journey for prospective students through efficient navigation logic.",
        image: "/projects/siue.jpg",
        state: "Online",
        link: "https://siue.ch",
        built: "Wordpress",
    },
    {
        id: 5,
        title: "Alto Perfil",
        description: "A high-performance personal branding landing page focused on Conversion Rate Optimization (CRO). Built with Next.js and TypeScript for type safety, it utilizes Tailwind CSS to deliver a pixel-perfect, responsive design that effectively communicates value propositions.",
        image: "/projects/Altoperfil.png",
        state: "Online",
        link: "https://altoperfil.vercel.app",
        built: "Next.js, React, Tailwind CSS, TypeScript",
    },
    {
        id: 6,
        title: "PolyBox",
        description: "A modern SaaS-style landing page for a digital asset platform. Engineered with a component-driven architecture using React and TypeScript, the project showcases a premium UI for subscription models, emphasizing visual fidelity and scalable frontend practices.",
        image: "/projects/polybox.png",
        state: "Online",
        link: "https://poly-box.vercel.app",
        built: "Next.js, React, Tailwind CSS, TypeScript"
    },
    {
        id: 7,
        title: "NovaShop",
        description: "A full-stack e-commerce application for high-performance hardware. Developed with Next.js and integrated with Supabase for backend data management, it features dynamic product rendering, real-time database interactions, and a robust state management system tailored for tech enthusiasts.",
        image: "/projects/novashop.png",
        state: "In development",
        link: "https://novashopstore.vercel.app",
        built: "Next.js, React, Tailwind CSS, TypeScript, Supabase"
    }
]
export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl ">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                My <span className="text-primary">Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-x-2xl mx-auto">
                Here you’ll find a selection of websites I’ve built — from personal initiatives to real projects developed for local clients. Each one reflects my growth as a developer and my commitment to clean, responsive, and user-focused design.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) =>(
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-50 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4 font-bold text-xl text-left">
                                {project.title}
                            </div>
                            <div className="text-left text-l mb-4">
                                {project.description}
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="font-bold">Status: </span>{project.state}
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4 text-left">
                                <span className="font-bold">Built With: </span>{project.built}
                            </div>
                            <div className="flex">
                                <a className="style-button cursor-pointer" href={project.link} target="_blank" rel="noopener noreferrer">View more</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}