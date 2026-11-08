import { useEffect, useState } from 'react'
import { NAV } from '../data.js'
import logo from '../assets/logo-gxdev.png'
import { Moon, Sun, Menu } from './Icons.jsx'

export default function Navbar({ toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    NAV.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <nav>
      <a className="logo" href="#inicio"><img src={logo} alt="GxDev" style={{ height: 30, width: 'auto', display: 'block' }} /></a>
      <div className={`links${open ? ' open' : ''}`} onClick={() => setOpen(false)}>
        {NAV.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? 'on' : ''}>{label}</a>)}
      </div>
      <button id="mb" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(o => !o)}><Menu /></button>
      <button id="tg" aria-label="Alternar tema" onClick={toggleTheme}><Moon /><Sun /></button>
    </nav>
  )
}
