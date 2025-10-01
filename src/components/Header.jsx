import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    return (
        <header className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-6">
            <div className="flex justify-between items-center">
                <div>
                    <Link to="/" className="text-xl font-bold">
                        MyPortfolio
                    </Link>
                </div>
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <nav className="space-x-10">
                    <Link to="/" className="hover:text-indigo-500 transition">Home</Link>
                    <Link to="/projects" className="hover:text-indigo-500 transition">Projects</Link>
                    <Link to="/about" className="hover:text-indigo-500 transition">About</Link>
                    <Link to="/contact" className="hover:text-indigo-500 transition">Contact</Link>
                    </nav>

                </div>
                <div>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}