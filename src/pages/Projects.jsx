import ProjectCard from '../components/ProjectCard';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const categories = ["All", "Frontend", "Backend"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "Personal Developer Portfolio",
      description: "This portfolio website was built with React, Vite, and Tailwind CSS. It features a responsive design, dark mode, project highlights, and easy navigation.",
      image: import.meta.env.BASE_URL + "images/my-portfolio.png",
      category: "Frontend",
      skills: [
        "React",
        "Vite",
        "Tailwind CSS",
        "JavaScript",
        "GitHub Pages",
        "Responsive Design"
      ],
      highlights: [
        "Dark mode support",
        "Mobile-friendly layout",
        "Project cards with multiple links",
        "Deployed on GitHub Pages"
      ],
      links: {
        github: "https://github.com/Morallez86/dev-portfolio"
      }
    },
    {
      title: "CARLA MotionVRConnect",
      description: "Extension of the CARLA driving simulator with support for Virtual Reality, YawVR motion chair, custom sensors, and a modular scenario system.",
      image: import.meta.env.BASE_URL + "images/carla-sim.png",
      category: "Backend",
      skills: [
        "C++",
        "Python",
        "Unreal Engine",
        "VR Integration",
        "JSON",
        "Git"
      ],
      highlights: [
        "Integration with YawVR motion chair",
        "Development of custom sensors",
        "Interactive HUD in Unreal Engine"
      ],
      links: {
        github: "https://github.com/Morallez86/CARLA_MotionVRConnect",
        youtube: "https://www.youtube.com/watch?v=VEfPHTE_M3I"
      }
    },
    {
      title: "Scrum project management App",
      description: "A web application enabling teams to manage projects using Scrum methodology. Features include role definitions (Scrum Master, Product Owner, Team), task management, dashboards, notifications, user authentication via JWT, and resource/component requests.",
      image: import.meta.env.BASE_URL + "images/scrum-project.png",
      category: ["Backend", "Frontend"],
      skills: [
          "Java",
          "SQL",
          "JavaScript",
          "React",
          "Git",
          "Maven",
          "Wildfly",
          "WebSockets",
          "JWT Authentication"
      ],
      highlights: [
          "Define Scrum roles (Scrum Master, Product Owner, Team)",
          "Interactive dashboard with notifications and task tracking",
          "Real-time messaging using WebSockets",
          "Secure user management with JWT tokens",
          "Resource and component request system"
      ],
      links: {
          github: [
            { url: "https://github.com/Morallez86/projetofinal-frontend", label: "Frontend" },
            { url: "https://github.com/Morallez86/projetofinal-backend", label: "Backend" }
          ]
      }
    }
  ];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p=> p.category.includes(selectedCategory));

  return (
    <div className="max-w-6xl mx-auto space-y-8 bg-gray-100 dark:bg-slate-900 py-16 px-8">
      <h1 className="text-4xl text-teal-800 font-bold text-center dark:text-white mb-12">My Projects</h1>
      <div className="flex gap-2 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded ${selectedCategory === cat ? "bg-teal-700 dark:bg-indigo-500 text-white" : "bg-gray-200 dark:bg-slate-700"} mr-2 mb-2 hover:bg-teal-800 dark:hover:bg-indigo-700 hover:text-white transition`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="space-y-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
