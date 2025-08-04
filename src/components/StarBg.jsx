import { X } from "lucide-react";
import { useEffect, useState } from "react";

export const StarBg = () =>{
    const [meteors,setMeteors] = useState([]) 
    const [stars,setStars] = useState([]) 
    useEffect (()=> {
        generateStars();
        generateMeteors();
        
        const handleResize = () =>{
            generateStars();
        };
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, []);
    const generateStars = () =>{
        const numberofstars = Math.floor(
            (window.innerWidth*window.innerHeight)/10000
        );
        const newStars = []
        
        for (let i = 0; i < numberofstars; i++) {
            newStars.push({
                id:i,
                size: Math.random() * 3 + 1,
                X: Math.random() * 100,
                Y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setStars(newStars);
    };
        const generateMeteors = () =>{
        const numberofMeteors = 6;
        const newMeteors = []
        
        for (let i = 0; i < numberofMeteors; i++) {
            newMeteors.push({
                id:i,
                size: Math.random() * 2 + 1,
                X: Math.random() * 100,
                Y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }
        setMeteors(newMeteors);
    };
    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) =>(
            <div key={star.id}
                className="star animate-pulse-subtle" 
                style={{
                    width: star.size + "px",
                    height: star.size + "px",
                    left: star.X + "%",
                    top: star.Y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s", 
            }} />
        ))}
        {meteors.map((meteor) =>(
            <div key={meteor.id}
                className="meteor animate-meteor" 
                style={{
                    width: meteor.size * 50 + "px",
                    height: meteor.size + "px",
                    left: meteor.X + "%",
                    top: meteor.Y + "%",
                    animationDelay: meteor.opacity,
                    animationDuration: meteor.animationDuration + "s", 
            }} />
            ))}
    </div>;
}