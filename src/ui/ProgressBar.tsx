
export default function ProgressBar({percentage}: {percentage: number}) {
    return (
        <>
        <div className="bg-neutral-400 rounded-full h-2">
                <div className="bg-sky-200 h-2 rounded-full animate-progress" style={{ width: percentage  + '%' }}></div>
            </div>
        </>
    )
}