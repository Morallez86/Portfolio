import { useState } from "react"
import { Link } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-4 shadow">
      <div className=" flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">MyPortfolio</Link>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-indigo-500">Home</Link>
          <Link to="/projects" className="hover:text-indigo-500">Projects</Link>
          <Link to="/about" className="hover:text-indigo-500">About</Link>
          <Link to="/contact" className="hover:text-indigo-500">Contact</Link>
        </nav>

        <div>
          <ThemeToggle />
          <button 
            className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-2 absolute bg-gray-700 text-xl w-1/3 text-center rounded-r-md border border-gray-500 ">
          <div className="border border-gray-500 p-3 hover:bg-gray-600">
            <Link to="/" onClick={() => setOpen(false)} className="block">Home</Link>
          </div>
          <div className="border border-gray-500 p-3 hover:bg-gray-600">
            <Link to="/projects" onClick={() => setOpen(false)} className="block">Projects</Link>
          </div>
          <div className="border border-gray-500 p-3 hover:bg-gray-600">
          <Link to="/about" onClick={() => setOpen(false)} className="block">About</Link>
          </div>
          <div className="border border-gray-500 p-3 hover:bg-gray-600">
          <Link to="/contact" onClick={() => setOpen(false)} className="block">Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}
