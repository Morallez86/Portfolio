
export default function SkillCategory({ title, color, skills }) {
  return (
    <div className="bg-white/80 dark:bg-slate-800 rounded-xl shadow-lg p-6 transition hover:-translate-y-1 hover:shadow-xl">
      <h2 className={`text-xl font-semibold mb-4 text-center ${color}`}>
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-4 justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-2 text-slate-700 dark:text-slate-200"
          >
            <div className="text-4xl">{skill.icon}</div>
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}