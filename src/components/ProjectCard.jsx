import { FaYoutube, FaGithub } from 'react-icons/fa';

export default function ProjectCard({ 
    title,
    description,
    image,
    category = [],
    skills = [],
    links = {},
    highlights = [] 
}) {
  return (
    <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl overflow-hidden flex flex-col md:grid md:grid-cols-2">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 md:h-full"
        />
        {links.youtube && (
          <a
            href={links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-lg font-bold opacity-0 hover:opacity-100 transition"
          >
            ▶ Play Video
          </a>
        )}
      </div>
      <div className="p-6 flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-bold text-teal-600 dark:text-white">{title}</h2>
        </div>
        <p className="text-slate-700 dark:text-slate-200">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="bg-gray-200 dark:bg-slate-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
        {highlights.length > 0 && (
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
            {highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}
        <div className="flex gap-4 mt-auto">
          {Array.isArray(links.github)
            ? links.github.map((gh, idx) => (
                <a
                  key={idx}
                  href={gh.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-indigo-500 transition"
                >
                  <FaGithub size={18} /> {gh.label}
                </a>
              ))
            : links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-indigo-500 transition"
                >
                  <FaGithub size={18} /> GitHub
                </a>
              )}
          {links.youtube && (
            <a
              href={links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-red-500 transition">
              <FaYoutube size={18} /> YouTube
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
