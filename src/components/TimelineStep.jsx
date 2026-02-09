export default function TimelineStep({date, title, subtext}) {
    return (
        <>
        <div className="ps-2 my-2 first:mt-0">
            <h3 className="sm:text-xs md:text-xl lg:text-2xl font-medium uppercase">
            {date}
            </h3>
        </div>

        <div className="flex gap-x-3 ">
            <div className="relative after:absolute after:top-7 after:bottom-0 after:start-3.5 after:-translate-x-[0.5px] after:border-s">
                <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="size-3 rounded-full bg-sky-100"></div>
                </div>
            </div>

            <div className="grow pt-0.5 pb-8">
            <h3 className="sm:text-s md:text-2xl lg:text-4xl flex gap-x-1.5 font-medium">
                {title}
            </h3>
            <p className="mt-1 sm:text-sm md:text-xl lg:text-2xl">
                {subtext}
            </p>
            </div>
        </div>
    </>
    )
}