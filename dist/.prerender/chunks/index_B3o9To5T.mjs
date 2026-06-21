import { c as createComponent, g as getCollection, $ as $$Base, a as $$Header, b as $$Footer } from './Footer_CrWRZ6x2.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, r as renderTemplate, a as renderComponent } from './prerender_BqJ6_NTL.mjs';
import 'clsx';

const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BlogCard;
  const { post } = Astro2.props;
  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric"
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", dateOptions).format(new Date(post.data.publishedAt));
  const readingTime = Math.ceil((post.body?.split(" ").length || 200) / 200) + " min read";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/blog/${post.id}`, "href")} class="group flex flex-col gap-4 p-6 rounded-2xl bg-ink border border-border hover:border-brand-500/50 transition-all hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.1)]"> <div class="flex items-center justify-between text-xs font-medium text-muted mb-2"> <time${addAttribute(new Date(post.data.publishedAt).toISOString(), "datetime")}>${formattedDate}</time> <span class="flex items-center gap-1"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ${readingTime} </span> </div> <div> <h3 class="text-xl font-display font-semibold text-surface mb-2 group-hover:text-brand-400 transition-colors line-clamp-2"> ${post.data.title} </h3> <p class="text-muted line-clamp-3"> ${post.data.description} </p> </div> <div class="mt-auto pt-4 flex flex-wrap gap-2"> ${post.data.tags.slice(0, 3).map((tag) => renderTemplate`<span class="text-xs font-medium text-brand-400 bg-brand-500/10 px-2 py-1 rounded-md">
#${tag} </span>`)} </div> </a>`;
}, "/home/testuser/Desktop/code/aboutme-utkarsh/src/components/BlogCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog");
  const publishedPosts = allPosts.filter((p) => !p.data.draft).sort((a, b) => new Date(b.data.publishedAt).valueOf() - new Date(a.data.publishedAt).valueOf());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "title": "Blog | Utkarsh Karale", "description": "Articles about web development, engineering, and design." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="pt-32 pb-20 max-w-5xl mx-auto px-6"> <div class="mb-16"> <h1 class="text-4xl md:text-5xl font-display font-black text-surface mb-4 tracking-tight">Writing</h1> <p class="text-lg text-muted max-w-2xl">
Thoughts on software engineering, product design, and building the web.
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ${publishedPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "post": post })}`)} </div> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/testuser/Desktop/code/aboutme-utkarsh/src/pages/blog/index.astro", void 0);

const $$file = "/home/testuser/Desktop/code/aboutme-utkarsh/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
