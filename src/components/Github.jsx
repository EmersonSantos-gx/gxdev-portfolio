import { LINKS, REPOS } from '../data.js'
import { Section, Gt, ext } from './Shared.jsx'

export default function Github() {
  return (
    <Section id="certificados" tag="CERTIFICAÇÕES & GITHUB" title={<>Certificados &amp; <Gt>Meu Repositório</Gt></>}>
      <div className="rg">
        {REPOS.length ? REPOS.map(r => (
          <a key={r.name} className="card rp" href={`${LINKS.github}/${r.name}`} {...ext}>
            <div className="ic">&lt;/&gt;</div>
            <div><h3>{r.name}</h3><p>{r.desc}</p><small>{r.lang}</small></div>
          </a>
        )) : (
          <a className="card rp" style={{ gridColumn: '1/-1' }} href={LINKS.githubRepos} {...ext}>
            <div className="ic">&lt;/&gt;</div>
            <div><h3>github.com/EmersonSantos-gx</h3><p>Meus repositórios, estudos e projetos em código aberto.</p><small>Ver no GitHub →</small></div>
          </a>
        )}
      </div>
      <a className="btn bs" style={{ marginTop: 22 }} href={LINKS.githubRepos} {...ext}>Ver todos no GitHub →</a>
    </Section>
  )
}
