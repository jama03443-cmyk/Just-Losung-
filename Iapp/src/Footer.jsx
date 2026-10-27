import './Footer.css'
import justLoesungLogo from './assets/just-loesung-wordmark.png'

const footerCopy = {
  fr: { label: 'AGENCE DIGITALE · SUISSE', desc: 'Jama Elmi, développeur Full Stack biennois, crée des solutions digitales rapides et adaptées à votre activité.', services: 'Services', serviceItems: ['Sites web', 'Boutiques e-commerce', 'Applications web et mobiles'], contact: 'Contact', office: 'Adresse', street: 'Rue de Madretsch 42', city: '2503 Bienne, Suisse', region: 'Bienne · Neuchâtel · Berne', cta: 'Demander une démo', call: '078 354 10 74', whatsapp: 'Écrire sur WhatsApp', bottom: '© 2026 Just Lösung. Tous droits réservés.' },
  de: { label: 'DIGITALAGENTUR · SCHWEIZ', desc: 'Jama Elmi, Full-Stack-Entwickler aus Biel, entwickelt schnelle digitale Lösungen für Ihr Unternehmen.', services: 'Leistungen', serviceItems: ['Websites', 'E-Commerce-Shops', 'Web- und Mobile-Apps'], contact: 'Kontakt', office: 'Standort', street: 'Rue de Madretsch 42', city: '2503 Bienne, Suisse', region: 'Biel · Neuenburg · Bern', cta: 'Demo anfordern', call: '078 354 10 74', whatsapp: 'Auf WhatsApp schreiben', bottom: '© 2026 Just Lösung. Alle Rechte vorbehalten.' },
  en: { label: 'DIGITAL STUDIO · SWITZERLAND', desc: 'Jama Elmi, a full-stack developer based in Biel, builds fast digital solutions tailored to your business.', services: 'Services', serviceItems: ['Websites', 'E-commerce shops', 'Web and mobile apps'], contact: 'Contact', office: 'Address', street: 'Rue de Madretsch 42', city: '2503 Bienne, Suisse', region: 'Biel · Neuchâtel · Bern', cta: 'Request a demo', call: '078 354 10 74', whatsapp: 'Message on WhatsApp', bottom: '© 2026 Just Lösung. All rights reserved.' },
}

export default function Footer({ lang = 'fr' }) {
  const t = footerCopy[lang] || footerCopy.fr
  return <footer className="site-footer">
    <div className="site-footer-main">
      <div className="site-footer-brand"><a className="site-footer-logo image-wordmark" href="/#accueil" aria-label="Just Lösung, accueil"><img src={justLoesungLogo} alt="Just Lösung — Web & Mobile. Live in 48h." /></a><div className="site-footer-label">{t.label}</div><p>{t.desc}</p><a className="site-footer-button" href="#contact">{t.cta}</a></div>
      <div className="site-footer-column"><h2>{t.services}</h2><nav>{t.serviceItems.map((item, i) => <a href="/#services-tarifs" key={item}><span>0{i + 1}</span>{item}</a>)}</nav></div>
      <div className="site-footer-column"><h2>{t.contact}</h2><p>{t.cta}</p><a className="site-footer-contact-link" href="tel:+41783541074">{t.call}</a><a className="site-footer-contact-link" href="https://wa.me/41783541074" target="_blank" rel="noreferrer">{t.whatsapp}</a></div>
      <div className="site-footer-column site-footer-office"><h2>{t.office}</h2><strong>{t.street}</strong><p>{t.city}<br/>{t.region}</p></div>
    </div>
    <div className="site-footer-bottom"><span>{t.bottom}</span><span>{t.region}</span><a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>↑</a></div>
  </footer>
}
