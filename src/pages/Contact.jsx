import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto space-y-8 py-16 px-8">
      <h1 className="text-4xl font-bold text-center text-teal-800 dark:text-white mb-12">Contact Me</h1>
      <p className="mb-8 text-center">
        Interested in working together or have a question? Feel free to reach out!
      </p>
      <div className="flex flex-col gap-4 items-center">
        <a
          href="mailto:joao.morais.domain@gmail.com"
          className="flex items-center gap-2 text-teal-700 dark:text-indigo-400 hover:underline"
        >
          <FaEnvelope /> joao.morais.domain@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/joaofmorais"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-teal-700 dark:text-indigo-400 hover:underline"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/Morallez86"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-teal-700 dark:text-indigo-400 hover:underline"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </section>
  );
}