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

// TYPING EFFECT
const phrases = [
    'Building enterprise .NET systems',
    'Designing REST APIs & Microservices',
    'Crafting Angular frontends',
    'Automating with PowerShell & Python',
    'Oracle & MSSQL database expert',
    'Available for freelance projects'
];
let pi = 0, ci = 0, deleting = false;
const typedEl = document.getElementById('typed');
function type() {
    const cur = phrases[pi];
    typedEl.textContent = deleting ? cur.substring(0, ci - 1) : cur.substring(0, ci + 1);
    deleting ? ci-- : ci++;
    let delay = deleting ? 38 : 68;
    if (!deleting && ci === cur.length) { delay = 2200; deleting = true; }
    else if (deleting && ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; delay = 380; }
    setTimeout(type, delay);
}
setTimeout(type, 900);

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
    const inputs = e.target.querySelectorAll('input, textarea');
    const name = inputs[0].value, company = inputs[1].value;
    const email = inputs[2].value, type = inputs[3].value, msg = inputs[4].value;
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
