import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 bg-gray-100 dark:bg-slate-900 py-16 px-8">
      <h1 className="text-4xl text-teal-800 font-bold text-center dark:text-white mb-12">My Projects</h1>
      <ProjectCard
        title="Personal Developer Portfolio"
        description="This portfolio website was built with React, Vite, and Tailwind CSS. It features a responsive design, dark mode, project highlights, and easy navigation."
        image={import.meta.env.BASE_URL + "images/my-portfolio.png"}
        skills={[
          "React",
          "Vite",
          "Tailwind CSS",
          "JavaScript",
          "GitHub Pages",
          "Responsive Design"
        ]}
        highlights={[
          "Dark mode support",
          "Mobile-friendly layout",
          "Project cards with multiple links",
          "Deployed on GitHub Pages"
        ]}
        links={{
          github: "https://github.com/Morallez86/dev-portfolio"
        }}
      />
      <ProjectCard
        title="CARLA MotionVRConnect"
        description="Extension of the CARLA driving simulator with support for Virtual Reality, YawVR motion chair, custom sensors, and a modular scenario system."
        image={import.meta.env.BASE_URL + "images/carla-sim.png"}
        skills={[
          "C++",
          "Python",
          "Unreal Engine",
          "VR Integration",
          "JSON",
          "Git"
        ]}
        highlights={[
          "Integration with YawVR motion chair",
          "Development of custom sensors",
          "Interactive HUD in Unreal Engine"
        ]}
        links={{
          github: "https://github.com/Morallez86/CARLA_MotionVRConnect",
          youtube: "https://www.youtube.com/watch?v=VEfPHTE_M3I"
        }}
      />
      <ProjectCard
        title="Scrum project management App"
        description="A web application enabling teams to manage projects using Scrum methodology. Features include role definitions (Scrum Master, Product Owner, Team), task management, dashboards, notifications, user authentication via JWT, and resource/component requests."
        image={import.meta.env.BASE_URL + "images/scrum-project.png"}
        skills={[
            "Java",
            "SQL",
            "JavaScript",
            "React",
            "Git",
            "Maven",
            "Wildfly",
            "WebSockets",
            "JWT Authentication"
        ]}
        highlights={[
            "Define Scrum roles (Scrum Master, Product Owner, Team)",
            "Interactive dashboard with notifications and task tracking",
            "Real-time messaging using WebSockets",
            "Secure user management with JWT tokens",
            "Resource and component request system"
        ]}
        links={{
            github: [
            { url: "https://github.com/Morallez86/projetofinal-frontend", label: "Frontend" },
            { url: "https://github.com/Morallez86/projetofinal-backend", label: "Backend" }
            ]
        }}
      />
    </div>
  );
}