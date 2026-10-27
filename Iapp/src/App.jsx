import { useEffect, useRef, useState } from 'react'
import './App.css'
import { ServicesAndPricing, AboutSection, ContactSection } from './OnePageSections.jsx'
import Footer from './Footer.jsx'
import justLoesungLogo from './assets/just-loesung-wordmark.png'

const content = {
  fr: {
    nav: ['Services', 'Tarifs', 'À propos', 'Contact'], navCta: 'Demander une démo',
    top: 'Agence web pour PME · Bienne · Neuchâtel · Berne', available: 'Disponible pour de nouveaux projets',
    eyebrow: 'Agence web en Suisse', hero: <>Plus qu'un simple site web :<br/><em>le moteur de croissance digital<br/>pour nos PME.</em></>,
    lead: <>Bien plus qu'une présence en ligne : une plateforme digitale pour satisfaire et fidéliser vos clients actuels, et attirer de nouveaux prospects. <strong>Notre devise : les clients de nos clients sont aussi nos clients.</strong></>,
    cta: 'Demander une démo', discover: 'Découvrir nos services', proof: 'Un contact direct.', proof2: 'De la première idée à la mise en ligne.', proof3: 'Accompagnement personnalisé',
    visual: 'Un site à votre image, prêt à grandir avec vous.', trust: 'Le web au service des entreprises locales', trustItems: ['PME', 'INDÉPENDANTS', 'COMMERCES', 'ENTREPRENEURS'],
    problemEye: 'Votre activité mérite mieux', problemTitle: <>Vous faites du bon travail.<br/><span>Votre site doit le montrer.</span></>, problemDesc: 'Une présence en ligne claire rassure vos clients et leur donne envie de vous choisir.',
    problems: [['01', 'Votre site ne vous ressemble plus.', 'Votre entreprise évolue. Votre vitrine en ligne aussi.'], ['02', 'Vos clients ne vous trouvent pas.', 'Un site bien structuré aide vos clients à comprendre votre offre.'], ['03', 'La vente en ligne vous semble compliquée.', 'Une boutique claire facilite l’achat et la gestion au quotidien.']],
    serviceEye: 'Nos services', serviceTitle: <>Des solutions web<br/><span>adaptées à votre projet.</span></>, serviceLead: 'Du site vitrine à l’application mobile, nous concevons la solution adaptée à votre entreprise.',
    pricing: { eyebrow: 'Des prix clairs', title: <>Choisissez la formule<br/><span>qui vous correspond.</span></>, recommendation: 'Notre recommandation', choose: 'Choisir cette formule', once: 'paiement unique', quote: 'sur devis', plans: [['Starter', "Une page avec l’essentiel : pour les nouvelles entreprises, les indépendants et les offres claires.", '890', ['One-page : une page avec toutes les infos', 'Design sur mesure pour mobile et ordinateur', 'Formulaire de contact']], ['PME', 'Plusieurs pages pour les entreprises qui veulent obtenir des demandes par leur site.', '2’790', ["Jusqu’à 5 pages, chaque page supplémentaire CHF 500 jusqu’à 8 pages", 'Design propre avec mouvements discrets', 'Formulaire de contact']], ['Professional', 'Pour les entreprises avec plusieurs offres, sites ou beaucoup de contenu.', '4’950', ['Jusqu’à 10 pages', 'Concept graphique avec animations', 'Contenus modifiables vous-même (CMS)']], ['Sur mesure', 'Pour les boutiques en ligne, les applications web et les sites de plus de 10 pages.', '6’600', ['Boutique en ligne avec TWINT et carte', 'Application web, réservations ou espace client', 'Plus de 10 pages ou fonctionnalités spécifiques']]] },
    services: [['Site web vitrine', 'Une page professionnelle et claire pour présenter votre activité, vos services et vos coordonnées.', 'PME · indépendants'], ['Site web + PWA', 'Un site web associé à une Progressive Web App, installable et pratique sur mobile.', 'Web + application'], ['Application mobile', 'Une application mobile conçue autour des besoins de vos clients et de votre activité.', 'iOS · Android']],
    methodEye: 'Simplement, étape par étape', methodTitle: <>De l’idée au site.<br/><em>Sans détour.</em></>, methodLead: 'Un processus clair, des échanges simples et un résultat adapté à votre entreprise.', steps: [['Premier échange', 'On parle de votre activité, de vos clients et de ce que vous souhaitez accomplir.'], ['Structure & offre', 'Vous recevez une proposition claire, adaptée à votre projet.'], ['Design', 'Nous imaginons une vitrine à votre image et validons ensemble son contenu.'], ['Création & lancement', 'Nous construisons le site et le vérifions sur les écrans courants avant sa mise en ligne.'], ['À vos côtés', 'Vous pouvez compter sur un accompagnement pour faire évoluer votre site.']],
    whyEye: 'Pourquoi Just Lösung', whyTitle: <>Un partenaire web<br/><em>proche et accessible.</em></>, quote: 'Notre devise : les clients de nos clients sont aussi nos clients.', whyItems: [['Pensé pour vos clients', 'Une navigation simple qui facilite le prochain pas.'], ['À votre image', 'Un design cohérent avec votre activité et votre identité.'], ['Un contact direct', 'Vous échangez avec la personne qui réalise votre projet.'], ['Au plus près de vous', 'À Bienne, Neuchâtel, Berne et dans les environs.']],
    regionEye: 'Votre agence web de proximité', regionTitle: <>À Bienne, Neuchâtel<br/><span>et Berne.</span></>,
    faqEye: 'Foire aux questions', faqTitle: <>Vos questions,<br/><span>nos réponses.</span></>, faqLead: 'À propos de la démo, de l’espace admin et de la propriété de votre application.', faqs: [
      ['Comment pouvez-vous livrer une démo en 48 heures ?', 'Grâce à une méthode de développement **ultra-optimisée**. J’utilise des bases de code prêtes à l’emploi et des technologies modernes (hybrides/Full Stack) qui me permettent de me concentrer immédiatement sur le visuel et les fonctionnalités clés de votre projet.'],
      ['Que contient la démo à 80 % ?', 'Ce n’est pas une simple landing page ni une maquette : c’est un produit fonctionnel, déjà réalisé à environ **80 %**, avec les principales fonctionnalités prêtes à être testées. Vous pouvez l’essayer sur votre téléphone et vérifier la navigation, vos services et l’expérience utilisateur.'],
      ['Et si la démo ne me plaît pas ?', 'C’est tout l’intérêt de notre concept. Si après 48 heures le résultat ne correspond pas à vos attentes, vous vous arrêtez là. Vous n’aurez perdu que les **50 CHF** de commande initiale, sans aucun engagement pour la suite.'],
      ['Comment fonctionne l’Espace Admin ?', 'Il est conçu pour être aussi simple que l’application Instagram ou Facebook. Vous vous connectez de manière sécurisée et pouvez modifier vos prix, ajouter des photos ou changer un texte en un clic, sans aucune compétence en informatique.'],
      ['Le code m’appartient vraiment ?', '**Oui, à 100 %.** Dès que le projet final est validé et payé, nous vous transférons l’intégralité des droits d’auteur, du code source et des accès serveurs. Vous êtes libre de partir, de rester ou de faire évoluer votre application avec un autre développeur.'],
    ],
    contactEye: 'Votre projet commence ici', contactTitle: <>Prêt à créer<br/>votre <em>vitrine ?</em></>, contactLead: 'Parlez-nous de votre idée. Nous regarderons ensemble la solution la plus adaptée à votre activité.', contactCta: 'Démarrer une conversation', contactNote: 'Premier échange · Sans engagement', contactAside: 'Just Lösung, votre partenaire web dans la région.',
    footerDesc: 'Sites vitrines et boutiques en ligne pour PME, indépendants et commerces.', footerExplore: 'Explorer', footerServices: 'Services', footerRegion: 'Région', region: 'Agence d’applications mobiles et web', copyright: '© 2026 Just Lösung. Tous droits réservés.', back: 'Retour en haut ↑',
  },
  de: {
    nav: ['Leistungen', 'Preise', 'Über uns', 'Kontakt'], navCta: 'Demo anfordern', top: 'Webagentur für KMU · Biel · Neuenburg · Bern', available: 'Offen für neue Projekte',
    eyebrow: 'Webagentur in der Schweiz', hero: <>Mehr als eine Website:<br/><em>der digitale Wachstumsmotor<br/>für führende KMU.</em></>, lead: <>Mehr als ein Online-Auftritt: eine digitale Plattform, die Ihre Kundinnen und Kunden zufriedenstellt und bindet und zugleich neue Interessenten gewinnt. <strong>Unsere Devise: Die Kunden unserer Kunden sind auch unsere Kunden.</strong></>, cta: 'Demo anfordern', discover: 'Leistungen entdecken', proof: 'Direkter Kontakt.', proof2: 'Von der ersten Idee bis zum Launch.', proof3: 'Persönliche Betreuung', visual: 'Eine Website, die zu Ihnen passt und mit Ihnen wächst.', trust: 'Digital für lokale Unternehmen', trustItems: ['KMU', 'SELBSTÄNDIGE', 'GESCHÄFTE', 'GRÜNDER'],
    problemEye: 'Ihr Unternehmen verdient mehr', problemTitle: <>Sie leisten gute Arbeit.<br/><span>Ihre Website soll es zeigen.</span></>, problemDesc: 'Ein überzeugender Online-Auftritt schafft Vertrauen und hilft Kunden, sich für Sie zu entscheiden.', problems: [['01', 'Ihre Website passt nicht mehr zu Ihnen.', 'Ihr Unternehmen entwickelt sich weiter. Ihr Webauftritt auch.'], ['02', 'Kunden finden Sie nicht online.', 'Eine klare Website hilft Kunden, Ihr Angebot zu verstehen.'], ['03', 'Online-Verkauf wirkt kompliziert.', 'Ein übersichtlicher Shop vereinfacht Kauf und Verwaltung.']],
    serviceEye: 'Unsere Leistungen', serviceTitle: <>Digitale Lösungen,<br/><span>passend zu Ihrem Projekt.</span></>, serviceLead: 'Von der Firmenwebsite bis zur mobilen App entwickeln wir die passende Lösung für Ihr Unternehmen.', services: [['Firmenwebsite', 'Eine professionelle, klare Seite für Ihr Unternehmen, Ihre Leistungen und Kontaktdaten.', 'KMU · Selbständige'], ['Website + PWA', 'Eine Website mit Progressive Web App – installierbar und praktisch auf dem Smartphone.', 'Web + App'], ['Mobile App', 'Eine mobile Anwendung, abgestimmt auf Ihr Unternehmen und Ihre Kundschaft.', 'iOS · Android'],
    ], methodEye: 'Einfach Schritt für Schritt', methodTitle: <>Von der Idee zur Website.<br/><em>Ohne Umwege.</em></>, methodLead: 'Ein klarer Ablauf, einfache Gespräche und ein Ergebnis, das zu Ihrem Unternehmen passt.', steps: [['Erstgespräch', 'Wir sprechen über Ihr Unternehmen, Ihre Kunden und Ihre Ziele.'], ['Struktur & Angebot', 'Sie erhalten einen klaren Vorschlag für Ihr Projekt.'], ['Design', 'Wir gestalten Ihren Auftritt und stimmen die Inhalte gemeinsam ab.'], ['Umsetzung & Launch', 'Wir erstellen Ihre Website und prüfen sie auf gängigen Geräten.'], ['Weiter an Ihrer Seite', 'Auf Wunsch begleiten wir Sie bei der Weiterentwicklung Ihrer Website.']],
    whyEye: 'Warum Just Lösung', whyTitle: <>Ihr Webpartner,<br/><em>nah und unkompliziert.</em></>, quote: 'Unsere Überzeugung: Die Kunden unserer Kunden sind auch unsere Kunden.', whyItems: [['Für Ihre Kunden gemacht', 'Eine einfache Navigation führt zum nächsten Schritt.'], ['Passend zu Ihrer Marke', 'Ein Design, das Ihr Unternehmen authentisch zeigt.'], ['Direkter Kontakt', 'Sie sprechen mit der Person, die Ihr Projekt umsetzt.'], ['In Ihrer Nähe', 'In Biel, Neuenburg, Bern und Umgebung.']], regionEye: 'Ihre Webagentur in der Nähe', regionTitle: <>In Biel, Neuenburg<br/><span>und Bern.</span></>, faqEye: 'Häufige Fragen', faqTitle: <>Klare Antworten,<br/><span>ohne Umwege.</span></>, faqLead: 'Noch eine Frage? Schreiben Sie uns, wir sprechen gerne darüber.', faqs: [['Was gehört zu einer Firmenwebsite?', 'Eine individuelle Seite mit Ihrem Unternehmen, Ihren Leistungen, Stärken und Kontaktdaten – auch für Mobilgeräte optimiert.'], ['Können Sie einen Online-Shop erstellen?', 'Ja. Wir erstellen Shops mit Produktdarstellung, Warenkorb und einem Bestellprozess passend zu Ihrem Unternehmen.'], ['Was kostet eine Website?', 'Die Kosten richten sich nach Inhalten und gewünschten Funktionen. Nach einem ersten Gespräch erhalten Sie ein passendes Angebot.'], ['Wie lange dauert die Umsetzung?', 'Der Zeitplan hängt von Projekt und verfügbaren Inhalten ab. Die Schritte und Fristen vereinbaren wir im Voraus.'], ['Funktioniert die Website auf dem Smartphone?', 'Ja. Das Design ist auf Smartphone, Tablet und Computer gut lesbar und einfach bedienbar.']], contactEye: 'Ihr Projekt beginnt hier', contactTitle: <>Bereit für Ihren<br/><em>neuen Auftritt?</em></>, contactLead: 'Erzählen Sie uns von Ihrer Idee. Gemeinsam finden wir die passende Lösung für Ihr Unternehmen.', contactCta: 'Gespräch starten', contactNote: 'Erstgespräch · Unverbindlich', contactAside: 'Just Lösung, Ihr Webpartner in der Region.', footerDesc: 'Firmenwebsites und Online-Shops für KMU, Selbständige und lokale Geschäfte.', footerExplore: 'Navigation', footerServices: 'Leistungen', footerRegion: 'Region', region: 'Agentur für mobile Apps und Webentwicklung', copyright: '© 2026 Just Lösung. Alle Rechte vorbehalten.', back: 'Nach oben ↑',
  },
  en: {
    nav: ['Services', 'Pricing', 'About', 'Contact'], navCta: 'Request a demo', top: 'Web studio for SMEs · Biel · Neuchâtel · Bern', available: 'Open for new projects', eyebrow: 'Swiss web agency', hero: <>More than a website:<br/><em>the digital growth engine<br/>for leading SMEs.</em></>, lead: <>More than an online presence: a digital platform to satisfy and retain your current customers while attracting new prospects. <strong>Our motto: our clients’ customers are our customers too.</strong></>, cta: 'Request a demo', discover: 'Explore our services', proof: 'Direct contact.', proof2: 'From first idea to launch.', proof3: 'Personal support', visual: 'A website made for you, ready to grow with your business.', trust: 'Digital support for local businesses', trustItems: ['SMES', 'FREELANCERS', 'LOCAL SHOPS', 'FOUNDERS'],
    problemEye: 'Your business deserves more', problemTitle: <>You do great work.<br/><span>Your website should show it.</span></>, problemDesc: 'A clear online presence builds trust and helps customers choose your business.', problems: [['01', 'Your website no longer feels like you.', 'Your business moves forward. Your online presence should too.'], ['02', 'Customers can’t find you online.', 'A well-structured site helps customers understand your offer.'], ['03', 'Selling online feels complicated.', 'A clear shop makes buying and day-to-day management easier.']],
    serviceEye: 'Our services', serviceTitle: <>Digital products,<br/><span>built for your project.</span></>, serviceLead: 'From a showcase website to a mobile app, we build the right solution for your business.', services: [['Showcase website', 'A clear, professional page for your business, services and contact details.', 'SMEs · freelancers'], ['Website + PWA', 'A website paired with a Progressive Web App, installable and easy to use on mobile.', 'Web + app'], ['Mobile app', 'A mobile application designed around your business and your customers.', 'iOS · Android']],
    methodEye: 'Simple, step by step', methodTitle: <>From idea to website.<br/><em>No runaround.</em></>, methodLead: 'A clear process, straightforward conversations and a result made for your business.', steps: [['First conversation', 'We talk about your business, your customers and what you want to achieve.'], ['Structure & proposal', 'You receive a clear proposal tailored to your project.'], ['Design', 'We create a look that fits your brand and review the content together.'], ['Build & launch', 'We build your site and check it across common devices before launch.'], ['Here for the next step', 'We can support you as your website and business evolve.']],
    whyEye: 'Why Just Lösung', whyTitle: <>A web partner<br/><em>close and approachable.</em></>, quote: 'Our motto: our clients’ customers are our customers too.', whyItems: [['Made for your customers', 'Simple navigation makes the next step easy.'], ['True to your brand', 'A design that reflects your business.'], ['Direct communication', 'You talk to the person building your project.'], ['Close to you', 'Serving Biel, Neuchâtel, Bern and nearby areas.']], regionEye: 'Your local web studio', regionTitle: <>In Biel, Neuchâtel<br/><span>and Bern.</span></>, faqEye: 'Frequently asked questions', faqTitle: <>Clear answers,<br/><span>without the jargon.</span></>, faqLead: 'Have another question? Get in touch and we’ll be happy to talk.', faqs: [['What’s included in a showcase website?', 'A custom page introducing your business, services, strengths and contact details, designed to work on mobile too.'], ['Can you build an online shop?', 'Yes. We can create a shop with product pages, a cart and an ordering flow suited to your business.'], ['How much does a website cost?', 'It depends on your content and required features. After an initial conversation, you’ll receive a tailored proposal.'], ['How long does it take?', 'Timing depends on the project and available content. We agree on the steps and schedule before work begins.'], ['Will the site work on mobile?', 'Yes. The layout is designed to be clear and easy to use on phones, tablets and computers.']], contactEye: 'Your project starts here', contactTitle: <>Ready for your<br/><em>new showcase?</em></>, contactLead: 'Tell us about your idea. Together, we’ll find the right solution for your business.', contactCta: 'Start a conversation', contactNote: 'First chat · No commitment', contactAside: 'Just Lösung, your local web partner.', footerDesc: 'Showcase websites and online shops for SMEs, freelancers and local businesses.', footerExplore: 'Explore', footerServices: 'Services', footerRegion: 'Region', region: 'Mobile app & web agency', copyright: '© 2026 Just Lösung. All rights reserved.', back: 'Back to top ↑',
  },
}

