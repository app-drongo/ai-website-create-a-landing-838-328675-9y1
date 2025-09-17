import Hero from '@/components/sections/home/Hero'
import Services from '@/components/sections/home/Services'
import About from '@/components/sections/home/About'
import Cta from '@/components/sections/home/Cta'
import Contact from '@/components/sections/home/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Cta />
      <Contact />
    </>
  )
}