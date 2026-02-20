import  { content } from '../content.ts'
import Button from '../ui/Button.tsx'
import { useNavigate } from 'react-router-dom';
import routes from '../routes.ts';

export default function Projects({all = true}) {
   const navigate = useNavigate();
   const {projects} = content

   return ( 
    <>
    <section className="text-center font-bold">
    <h1>Projects</h1>
    <div className="w-full max-w-4xl mx-auto py-20 px-4 scroll-mt-20">

    <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
      {projects.best.map(project => {
          return (
            <li key={project.title} className="flex flex-col gap-1 rounded-card bg-cyan-600 dark:bg-cyan-800 rounded-2xl bg-card p-card p-6">
            <h2 className="text-primary font-bold text-xl">{project.title}</h2>
            <p className="text-muted-foreground text-sm">{project.subtext}</p>
            <a href={project.link}><i className='fa-brands fa-github fa-xl' /></a>
            </li>
          )
      })}
      {all ? (
        projects.other.map(project => {
          return (
            <li key={project.title} className="flex flex-col gap-1 rounded-card bg-cyan-600 dark:bg-cyan-800 rounded-2xl bg-card p-card p-6">
            <h2 className="text-primary font-bold text-xl">{project.title}</h2>
            <p className="text-muted-foreground text-sm">{project.subtext}</p>
            <a href={project.link}><i className='fa-brands fa-github fa-xl' /></a>
            </li>
          )
      })
      ) : <Button  onClick={() => navigate(routes.projects)} children='See more' />}
    </ul>

    </div>
    </section>
    </>
   )
}