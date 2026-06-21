import { c as createComponent, g as getCollection, r as renderEntry, $ as $$Base, a as $$Header, b as $$Footer } from './Footer_CrWRZ6x2.mjs';
import 'piccolore';
import { a as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_BqJ6_NTL.mjs';

async function getStaticPaths() {
  const projects = await getCollection("projects");
  return projects.map((project) => ({
    params: { id: project.id },
    props: { project }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { project } = Astro2.props;
  const { Content } = await renderEntry(project);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "title": `${project.data.title} | Utkarsh Karale`, "description": project.data.description }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<article class="pt-32 pb-20 max-w-3xl mx-auto px-6"> <header class="mb-12 text-center"> <h1 class="text-4xl md:text-5xl font-display font-black text-surface mb-6 tracking-tight leading-tight"> ${project.data.title} </h1> <p class="text-xl text-muted leading-relaxed mb-8"> ${project.data.description} </p> <div class="flex flex-wrap justify-center gap-2 mb-8"> ${project.data.technologies.map((tech) => renderTemplate`<span class="inline-flex items-center rounded-full bg-surface/5 px-3 py-1 text-sm font-medium text-muted border border-border/50"> ${tech} </span>`)} </div> <div class="flex justify-center gap-4"> ${project.data.liveUrl && renderTemplate`<a${addAttribute(project.data.liveUrl, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-surface text-ink px-6 py-3 text-sm font-semibold hover:bg-brand-50 transition-colors">
Visit Website
</a>`} ${project.data.github && renderTemplate`<a${addAttribute(project.data.github, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-lg bg-ink text-surface border border-border px-6 py-3 text-sm font-medium hover:bg-surface/5 transition-colors">
View Source
</a>`} </div> </header> <div class="prose prose-invert prose-brand max-w-none prose-img:rounded-xl prose-headings:font-display prose-headings:font-bold prose-a:text-brand-400 hover:prose-a:text-brand-300"> ${renderComponent($$result2, "Content", Content, {})} </div> </article> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/testuser/Desktop/code/aboutme-utkarsh/src/pages/projects/[id].astro", void 0);

const $$file = "/home/testuser/Desktop/code/aboutme-utkarsh/src/pages/projects/[id].astro";
const $$url = "/projects/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
