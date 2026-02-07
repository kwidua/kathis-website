import ProfileImage from "./profileImage"
import Siggi from "./assets/Siggi.jpeg"
import Lissi from "./assets/Lissi.jpeg"
import MK from "./assets/M&K.jpeg"

export default function Pets() {
    return (
        <>
        <section className="text-center">
        <h2 className="text-3xl m-4">Meine Haustiere</h2>
        <div className="inline-flex flex-wrap gap-4">
        <ProfileImage url={Siggi}/>
        <ProfileImage url={Lissi} />
        <ProfileImage url={MK} />
        </div>
        </section>
        </>
    )
}