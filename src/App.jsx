import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import ScrollToTopButton from './components/ScrollToTopButton'

export default function App(){
  return (
    <HashRouter>
      <div className="min-h-screen w-full bg-gray-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/skills" element={<Skills/>} />
          </Routes>
        </main>
        <ScrollToTopButton />
      </div>
    </HashRouter>
  )
}
