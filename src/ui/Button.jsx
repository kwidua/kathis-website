const variants = {
    primary: "",
    secondary: ""
}

export default function Button({onClick, children, variant}) {
    return (
    <button className="px-4 py-2 rounded-2xl bg-cyan-950 hover:bg-cyan-800" onClick={onClick}>
        {children}
    </button>
    )
}