import About from '../components/About'
import HeaderNavigation from '../ui/HeaderNavigation'
import Footer from '../ui/Footer'

export default function AboutMe() {
    return (
    <>
        <HeaderNavigation />
        <div>
        <About/>
        </div>
        <Footer />
    </>
    )
}