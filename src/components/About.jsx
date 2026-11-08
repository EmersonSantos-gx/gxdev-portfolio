import falcao from '../assets/falcao.png'
import { Section, Gt } from './Shared.jsx'

const cards = [
  ['01', 'Tecnologia & Produto', 'Criação de produtos digitais e soluções tecnológicas voltadas para negócios e saúde.', false],
  ['02', 'Gestão Pública', 'Atuação na Assessoria Administrativa e regulação em saúde pública, desenhando fluxos operacionais e ferramentas que desburocratizam o atendimento ao cidadão.', true],
  ['03', 'Lado Criativo', 'Nunca desligo: ando sempre com novas ideias no dia a dia, decifrando como as coisas funcionam e buscando maneiras melhores de resolver problemas. Com a mente inquieta típica do TDAH — sempre hipercriativa e dedicada —, canalizo essa energia para o design, a criação de conceitos visuais e a invenção de soluções fora do óbvio.', true],
]

export default function About() {
  return (
    <Section id="sobre" tag="SOBRE MIM" title={<>Da curiosidade <Gt>ao código.</Gt></>}>
      <div className="bento">
        <div className="card main"><h3 className="gt" style={{ fontSize: '1.2rem' }}>Founder, CEO &amp; Lead Dev @GxDev | Estudante de Full-Stack &amp; Mobile App</h3></div>
        {cards.map(([n, t, d, wide]) => (
          <div key={n} className={`card${wide ? ' s2' : ''}`}>
            <span className="tag" style={{ marginBottom: 6 }}><b>//</b>{n}</span>
            <h3>{t}</h3>
            <p style={{ color: 'var(--mut)', marginTop: 8 }}>{d}</p>
          </div>
        ))}
        <aside className="card seal" style={{ position: 'static' }}>
          <svg viewBox="0 0 120 120" fill="none">
            <polygon points="60,4 108,32 108,88 60,116 12,88 12,32" stroke="url(#g)" strokeWidth="2.5" fill="rgba(35,88,142,.15)" />
            <image href={falcao} x="26.4" y="27" width="67.2" height="66" />
          </svg>
          <h3>Selo GxDev</h3>
          <p>Credenciais verificadas e conquistas da trajetória em tecnologia.</p>
        </aside>
      </div>
      <a className="btn bs" style={{ marginTop: 22 }} href="#contato">Vamos Conversar →</a>
    </Section>
  )
}
