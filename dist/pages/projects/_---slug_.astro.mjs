import { d as createAstro, c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Bk6afNz-.mjs';
import 'kleur/colors';
import { $ as $$Main } from '../../chunks/Main_CJOeRzgR.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DZC92-3b.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://joannahosking.com");
async function getStaticPaths() {
  const projectsEntries = await getCollection("projects");
  return projectsEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "pageTitle": `${entry.data.title} | Joanna Hosking - Web Developer`, "data-astro-cid-5uq7evlv": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="project" data-astro-cid-5uq7evlv> <h1 data-astro-cid-5uq7evlv>${entry.data.title}</h1> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-5uq7evlv": true })} <p class="go-back" data-astro-cid-5uq7evlv> <a href="/" data-astro-cid-5uq7evlv>&larr; Back to home</a> </p> </article> ` })} `;
}, "C:/Users/joann/Documents/Web Dev/astro-portfolio/src/pages/projects/[...slug].astro", void 0);

const $$file = "C:/Users/joann/Documents/Web Dev/astro-portfolio/src/pages/projects/[...slug].astro";
const $$url = "/projects/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
