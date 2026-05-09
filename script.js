/* =========================================================
   SCRIPT.JS – i18n + scroll animations + nav
   ========================================================= */

// ── Translations ─────────────────────────────────────────
const T = {
  es: {
    'nav.perfil':  'Perfil',
    'nav.exp':     'Experiencia',
    'nav.skills':  'Habilidades',
    'nav.edu':     'Educación',
    'nav.contact': 'Contacto',
    'btn.cv':      'Descargar CV',
    'tag.agile':   'Metodologías Agile',
    'tag.testing': 'Testing funcional',
    'hero.sub':    'Application Support Analyst con foco en diagnóstico técnico, análisis SQL y optimización de sistemas ERP. Convierto problemas complejos en soluciones concretas que impactan directamente en el negocio.',
    'panel.years': 'años en roles de análisis y soporte IT',
    'panel.sql':   'queries, reportes y troubleshooting',
    'panel.erp':   'optimización y soporte funcional Softland',
    'sec.perfil.eyebrow': 'Perfil profesional',
    'sec.perfil.h2':      'Análisis técnico con mirada funcional',
    'sec.perfil.desc':    'Me especializo en soporte de aplicaciones, resolución de incidencias y análisis técnico sobre bases de datos SQL. Trabajo con equipos de desarrollo, áreas funcionales y clientes para relevar problemas, documentar avances y convertir necesidades operativas en soluciones claras. Mi experiencia combina ERP, reportes customizados, testing, seguimiento de issues y automatización con Python.',
    'about.1.h':   'Diagnóstico',
    'about.1.p':   'Identifico errores, reviso evidencias y bajo problemas complejos a causas accionables.',
    'about.2.h':   'Solución',
    'about.2.p':   'Trabajo sobre SQL, ERP, APIs y aplicaciones para resolver incidentes y mejorar procesos.',
    'about.3.h':   'Seguimiento',
    'about.3.p':   'Documento avances, coordino con desarrollo y acompaño a usuarios hasta el cierre.',
    'sec.exp.eyebrow': 'Trayectoria',
    'sec.exp.h2':      'Experiencia profesional',
    'sec.exp.desc':    'Más de 6 años de experiencia en roles de análisis, soporte técnico y funcional en empresas tecnológicas y de servicios, con foco en calidad, procesos y mejora continua.',
    'exp.timbo.period': 'Dic 2022 – Actualidad',
    'exp.timbo.role':   'Application Support Analyst',
    'exp.timbo.type':   'Timbo · Tiempo completo',
    'exp.visma1.period':'Ene 2022 – Nov 2022',
    'exp.visma1.role':  'Technical Support Analyst',
    'exp.visma1.type':  'Visma LatAm · Tiempo completo',
    'exp.visma2.period':'Oct 2019 – Dic 2021',
    'exp.visma2.role':  'Functional Support Analyst',
    'exp.visma2.type':  'Visma LatAm · Tiempo completo',
    'exp.nga.period':   '2012 – 2019',
    'exp.nga.role':     'Payroll Analyst',
    'exp.nga.type':     'JNext | NGA Human Resources / Alight · Tiempo completo',
    'sec.skills.eyebrow': 'Stack técnico',
    'sec.skills.h2':      'Herramientas y capacidades',
    'sec.skills.desc':    'Domino herramientas técnicas de análisis, soporte y automatización, combinadas con habilidades funcionales orientadas al negocio y al cliente.',
    'skills.tech': 'Especializaciones',
    'skills.soft': 'Fortalezas de trabajo',
    'skills.s1': 'Resolución de incidencias con criterio técnico y funcional.',
    'skills.s2': 'Orientación al cliente interno y externo.',
    'skills.s3': 'Documentación clara de avances, evidencias e implementaciones.',
    'skills.s4': 'Colaboración con equipos de desarrollo y áreas de negocio.',
    'skills.s5': 'Mejora continua y automatización de procesos.',
    'sec.edu.eyebrow': 'Formación',
    'sec.edu.h2':      'Educación y certificaciones',
    'sec.edu.desc':    'Formación técnica y de gestión que combina sistemas, administración de empresas y herramientas de desarrollo de software.',
    'edu.ort.year':  '2026 – En curso',
    'edu.ort.title': 'Analista de Sistemas',
    'edu.faecc.title': 'Técnico en Administración de Empresas',
    'edu.faecc.inst':  'Fundación de Altos Estudios en Ciencias Comerciales (FAECC)',
    'edu.faecc.cred':  'Ver título oficial',
    'edu.coder.title': 'Desarrollo Web con Python',
    'edu.coder.link':  'Ver proyecto final',
    'edu.agile.title': 'Metodologías Agile (Scrum / Kanban)',
    'edu.agile.cred':  'Ver certificado',
    'edu.sql.title':   'SQL – Curso completo de Bases de Datos',
    'sec.contact.eyebrow': 'Contacto',
    'sec.contact.h2':      'Disponible para nuevos desafíos en IT',
    'sec.contact.desc':    'Busco oportunidades donde pueda aportar soporte técnico funcional, análisis de datos, mejora de procesos y cercanía con usuarios de negocio. Estoy abierto a roles de análisis, soporte L2/L3 y proyectos de automatización.',
    'footer.built': 'Desarrollado con HTML, CSS y JavaScript',
  },
  en: {
    'nav.perfil':  'Profile',
    'nav.exp':     'Experience',
    'nav.skills':  'Skills',
    'nav.edu':     'Education',
    'nav.contact': 'Contact',
    'btn.cv':      'Download CV',
    'tag.agile':   'Agile Methodologies',
    'tag.testing': 'Functional Testing',
    'hero.sub':    'Application Support Analyst focused on technical diagnostics, SQL analysis and ERP system optimization. I turn complex problems into concrete solutions that directly impact the business.',
    'panel.years': 'years in IT analysis and support roles',
    'panel.sql':   'queries, reports and troubleshooting',
    'panel.erp':   'optimization and functional support Softland',
    'sec.perfil.eyebrow': 'Professional Profile',
    'sec.perfil.h2':      'Technical Analysis with a Functional Perspective',
    'sec.perfil.desc':    'I specialize in application support, incident resolution and technical analysis on SQL databases. I work with development teams, functional areas and clients to identify problems, document progress and convert operational needs into clear solutions. My experience combines ERP, custom reports, testing, issue tracking and automation with Python.',
    'about.1.h':   'Diagnosis',
    'about.1.p':   'I identify errors, review evidence and break down complex problems into actionable root causes.',
    'about.2.h':   'Solution',
    'about.2.p':   'I work across SQL, ERP, APIs and applications to resolve incidents and improve processes.',
    'about.3.h':   'Follow-up',
    'about.3.p':   'I document progress, coordinate with development teams and support users through to resolution.',
    'sec.exp.eyebrow': 'Career Path',
    'sec.exp.h2':      'Professional Experience',
    'sec.exp.desc':    'Over 6 years of experience in analysis, technical and functional support roles at technology and service companies, focused on quality, processes and continuous improvement.',
    'exp.timbo.period': 'Dec 2022 – Present',
    'exp.timbo.role':   'Application Support Analyst',
    'exp.timbo.type':   'Timbo · Full-time',
    'exp.visma1.period':'Jan 2022 – Nov 2022',
    'exp.visma1.role':  'Technical Support Analyst',
    'exp.visma1.type':  'Visma LatAm · Full-time',
    'exp.visma2.period':'Oct 2019 – Dec 2021',
    'exp.visma2.role':  'Functional Support Analyst',
    'exp.visma2.type':  'Visma LatAm · Full-time',
    'exp.nga.period':   '2012 – 2019',
    'exp.nga.role':     'Payroll Analyst',
    'exp.nga.type':     'JNext | NGA Human Resources / Alight · Full-time',
    'sec.skills.eyebrow': 'Tech Stack',
    'sec.skills.h2':      'Tools and Capabilities',
    'sec.skills.desc':    'I master technical tools for analysis, support and automation, combined with functional skills oriented to business and client needs.',
    'skills.tech': 'Specializations',
    'skills.soft': 'Professional Strengths',
    'skills.s1': 'Incident resolution with technical and functional judgment.',
    'skills.s2': 'Orientation toward internal and external clients.',
    'skills.s3': 'Clear documentation of progress, evidence and implementations.',
    'skills.s4': 'Collaboration with development teams and business areas.',
    'skills.s5': 'Continuous improvement and process automation.',
    'sec.edu.eyebrow': 'Education',
    'sec.edu.h2':      'Education & Certifications',
    'sec.edu.desc':    'Technical and management training combining systems, business administration and software development tools.',
    'edu.ort.year':  '2026 – Ongoing',
    'edu.ort.title': 'Systems Analyst',
    'edu.faecc.title': 'Business Administration Technician',
    'edu.faecc.inst':  'Foundation of Advanced Studies in Commercial Sciences (FAECC)',
    'edu.faecc.cred':  'View official degree',
    'edu.coder.title': 'Web Development with Python',
    'edu.coder.link':  'View final project',
    'edu.agile.title': 'Agile Methodologies (Scrum / Kanban)',
    'edu.agile.cred':  'View certificate',
    'edu.sql.title':   'SQL – Complete Database Course',
    'sec.contact.eyebrow': 'Contact',
    'sec.contact.h2':      'Available for new IT challenges',
    'sec.contact.desc':    'I am looking for opportunities where I can contribute technical functional support, data analysis, process improvement and proximity to business users. Open to analysis roles, L2/L3 support and automation projects.',
    'footer.built': 'Built with HTML, CSS and JavaScript',
  }
};