const howItWorks = {
  fr: {
    label: 'LE PROCESSUS', title: 'Comment ça marche ?', intro: 'De la première démo à la mise en ligne, un parcours simple et rapide.',
    steps: [['Demandez une démo', 'Pour CHF 50, recevez un produit fonctionnel déjà réalisé à environ 80 %, pas une simple landing page.'], ['Recevez votre démo sous 48 h', 'Une première version avec les fonctionnalités principales, prête à être testée sur mobile.'], ['Votre solution en ligne sous 5 jours', 'Votre site web ou application mobile est prêt à l’emploi.']],
  },
  de: {
    label: 'DER ABLAUF', title: 'So funktioniert es', intro: 'Von der ersten Demo bis zum Launch: ein einfacher und schneller Ablauf.',
    steps: [['Demo anfordern', 'Für CHF 50 erhalten Sie ein funktionsfähiges Produkt, das bereits zu etwa 80 % fertig ist – keine einfache Landingpage.'], ['Demo innerhalb von 48 Stunden erhalten', 'Eine erste Version mit den wichtigsten Funktionen, bereit zum Testen auf dem Smartphone.'], ['In 5 Tagen online', 'Ihre Website oder mobile App ist einsatzbereit.']],
  },
  en: {
    label: 'HOW IT WORKS', title: 'How does it work?', intro: 'From your first demo to launch, the process is simple and fast.',
    steps: [['Request a demo', 'For CHF 50, get a working product that is already about 80% complete—not just a landing page.'], ['Get your demo within 48 hours', 'A first version with the core features, ready to test on your phone.'], ['Go live in 5 days', 'Your website or mobile app is ready to use.']],
  },
}

