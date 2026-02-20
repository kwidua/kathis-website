import TimelineStep from "./TimelineStep.js"
import  { content } from '../content.ts'

export default function Timeline() {
const {lebenslauf} = content

return (
<section className="flex place-content-center min-h-96 p-10">
    <div>
    <h2>Lebenslauf</h2>
    {lebenslauf.steps.map((item: any )=> {
        return <TimelineStep date={item.date} title={item.title} subtext={item.subtitle}/>
    })}
    </div>
</section>
)
}
