import ProfileImage from "../ui/roundImage"
import Siggi from "./../assets/Siggi.jpeg"
import Lissi from "./../assets/Lissi.jpeg"
import MK from "./../assets/M&K.jpeg"

export default function Pets() {
    return (
        <>
        <section className="text-center">
        <h2 className="m-4">Meine Haustiere</h2>
        <div className="inline-flex flex-wrap gap-4">
        <ProfileImage url={Siggi} variables={"sm:opacity-55 hover:opacity-100 lg:w-100 lg:h-100 w-50 h-50"}/>
        <ProfileImage url={Lissi} variables={"sm:opacity-55 hover:opacity-100 lg:w-100 lg:h-100 w-50 h-50"} />
        <ProfileImage url={MK} variables={"sm:opacity-55 hover:opacity-100 lg:w-100 lg:h-100 w-50 h-50"} />
        </div>
        </section>
        </>
    )
}