import healthsync from './assets/healthsync.webp'
import minisite from './assets/minisite.jpg'
import saniIcon from './assets/sani-icon.webp'
import saniWord from './assets/sani-wordmark.webp'
import guia from './assets/guiasaude.webp'
import nIcon from './assets/nutrysan-icon.webp'
import nWord from './assets/nutrysan-wordmark.webp'

export const LINKS = {
  instagram: 'https://www.instagram.com/emssantos_',
  whatsapp: 'https://api.whatsapp.com/send/?phone=5582981467042',
  linkedin: 'https://www.linkedin.com/in/emsantosdev/',
  github: 'https://github.com/EmersonSantos-gx',
  githubRepos: 'https://github.com/EmersonSantos-gx?tab=repositories',
  cv: '/cv-emerson-santos.pdf', // coloque o PDF em /public
}

export const NAV = [
  ['inicio', 'Início'], ['sobre', 'Sobre Mim'], ['skills', 'Skills'],
  ['certificados', 'Certificados'], ['projetos', 'Projetos'], ['contato', 'Contato'],
]

// [nome, sigla do ícone, %]
export const SKILLS = [
  ['React.js', 'Re', 15], ['React Native', 'RN', 12], ['Figma', 'Nx', 30],
  ['JavaScript', 'JS', 15], ['Node.js', 'No', 5], ['Tailwind CSS', 'Tw', 15],
  ['PostgreSQL / Supabase', 'Pg', 10], ['Python', 'Py', 5], ['Git & GitHub', 'Gt', 10],
]

// Preencha com seus repositórios: { name, desc, lang }
export const REPOS = []

export const CATEGORIES = [['all', 'Todos'], ['web', 'Web Apps'], ['mobile', 'Mobile'], ['sis', 'Sistemas']]

export const PROJECTS = [
  {
    name: 'HealthSync', cat: 'sis', dev: true, bg: '#fff',
    desc: 'Plataforma de gestão de plantões e finanças para médicos, com avisos por WhatsApp.',
    tags: ['React', 'Node.js', 'Supabase'],
    imgs: [{ src: healthsync, alt: 'HealthSync', h: 156 }],
    url: 'https://github.com/EmersonSantos-gx/gxcodevsanigest-mobile',
  },
  {
    name: 'Mini Site - Instagram bio', cat: 'web', bg: '#06112E', cover: minisite,
    desc: 'Mini site para a bio do Instagram: apresentação, selo de confiança e contato direto por WhatsApp.',
    tags: ['Mobile first', 'Instagram', 'Vercel'],
    url: 'https://celsonrosendo.vercel.app/',
    wa: 'https://wa.me/5582981467042?text=Gostei%20do%20modelo%2C%20quero%20criar%20um%20que%20atenda%20o%20meu%20negocio.',
  },
  {
    name: 'SaniCheck', cat: 'mobile', dev: true, bg: 'linear-gradient(135deg,#06112E,#23588E)',
    desc: 'App mobile de rotina sanitária com checklists e interface premium.',
    tags: ['React Native', 'Expo'],
    imgs: [{ src: saniIcon, alt: 'SaniCheck', h: 84 }, { src: saniWord, alt: 'SaniCheck', h: 42 }],
    url: 'https://github.com/EmersonSantos-gx/gxcodevsanigest-mobile',
  },
  {
    name: 'GuiaSaúde+', cat: 'mobile', dev: true, bg: '#fff',
    desc: 'Marketplace médico com busca por profissionais e clínicas mais próximos.',
    tags: ['React Native', 'Maps'],
    imgs: [{ src: guia, alt: 'GuiaSaúde+', h: 150 }],
    url: 'https://github.com/EmersonSantos-gx/GuiaSaudeMais',
  },
  {
    name: 'Landing Nutrysan', cat: 'web', bg: '#fff',
    desc: 'Landing mobile-first de nutrição e consultoria sanitária com WhatsApp integrado.',
    tags: ['React', 'Tailwind'],
    imgs: [{ src: nIcon, alt: 'Nutrysan', h: 84 }, { src: nWord, alt: 'Nutrysan Consultoria Sanitária', h: 62 }],
    url: 'https://www.nutrysanconsultoria.com.br',
    ig: 'https://www.instagram.com/nutrysan.consultoria/',
  },
]
