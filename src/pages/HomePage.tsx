import Skills from '../components/Skills'
import Hero from '../components/Hero'
import Timeline from '../components/Timeline'
import HeaderNavigation from '../ui/HeaderNavigation'
import Projects from '../components/Projects'

export default function HomePage() {
    return (
    <>
    <HeaderNavigation />
      <Hero />
      <Skills all={false} />
      <Timeline />
    </>
    )
}