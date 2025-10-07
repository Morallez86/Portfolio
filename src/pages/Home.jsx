import React from 'react';

export default function Home() {
  return (
    <section className="relative flex justify-center items-center min-h-screen bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 flex justify-center" aria-hidden="true">
        <img
          src={import.meta.env.BASE_URL + "images/pajala-night.jpg"}
          alt=""
          className="w-full object-cover opacity-70 hidden dark:block"
        />
        <img
          src={import.meta.env.BASE_URL + "images/pajala-day.jpg"}
          alt=""
          className="w-full object-cover opacity-70 block dark:hidden blur-[4px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900 hidden dark:block"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white block dark:hidden"></div>
      </div>
      <div className="relative z-10 bg-white/80 dark:bg-transparent rounded-xl shadow-xl p-8 flex flex-col items-center max-w-md">
        <h1 className="text-4xl font-bold mb-2 text-teal-800 dark:text-indigo-500">
          Hi, I'm João Morais
        </h1>
        
        <h2 className="text-xl mb-4 text-teal-700 dark:text-indigo-300">
          Junior Software Developer
        </h2>
        
        <p className="max-w-xl text-center mb-6 text-slate-700 dark:text-slate-200">
          I am passionate about simulation, 3D interaction, and backend systems.  

        </p>
        <p className="max-w-xl text-center mb-6 text-slate-700 dark:text-slate-200"> 
          Currently looking for opportunities to grow as a developer and contribute to impactful projects.
        </p>
      </div>
    </section>
  );
}