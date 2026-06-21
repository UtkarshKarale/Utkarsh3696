import { c as createComponent, g as getCollection, r as renderEntry, $ as $$Base, a as $$Header, b as $$Footer } from './Footer_CrWRZ6x2.mjs';
import 'piccolore';
import { r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute } from './prerender_BqJ6_NTL.mjs';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Comments = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div class="mt-16 pt-16 border-t border-border/50"> <h2 class="text-2xl font-display font-bold text-surface mb-8">Comments</h2> <div class="giscus-container rounded-xl overflow-hidden bg-ink/50 border border-border/30 p-4"> <!-- Giscus Placeholder --> <script src="https://giscus.app/client.js" data-repo="placeholder/repo" data-repo-id="R_kgDOXXXXXX" data-category="Announcements" data-category-id="DIC_kwDOXXXXXX" data-mapping="pathname" data-strict="0" data-reactions-enabled="1" data-emit-metadata="0" data-input-position="bottom" data-theme="transparent_dark" data-lang="en" data-loading="lazy" crossorigin="anonymous" async>\n    <\/script> <noscript>Please enable JavaScript to view the comments powered by giscus.</noscript> </div> </div>'])), maybeRenderHead());
}, "/home/testuser/Desktop/code/aboutme-utkarsh/src/components/Comments.astro", void 0);

async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { id: post.id },
    props: { post }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric"
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", dateOptions).format(new Date(post.data.publishedAt));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$Base, { "title": `${post.data.title} | Utkarsh Karale`, "description": post.data.description, "type": "article" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<article class="pt-32 pb-20 max-w-3xl mx-auto px-6"> <header class="mb-12 text-center"> <div class="flex items-center justify-center gap-4 text-sm font-medium text-muted mb-6"> <time${addAttribute(new Date(post.data.publishedAt).toISOString(), "datetime")}>${formattedDate}</time> <span class="w-1 h-1 rounded-full bg-border"></span> <span>${post.data.tags.join(", ")}</span> </div> <h1 class="text-4xl md:text-5xl font-display font-black text-surface mb-6 tracking-tight leading-tight"> ${post.data.title} </h1> <p class="text-xl text-muted leading-relaxed"> ${post.data.description} </p> </header> <div class="prose prose-invert prose-brand max-w-none prose-img:rounded-xl prose-headings:font-display prose-headings:font-bold prose-a:text-brand-400 hover:prose-a:text-brand-300"> ${renderComponent($$result2, "Content", Content, {})} </div> ${renderComponent($$result2, "Comments", $$Comments, {})} </article> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/testuser/Desktop/code/aboutme-utkarsh/src/pages/blog/[id].astro", void 0);

const $$file = "/home/testuser/Desktop/code/aboutme-utkarsh/src/pages/blog/[id].astro";
const $$url = "/blog/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
