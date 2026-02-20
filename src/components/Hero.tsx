
import ProfileImage from "../ui/RoundImage.js"
import Me from '../assets/Profile.jpeg'
import  { content } from '../content.ts'

export default function AboutMe() {
    const {hero} = content
 
    return (
        <>
        <section className="text-center font-bold pt-10 xs:p-10 min-h-96 my-gradient">
        <h1>Hi. I'm Kathi.</h1>
        <h1>Softwareengineer.</h1>
        <div className="flex justify-center p-6 flex-wrap md:flex-row">
            <ProfileImage url={Me} variables="border-double border-4 lg:w-80 lg:h-80 w-50 h-50"/>
            
        <p className="pt-6 md:p-6 max-w-200">{hero.text}</p>
        </div>
        </section>
        </>
    )
}