import useTheme from '../hooks/useTheme'
import { FaSun, FaMoon } from "react-icons/fa"

export default function ThemeToggle(){
    const {theme, toggleTheme} = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors duration-300 
                        bg-teal-600 text-white dark:bg-indigo-500 
                        hover:bg-teal-700 dark:hover:bg-indigo-600"
            aria-label="Toggle theme"
            >
            {theme === "dark" ? (
                <FaSun size={20} />
            ) : (
                <FaMoon size={20} />
            )}
        </button>
    );
}