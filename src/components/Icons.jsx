const S = ({ children, ...p }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>{children}</svg>
)
export const Instagram = () => <S><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></S>
export const WhatsApp = (p) => <S {...p}><path d="M3 21l1.6-4.7A8.5 8.5 0 1 1 8 19.4z" /><path d="M9 9.5c.4 2.3 2.7 4.6 5.2 5.2l1.3-1.3-2-1-.9.7c-.9-.4-1.6-1.1-2-2l.7-.9-1-2z" /></S>
export const LinkedIn = () => <S><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 11v5M8 8v.01M12 16v-5M12 13c0-1.5 1-2 2-2s2 .8 2 2.5V16" /></S>
export const GitHub = () => <S><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></S>
export const Moon = () => <S className="moon"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" /></S>
export const Sun = () => <S className="sun"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></S>
export const Menu = () => <S><path d="M4 7h16M4 12h16M4 17h16" /></S>
