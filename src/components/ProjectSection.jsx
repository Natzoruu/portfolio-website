const projects = [
    {
        id: 1,
        title: "El Xef de la Memoria",
        description: "WordPress site for a gastronomic project focused on historical Spanish cuisine and sustainability. It showcases cultural and culinary services with a clear design centered on Valencian identity.",
        image: "/projects/Chef.jpg",
        state: "Online",
        link: "https://www.joanclement.com",
        built: "Wordpress",
    },
    {
        id: 2,
        title: "Conduce tus emociones",
        description: "WordPress site for a driving coach specialized in emotional management. The design builds trust and closeness, offering resources and services for people looking to overcome the fear of driving.",
        image: "/projects/Conducir.jpg",
        state: "Online",
        link: "https://www.conducetusemociones.pro",
        built: "Wordpress",
    },
    {
        id: 3,
        title: "Trendify",
        description: "E-commerce fashion website designed with a visual focus on featured products and promotions. Trendify offers a clear and attractive user experience, fully responsive across devices.",
        image: "/projects/Trendify.jpg",
        state: "Online",
        link: "https://www.conducetusemociones.pro",
        built: "Wordpress",
    },
    {
        id: 4,
        title: "Siue.ch",
        description: "Institutional website developed for a university, structured by faculties, undergraduate and postgraduate programs. Designed to simplify access to academic offerings and guide prospective students.",
        image: "/projects/siue.jpg",
        state: "Online",
        link: "https://siue.ch",
        built: "Wordpress",
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
                            <div className="flex flex-wrap gap-2 mb-4">
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