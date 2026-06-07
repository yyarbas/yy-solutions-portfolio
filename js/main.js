// TRANSLATIONS
const translations = {
    en: {
        'mobile.about': 'About',
        'mobile.skills': 'Skills',
        'mobile.experience': 'Experience',
        'mobile.booking': 'Book a Call',
        'mobile.contact': 'Contact',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.experience': 'Experience',
        'nav.booking': 'Book a Call',
        'nav.cta': 'Get in Touch →',
        'hero.eyebrow': 'Available for freelance & contract work',
        'hero.desc': 'Fullstack Developer & Software Engineer with 8+ years building enterprise-grade systems. Specialized in .NET backends, Oracle databases, and Angular frontends — based in Frankfurt am Main.',
        'hero.btn.booking': 'Book a Discovery Call →',
        'hero.btn.work': 'View My Work',
        'hero.stat.years': 'Years Exp.',
        'hero.stat.projects': 'Projects',
        'hero.stat.langs': 'Languages',
        'hero.scroll': 'scroll',
        'about.label': 'Who I Am',
        'about.title.html': 'Building systems<br>that <span>last.</span>',
        'about.p1.html': 'I\'m <strong>Yakup Yarbas</strong>, a Frankfurt-based fullstack developer and certified IT Specialist for Application Development. Since 2018 I\'ve been crafting enterprise-grade solutions that handle real-world complexity at scale.',
        'about.p2.html': 'My expertise spans the full stack — from <strong>C#/.NET backends</strong> and <strong>Oracle PL/SQL databases</strong> to <strong>Angular frontends</strong> and <strong>Windows services</strong>. I\'ve architected microservices, migrated legacy systems, designed REST APIs, and automated DevOps workflows.',
        'about.p3.html': 'I work in <strong>German</strong>, <strong>English</strong>, and <strong>Turkish</strong> — making collaboration across international teams seamless.',
        'card.languages': 'Languages',
        'lang.german': 'German',
        'lang.german.level': 'Native',
        'lang.english': 'English',
        'lang.english.level': 'Proficient',
        'lang.turkish': 'Turkish',
        'lang.turkish.level': 'Proficient',
        'card.education': 'Education',
        'edu.role1': 'IT Specialist — Application Development',
        'edu.place1': 'Universal-IT Services GmbH · 2018–2021',
        'edu.role2': 'Fachhochschulreife',
        'edu.place2': 'Max-Beckmann Upper Secondary · 2015–2018',
        'card.availability': 'Availability',
        'avail.status': 'Open to new projects',
        'avail.location': 'Frankfurt / Remote',
        'skills.label': 'Technical Expertise',
        'skills.title.html': 'Skills &<br><span>Proficiency</span>',
        'tools.label': 'Tools & Platforms',
        'exp.label': 'Career',
        'exp.title.html': 'Experience &<br><span>Projects</span>',
        'tl.period1': '2021 — Present',
        'tl.role1': 'Software Developer',
        'tl.company1': 'Universal-IT Services GmbH — Frankfurt am Main',
        'proj1.title': 'Project Reporting Website',
        'proj1.desc': 'Angular 7 + Entity Framework backend. CRM Dynamics integration, Active Directory auth, recipient management.',
        'proj2.title': 'Windows FTP Service',
        'proj2.desc': 'Oracle DB backend, FTP route config tabs, service optimization for definition reuse.',
        'proj3.title': 'RESTful API Development',
        'proj3.desc': '.NET Core + Entity Framework. Automated data retrieval from Oracle file management system.',
        'proj4.title': 'FTP Monitoring Interface',
        'proj4.desc': 'Angular 10, Syncfusion visualizations, advanced grid filtering, Oracle backend APIs.',
        'proj5.title': 'Microservices — Fond Data',
        'proj5.desc': 'Secondary service for missing data retrieval. Inter-service communication, fund accounting delivery.',
        'proj6.title': 'TFS Automation & Archiving',
        'proj6.desc': 'PowerShell sprint automation on TFS. Console apps for legacy data migration across systems.',
        'tl.period2': '2025 — Present',
        'tl.role2': 'Portfolio Projects',
        'tl.company2': 'Self-initiated — Public GitHub Repositories',
        'proj7.title': 'Dynamics CRM Sync Dashboard',
        'proj7.desc': 'Fullstack app syncing Dynamics 365 contacts into SQL Server via Dataverse OData API. OAuth2 client-credentials flow, background sync job, Angular 17 dashboard with live status, error log and manual trigger. CI/CD via GitHub Actions → Azure.',
        'proj8.title': 'Sanver Facility Service Website',
        'proj8.desc.html': 'Corporate website for a facility management company. Built with Astro for optimal performance — modular component architecture (Nav, Hero, Services, Booking, Footer), multi-page (AGB, Datenschutz, Impressum), deployed live at <a href="https://www.sanver-facilityservice.de" target="_blank" style="color:var(--teal)">sanver-facilityservice.de</a>.',
        'booking.label': 'Consultation',
        'booking.title.html': 'Book a<br><span>Discovery Call</span>',
        'booking.h3': "Let's talk about your project",
        'booking.p': "Whether you need a backend built from scratch, an existing system modernized, or senior .NET expertise added to your team — let's find out how I can help. No commitment, just a conversation.",
        'booking.feat1': '30-min video call via Google Meet or Teams',
        'booking.feat2': 'Technical requirements & feasibility discussion',
        'booking.feat3': 'Available in German, English, or Turkish',
        'booking.feat4': 'No sales pitch — honest engineering conversation',
        'booking.feat5': 'Project estimate follow-up within 48 hours',
        'cal.tab15': 'Quick Intro',
        'cal.tab30': 'Project Deep-Dive',
        'contact.label': 'Get in Touch',
        'contact.title.html': "Let's work<br><span>together.</span>",
        'contact.h3': 'Ready to start a project?',
        'contact.p': 'Send a message with your requirements or use the booking calendar above. I respond to all inquiries within 24 hours.',
        'contact.email.lbl': 'Email',
        'contact.phone.lbl': 'Phone',
        'contact.location.lbl': 'Location',
        'contact.location.val': 'Frankfurt am Main, Germany',
        'contact.status.lbl': 'Status',
        'contact.status.val': 'Open to new projects',
        'form.name.lbl': 'Name',
        'form.name.ph': 'Your name',
        'form.company.lbl': 'Company',
        'form.company.ph': 'Your company',
        'form.email.lbl': 'Email',
        'form.email.ph': 'your@email.com',
        'form.type.lbl': 'Project Type',
        'form.type.ph': 'e.g. REST API, Angular app, system migration…',
        'form.msg.lbl': 'Message',
        'form.msg.ph': 'Describe your project, requirements, and timeline…',
        'form.submit': 'Send Message →',
    },
    de: {
        'mobile.about': 'Über mich',
        'mobile.skills': 'Fähigkeiten',
        'mobile.experience': 'Erfahrung',
        'mobile.booking': 'Gespräch buchen',
        'mobile.contact': 'Kontakt',
        'nav.about': 'Über mich',
        'nav.skills': 'Fähigkeiten',
        'nav.experience': 'Erfahrung',
        'nav.booking': 'Gespräch buchen',
        'nav.cta': 'Kontakt →',
        'hero.eyebrow': 'Verfügbar für Freelance & Festanstellung',
        'hero.desc': 'Fullstack-Entwickler & Software Engineer mit 8+ Jahren Erfahrung im Enterprise-Bereich. Spezialisiert auf .NET-Backends, Oracle-Datenbanken und Angular-Frontends — ansässig in Frankfurt am Main.',
        'hero.btn.booking': 'Discovery Call buchen →',
        'hero.btn.work': 'Projekte ansehen',
        'hero.stat.years': 'Jahre Erf.',
        'hero.stat.projects': 'Projekte',
        'hero.stat.langs': 'Sprachen',
        'hero.scroll': 'scrollen',
        'about.label': 'Über mich',
        'about.title.html': 'Systeme bauen,<br>die <span>bestehen.</span>',
        'about.p1.html': 'Ich bin <strong>Yakup Yarbas</strong>, Fullstack-Entwickler aus Frankfurt und zertifizierter IT-Spezialist für Anwendungsentwicklung. Seit 2018 entwickle ich Enterprise-Lösungen, die reale Komplexität im großen Maßstab bewältigen.',
        'about.p2.html': 'Meine Expertise umfasst den gesamten Stack — von <strong>C#/.NET-Backends</strong> und <strong>Oracle-PL/SQL-Datenbanken</strong> bis zu <strong>Angular-Frontends</strong> und <strong>Windows-Services</strong>. Ich habe Microservices entworfen, Legacy-Systeme migriert, REST-APIs entwickelt und DevOps-Workflows automatisiert.',
        'about.p3.html': 'Ich arbeite auf <strong>Deutsch</strong>, <strong>Englisch</strong> und <strong>Türkisch</strong> — für reibungslose Zusammenarbeit in internationalen Teams.',
        'card.languages': 'Sprachen',
        'lang.german': 'Deutsch',
        'lang.german.level': 'Muttersprache',
        'lang.english': 'Englisch',
        'lang.english.level': 'Fließend',
        'lang.turkish': 'Türkisch',
        'lang.turkish.level': 'Fließend',
        'card.education': 'Ausbildung',
        'edu.role1': 'IT-Spezialist — Anwendungsentwicklung',
        'edu.place1': 'Universal-IT Services GmbH · 2018–2021',
        'edu.role2': 'Fachhochschulreife',
        'edu.place2': 'Max-Beckmann-Schule · 2015–2018',
        'card.availability': 'Verfügbarkeit',
        'avail.status': 'Offen für neue Projekte',
        'avail.location': 'Frankfurt / Remote',
        'skills.label': 'Technische Expertise',
        'skills.title.html': 'Fähigkeiten &<br><span>Kompetenz</span>',
        'tools.label': 'Tools & Plattformen',
        'exp.label': 'Karriere',
        'exp.title.html': 'Erfahrung &<br><span>Projekte</span>',
        'tl.period1': '2021 — Heute',
        'tl.role1': 'Softwareentwickler',
        'tl.company1': 'Universal-IT Services GmbH — Frankfurt am Main',
        'proj1.title': 'Projektreporting-Website',
        'proj1.desc': 'Angular 7 + Entity Framework Backend. CRM-Dynamics-Integration, Active-Directory-Authentifizierung, Empfängerverwaltung.',
        'proj2.title': 'Windows-FTP-Service',
        'proj2.desc': 'Oracle-DB-Backend, FTP-Routenkonfiguration, Service-Optimierung für Definitionswiederverwendung.',
        'proj3.title': 'RESTful API Entwicklung',
        'proj3.desc': '.NET Core + Entity Framework. Automatisierter Datenabruf aus Oracle-Dateiverwaltungssystem.',
        'proj4.title': 'FTP-Monitoring-Interface',
        'proj4.desc': 'Angular 10, Syncfusion-Visualisierungen, erweitertes Grid-Filtering, Oracle-Backend-APIs.',
        'proj5.title': 'Microservices — Fondsdaten',
        'proj5.desc': 'Sekundärer Service zur Abfrage fehlender Daten. Inter-Service-Kommunikation, Fondsabrechnung.',
        'proj6.title': 'TFS-Automatisierung & Archivierung',
        'proj6.desc': 'PowerShell Sprint-Automatisierung auf TFS. Konsolenanwendungen für Legacy-Datenmigration.',
        'tl.period2': '2025 — Heute',
        'tl.role2': 'Portfolio-Projekte',
        'tl.company2': 'Eigeninitiative — Öffentliche GitHub-Repositories',
        'proj7.title': 'Dynamics CRM Sync Dashboard',
        'proj7.desc': 'Fullstack-App zur Synchronisierung von Dynamics 365-Kontakten in SQL Server via Dataverse OData API. OAuth2-Client-Credentials-Flow, Hintergrund-Sync-Job, Angular 17 Dashboard mit Live-Status, Fehlerprotokoll und manuellem Trigger. CI/CD via GitHub Actions → Azure.',
        'proj8.title': 'Sanver Facility Service Website',
        'proj8.desc.html': 'Unternehmenswebsite für ein Facility-Management-Unternehmen. Mit Astro entwickelt — modulare Komponentenarchitektur (Nav, Hero, Services, Buchung, Footer), mehrere Seiten (AGB, Datenschutz, Impressum), live unter <a href="https://www.sanver-facilityservice.de" target="_blank" style="color:var(--teal)">sanver-facilityservice.de</a>.',
        'booking.label': 'Beratung',
        'booking.title.html': 'Gespräch<br><span>vereinbaren</span>',
        'booking.h3': 'Lass uns über dein Projekt sprechen',
        'booking.p': 'Ob du ein Backend von Grund auf brauchst, ein bestehendes System modernisieren möchtest oder Senior-.NET-Expertise für dein Team suchst — lass uns herausfinden, wie ich helfen kann. Kein Commitment, nur ein Gespräch.',
        'booking.feat1': '30-min Videocall via Google Meet oder Teams',
        'booking.feat2': 'Technische Anforderungen & Machbarkeitsdiskussion',
        'booking.feat3': 'Verfügbar auf Deutsch, Englisch oder Türkisch',
        'booking.feat4': 'Kein Sales-Pitch — ehrliches Engineering-Gespräch',
        'booking.feat5': 'Projektschätzung innerhalb von 48 Stunden',
        'cal.tab15': 'Kurze Vorstellung',
        'cal.tab30': 'Projekt Deep-Dive',
        'contact.label': 'Kontakt',
        'contact.title.html': 'Lass uns<br><span>zusammenarbeiten.</span>',
        'contact.h3': 'Bereit, ein Projekt zu starten?',
        'contact.p': 'Schreib mir mit deinen Anforderungen oder nutze den Buchungskalender oben. Ich antworte auf alle Anfragen innerhalb von 24 Stunden.',
        'contact.email.lbl': 'E-Mail',
        'contact.phone.lbl': 'Telefon',
        'contact.location.lbl': 'Standort',
        'contact.location.val': 'Frankfurt am Main, Deutschland',
        'contact.status.lbl': 'Status',
        'contact.status.val': 'Offen für neue Projekte',
        'form.name.lbl': 'Name',
        'form.name.ph': 'Dein Name',
        'form.company.lbl': 'Unternehmen',
        'form.company.ph': 'Dein Unternehmen',
        'form.email.lbl': 'E-Mail',
        'form.email.ph': 'deine@email.com',
        'form.type.lbl': 'Projektart',
        'form.type.ph': 'z.B. REST API, Angular App, Systemmigration…',
        'form.msg.lbl': 'Nachricht',
        'form.msg.ph': 'Beschreibe dein Projekt, Anforderungen und Zeitplan…',
        'form.submit': 'Nachricht senden →',
    }
};

