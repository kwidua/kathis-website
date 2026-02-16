import { useState, useEffect } from "react";
import { useThemeSwitcher } from './../ThemeContext';

export default function ThemeToggle() {
    const { theme, setTheme } = useThemeSwitcher();
    const [isChecked, setIsChecked] = useState(false)
    useEffect(() => {
        setIsChecked(theme === 'dark')
}, []);
  


     function handleDark(event) {
        setIsChecked(event.target.checked)
        setTheme(theme === 'dark' ? 'light' : 'dark')
        document.getElementById('toggleDiv').classList.add('after:transition-all')

    }

    return (
        <label className="relative flex items-center cursor-pointer">
            <input checked={isChecked} onChange={handleDark} type="checkbox" value="dark" id="dark" className="sr-only peer" />
            <div id="toggleDiv" className="w-9 h-5 bg-cyan-800 hover:bg-cyan-700 rounded-full peer-checked:after:translate-x-full peer-checked:after:border-transparent after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-cyan-300 after:border after:rounded-full after:h-4 after:w-4 peer-checked:bg-cyan-900 hover:peer-checked:bg-cyan-700 "></div>
        </label>
    )
}