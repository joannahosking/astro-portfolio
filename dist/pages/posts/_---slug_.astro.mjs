import { d as createAstro, c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Bk6afNz-.mjs';
import 'kleur/colors';
import { $ as $$Main } from '../../chunks/Main_CJOeRzgR.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DZC92-3b.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://joannahosking.com");
async function getStaticPaths() {
  const postsEntries = await getCollection("posts");
  return postsEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "pageTitle": `${entry.data.title} | Joanna Hosking - Web Developer`, "data-astro-cid-egg7nqdx": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="blog" data-astro-cid-egg7nqdx> <h1 data-astro-cid-egg7nqdx>${entry.data.title}</h1> <span class="date" data-astro-cid-egg7nqdx>Posted ${entry.data.pubDate.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })}</span> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-egg7nqdx": true })} <p class="go-back" data-astro-cid-egg7nqdx> <a href="/" data-astro-cid-egg7nqdx>&larr; back</a> </p> </article> ` })} `;
}, "C:/Users/joann/Documents/Web Dev/astro-portfolio/src/pages/posts/[...slug].astro", void 0);

const $$file = "C:/Users/joann/Documents/Web Dev/astro-portfolio/src/pages/posts/[...slug].astro";
const $$url = "/posts/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