function HomePage() {
  const [lang, setLang] = useState(() => localStorage.getItem('iapp-lang') || 'fr')
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const introTimers = useRef([])
  const introTransforms = useRef(new WeakMap())
  const t = content[lang]
  const playIntro = () => {
    introTimers.current.forEach((timer) => window.clearTimeout(timer))
    introTimers.current = []
    const sequence = [
      ['#accueil .hero-copy', 50, 0, 540],
      ['.nav.wrap', -50, 560, 460],
      ['.brand', -50, 1060, 460],
    ]
    introTimers.current = sequence.flatMap(([selector, distance, delay, duration]) => {
      const target = document.querySelector(selector)
      if (!target) return []
      if (!introTransforms.current.has(target)) {
        const transform = getComputedStyle(target).transform
        introTransforms.current.set(target, transform === 'none' ? '' : transform)
      }
      const endTransform = introTransforms.current.get(target)
      target.style.transition = 'none'
      target.style.opacity = '0'
      target.style.transform = `${endTransform} translateY(${distance}px)`.trim()
      void target.offsetHeight
      const timer = window.setTimeout(() => {
        target.style.transition = `transform ${duration}ms cubic-bezier(.2, .72, .25, 1), opacity ${duration}ms ease`
        target.style.opacity = '1'
        target.style.transform = endTransform || 'translate3d(0, 0, 0)'
      }, delay + 20)
      return [timer]
    })
  }
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  useEffect(() => {
    playIntro()
    return () => introTimers.current.forEach((timer) => window.clearTimeout(timer))
  }, [])
  useEffect(() => {
    const targets = document.querySelectorAll(
      '.how-heading, .how-card, #services-tarifs .section-heading, #services-tarifs .services-offers > .offer-card, #services-tarifs .pricing-intro, #services-tarifs .pricing-grid > .price-card, #services-tarifs .pricing-bottom, #a-propos .about-direct-eyebrow, #a-propos .about-direct-bio, #a-propos .about-direct-actions, #a-propos .about-portrait, #a-propos .about-detail, .faq-layout > div, #contact .contact-page-hero, #contact .contact-method-card, #contact .onepage-contact-region, .site-footer-main > *, .site-footer-bottom',
    )
    if (!('IntersectionObserver' in window)) return
    const siblingOrder = new WeakMap()
    const transforms = new WeakMap()
    const pendingTimers = new Set()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return
        const delay = Number.parseInt(target.style.getPropertyValue('--reveal-delay'), 10) || 0
        const endTransform = transforms.get(target) || ''
        const timer = window.setTimeout(() => {
          pendingTimers.delete(timer)
          target.style.transition = 'transform 850ms cubic-bezier(.2, .72, .25, 1)'
          target.style.transform = endTransform || 'translate3d(0, 0, 0)'
        }, delay + 30)
        pendingTimers.add(timer)
        observer.unobserve(target)
      })
    }, { threshold: 0.15, rootMargin: '0px 0px -12% 0px' })
    targets.forEach((target) => {
      const restingTransform = getComputedStyle(target).transform
      const endTransform = restingTransform === 'none' ? '' : restingTransform
      transforms.set(target, endTransform)
      target.style.transition = 'none'
      target.style.transform = `${endTransform} translateY(80px)`.trim()
      void target.offsetHeight
      const parent = target.parentElement
      const index = siblingOrder.get(parent) || 0
      siblingOrder.set(parent, index + 1)
      const aboutSequenceDelay = target.matches('#a-propos .about-direct-eyebrow')
        ? 0
        : target.matches('#a-propos .about-direct-bio')
          ? 550
          : target.matches('#a-propos .about-direct-actions')
            ? 900
            : target.matches('#a-propos .about-portrait')
              ? 1400
              : target.matches('#a-propos .about-detail')
                ? 1750
                : null
      const followsSectionTitle = target.matches(
        '.how-card, #services-tarifs .offer-card, #services-tarifs .price-card, #a-propos .about-portrait, #a-propos .about-detail, .faq-layout > div:nth-child(2), #contact .contact-method-card, .site-footer-main > *',
      )
      const delay = aboutSequenceDelay ?? (Math.min(index, 4) * (followsSectionTitle ? 65 : 45) + (followsSectionTitle ? 220 : 0))
      target.style.setProperty('--reveal-delay', `${delay}ms`)
      observer.observe(target)
    })
    return () => {
      observer.disconnect()
      pendingTimers.forEach((timer) => window.clearTimeout(timer))
      targets.forEach((target) => {
        target.style.removeProperty('--reveal-delay')
        target.style.removeProperty('transition')
        target.style.removeProperty('transform')
      })
    }
  }, [])
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])
  const navLabels = { fr: ['Services', 'Tarifs', '\u00c0 propos', 'Contact'], de: ['Leistungen', 'Preise', '\u00dcber uns', 'Kontakt'], en: ['Services', 'Pricing', 'About', 'Contact'] }[lang]
  const anchors = ['#services-tarifs', '#tarifs', '#a-propos', '#contact']
  const navigateToSection = (event, anchor) => {
    event.preventDefault()
    setMenuOpen(false)
    const anchorTarget = document.querySelector(anchor)
    const target = anchor === '#tarifs'
      ? anchorTarget?.querySelector('.pricing-grid') || anchorTarget
      : anchor === '#services-tarifs'
        ? anchorTarget?.querySelector('.services-offers') || anchorTarget
        : anchor === '#a-propos'
          ? anchorTarget?.querySelector('.about-direct') || anchorTarget
        : anchor === '#contact'
          ? anchorTarget?.querySelector('.contact-methods') || anchorTarget
          : anchorTarget
    if (!target) return
    window.requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }
  const navigateHome = (event) => {
    event.preventDefault()
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
    playIntro()
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  const handleDemoLinkClick = (event) => {
    const link = event.target.closest?.('a[href="#contact"]')
    const label = link?.textContent || ''
    if (!link || !/(demo|d\u00e9mo|d\u00c3\u00a9mo)/i.test(label)) return
    event.preventDefault()
    const message = 'Je veux commander une d\u00e9mo. / Ich m\u00f6chte eine Demo anfordern.'
    window.location.assign(`https://wa.me/41783541074?text=${encodeURIComponent(message)}`)
  }
  const process = howItWorks[lang] || howItWorks.fr

  return <>
  <main onClick={handleDemoLinkClick}>
    <div className="topline"><div className="wrap topline-inner"><span>{t.top}</span><div><span className="availability"><i /> {t.available}</span></div></div></div>
    <header className="nav wrap"><a href="#accueil" onClick={navigateHome} className="brand" aria-label="Just Lösung, accueil"><span className="image-wordmark"><img src={justLoesungLogo} alt="Just Lösung — Web & Mobile. Live in 48h." /></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">☰</button>
      <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>{navLabels.map((label, i) => <a key={label} href={anchors[i]} onClick={(event) => navigateToSection(event, anchors[i])}>{label}</a>)}</nav>
      <div className="nav-actions"><div className="language-switch" aria-label="Choose language">{['de', 'fr', 'en'].map((l) => <button className={lang === l ? 'selected' : ''} key={l} onClick={() => { setLang(l); localStorage.setItem('iapp-lang', l) }}>{l.toUpperCase()}</button>)}</div><a className="button button-dark nav-cta" href="#contact">{t.navCta}</a></div>
    </header>

    <section id="accueil" className="hero wrap"><div className="hero-copy"><div className="hero-location"><i />{t.region}</div><h1>{t.hero}</h1><h2 className="hero-subtitle">{t.lead}</h2><div className="hero-actions"><a href="#contact" className="button button-accent">{lang === 'fr' ? 'Démo à 80 % · CHF 50' : lang === 'de' ? '80%-Demo · CHF 50' : '80% demo · CHF 50'} </a></div></div></section>

    <section className="how-section section-pad"><div className="wrap"><div className="how-heading"><div className="eyebrow">{process.label}</div><h2>{process.title}</h2><p>{process.intro}</p></div><div className="how-grid">{process.steps.map(([title, desc], i) => <article className="how-card" key={title}><span className="how-number">0{i + 1}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>

    <section className="trust-strip" aria-label={t.trust}>
      <div className="trust-marquee"><div className="trust-marquee-track">
        {[0, 1].map((copy) => <div className="trust-marquee-group" key={copy} aria-hidden={copy === 1}>
          {[t.trust, ...t.trustItems].map((item, i) => <span key={`${copy}-${i}`}>{item}</span>)}
        </div>)}
      </div></div>
    </section>

    <ServicesAndPricing lang={lang}/>

    <AboutSection lang={lang}/>

    <section className="faq-section section-pad"><div className="wrap faq-layout"><div><div className="eyebrow">{t.faqEye}</div><h2>{t.faqTitle}</h2><p>{t.faqLead}</p><a className="text-link" href="#contact">{t.contactCta}</a></div><div className="faq-list">{t.faqs.map(([question, answer], i) => <article className="faq-item" key={question}><button type="button" aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>{question}<i>{openFaq === i ? '−' : '+'}</i></button>{openFaq === i && <p>{answer.split(/\*\*(.*?)\*\*/g).map((part, index) => index % 2 ? <strong key={index}>{part}</strong> : part)}</p>}</article>)}</div></div></section>

    <ContactSection lang={lang}/>

    <Footer lang={lang} />
    <a className="floating-whatsapp" href="https://wa.me/41783541074" target="_blank" rel="noreferrer" aria-label="Nous contacter sur WhatsApp" title="WhatsApp">
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M16 3.5a12.1 12.1 0 0 0-10.4 18.2L4 28l6.5-1.7A12.1 12.1 0 1 0 16 3.5Z"/><path d="M12.1 9.2c-.3-.6-.6-.6-.9-.6h-.8c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.2s1.3 3.8 1.5 4.1c.2.3 2.7 4.4 6.8 5.6 3.4 1 4.1.8 4.9.7.7-.1 2.3-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.3-.3-.7-.5l-2.8-1.3c-.4-.2-.7-.2-.9.2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.8.1-.4-.2-1.5-.6-2.8-1.8-1-.9-1.7-2-1.9-2.3-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7z"/></svg>
    </a>
    <div className="mobile-sticky-contact" aria-label={lang === 'fr' ? 'Contact rapide' : lang === 'de' ? 'Schnellkontakt' : 'Quick contact'}>
      <a className="mobile-sticky-call" href="tel:+41783541074" aria-label={lang === 'fr' ? 'Appeler' : lang === 'de' ? 'Anrufen' : 'Call'}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3.5h3.2l1.6 4-2 1.7a15 15 0 0 0 7 7l1.7-2 4 1.6V19a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 3 5.7 2 2 0 0 1 5 3.5Z"/></svg>
      </a>
      <a className="mobile-sticky-quote" href="#contact">{lang === 'fr' ? 'Demander une démo' : lang === 'de' ? 'Demo anfordern' : 'Request a demo'}<span aria-hidden="true">→</span></a>
      <a className="mobile-sticky-whatsapp" href="https://wa.me/41783541074" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.5a12.1 12.1 0 0 0-10.4 18.2L4 28l6.5-1.7A12.1 12.1 0 1 0 16 3.5Z"/><path d="M12.1 9.2c-.3-.6-.6-.6-.9-.6h-.8c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.2s1.3 3.8 1.5 4.1c.2.3 2.7 4.4 6.8 5.6 3.4 1 4.1.8 4.9.7.7-.1 2.3-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.3-.3-.7-.5l-2.8-1.3c-.4-.2-.7-.2-.9.2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.8.1-.4-.2-1.5-.6-2.8-1.8-1-.9-1.7-2-1.9-2.3-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7z"/></svg>
      </a>
    </div>
  </main>

  </>
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '')
  const legacyAnchors = { '/services': 'services-tarifs', '/tarifs': 'services-tarifs', '/a-propos': 'a-propos', '/contact': 'contact' }
  if (legacyAnchors[path] && !window.location.hash) window.history.replaceState(null, '', `/#${legacyAnchors[path]}`)
  return <HomePage />
}

export default App
