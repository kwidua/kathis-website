
import ProfileImage from "../ui/RoundImage.js"
import Me from '../assets/Profile.jpeg'
import  { content } from '../content.ts'
import { useLanguageSwitcher } from "../contexts/LanguageContext.tsx"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Link } from "react-router-dom"

export default function AboutMe() {
    const {language} = useLanguageSwitcher();
    const {hero} = content
    const data = hero[language]

 
    return (
        <>
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-40">
        <div className="grid gap-8 md:gap-12 items-center md:grid-cols-2">
            <div className="relative order-2 md:order-1">
            <div className="relative">
            <ProfileImage url={Me} variables="w-full rounded-full mx-auto border-8 border-white dark:border-gray-800"/>
            </div>
            </div>

            <div className="space-y-4 md:space-y-6 order-1 md:order-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl dark:text-gray-100">
              {data.title1}{" "}
              <span className="text-[#5b507a] dark:text-[#cdc7e5] font-bold">Kathi</span>.
              <br />
              <span className="text-[#f77f00]">{data.title2}</span>
            </h1>

            <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {data.text}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                <Link to="/projects"
                    className="
                        flex items-center justify-center gap-2 w-full sm:w-auto py-5 px-4 rounded-full bg-primary-purple
                        text-white hover:bg-[#4a3f62] dark:hover:bg-[#6b6088]
                        shadow-lg hover:shadow-xl
                        transition-all duration-300">
                    Meine Projekte ansehen
                    <ArrowRight size={16} />
                    </Link>

                    <Link to="/about"
                    className="
                        flex items-center justify-center gap-2 py-5 px-4 rounded-full
                        border-2 border-primary-purple dark:border-light-purple
                        text-primary-purple dark:text-light-purple
                        hover:bg-light-purple dark:hover:bg-primary-purple
                        text-base font-medium
                        transition-all duration-300">
                    Mehr über mich erfahren
                    </Link>
                </div>

                          <div className="flex gap-3 md:gap-4 pt-4 md:pt-6 justify-center sm:justify-start">
              <a
                href="https://github.com/kwidua"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow hover:scale-110 transform duration-200 hover:bg-[#cdc7e5] dark:hover:bg-[#5b507a]"
              >
                <Github className="size-4 md:size-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/katharina-widua-8475a9201/∏"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow hover:scale-110 transform duration-200 hover:bg-[#cdc7e5] dark:hover:bg-[#5b507a]"
              >
                <Linkedin className="size-4 md:size-5 text-[#3b8ea5]" />
              </a>
              <a
                href="mailto:kathi@example.com"
                className="p-2.5 md:p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow hover:scale-110 transform duration-200 hover:bg-[#cdc7e5] dark:hover:bg-[#5b507a]"
              >
                <Mail className="size-4 md:size-5 text-[#f77f00]" />
              </a>
            </div>
            </div>
        </div>
        </section>
        </>
    )
}