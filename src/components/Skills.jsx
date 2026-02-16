
export default function Skills() {
    var spanPropsTechnical = "inline-flex items-center gap-x-2.5 py-2.5 px-3 rounded-full text-m font-medium bg-radial from-sky-100 from-30% to-blue-300 text-sky-800";
    var spanPropsSoft = "inline-flex items-center gap-x-2.5 py-2.5 px-3 rounded-full text-m font-medium  bg-radial from-yellow-100 from-30% to-orange-300 text-orange-800";

    return (
        <>
        <section className="text-center p-10 min-h-96">
        <h2 className="text-3xl m-4">Skills</h2>
            <div className="inline-flex flex-wrap gap-2">
            <span className={spanPropsTechnical}>PHP</span>
            <span className={spanPropsTechnical}>Symfony</span>  
            <span className={spanPropsTechnical}>TypeScript</span>
            <span className={spanPropsTechnical}>Github</span>
            <span className={spanPropsTechnical}>Doctrine</span>
            <span className={spanPropsTechnical}>MySql</span>
            <span className={spanPropsSoft}>Englisch</span>
            <span className={spanPropsSoft}>Deutsch</span>
            <span className={spanPropsSoft}>Bulgarisch</span>
            </div>
        </section>
        </>
    )
}