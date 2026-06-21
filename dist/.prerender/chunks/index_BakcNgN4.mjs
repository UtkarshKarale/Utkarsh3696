import { c as createComponent, g as getCollection, $ as $$Base, a as $$Header, b as $$Footer } from './Footer_CrWRZ6x2.mjs';
import 'piccolore';
import { a as renderComponent, r as renderTemplate, m as maybeRenderHead } from './prerender_BqJ6_NTL.mjs';
import { $ as $$ProjectCard } from './ProjectCard_B_SPqItA.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allProjects = await getCollection("projects");
  const sortedProjects = allProjects.sort((a, b) => {
    if (a.data.featured && !b.data.featured) return -1;
    if (!a.data.featured && b.data.featured) return 1;
    return 0;
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "title": "Projects | Utkarsh Karale", "description": "A showcase of my recent work, open-source projects, and experiments." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="pt-32 pb-20 max-w-5xl mx-auto px-6"> <div class="mb-16"> <h1 class="text-4xl md:text-5xl font-display font-black text-surface mb-4 tracking-tight">Projects</h1> <p class="text-lg text-muted max-w-2xl">
A selection of my recent work, side projects, and open-source contributions.
</p> </div> <div class="grid md:grid-cols-2 gap-6"> ${sortedProjects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "project": project })}`)} </div> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/testuser/Desktop/code/aboutme-utkarsh/src/pages/projects/index.astro", void 0);

const $$file = "/home/testuser/Desktop/code/aboutme-utkarsh/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
