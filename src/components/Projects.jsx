import { useState } from 'react'
import { CATEGORIES, PROJECTS } from '../data.js'
import { Section, Gt, ext } from './Shared.jsx'

function Cover({ p }) {
  if (p.cover) return <img src={p.cover} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: 14, maxWidth: '92%' }}>
      {p.imgs.map(i => <img key={i.alt + i.h} src={i.src} alt={i.alt} style={{ height: i.h, width: 'auto', minWidth: 0, maxWidth: '90%' }} />)}
    </span>
  )
}

export default function Projects() {
  const [cat, setCat] = useState('all')
  const list = PROJECTS.filter(p => cat === 'all' || p.cat === cat)
  return (
    <Section id="projetos" tag="PORTFÓLIO DE PROJETOS" title={<>Meus <Gt>Projetos</Gt></>}>
      <div className="fl">
        {CATEGORIES.map(([k, label]) => <button key={k} className={cat === k ? 'on' : ''} onClick={() => setCat(k)}>{label}</button>)}
      </div>
      <div className="pg">
        {list.map(p => (
          <article key={p.name} className="card pj">
            <div className="mk"><div style={{ background: p.bg }}><Cover p={p} /></div></div>
            <div className="pb">
              <div className="pills">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
              <h3>{p.name}</h3>
              {p.dev && <span className="dev">● Em desenvolvimento</span>}
              <p>{p.desc}</p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {p.url && <a className="btn bp pbtn" href={p.url} {...ext}>{p.url.includes('github.com') ? 'Ver no GitHub' : 'Visitar site'} <span>→</span></a>}
                {p.wa && <a className="btn bs pbtn" href={p.wa} {...ext}>Quero um igual</a>}
                {p.ig && <a className="btn bs pbtn" href={p.ig} {...ext}>Instagram</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
