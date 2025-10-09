import { useEffect, useState } from "react";
import { motion, useTime, useTransform } from "framer-motion";

export default function SkillCategory({ title, color, skills, selectedProject }) {
  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], { clamp: false });

  const [isDark, setIsDark] = useState(
    typeof window !== "undefined" &&
      document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const darkModeEnabled = document.documentElement.classList.contains("dark");
      setIsDark(darkModeEnabled);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const darkGradient = useTransform(rotate, (r) =>
    `conic-gradient(from ${r}deg, #e0e7ff, #818cf8, #4338ca, #1e1b4b)`
  );

  const lightGradient = useTransform(rotate, (r) =>
    `conic-gradient(from ${r}deg, #f0fdfa, #99f6e4, #14b8a6, #115e59)`
  );

  return (
    <div className="bg-white/80 dark:bg-slate-800 rounded-xl shadow-lg p-6">
      <h2 className={`text-xl font-semibold mb-4 text-center ${color}`}>
        {title}
      </h2>

      <div className="grid grid-cols-2 gap-4 justify-items-center">
        {skills.map((skill) => {
          const isHighlighted = selectedProject?.skills?.includes(skill.name);

          return (
            <div key={skill.name} className="relative">
              <motion.div
                className="rounded-xl p-[3px]"
                style={{
                  background: isHighlighted
                    ? isDark
                      ? darkGradient
                      : lightGradient
                    : "transparent",
                }}
              >
                <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-700 flex flex-col items-center gap-2 p-3 text-slate-700 dark:text-slate-200">
                  <div className="text-4xl">{skill.icon}</div>
                  <span className="text-xs font-medium text-center">{skill.name}</span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
