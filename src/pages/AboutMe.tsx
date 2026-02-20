import Pets from '../components/Pets'
import Skills from '../components/Skills'
import HeaderNavigation from '../ui/HeaderNavigation'

export default function AboutMe() {
    return (
    <>
        <HeaderNavigation />
        <div className='my-gradient'>
        <Skills />
        </div>
        <Pets/>
    </>
    )
}