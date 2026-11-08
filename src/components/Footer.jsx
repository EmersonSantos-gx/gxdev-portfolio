import { LINKS } from '../data.js'
import logo from '../assets/logo-gxdev.png'
import { Section, Gt, Circuit, Socials, ext } from './Shared.jsx'

export function Contact() {
  return (
    <section id="fale">
      <div className="card ct">
        <div>
          <span className="tag"><b>//</b>FALE COMIGO</span>
          <h2>Vamos tirar sua ideia <Gt>do papel?</Gt></h2>
          <p>Conte o que você precisa: site, app ou sistema. Respondo pelo WhatsApp.</p>
        </div>
        <div className="cta">
          <a className="btn bp" href={LINKS.whatsapp} {...ext}>WhatsApp</a>
          <a className="btn bs" href={LINKS.instagram} {...ext}>Instagram</a>
          <a className="btn bs" href={LINKS.linkedin} {...ext}>LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer id="contato">
      <Circuit />
      <Circuit className="circ l" style={{ top: 'auto', bottom: 0 }} />
      <a className="logo" href="#inicio" style={{ justifyContent: 'center' }}><img src={logo} alt="GxDev" style={{ height: 54, width: 'auto', display: 'block' }} /></a>
      <h2 style={{ marginTop: 20 }}>Tem um projeto em mente? <Gt>Vamos construir.</Gt></h2>
      <p className="m">Do conceito ao deploy — me chame para conversar.</p>
      <a className="btn bp" href={LINKS.whatsapp} {...ext}>Iniciar projeto</a>
      <Socials />
      <small style={{ color: 'var(--mut)' }}>© {new Date().getFullYear()} Emerson Santos · GxDev. Todos os direitos reservados.<br />CNPJ 67.069.614/0001-09</small>
    </footer>
  )
}
