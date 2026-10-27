import { serviceCopy } from './Services.jsx'
import { pricingCopy } from './Tarifs.jsx'
import { contactCopy } from './Contact.jsx'
import jamaPortrait from './assets/jama-elmi-portrait.png'
import './OnePageSections.css'

const aboutIntro = {
  fr: {
    name: 'JAMA ELMI', role: 'Développeur Full Stack biennois.',
    heading: 'À propos',
    bio: '**Fini les cahiers des charges interminables, les mois d’attente et la dépendance technique.** En tant que développeur Full Stack, je crée des applications web et mobiles (PWA, iOS, Android) avec une approche radicalement différente, transparente et sans risque.',
    demoTitle: 'Votre Démo en 48h pour 50 CHF',
    demoSteps: [
      ['L’action', 'Vous exprimez votre besoin et investissez **50 CHF**.'],
      ['Le résultat', 'En **48 heures**, vous recevez un produit fonctionnel, déjà réalisé à environ **80 %** — pas une simple landing page — et testable directement sur votre téléphone.'],
      ['La suite', 'Vous testez. Le solde final n’est réglé qu’après votre entière satisfaction, au moment du passage en ligne.'],
    ],
    adminTitle: '100 % Autonome : Votre Espace Admin',
    adminIntro: 'La majorité des prestataires vous facturent le moindre changement. Ici, **vous pilotez tout** depuis un espace administrateur privé et intuitif :',
    adminPoints: [
      'Modifiez vos textes, horaires et actualités.',
      'Changez vos photos et galeries en un clic.',
      'Ajoutez ou ajustez vos prestations et vos prix en temps réel.',
    ],
    ownershipTitle: '100 % Propriétaire : Le produit est à vous',
    ownershipIntro: 'Chez nous, pas d’abonnements captifs ni de zones d’ombre : **le produit appartient concrètement et uniquement au client.**',
    ownershipPoints: [
      'L’intégralité du code source et des accès vous est transférée.',
      'Vous pouvez réclamer votre code à chaque instant.',
      'Vous êtes libre de faire évoluer votre application par vous-même ou avec le prestataire de votre choix.',
    ],
    callback: 'Demander un rappel gratuit', messageButton: 'Écrire un message',
  },
  de: {
    heading: '\u00dcber mich',
    name: 'JAMA ELMI', role: 'Digitalagentur · Full-Stack-Entwickler aus Biel',
    bio: 'Just Lösung ist eine Digitalagentur unter der Leitung von JAMA ELMI, Full-Stack-Entwickler aus Biel und Experte für mobile Apps und Webanwendungen.',
    callback: 'Kostenlosen Rückruf anfordern', messageButton: 'Nachricht schreiben',
  },
  en: {
    heading: 'About me',
    name: 'JAMA ELMI', role: 'Digital agency · Full-stack developer from Biel',
    bio: 'Just Lösung is a digital agency led by JAMA ELMI, a full-stack developer from Biel and an expert in mobile apps and web applications.',
    callback: 'Request a free callback', messageButton: 'Send a message',
  },
}

function formatAboutCopy(copy, breakAfterFirstBold = false) {
  return copy.split(/\*\*(.*?)\*\*/g).flatMap((part, index) => {
    const item = index % 2 ? <strong key={index}>{part}</strong> : part
    return breakAfterFirstBold && index === 1 ? [item, <span className="about-bio-gap" key="bio-line-break" />] : [item]
  })
}

