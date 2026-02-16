import  { content } from '../content.js'

export default function Projects() {
   const {projects} = content

   return ( 
    <>
    <section className="text-center font-bold pt-10 xs:p-10 min-h-96 bg-gradient-to-b from-cyan-800 from-10% to-cyan-950 to-80% ">
    <h1>Projects</h1>
    <div className="grid grid-cols-2 m-6">

    {projects.best.map(item => {
        return <>
        <div className='mx-auto'>
          <div className="bg-cyan-800 max-w-120 p-6 rounded-2xl">
            <h2 className="relative font-semibold after:content-[''] background after:absolute after:left-1/2 after:bottom-4 after:w-0 after:h-8 after:bg-cyan-600 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">{item.title}</h2>
            <p>{item.subtext}</p>
            <a href={item.url}><i className='fa-brands fa-github fa-xl' /></a>
        </div>

        </div>
        </>
    })}

    </div>
    </section>
    </>
   )
}