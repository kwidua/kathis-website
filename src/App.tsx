import './index.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutMe from './pages/AboutMe'
import ProjectsPage from './pages/ProjectsPage'
import Contact from './pages/Contact'


function App() {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
