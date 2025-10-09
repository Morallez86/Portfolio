import { useState } from "react"
import { Link } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-4 shadow border border-teal-700 dark:border-indigo-600 rounded-b-lg">
      <div className=" flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-teal-700 dark:text-indigo-500">MyPortfolio</Link>
        <nav className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="px-6 py-2 bg-teal-700 dark:bg-indigo-500 text-white rounded hover:bg-teal-900 dark:hover:bg-indigo-600 transition">Home</Link>
          <Link to="/projects" className="px-6 py-2 bg-teal-700 dark:bg-indigo-500 text-white rounded hover:bg-teal-900 dark:hover:bg-indigo-600 transition">Projects</Link>
          <Link to="/skills" className="px-6 py-2 bg-teal-700 dark:bg-indigo-500 text-white rounded hover:bg-teal-900 dark:hover:bg-indigo-600 transition">Skills</Link>
          <Link to="/contact" className="px-6 py-2 bg-teal-700 dark:bg-indigo-500 text-white rounded hover:bg-teal-900 dark:hover:bg-indigo-600 transition">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="md:hidden p-2 rounded-full transition-colors duration-300 
                        bg-teal-600 text-white dark:bg-indigo-500 
                        hover:bg-teal-700 dark:hover:bg-indigo-600"
            onClick={() => setOpen(!open)}
          >
            <GiHamburgerMenu size={20} />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden mt-4 -ml-4 absolute z-10 bg-white dark:bg-gray-700 text-xl w-1/3 text-center rounded-r-md border dark:border-gray-500 ">
          <div className="border text-teal-700 dark:text-white hover:bg-teal-700 hover:text-white dark:border-gray-500 p-3 dark:hover:bg-gray-600">
            <Link to="/" onClick={() => setOpen(false)} className="block">Home</Link>
          </div>
          <div className="border text-teal-700 dark:text-white hover:bg-teal-700 hover:text-white dark:border-gray-500 p-3 dark:hover:bg-gray-600">
            <Link to="/projects" onClick={() => setOpen(false)} className="block">Projects</Link>
          </div>
          <div className="border text-teal-700 dark:text-white hover:bg-teal-700 hover:text-white dark:border-gray-500 p-3 dark:hover:bg-gray-600">
          <Link to="/skills" onClick={() => setOpen(false)} className="block">Skills</Link>
          </div>
          <div className="border text-teal-700 dark:text-white hover:bg-teal-700 hover:text-white dark:border-gray-500 p-3 dark:hover:bg-gray-600">
          <Link to="/contact" onClick={() => setOpen(false)} className="block">Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}
