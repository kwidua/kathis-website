import type { MouseEventHandler } from "react"

const variants = {
    primary: "",
    secondary: ""
}

export default function Button({onClick, children}: {onClick: MouseEventHandler, children: string}) {
    return (
    <button className="px-4 py-2 rounded-2xl text-cyan-800 dark:text-sky-50 bg-sky-200 hover:bg-sky-300 dark:bg-cyan-900 dark:hover:bg-cyan-800" onClick={onClick}>
        {children}
    </button>
    )
}