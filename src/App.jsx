import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'


export default function App(){
  return (
    <HashRouter>
      <div className="min-h-screen w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        <Header />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}
