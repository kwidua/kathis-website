import TimelineStep from "./TimelineStep.js"
import  { content } from '../content.ts'
import { useLanguageSwitcher } from "../contexts/LanguageContext.tsx";

export default function Timeline() {
    const {language} = useLanguageSwitcher();
    const {lebenslauf} = content
    const data = lebenslauf[language]

return (
<section className="flex place-content-center min-h-96 p-10">
    <div>
    <h2>{data.title}</h2>
    {data.steps.map((item: any )=> {
        return <TimelineStep date={item.date} title={item.title} subtext={item.subtitle}/>
    })}
    </div>
</section>
)
}
