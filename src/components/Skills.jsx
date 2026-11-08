import { SKILLS } from '../data.js'
import { Section, Gt } from './Shared.jsx'

export default function Skills() {
  return (
    <Section id="skills" tag="EXPERTISE TÉCNICA" title={<>Skills &amp; <Gt>Tecnologias</Gt></>}>
      {on => (
        <div className="sk">
          {SKILLS.map(([name, abbr, pct]) => (
            <div key={name} className="card">
              <div className="sh"><div className="ic">{abbr}</div><h3>{name}</h3><em>{pct}%</em></div>
              <div className="bar"><i style={{ width: on ? `${pct}%` : 0 }} /></div>
            </div>
          ))}
        </div>
      )}
    </Section>
  )
}