// TYPING
const phrasesByLang = {
    en: [
        'Building enterprise .NET systems',
        'Designing REST APIs & Microservices',
        'Crafting Angular frontends',
        'Automating with PowerShell & Python',
        'Oracle & MSSQL database expert',
        'Available for freelance projects'
    ],
    de: [
        'Enterprise .NET Systeme entwickeln',
        'REST APIs & Microservices designen',
        'Angular Frontends entwickeln',
        'Automatisierung mit PowerShell & Python',
        'Oracle & MSSQL Datenbankexperte',
        'Verfügbar für Freelance-Projekte'
    ]
};

let phrases = phrasesByLang.en;
let pi = 0, ci = 0, deleting = false;
let typingTimeout = null;
const typedEl = document.getElementById('typed');

function type() {
    const cur = phrases[pi];
    typedEl.textContent = deleting ? cur.substring(0, ci - 1) : cur.substring(0, ci + 1);
    deleting ? ci-- : ci++;
    let delay = deleting ? 38 : 68;
    if (!deleting && ci === cur.length) { delay = 2200; deleting = true; }
    else if (deleting && ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; delay = 380; }
    typingTimeout = setTimeout(type, delay);
}

function restartTyping(lang) {
    clearTimeout(typingTimeout);
    phrases = phrasesByLang[lang];
    pi = 0; ci = 0; deleting = false;
    typedEl.textContent = '';
    typingTimeout = setTimeout(type, 500);
}

