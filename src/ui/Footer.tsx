import { Link } from 'react-router-dom'
import  { content } from '../content.ts'


export default function Footer() {
    const {footer} = content
    
    return (
        <footer className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 mt-20 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-600 dark:text-gray-400">
            <p>{footer.text}</p>
                <Link to="/impressum">Impressum</Link>
            </div>
        </footer>
    )
}