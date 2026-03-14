import Hero from '../components/Hero'
import Timeline from '../components/Timeline'
import Footer from '../ui/Footer'
import HeaderNavigation from '../ui/HeaderNavigation'

export default function HomePage() {
    return (
    <>
    <HeaderNavigation />
      <Hero />
      <Timeline />
      <Footer />
    </>
    )
}