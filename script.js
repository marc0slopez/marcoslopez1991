const sections = document.querySelectorAll("main section[id]");
const navLinks = new Map(
  [...document.querySelectorAll("nav a")].map((link) => [link.getAttribute("href")?.slice(1), link])
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const link = navLinks.get(entry.target.id);
      if (!link) return;
      link.toggleAttribute("aria-current", entry.isIntersecting);
    });
  },
  { rootMargin: "-38% 0px -56% 0px", threshold: 0 }
);

sections.forEach((section) => observer.observe(section));
