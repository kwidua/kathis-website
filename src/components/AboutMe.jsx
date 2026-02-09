
import ProfileImage from "../ui/roundImage"
import Me from '../assets/Profile.jpeg'

export default function AboutMe() {
    return (
        <>
        <section className="text-center font-bold pt-10 xs:p-10 min-h-96 bg-gradient-to-b from-cyan-800 from-10% to-cyan-950 to-80% ">
        <h1>Hi. I'm Kathi.</h1>
        <h1>Softwareengineer.</h1>
        <div className="flex justify-center p-6 flex-wrap md:flex-row">
            <ProfileImage url={Me} variables="border-double border-4 lg:w-80 lg:h-80 w-50 h-50"/>
            
        <p className="pt-6 md:p-6 max-w-200">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
            ipsum dolor sit amet.
        </p>
        
        </div>
        </section>
        </>
    )
}