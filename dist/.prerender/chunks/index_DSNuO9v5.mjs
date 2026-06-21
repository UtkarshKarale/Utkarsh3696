import { c as createComponent, g as getCollection, $ as $$Base, a as $$Header, b as $$Footer } from './Footer_CrWRZ6x2.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, a as renderComponent } from './prerender_BqJ6_NTL.mjs';
import 'clsx';
import { $ as $$ProjectCard } from './ProjectCard_B_SPqItA.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" data-astro-cid-bbe6dxrz> <div class="max-w-5xl mx-auto px-6 relative z-10" data-astro-cid-bbe6dxrz> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-8 animate-fade-in" data-astro-cid-bbe6dxrz> <span class="w-2 h-2 rounded-full bg-brand-500 animate-pulse" data-astro-cid-bbe6dxrz></span>
Available for new opportunities
</div> <h1 class="text-5xl md:text-7xl font-display font-black tracking-tight text-surface mb-6 leading-tight animate-slide-up" data-astro-cid-bbe6dxrz>
Building digital <br class="hidden md:block" data-astro-cid-bbe6dxrz> <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600" data-astro-cid-bbe6dxrz>
experiences that matter.
</span> </h1> <p class="text-lg md:text-xl text-muted max-w-2xl mb-10 leading-relaxed animate-slide-up" style="animation-delay: 100ms;" data-astro-cid-bbe6dxrz>
Hi, I'm Utkarsh Karale. I'm a full-stack developer and product builder specialized in crafting premium, performant, and accessible web applications.
</p> <div class="flex flex-col sm:flex-row gap-4 animate-slide-up" style="animation-delay: 200ms;" data-astro-cid-bbe6dxrz> <a href="#projects" class="inline-flex items-center justify-center rounded-lg bg-surface text-ink px-6 py-3 text-base font-semibold hover:bg-brand-50 transition-colors" data-astro-cid-bbe6dxrz>
View Projects
</a> <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-ink text-surface border border-border px-6 py-3 text-base font-medium hover:bg-surface/5 transition-colors" data-astro-cid-bbe6dxrz> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2" data-astro-cid-bbe6dxrz><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" data-astro-cid-bbe6dxrz></path><path d="M9 18c-4.51 2-5-2-7-2" data-astro-cid-bbe6dxrz></path></svg>
GitHub Profile
</a> </div> </div> </section>`;
}, "/home/testuser/Desktop/code/aboutme-utkarsh/src/components/Hero.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" class="py-20 border-t border-border/50 relative overflow-hidden"> <div class="max-w-5xl mx-auto px-6 relative z-10"> <div class="grid md:grid-cols-2 gap-12 items-center"> <div> <h2 class="text-3xl font-display font-bold text-surface mb-6">About Me</h2> <div class="space-y-4 text-muted text-lg leading-relaxed"> <p>
I'm a passionate developer who loves bridging the gap between engineering and design. I specialize in building robust backend systems and beautiful, intuitive user interfaces.
</p> <p>
With a focus on performance and accessibility, I strive to create digital products that don't just look good, but feel amazing to use. My approach combines strong technical foundations with a keen eye for modern aesthetics.
</p> </div> </div> <div class="relative group"> <div class="absolute -inset-1 bg-gradient-to-r from-brand-500 to-brand-300 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div> <div class="relative bg-ink border border-border p-8 rounded-xl h-full flex flex-col justify-center"> <div class="grid grid-cols-2 gap-6 text-center"> <div> <p class="text-4xl font-display font-black text-brand-400 mb-2">5+</p> <p class="text-sm text-muted">Years Experience</p> </div> <div> <p class="text-4xl font-display font-black text-brand-400 mb-2">50+</p> <p class="text-sm text-muted">Projects Completed</p> </div> <div> <p class="text-4xl font-display font-black text-brand-400 mb-2">20+</p> <p class="text-sm text-muted">Happy Clients</p> </div> <div> <p class="text-4xl font-display font-black text-brand-400 mb-2">10k</p> <p class="text-sm text-muted">Lines of Code</p> </div> </div> </div> </div> </div> </div> </section>`;
}, "/home/testuser/Desktop/code/aboutme-utkarsh/src/components/About.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const experiences = [
    {
      role: "Senior Full-Stack Developer",
      company: "TechNova Solutions",
      period: "2023 - Present",
      description: "Leading the development of enterprise web applications using React, Next.js, and Node.js. Improved system performance by 40%."
    },
    {
      role: "Frontend Engineer",
      company: "Creative Digital",
      period: "2020 - 2023",
      description: "Built responsive, accessible interfaces for e-commerce platforms. Mentored junior developers and implemented CI/CD pipelines."
    },
    {
      role: "Web Developer",
      company: "StartUp Inc",
      period: "2018 - 2020",
      description: "Developed marketing websites and internal tools. Worked closely with designers to ensure pixel-perfect implementations."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="experience" class="py-20 border-t border-border/50"> <div class="max-w-5xl mx-auto px-6"> <h2 class="text-3xl font-display font-bold text-surface mb-12">Experience</h2> <div class="space-y-12"> ${experiences.map((exp, index) => renderTemplate`<div class="relative pl-8 md:pl-0"> <div class="md:grid md:grid-cols-4 md:gap-8 items-start"> <div class="hidden md:block text-muted text-sm font-medium pt-1"> ${exp.period} </div> <div class="md:col-span-3 relative"> <div class="absolute -left-10 md:-left-[4.5rem] mt-1.5 h-3 w-3 rounded-full bg-brand-500 border-4 border-ink z-10"></div> ${index !== experiences.length - 1 && renderTemplate`<div class="absolute -left-[2.1rem] md:-left-[4.15rem] top-4 bottom-[-3rem] w-[1px] bg-border/50"></div>`} <div class="md:hidden text-brand-400 text-sm font-medium mb-2"> ${exp.period} </div> <h3 class="text-xl font-display font-bold text-surface mb-1">${exp.role}</h3> <div class="text-brand-400 font-medium mb-4">${exp.company}</div> <p class="text-muted leading-relaxed"> ${exp.description} </p> </div> </div> </div>`)} </div> </div> </section>`;
}, "/home/testuser/Desktop/code/aboutme-utkarsh/src/components/Experience.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Skills;
  const skills = [
    { category: "Frontend", items: ["React", "Astro", "Next.js", "Tailwind CSS", "TypeScript", "Vue"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "Redis"] },
    { category: "Tools & DevOps", items: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"] }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="skills" class="py-20 border-t border-border/50"> <div class="max-w-5xl mx-auto px-6"> <h2 class="text-3xl font-display font-bold text-surface mb-12">Technical Skills</h2> <div class="grid md:grid-cols-3 gap-8"> ${skills.map((skillGroup) => renderTemplate`<div class="p-6 rounded-2xl bg-ink border border-border"> <h3 class="text-xl font-display font-semibold text-surface mb-6 flex items-center gap-2"> <span class="w-8 h-1 rounded-full bg-brand-500/50"></span> ${skillGroup.category} </h3> <ul class="flex flex-wrap gap-2"> ${skillGroup.items.map((item) => renderTemplate`<li class="inline-flex items-center rounded-full bg-surface/5 px-3 py-1.5 text-sm font-medium text-muted border border-border/50 hover:border-brand-500/30 hover:text-surface transition-colors cursor-default"> ${item} </li>`)} </ul> </div>`)} </div> </div> </section>`;
}, "/home/testuser/Desktop/code/aboutme-utkarsh/src/components/Skills.astro", void 0);

