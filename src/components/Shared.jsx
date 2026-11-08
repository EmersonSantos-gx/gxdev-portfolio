import { useInView } from '../hooks.js'
import { LINKS } from '../data.js'
import { Instagram, WhatsApp, LinkedIn, GitHub } from './Icons.jsx'

const ext = { target: '_blank', rel: 'noopener noreferrer' }

export function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#00D9F5" /><stop offset="1" stopColor="#B73AF5" /></linearGradient>
        <symbol id="cir" viewBox="0 0 210 120" fill="none" stroke="url(#g)" strokeWidth="1.6">
          <path d="M210 20H130l-20 20H60L40 60H0M210 60h-60l-16 16h-40M210 98H96l-14 14H30" />
          <circle cx="40" cy="60" r="4" fill="#00D9F5" /><circle cx="96" cy="98" r="4" fill="#B73AF5" />
          <circle cx="60" cy="40" r="3.5" fill="#B73AF5" /><circle cx="30" cy="112" r="3.5" fill="#00D9F5" />
        </symbol>
      </defs>
    </svg>
  )
}

export const Circuit = ({ className = 'circ r', style }) => (
  <svg className={className} style={style} aria-hidden="true"><use href="#cir" /></svg>
)

export function Section({ id, tag, title, children }) {
  const [ref, on] = useInView()
  return (
    <section ref={ref} id={id} className={`rv${on ? ' in' : ''}`}>
      {tag && <span className="tag"><b>//</b>{tag}</span>}
      {title && <h2>{title}</h2>}
      {typeof children === 'function' ? children(on) : children}
    </section>
  )
}

export const Gt = ({ children }) => <span className="gt">{children}</span>

export function Socials() {
  const items = [
    [LINKS.instagram, 'Instagram', <Instagram />], [LINKS.whatsapp, 'WhatsApp', <WhatsApp />],
    [LINKS.linkedin, 'LinkedIn', <LinkedIn />], [LINKS.github, 'GitHub', <GitHub />],
  ]
  return (
    <div className="soc">
      {items.map(([href, label, icon]) => <a key={label} href={href} aria-label={label} {...ext}>{icon}</a>)}
    </div>
  )
}
export { ext }
