import './index.css'
import HomePage from './pages/HomePage'
import SkillDetails from './pages/SkillDetails'
import AboutMe from './pages/AboutMe'
import ProjectsPage from './pages/ProjectsPage'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'


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
