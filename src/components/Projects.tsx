import  { projectsDE, projectsEN } from '../projectContent.ts'
import Button from '../ui/Button.tsx'
import { useNavigate } from 'react-router-dom';
import routes from '../routes.ts';
import { useLanguageSwitcher } from '../contexts/LanguageContext.tsx';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects({all = true}) {
   const {language} = useLanguageSwitcher();

   const navigate = useNavigate();
   const projects = language === 'de' ? projectsDE : projectsEN

   return ( 
    <>
    <section className="text-center font-bold">
    <h1 className='h1-purple '>Projects</h1>
    <p>Eine Auswahl an Projekten...</p>
    <div className="max-w-6xl mx-auto px-6 py-16">

    {/* <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map(project => {
          return (
            <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Image with gradient overlay */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 mix-blend-multiply`}
              ></div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Button
                    key={tech}
                    className="bg-[#cdc7e5] dark:bg-[#5b507a]/30 text-[#5b507a] dark:text-[#cdc7e5] hover:bg-[#5b507a]/20 dark:hover:bg-[#5b507a]/50 rounded-full px-3 py-1"
                  >
                    {tech}
                  </Button>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full border-2 hover:bg-[#cdc7e5]/50 dark:hover:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                    >
                      <Github className="size-4 mr-2" />
                      {}
                    </Button>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      className="bg-[#5b507a] hover:bg-[#4a3f62] dark:bg-[#5b507a] dark:hover:bg-[#6b6088] text-white rounded-full"
                    >
                      <ExternalLink className="size-4 mr-2" />
                      {}
                    </Button>
                  </a>
                )}
              </div>
              </div>
              </div>
            // <li key={project.title} className="flex flex-col gap-1 rounded-card bg-cyan-600 dark:bg-cyan-800 rounded-2xl bg-card p-card p-6">
            // <h2 className="text-primary font-bold text-xl">{project.title}</h2>
            // <p className="text-muted-foreground text-sm">{project.description}</p>
            // <a href={project.link}><i className='fa-brands fa-github fa-xl' /></a>
            // </li>
          )
      })}
    </div>

    </div>
    </section>
    </>
   )
}