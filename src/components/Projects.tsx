import  { projectPageData } from '../projectContent.ts'
import { useLanguageSwitcher } from '../contexts/LanguageContext.tsx';
import { ExternalLinkIcon, Github } from 'lucide-react';

export default function Projects() {
   const {language} = useLanguageSwitcher();

   const projects = projectPageData[language]

   return ( 
    <>
    <section className="text-center mb-16">
    <h1 className="text-4xl md:text-5xl mb-4 dark:text-gray-100">{projects.title}
      <span className='h1-purple'>{projects.title2}</span>
    </h1>
    <p>{projects.description}</p>
    <div className="max-w-6xl mx-auto px-6 py-16">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.data.map(project => {
          return (
            <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
          >
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

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <button
                    key={tech}
                    className="bg-light-purple dark:bg-primary-purple text-primary-purple dark:text-light-purple hover:bg-[#5b507a]/20 dark:hover:bg-[#5b507a]/50 rounded-full px-3 py-1"
                  >
                    {tech}
                  </button>
                ))}
              </div>

                <div className="flex gap-3 pt-4 mt-auto">
                  {project.github && (
                    <a href={project.github}  target="_blank"
                        className="inline-flex items-center rounded-full px-3 py-1 border-2 text-black border-gray-300 hover:bg-[#cdc7e5]/50 dark:hover:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                      >
                        <Github className="size-4 mr-2" />
                        Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" 
                        className="inline-flex items-center rounded-full px-3 py-1 bg-[#5b507a] hover:bg-[#4a3f62] dark:bg-[#5b507a] dark:hover:bg-[#6b6088] text-white rounded-full"
                      >
                        <ExternalLinkIcon className="size-4 mr-2" />
                        Live Demo
                    </a>
                  )}
                </div>
              </div>
              </div>
          )
      })}
    </div>

    </div>
    </section>
    </>
   )
}