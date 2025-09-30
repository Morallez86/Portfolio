import React from 'react'
import Header from '../components/Header'

export default function Home(){
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <Header />
      <main className="container mx-auto p-4">
        {/* Add Skills, Projects, Charts, Contact here */}
      </main>
    </div>
  )
}