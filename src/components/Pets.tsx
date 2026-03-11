import ProfileImage from "../ui/RoundImage"
import Siggi from "./../assets/Siggi.jpeg"
import Lissi from "./../assets/Lissi.jpeg"
import MK from "./../assets/M&K.jpeg"

export default function Pets() {
    return (
        <>
        <section className="text-center">
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-3">
        <ProfileImage url={Siggi} variables={"sm:opacity-55 hover:opacity-100 lg:w-80 lg:h-80 w-50 h-50"}/>
        <ProfileImage url={Lissi} variables={"sm:opacity-55 hover:opacity-100 lg:w-80 lg:h-80 w-50 h-50"} />
        <ProfileImage url={MK} variables={"sm:opacity-55 hover:opacity-100 lg:w-80 lg:h-80 w-50 h-50"} />
        </div>
        </section>
        </>
    )
}