/* =========================================================
   SCRIPT.JS – i18n + scroll animations + nav
   ========================================================= */

// ── Translations ─────────────────────────────────────────
const T = {
  es: {
    'nav.perfil':  'Perfil',
    'nav.exp':     'Experiencia',
    'nav.skills':  'Habilidades',
    'nav.edu':     'Educacion',
    'nav.contact': 'Contacto',
    'btn.cv':      'Descargar CV',
    'tag.agile':   'Metodologias Agile',
    'tag.testing': 'Testing funcional',
    'hero.sub':    'Application Support Analyst con foco en diagnostico tecnico, analisis SQL y optimizacion de sistemas ERP. Convierto problemas complejos en soluciones concretas que impactan directamente en el negocio.',
    'panel.years': 'anos en roles de analisis y soporte IT',
    'panel.sql':   'queries, reportes y troubleshooting',
    'panel.erp':   'optimizacion y soporte funcional Softland',
    'sec.perfil.eyebrow': 'Perfil profesional',
    'sec.perfil.h2':      'Analisis tecnico con mirada funcional',
    'sec.perfil.desc':    'Me especializo en soporte de aplicaciones, resolucion de incidencias y analisis tecnico sobre bases de datos SQL. Trabajo con equipos de desarrollo, areas funcionales y clientes para relevar problemas, documentar avances y convertir necesidades operativas en soluciones claras. Mi experiencia combina ERP, reportes customizados, testing, seguimiento de issues y automatizacion con Python.',
    'about.1.h':   'Diagnostico',
    'about.1.p':   'Identifico errores, reviso evidencias y bajo problemas complejos a causas accionables.',
    'about.2.h':   'Solucion',
    'about.2.p':   'Trabajo sobre SQL, ERP, APIs y aplicaciones para resolver incidentes y mejorar procesos.',
    'about.3.h':   'Seguimiento',
    'about.3.p':   'Documento avances, coordino con desarrollo y acompano a usuarios hasta el cierre.',
    'sec.exp.eyebrow': 'Trayectoria',
    'sec.exp.h2':      'Experiencia profesional',
    'sec.exp.desc':    'Mas de 6 anos de experiencia en roles de analisis, soporte tecnico y funcional en empresas tecnologicas y de servicios, con foco en calidad, procesos y mejora continua.',
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
    'sec.skills.eyebrow': 'Stack tecnico',
    'sec.skills.h2':      'Herramientas y capacidades',
    'sec.skills.desc':    'Domino herramientas tecnicas de analisis, soporte y automatizacion, combinadas con habilidades funcionales orientadas al negocio y al cliente.',
    'skills.tech': 'Especializaciones',
    'skills.soft': 'Fortalezas de trabajo',
    'skills.s1': 'Resolucion de incidencias con criterio tecnico y funcional.',
    'skills.s2': 'Orientacion al cliente interno y externo.',
    'skills.s3': 'Documentacion clara de avances, evidencias e implementaciones.',
    'skills.s4': 'Colaboracion con equipos de desarrollo y areas de negocio.',
    'skills.s5': 'Mejora continua y automatizacion de procesos.',
    'sec.edu.eyebrow': 'Formacion',
    'sec.edu.h2':      'Educacion y certificaciones',
    'sec.edu.desc':    'Formacion tecnica y de gestion que combina sistemas, administracion de empresas y herramientas de desarrollo de software.',
    'edu.ort.year':  '2026 – En curso',
    'edu.ort.title': 'Analista de Sistemas',
    'edu.faecc.title': 'Tecnico en Administracion de Empresas',
    'edu.faecc.inst':  'Fundacion de Altos Estudios en Ciencias Comerciales (FAECC)',
    'edu.faecc.cred':  'Ver titulo oficial',
    'edu.coder.title': 'Desarrollo Web con Python',
    'edu.coder.link':  'Ver proyecto final',
    'edu.agile.title': 'Metodologias Agile (Scrum / Kanban)',
    'edu.agile.cred':  'Ver certificado',
    'edu.sql.title':   'SQL – Curso completo de Bases de Datos',
    'sec.contact.eyebrow': 'Contacto',
    'sec.contact.h2':      'Disponible para nuevos desafios en IT',
    'sec.contact.desc':    'Busco oportunidades donde pueda aportar soporte tecnico funcional, analisis de datos, mejora de procesos y cercania con usuarios de negocio. Estoy abierto a roles de analisis, soporte L2/L3 y proyectos de automatizacion.',
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
      es: ['Analisis y resolucion de problemas en bases de datos SQL.','Creacion de reportes customizados mediante queries a medida.','Optimizacion de procesos dentro del ERP Softland.','Soporte tecnico y funcional a areas clave del negocio.','Automatizacion de tareas con Python y mantenimiento en Power Apps.'],
      en: ['Analysis and resolution of problems in SQL databases.','Creation of custom reports through tailored queries.','Process optimization within Softland ERP.','Technical and functional support to key business areas.','Task automation with Python and maintenance in Power Apps.']
    },
    'exp.visma1.bullets': {
      es: ['Analisis e identificacion de errores en ASP y .NET.','Armado y analisis de reportes SQL.','Reporte, seguimiento de evidencias y documentacion de implementaciones.','Interaccion con equipos de desarrollo y analisis funcional.','Capacitacion tecnica de APIs disponibles a clientes.'],
      en: ['Analysis and identification of bugs in ASP and .NET.','Building and analyzing SQL reports.','Reporting, evidence tracking and implementation documentation.','Interaction with development and functional analysis teams.','Technical training on available APIs for clients.']
    },
    'exp.visma2.bullets': {
      es: ['Analisis funcional de software de RRHH.','Testing, armado y seguimiento de requerimientos.','Soporte a clientes sobre usabilidad del sistema.','Seguimiento de issues, ABM de modulos y demos a potenciales clientes.'],
      en: ['Functional analysis of HR software.','Testing, building and tracking requirements.','Customer support on system usability.','Issue tracking, module management and demos for potential clients.']
    },
    'exp.nga.bullets': {
      es: ['Gestion de procesos de payroll para clientes corporativos, incluyendo Grupo Techint y SAP.','Foco en continuidad operativa, precision y soporte al usuario.'],
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
