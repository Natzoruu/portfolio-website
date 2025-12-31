import { Key } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/util";

const skills = [{ name: "HTML", level: "85", category: "frontend" },
                { name: "CSS", level: "80", category: "frontend" },
                { name: "JavaScript", level: "70", category: "frontend" },
                { name: "TypeScript", level: "60", category: "frontend" },
                { name: "React", level: "65", category: "frontend" },
                { name: "Next.js", level: "65", category: "frontend" },
                { name: "Tailwind", level: "75", category: "frontend" },
                { name: "Supabase", level: "80", category: "backend" },
                { name: "Firebase", level: "75", category: "backend" },
                { name: "Figma", level: "75", category: "frontend" },
                { name: "Responsive Design", level: "80", category: "frontend" },
                { name: "WordPress", level: "85", category: "cms" },
                { name: "Elementor", level: "85", category: "cms" },
                { name: "PHP", level: "50", category: "cms" },
                { name: "Git & GitHub", level: "60", category: "tools" },
                { name: "Website Maintenance", level: "70", category: "tools" },
                { name: "SEO", level: "65", category: "tools" },
]
const categories = ["all", "frontend", "cms", "tools", "backend"];
export const SkillSection = () => {
  const [activaCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activaCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activaCategory);

  return (
    <div id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold">
          My<span className="text-primary"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12 pt-6">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activaCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="pt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};