const $$VisitorStats = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-ink border border-border mt-12 mb-12 relative overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-r from-brand-500/5 to-transparent pointer-events-none"></div> <div class="flex flex-col"> <span class="text-3xl font-display font-black text-brand-400">12.5k+</span> <span class="text-sm font-medium text-muted mt-1">Total Visitors</span> </div> <div class="flex flex-col"> <span class="text-3xl font-display font-black text-brand-400">85k+</span> <span class="text-sm font-medium text-muted mt-1">Page Views</span> </div> <div class="flex flex-col"> <span class="text-3xl font-display font-black text-brand-400">42</span> <span class="text-sm font-medium text-muted mt-1">Articles Published</span> </div> <div class="flex flex-col"> <span class="text-3xl font-display font-black text-brand-400">99%</span> <span class="text-sm font-medium text-muted mt-1">Lighthouse Score</span> </div> </div>`;
}, "/home/testuser/Desktop/code/aboutme-utkarsh/src/components/VisitorStats.astro", void 0);

const $$ContactCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-24 border-t border-border/50 relative overflow-hidden"> <!-- Glow effect --> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-500/20 rounded-[100%] blur-[100px] pointer-events-none"></div> <div class="max-w-3xl mx-auto px-6 text-center relative z-10"> <h2 class="text-4xl md:text-5xl font-display font-black text-surface mb-6 tracking-tight">Let's work together</h2> <p class="text-xl text-muted mb-10 max-w-2xl mx-auto">
I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative juice, I'd love to hear about it.
</p> <a href="mailto:hello@example.com" class="inline-flex items-center justify-center rounded-xl bg-surface text-ink px-8 py-4 text-lg font-bold hover:bg-brand-50 hover:scale-105 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
Say Hello
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> </a> </div> </section>`;
}, "/home/testuser/Desktop/code/aboutme-utkarsh/src/components/ContactCTA.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allProjects = await getCollection("projects");
  const featuredProjects = allProjects.filter((p) => p.data.featured).slice(0, 4);
  const allPosts = await getCollection("blog");
  const latestPosts = allPosts.filter((p) => !p.data.draft).sort((a, b) => new Date(b.data.publishedAt).valueOf() - new Date(a.data.publishedAt).valueOf()).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$About, {})} ${maybeRenderHead()}<section class="max-w-5xl mx-auto px-6"> ${renderComponent($$result2, "VisitorStats", $$VisitorStats, {})} </section> ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "Skills", $$Skills, {})} <section id="projects" class="py-20 border-t border-border/50"> <div class="max-w-5xl mx-auto px-6"> <div class="flex items-center justify-between mb-12"> <h2 class="text-3xl font-display font-bold text-surface">Featured Projects</h2> <a href="/projects" class="text-brand-400 hover:text-brand-300 font-medium inline-flex items-center">
View all
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> </a> </div> <div class="grid md:grid-cols-2 gap-6"> ${featuredProjects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "project": project })}`)} </div> </div> </section> <section id="blog" class="py-20 border-t border-border/50"> <div class="max-w-5xl mx-auto px-6"> <div class="flex items-center justify-between mb-12"> <h2 class="text-3xl font-display font-bold text-surface">Latest Writing</h2> <a href="/blog" class="text-brand-400 hover:text-brand-300 font-medium inline-flex items-center">
View all
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> </a> </div> <div class="grid md:grid-cols-3 gap-6"> ${latestPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", BlogCard, { "post": post })}`)} </div> </div> </section> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/testuser/Desktop/code/aboutme-utkarsh/src/pages/index.astro", void 0);

const $$file = "/home/testuser/Desktop/code/aboutme-utkarsh/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
