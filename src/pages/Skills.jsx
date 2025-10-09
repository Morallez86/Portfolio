// src/pages/Skills.jsx
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava, FaNpm } from "react-icons/fa"
import { SiTailwindcss, SiJavascript, SiVite, SiGithub, SiJest, SiMysql, SiSqlite, SiIntellijidea, SiPostman, SiUnrealengine } from "react-icons/si"
import { BiLogoCPlusPlus } from 'react-icons/bi';
import { VscVscode } from 'react-icons/vsc';
import { useLocation } from 'react-router-dom';
import { DiResponsive } from 'react-icons/di';
import { GiVrHeadset } from 'react-icons/gi';

import SkillCategory from "../components/SkillCategory"
import ProjectCard from "../components/ProjectCard";

export default function Skills() {

  const location = useLocation();
  const selectedProject = location.state?.selectedProject;

  const skillCategories = [
    {
      title: "Frontend Development",
      color: "text-teal-700 dark:text-indigo-400",
      skills: [
        { name: "React", icon: <FaReact className="text-sky-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Vite", icon: <SiVite className="text-purple-500" /> },
        { name: "Jest", icon: <SiJest className="text-rose-600" /> },
        { name: "Responsive Design", icon: <DiResponsive className="text-green-500" /> },
      ],
    },
    {
      title: "Backend & Databases",
      color: "text-teal-700 dark:text-indigo-400",
      skills: [
        { name: "C++", icon: <BiLogoCPlusPlus className="text-blue-600" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Python", icon: <FaPython className="text-yellow-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "SQLite", icon: <SiSqlite className="text-slate-500" /> },
      ],
    },
    {
      title: "Tools & DevOps",
      color: "text-teal-700 dark:text-indigo-400",
      skills: [
        { name: "VSCode", icon: <VscVscode className="text-blue-500" /> },
        { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-purple-500" /> },
        { name: "GitHub", icon: <SiGithub className="text-gray-700 dark:text-gray-200" /> },
        { name: "npm", icon: <FaNpm className="text-red-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      ],
    },
    {
      title: "Other",
      color: "text-teal-700 dark:text-indigo-400",
      skills: [
        { name: "Unreal Engine", icon: <SiUnrealengine className="text-gray-700 dark:text-gray-300" /> },
        { name: "VR Development", icon: <GiVrHeadset className="text-purple-600" /> },
      ],
    },
  ]

  return (
    <section className="min-h-screen dark:bg-slate-900 py-16 px-8">
      <h1 className="text-4xl font-bold text-center text-teal-800 dark:text-white mb-12">
        Skills
      </h1>
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {skillCategories.map((category) => (
          <SkillCategory 
            key={category.title}
            {...category}
            selectedProject={selectedProject}
          />
        ))}
      </div>
      {selectedProject && (
        <div className="max-w-7xl mx-auto mt-20">
          <ProjectCard {...selectedProject} />
        </div>
      )}
    </section>
  )
}