export function ServicesAndPricing({ lang }) {
  const service = serviceCopy[lang] || serviceCopy.fr
  const pricing = pricingCopy[lang] || pricingCopy.fr
  return <section id="services-tarifs" className="onepage-services section-pad">
    <div className="wrap">
      <div className="section-heading reveal">
        <div><div className="eyebrow">{service.kicker}</div><h2>{service.title}</h2></div>
        <p>{service.intro}</p>
      </div>
      <div className="services-offers">{service.offers.map(([num, title, desc, sub, features, audience], i) => <article className={`offer-card offer-${i + 1}`} key={title}>
        <div className="offer-number">{num}</div>
        <div className="offer-content"><h3>{title}</h3><p className="offer-description">{desc}</p><div className="offer-detail"><h4>{sub}</h4><ul>{features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul></div></div>
        <div className="offer-bottom"><span>{audience}</span><a href="#contact">{service.contact}</a></div>
      </article>)}</div>
      <div id="tarifs" className="onepage-pricing">
        <div className="pricing-intro"><span className="pricing-kicker">{pricing.kicker}</span><h2>{pricing.title}</h2><p>{pricing.intro}</p></div>
        <div className="pricing-grid">{pricing.plans.map(([name, desc, amount, features], i) => <article className={`price-card ${i === 1 ? 'recommended' : ''}`} key={name}>
          {i === 1 && <span className="recommended-badge">{pricing.badge}</span>}
          <div className="price-card-top"><h3>{name}</h3><p>{desc}</p></div>
          <div className="price-amount"><span>{pricing.from}</span><strong>{amount}</strong></div>
          <p className="price-payment">{i === 3 ? pricing.quote : pricing.once}</p>
          <ul>{features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul>
          <a className="price-button" href="#contact">{pricing.button}</a>
        </article>)}</div>
        
        <div className="pricing-bottom"><p>{pricing.footer}</p><a href="#contact">{pricing.contact}</a></div>
      </div>
    </div>
  </section>
}

export function AboutSection({ lang }) {
  const t = aboutIntro[lang] || aboutIntro.fr
  return <section id="a-propos" className="onepage-about section-pad">
    <div className="wrap">
      <div className="about-direct">
        <div className="about-direct-copy">
          <span className="about-direct-eyebrow">{t.heading || 'About'}</span>
          <p className="about-direct-bio">{formatAboutCopy(t.bio, lang === 'fr')}</p>
          <div className="about-direct-actions"><a className="about-button light" href="#contact">{t.callback}</a><a className="about-button outline" href="#contact">{t.messageButton}</a></div>
        </div>
        <figure className="about-portrait">
          <img src={jamaPortrait} alt={`Portrait de ${t.name}`} />
          <figcaption><strong>{t.name}</strong><span>{t.role}</span></figcaption>
        </figure>
      </div>
      {t.demoTitle && <div className="about-detail">
          <h3>{t.demoTitle}</h3>
          <div className="about-points">{t.demoSteps.map(([title, description]) => <article key={title}><h4>{title}</h4><p>{formatAboutCopy(description)}</p></article>)}</div>
          <h3>{t.adminTitle}</h3>
          <p>{formatAboutCopy(t.adminIntro)}</p>
          <ul className="about-bullet-list">{t.adminPoints.map((point) => <li key={point}>{formatAboutCopy(point)}</li>)}</ul>
          <h3>{t.ownershipTitle}</h3>
          <p>{formatAboutCopy(t.ownershipIntro)}</p>
          <ul className="about-bullet-list">{t.ownershipPoints.map((point) => <li key={point}>{formatAboutCopy(point)}</li>)}</ul>
        </div>}
    </div>
  </section>
}

export function ContactSection({ lang }) {
  const t = contactCopy[lang] || contactCopy.fr
  return <section id="contact" className="onepage-contact section-pad">
    <div className="wrap">
      <div className="contact-page-hero"><span>{t.kicker}</span><h2>{t.title}</h2><p>{t.intro}</p></div>
      <div className="contact-methods">
        <article className="contact-method-card call-card"><div className="contact-method-icon">&#9742;</div><div className="contact-method-copy"><span className="contact-method-label">{lang === 'fr' ? '01 · APPEL' : lang === 'de' ? '01 · TELEFON' : '01 · PHONE'}</span><h3>{t.call}</h3><p>{t.callDesc}</p></div><a className="contact-method-action" href="tel:+41783541074">{t.callAction}</a><small>{t.callNote}</small></article>
        <article className="contact-method-card whatsapp-card"><div className="contact-method-icon" aria-hidden="true"><svg viewBox="0 0 32 32" focusable="false"><path d="M16 3.5a12.1 12.1 0 0 0-10.4 18.2L4 28l6.5-1.7A12.1 12.1 0 1 0 16 3.5Z"/><path d="M12.1 9.2c-.3-.6-.6-.6-.9-.6h-.8c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.2s1.3 3.8 1.5 4.1c.2.3 2.7 4.4 6.8 5.6 3.4 1 4.1.8 4.9.7.7-.1 2.3-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.3-.3-.7-.5l-2.8-1.3c-.4-.2-.7-.2-.9.2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.8.1-.4-.2-1.5-.6-2.8-1.8-1-.9-1.7-2-1.9-2.3-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7z"/></svg></div><div className="contact-method-copy"><span className="contact-method-label">02 · WHATSAPP</span><h3>Écrivez-moi sur WhatsApp</h3><p>Échangeons directement au sujet de votre projet.</p></div><a className="contact-method-action" href="https://wa.me/41783541074" target="_blank" rel="noreferrer">Ouvrir WhatsApp</a><small>Réponse rapide par message</small></article>
      </div>
      <p className="onepage-contact-region">{t.region}</p>
    </div>
  </section>
}
