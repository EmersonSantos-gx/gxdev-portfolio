import { LINKS } from '../data.js'
import photo from '../assets/foto-emerson.jpg'
import { Circuit, Socials, Gt } from './Shared.jsx'

const chips = [
  ['React', { top: '8%', left: '6%', color: 'var(--cy)' }],
  ['Node.js', { top: '14%', right: '2%', color: 'var(--vi)', animationDelay: '-2s' }],
  ['Python', { bottom: '12%', left: '2%', color: 'var(--vi)', animationDelay: '-1s' }],
  ['Figma', { bottom: '6%', right: '8%', color: 'var(--cy)', animationDelay: '-3s' }],
]
const HEX = '100,14 174,57 174,143 100,186 26,143 26,57'

export default function Hero() {
  return (
    <section id="inicio">
      <Circuit />
      <div>
        <span className="badge">// TECNOLOGIA • DESIGN • DESENVOLVIMENTO</span>
        <h1>Olá, eu sou<br /><Gt>Emerson Santos</Gt></h1>
        <p className="sub">Estudante Desenvolvimento Full-Stack &amp; Mobile App</p>
        <p className="slogan">Do protótipo ao código: construindo apps e plataformas web completas.</p>
        <div className="cta">
          <a className="btn bp" href="#projetos">Ver Projetos</a>
          <a className="btn bs" href={LINKS.cv} download>Baixar CV</a>
        </div>
        <Socials />
      </div>
      <div className="emb">
        <svg className="hex" viewBox="0 0 200 200" fill="none">
          <defs><clipPath id="hc"><polygon points={HEX} /></clipPath></defs>
          <polygon points="100,8 180,54 180,146 100,192 20,146 20,54" stroke="url(#g)" strokeWidth="2.5" fill="rgba(35,88,142,.15)" />
          <image href={photo} x="26" y="14" width="148" height="172" preserveAspectRatio="xMidYMin slice" clipPath="url(#hc)" />
          <polygon points={HEX} stroke="url(#g)" strokeWidth="1.5" fill="none" />
          <circle cx="100" cy="8" r="4" fill="#00D9F5" /><circle cx="180" cy="146" r="4" fill="#B73AF5" /><circle cx="20" cy="54" r="4" fill="#B73AF5" />
        </svg>
        {chips.map(([t, st]) => <span key={t} className="fi" style={st}>{t}</span>)}
      </div>
    </section>
  )
}
