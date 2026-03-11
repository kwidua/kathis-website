import { Heart, Coffee, Code, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import  { content } from '../content.ts'
import { useLanguageSwitcher } from "../contexts/LanguageContext.tsx"
import Pets from "./Pets.tsx";

export default function About() {
    const {language} = useLanguageSwitcher();
    const {about} = content
    const data = about[language]

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl mb-4 dark:text-gray-100">
            {data.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {data.description}
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Story Column */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="size-6 text-primary-purple dark:text-light-purple" />
                <h2 className="text-xl md:text-2xl font-bold h2-card">{data.journey.title}</h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                <p className="p-card">{data.journey.p1}</p>
                <p>{data.journey.p2}</p>
                <p>{data.journey.p3}</p>
              </div>
            </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="size-6 text-[#f77f00]" />
              <h2 className="text-xl h2-card md:text-2xl font-bold">
                {data.love.title}
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
              <p>{data.love.p1}</p>
              <p>{}</p>
            </div>
          </div>
          </div>

           <div className="space-y-6">
          {/* Experience */}
          <div className="bg-gradient-to-br from-[#5b507a] to-[#5b507a]/80 rounded-3xl p-6 text-white shadow-lg">
            <Briefcase className="size-10 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2">{data.experience.title}</h3>
            <p className="p-color text-sm md:text-base">
              {data.experience.description}
            </p>
          </div>

          {/* Education */}
          <div className="bg-gradient-to-br from-[#f77f00] to-[#f77f00]/80 rounded-3xl p-6 text-white shadow-lg">
            <GraduationCap className="size-10 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2">{data.education.title}</h3>
            <p className="p-color text-sm md:text-base">
              {data.education.description}
            </p>
          </div>

          {/* Work Style */}
          <div className="bg-gradient-to-br from-[#3b8ea5] to-[#3b8ea5]/80 rounded-3xl p-6 text-white shadow-lg">
            <Code className="size-10 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2">{data.work.title}</h3>
            <p className="p-color text-sm md:text-base">
              {data.work.description}
            </p>
          </div>

          {/* Fun Fact */}
          <div className="bg-gradient-to-br from-[#fcbf49] to-[#fcbf49]/80 rounded-3xl p-6 text-white shadow-lg">
            <Coffee className="size-10 mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2">{data.fun.title}</h3>
            <p className="p-color text-sm md:text-base">
              {data.fun.description}
            </p>
          </div>
        </div>
        </div>

        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              {data.personal.title}
            </h2>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              {data.personal.pets.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm md:text-base">
              {data.personal.pets.description}
            </p>
            
            <div>
              <Pets />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              {data.personal.garden.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm md:text-base">
              {data.personal.garden.description}
            </p>
            
            <div>
              Pictures
            </div>
          </div>
        </div>

    </div>
  );
}