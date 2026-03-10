import ProgressBar from "../ui/ProgressBar.js";
import  { content } from '../content.ts'
import Button from "../ui/Button.tsx";
import { useNavigate } from "react-router-dom"
import routes from '../routes.ts'


export default function Skills({all = true}) {
    const navigate = useNavigate();

    const {skills} = content
    const {counter} = content

    function calculateCount(count: number) {
        const targets = [
            { element: document.getElementById('starsCount'), count: 4670, suffix: '+' },
            { element: document.getElementById('downloadsCount'), count: 80000, suffix: '+' },
            { element: document.getElementById('sponsorsCount'), count: 100, suffix: '+' }
        ];

        // Find the maximum count among all targets
        const maxCount = Math.max(...targets.map(target => target.count));



    // Animate count-up for each target with adjusted duration
    targets.forEach(target => {
        animateCountUp(target, maxCount / 100); // Adjust duration based on max count
    });
}

    // Function to animate count-up effect
    function animateCountUp(target: any, duration: any) {
        let currentCount = 0;
        const increment = Math.ceil(target.count / (duration / 10));

        const interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= target.count) {
            clearInterval(interval);
            currentCount = target.count;
            target.element.textContent = currentCount + target.suffix;
        } else {
            target.element.textContent = currentCount;
        }
        }, 10);
  }
    
    return (
        <>
        <section className="p-10 min-h-96">
            <h2 className="text-center">Hard Skills</h2>
            <div className="w-full max-w-4xl mx-auto py-10 px-4 scroll-mt-20">
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">  
                {skills.technical.map((skill: any) => {
                    return (
                        <li key={skill.title} className="flex flex-col gap-1 p-6">
                        <div className="mb-1 text-sm font-medium text-heading text-cyan-800 dark:text-white">{skill.icon.length > 0 ? <i className={skill.icon} /> : skill.title }</div>
                        <ProgressBar percentage={skill.percentage}/>
                        </li>
                    )
                })}
            </ul>
            {!all && (<Button onClick={() => navigate(routes.aboutMe)} children="See more"/>)}


            {all && ( 
            <>
                <h2 className="text-center p-15">Tools</h2>
                <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">  
                {skills.tools.map((skill: any) => {
                    return (
                        <li key={skill.title} className="flex flex-col gap-1 p-6">
                        <div className="mb-1 text-sm font-medium text-heading">{skill.title}</div>
                        <ProgressBar percentage={skill.percentage}/>
                        </li>
                    )
                })}
                </ul>
                
                <h2 className="text-center p-15">Languages</h2>
                <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">  
                {skills.languages.map((language: any) => {
                    return (
                        <li key={language.title} className="flex flex-col gap-1 p-6">
                        <div className="mb-1 text-sm font-medium text-heading">{language.title}</div>
                        <ProgressBar percentage={language.percentage}/>
                        </li>
                    )
                })}
                </ul>
                <div className="main-wrapper">
                    <div className="badge yellow">
                        <div className="circle">
                        <i className="fa fa-group"/>
                        </div>
                        <div className="ribbon">
                            Pairprogramming
                        </div>
                    </div>
                </div>

                 <div className="main-wrapper">
                    <div className="badge yellow">
                        <div className="circle">
                        <i className="fa fa-comments"/>
                        </div>
                        <div className="ribbon">
                            GFK Ausbildung
                        </div>
                    </div>
                </div>
            </>)}
           
            </div>
        </section>


        {all && (<div className="pt-12 sm:pt-20">
            <div className="pb-12 mt-10 sm:pb-16">
            <div className="relative">
                <div className="absolute inset-0 h-1/2"></div>
                <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <dl className="bg-white dark:bg-cyan-800 rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                    
                    {counter.items.map((item: any) => {
                            return (
                                <div key={item.title}
                                className="flex flex-col p-6 text-center border-b border-gray-100 dark:border-cyan-900 sm:border-0 sm:border-r">
                                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-cyan-800 dark:text-sky-200" id="item-1">
                                    {item.title}
                                    </dt>
                                    <dd className="order-1 text-5xl font-extrabold leading-none text-cyan-800 dark:text-sky-200"
                                    aria-describedby="item-1" id="starsCount" onScroll={calculateCount}>
                                    {item.count}
                                    </dd>
                                </div>
                            )}
                        )}
                    </dl>
                </div>
                </div>
            </div>
            </div>
        </div>
        )}
    </>
    )
}