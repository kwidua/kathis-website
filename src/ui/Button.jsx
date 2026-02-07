const variants = {
    primary: "",
    secondary: ""
}

export default function Button({onClick, children, variant}) {
    return (
    <button className="" onClick={onClick}>
        {children}
    </button>
    )
}