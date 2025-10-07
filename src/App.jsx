import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Skills from './pages/Skills'

export default function App(){
  return (
    <HashRouter>
      <div className="min-h-screen w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/skills" element={<Skills/>} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}
