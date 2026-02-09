import TimelineStep from "./TimelineStep"

export default function Timeline() {
return (
<section className="flex place-content-center min-h-96 p-10">
    <div>
    <h2>Lebenslauf</h2>
    <TimelineStep date="1 Feb, 2026" title="Weiterbildung Syntax" subtext="Frontend mit React"/>
    <TimelineStep date="1 Mai, 2021" title="Bachelor of Science" subtext="Hochschule Bonn-Rhein-Sieg"/>
    <TimelineStep date="1 Okt, 2020" title="Tideways GmbH" subtext="Softwareengineer Backend"/>
    <TimelineStep date="1 Aug, 2018" title="Auslandssemester" subtext="Toronto, Kanada"/>
    <TimelineStep date="1 Okt, 2016" title="Tideways GmbH" subtext="Werkstudent Webentwicklung"/>
    </div>
</section>
)
}