// LANGUAGE APPLY
function applyLang(lang) {
    const t = translations[lang];

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.dataset.i18nHtml;
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (t[key] !== undefined) el.placeholder = t[key];
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    restartTyping(lang);
    localStorage.setItem('lang', lang);
}

// LANGUAGE TOGGLE
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// NAV SCROLL
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// MOBILE MENU
document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.add('open');
});
document.getElementById('mobileClose').addEventListener('click', closeMobile);
function closeMobile() {
    document.getElementById('mobileMenu').classList.remove('open');
}

// SCROLL ANIMATIONS
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// SKILL BARS
const skillObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        document.querySelectorAll('.bar-fill').forEach((bar, i) => {
            setTimeout(() => { bar.style.width = bar.dataset.pct + '%'; }, i * 60 + 150);
        });
        skillObs.disconnect();
    }
}, { threshold: 0.25 });
skillObs.observe(document.getElementById('skillsGrid'));

// CALENDLY TOGGLE
document.querySelectorAll('.cal-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const which = tab.dataset.cal;
        document.querySelectorAll('.cal-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('cal-15').style.display = which === '15' ? '' : 'none';
        document.getElementById('cal-30').style.display = which === '30' ? '' : 'none';
        document.getElementById('cal-15').querySelector('.calendly-inline-widget').style.borderRadius =
            which === '15' ? '0 8px 8px 8px' : '8px';
    });
});

// CONTACT FORM
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('f-name').value;
    const company = document.getElementById('f-company').value;
    const email = document.getElementById('f-email').value;
    const type = document.getElementById('f-type').value;
    const msg = document.getElementById('f-msg').value;
    const sub = encodeURIComponent(`Project Inquiry from ${name}${company ? ' (' + company + ')' : ''}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company||'—'}\nProject type: ${type||'—'}\n\nMessage:\n${msg}`);
    window.location.href = `mailto:yarbasyakup7@gmail.com?subject=${sub}&body=${body}`;
    showToast('Opening email client…');
});

// TOAST
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 4000);
}

// INIT — apply saved language or default EN
applyLang(localStorage.getItem('lang') || 'en');
