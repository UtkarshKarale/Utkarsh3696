import { c as createComponent } from './Footer_CrWRZ6x2.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './prerender_BqJ6_NTL.mjs';
import 'clsx';

const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/projects/${project.id}`, "href")} class="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-ink border border-border p-6 hover:border-brand-500/50 transition-colors"> <div class="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div> <div class="relative z-10"> <div class="flex justify-between items-start mb-4"> <h3 class="text-xl font-display font-semibold text-surface group-hover:text-brand-400 transition-colors"> ${project.data.title} </h3> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted group-hover:text-brand-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg> </div> <p class="text-muted mb-6 line-clamp-3"> ${project.data.description} </p> </div> <div class="relative z-10 flex flex-wrap gap-2 mt-auto"> ${project.data.technologies.slice(0, 3).map((tech) => renderTemplate`<span class="inline-flex items-center rounded-full bg-surface/5 px-2.5 py-0.5 text-xs font-medium text-muted border border-border/50"> ${tech} </span>`)} ${project.data.technologies.length > 3 && renderTemplate`<span class="inline-flex items-center rounded-full bg-surface/5 px-2.5 py-0.5 text-xs font-medium text-muted border border-border/50">
+${project.data.technologies.length - 3} </span>`} </div> </a>`;
}, "/home/testuser/Desktop/code/aboutme-utkarsh/src/components/ProjectCard.astro", void 0);

export { $$ProjectCard as $ };
