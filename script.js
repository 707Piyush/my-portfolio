// ─── DATA ────────────────────────────────────────────────────────────────────
const SKILLS = [
  { label: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
  { label: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
  { label: 'SQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' },
  { label: 'Pandas', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg' },
  { label: 'NumPy', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg' },
  { label: 'Matplotlib', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg' },
  { label: 'Seaborn', icon: 'https://seaborn.pydata.org/_images/logo-mark-lightbg.svg' },
  { label: 'HTML', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' },
  { label: 'CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' },
  { label: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
  { label: 'Git', icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
  { label: 'Jupyter', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original-wordmark.svg' },
  { label: 'VS Code', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg' },
  { label: 'Excel', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg' },
  { label: 'Tableau', icon: 'https://www.vectorlogo.zone/logos/tableau/tableau-icon.svg' },
];
const PROJECTS = [
  { icon: '📊', title: 'Airbnb NYC Data Analysis', desc: 'Exploratory data analysis on Airbnb NYC dataset uncovering pricing trends, availability patterns, and neighborhood insights using Python data libraries.', github: 'https://github.com/707Piyush/EDA.git', tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA'] },
  { icon: '🖥️', title: 'Mac Soft App', desc: 'Feature-rich desktop application built with Python and Tkinter. Includes live weather updates, system controls, and utility modules with an intuitive interface.', github: 'https://github.com/Piyush7077/mac-soft-app.git', tags: ['Python', 'Tkinter', 'Desktop', 'Weather API'] },
  { icon: '🌐', title: 'Translation Website', desc: 'Responsive language translation web tool built with pure HTML, CSS, and JavaScript. Features clean UI design and real-time translation functionality.', github: '', tags: ['HTML', 'CSS', 'JavaScript', 'Web Dev'] },
];
const CERTS = [
  { icon: '🐍', name: 'Python Bootcamp', sub: 'Certificate of Completion', link: 'https://drive.google.com/file/d/1nyUED7UemLh33gmjmATKvPqK-4b6vqrg/view?usp=drive_link' },
  { icon: '☕', name: 'Java Fundamentals', sub: 'Skillstone Training Certificate', link: 'https://drive.google.com/file/d/1-OxPcALkTIAHYEgDzd6pF5acJEbe8Fee/view?usp=drive_link' },
  { icon: '🌐', name: 'Responsive Web Design', sub: 'freeCodeCamp Certification', link: 'https://drive.google.com/file/d/1RY61HW1bX-n-Dh3Ka-FXeiP2Y7fIAW5H/view?usp=drive_link' },
];
const CONTACTS = [
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>', color: 'blue', label: 'Email', val: 'piyushchand23@lpu.in', href: 'mailto:piyushchand23@lpu.in' },
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.4 3.14 2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>', color: 'green', label: 'Phone', val: '+91-8384005582', href: 'tel:+918384005582' },
  { icon: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>', color: 'purple', label: 'LinkedIn', val: 'linkedin.com/in/07piyush', href: 'https://www.linkedin.com/in/07piyush/' },
  { icon: '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>', color: 'orange', label: 'GitHub', val: 'github.com/707Piyush', href: 'https://github.com/707Piyush' },
];
const ROLES = ['Data Science & ML Engineer', 'Python Developer', 'Data Analyst', 'EDA Specialist'];

// ─── RENDER DATA ─────────────────────────────────────────────────────────────
document.getElementById('yr').textContent = new Date().getFullYear();

// Skills
const sg = document.getElementById('skills-grid');
SKILLS.forEach(s => {
  sg.innerHTML += `<div class="skill-pill reveal"><img src="${s.icon}" alt="${s.label}" loading="lazy"><span>${s.label}</span></div>`;
});

// Projects
const pg = document.getElementById('proj-grid');
PROJECTS.forEach((p, i) => {
  const ghBtn = p.github ? `<a href="${p.github}" target="_blank" class="proj-github"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> Code</a>` : '';
  pg.innerHTML += `<div class="proj-card proj-card-glow reveal" style="--mx:50%;--my:50%">
<div class="proj-idx">0${i + 1}</div>
<div class="proj-top">
  <div class="proj-icon">${p.icon}</div>
  ${ghBtn}
</div>
<div class="proj-title">${p.title}</div>
<div class="proj-desc">${p.desc}</div>
<div class="proj-tags">${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}</div>
</div>`;
});

// Attach mousemove to proj cards
document.querySelectorAll('.proj-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
  });
});

// Certs
const cr = document.getElementById('cert-rows');
CERTS.forEach((c, i) => {
  cr.innerHTML += `<a href="${c.link}" target="_blank" class="cert-row reveal">
<div style="display:flex;align-items:center;gap:14px">
  <div class="cert-icon">${c.icon}</div>
  <div><div class="cert-name">${c.name}</div><div class="cert-sub">${c.sub}</div></div>
</div>
<div class="cert-view"><span style="color:var(--p-muted);font-size:.65rem">View</span> →</div>
</a>`;
});

// Contact
const cc = document.getElementById('contact-cards');
CONTACTS.forEach((c, i) => {
  const ext = c.href.startsWith('http');
  cc.innerHTML += `<a href="${c.href}" ${ext ? 'target="_blank" rel="noreferrer"' : ''} class="ccard reveal">
<div class="ccard-icon ${c.color}">${c.icon}</div>
<div><div class="ccard-label">${c.label}</div><div class="ccard-val">${c.val}</div></div>
</a>`;
});

// ─── TYPING ───────────────────────────────────────────────────────────────────
(function () {
  const el = document.getElementById('role-text');
  let ri = 0, ci = 0, del = false;
  function tick() {
    const cur = ROLES[ri];
    if (!del) { el.textContent = cur.slice(0, ++ci); if (ci === cur.length) { setTimeout(() => { del = true; tick() }, 2200); return; } }
    else { el.textContent = cur.slice(0, --ci); if (ci === 0) { del = false; ri = (ri + 1) % ROLES.length; } }
    setTimeout(tick, del ? 40 : 70);
  }
  setTimeout(tick, 800);
})();

// ─── SCROLL EFFECTS ───────────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  document.getElementById('scroll-progress').style.width = pct + '%';
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 20);
  document.getElementById('back-top').classList.toggle('visible', window.scrollY > 300);
});

// ─── CURSOR GLOW ─────────────────────────────────────────────────────────────
(function () {
  const el = document.getElementById('cursor-glow');
  let mx = 0, my = 0, cx = 0, cy = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animate() {
    cx += (mx - cx) * 0.08; cy += (my - cy) * 0.08;
    el.style.left = cx + 'px'; el.style.top = cy + 'px';
    requestAnimationFrame(animate);
  }
  animate();
})();

// ─── SCROLL REVEAL ────────────────────────────────────────────────────────────
(function () {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add('visible'), i * 60); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

// ─── PROFILE 3D TILT ─────────────────────────────────────────────────────────
(function () {
  const wrap = document.getElementById('profile-wrap');
  const circle = wrap.querySelector('.profile-circle');
  wrap.addEventListener('mousemove', e => {
    const r = wrap.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    circle.style.transform = `perspective(600px) rotateY(${dx * 8}deg) rotateX(${-dy * 8}deg)`;
  });
  wrap.addEventListener('mouseleave', () => { circle.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg)'; });
})();

// ─── COUNT UP ─────────────────────────────────────────────────────────────────
(function () {
  const el = document.getElementById('count-stat');
  let n = 0;
  const t = setInterval(() => {
    el.textContent = (++n) + '+';
    if (n >= 3) clearInterval(t);
  }, 400);
})();

// ─── PARTICLES ────────────────────────────────────────────────────────────────
(function () {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let W, H;
  const COLORS = ['rgba(79,142,255,', 'rgba(34,211,163,', 'rgba(167,139,250,'];
  const particles = [];
  function rnd(a, b) { return Math.random() * (b - a) + a }
  function newP() { return { x: rnd(0, W), y: rnd(0, H), size: rnd(.3, 1.8), sx: rnd(-.4, .4), sy: rnd(-.4, .4), life: 0, max: rnd(100, 300), color: COLORS[Math.floor(Math.random() * 3)] } }
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight }
  resize(); window.addEventListener('resize', resize);
  for (let i = 0; i < 80; i++) particles.push(newP());
  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (const p of particles) {
      p.x += p.sx; p.y += p.sy; p.life++;
      if (p.life > p.max || p.x < 0 || p.x > W || p.y < 0 || p.y > H) Object.assign(p, newP());
      const a = p.life < 30 ? p.life / 30 : p.life > p.max - 30 ? (p.max - p.life) / 30 : 1;
      ctx.fillStyle = p.color + a * .6 + ')';
      ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
    }
    for (let i = 0; i < particles.length; i++) for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y, d = Math.sqrt(dx * dx + dy * dy);
      if (d < 100) { ctx.strokeStyle = `rgba(79,142,255,${.06 * (1 - d / 100)})`; ctx.lineWidth = .5; ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke(); }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

// ─── NAV SCROLL HELPER ────────────────────────────────────────────────────────
function scrollSection(id) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.offsetTop - 70,
      behavior: 'smooth'
    });
  }
}