// ── Apply language ────────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'es';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[lang][key] !== undefined) el.textContent = T[lang][key];
  });

  // Bullet lists (translate entire list by re-building)
  const lists = {
    'exp.timbo.bullets': {
      es: ['Análisis y resolución de problemas en bases de datos SQL.','Creación de reportes customizados mediante queries a medida.','Optimización de procesos dentro del ERP Softland.','Soporte técnico y funcional a áreas clave del negocio.','Automatización de tareas con Python y mantenimiento en Power Apps.'],
      en: ['Analysis and resolution of problems in SQL databases.','Creation of custom reports through tailored queries.','Process optimization within Softland ERP.','Technical and functional support to key business areas.','Task automation with Python and maintenance in Power Apps.']
    },
    'exp.visma1.bullets': {
      es: ['Análisis e identificación de errores en ASP y .NET.','Armado y análisis de reportes SQL.','Reporte, seguimiento de evidencias y documentación de implementaciones.','Interacción con equipos de desarrollo y análisis funcional.','Capacitación técnica de APIs disponibles a clientes.'],
      en: ['Analysis and identification of bugs in ASP and .NET.','Building and analyzing SQL reports.','Reporting, evidence tracking and implementation documentation.','Interaction with development and functional analysis teams.','Technical training on available APIs for clients.']
    },
    'exp.visma2.bullets': {
      es: ['Análisis funcional de software de RRHH.','Testing, armado y seguimiento de requerimientos.','Soporte a clientes sobre usabilidad del sistema.','Seguimiento de issues, ABM de módulos y demos a potenciales clientes.'],
      en: ['Functional analysis of HR software.','Testing, building and tracking requirements.','Customer support on system usability.','Issue tracking, module management and demos for potential clients.']
    },
    'exp.nga.bullets': {
      es: ['Gestión de procesos de payroll para clientes corporativos, incluyendo Grupo Techint y SAP.','Foco en continuidad operativa, precisión y soporte al usuario.'],
      en: ['Management of payroll processes for corporate clients, including Grupo Techint and SAP.','Focus on operational continuity, accuracy and user support.']
    }
  };

  document.querySelectorAll('[data-i18n-list]').forEach(ul => {
    const key = ul.dataset.i18nList;
    const items = lists[key]?.[lang];
    if (items) ul.innerHTML = items.map(t => `<li>${t}</li>`).join('');
  });

  // Toggle button state
  document.getElementById('lang-es').classList.toggle('active', lang === 'es');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
}

// ── Language toggle button ────────────────────────────────
document.getElementById('lang-btn').addEventListener('click', () => {
  applyLang(currentLang === 'es' ? 'en' : 'es');
});

// Initial apply
applyLang(currentLang);


// ── Header shadow on scroll ───────────────────────────────
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });


// ── Nav active state ──────────────────────────────────────
const sections = document.querySelectorAll('main section[id]');
const navLinks  = new Map(
  [...document.querySelectorAll('nav a')].map(a => [a.getAttribute('href')?.slice(1), a])
);
const navObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    const link = navLinks.get(e.target.id);
    if (link) link.toggleAttribute('aria-current', e.isIntersecting);
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
sections.forEach(s => navObs.observe(s));


// ── Scroll reveal ─────────────────────────────────────────
document.querySelectorAll('.stagger').forEach(parent => {
  parent.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.09}s`;
  });
});

const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { rootMargin: '0px 0px -50px 0px', threshold: 0.08 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => revealObs.observe(el));


// ── Hero: reveal immediately on load ─────────────────────
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hero .reveal, .hero .reveal-left, .hero .reveal-right').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 80 + i * 110);
  });
});


// ── Smooth scroll ─────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 63, behavior: 'smooth' });
  });
});
