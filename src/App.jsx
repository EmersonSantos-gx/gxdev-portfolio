import { useTheme } from './hooks.js'
import { LINKS } from './data.js'
import { SvgDefs, ext } from './components/Shared.jsx'
import { WhatsApp } from './components/Icons.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Github from './components/Github.jsx'
import Projects from './components/Projects.jsx'
import { Contact, Footer } from './components/Footer.jsx'

export default function App() {
  const [, toggleTheme] = useTheme()
  return (
    <>
      <div className="bgc" />
      <SvgDefs />
      <Navbar toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Github />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <a className="wf" href={LINKS.whatsapp} aria-label="Falar no WhatsApp" {...ext}><WhatsApp /></a>
    </>
  )
}
