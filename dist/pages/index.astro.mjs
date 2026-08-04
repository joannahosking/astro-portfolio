import { c as createComponent, s as spreadAttributes, u as unescapeHTML, b as renderTemplate, r as renderComponent, a as renderScript, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_Bk6afNz-.mjs';
import 'kleur/colors';
import { $ as $$Main } from '../chunks/Main_CJOeRzgR.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_NgwtkoQw.mjs';
import { g as getCollection } from '../chunks/_astro_content_DZC92-3b.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const iconWeb = createSvgComponent({"meta":{"src":"/_astro/project-web.R8obDYBS.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24"},"children":"\r\n<style>\r\n    path {\r\n        fill: #303030;\r\n    }\r\n    @media (prefers-color-scheme: dark) {\r\n        path {\r\n            fill: #ececeb;\r\n        }\r\n    }\r\n</style>\r\n<path d=\"M20 17.722c.595-.347 1-.985 1-1.722V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v11c0 .736.405 1.375 1 1.722V18H2v2h20v-2h-2v-.278zM5 16V5h14l.002 11H5z\" />"});

const iconGame = createSvgComponent({"meta":{"src":"/_astro/project-game.CoPg5Gak.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"#303030"},"children":"\r\n<style>\r\n    path {\r\n        fill: #303030;\r\n    }\r\n    @media (prefers-color-scheme: dark) {\r\n        path {\r\n            fill: #ececeb;\r\n        }\r\n    }\r\n</style>\r\n<path d=\"M21.986 9.74a3.193 3.193 0 0 0-.008-.088A5.003 5.003 0 0 0 17 5H7a4.97 4.97 0 0 0-4.987 4.737c-.01.079-.013.161-.013.253v6.51c0 .925.373 1.828 1.022 2.476A3.524 3.524 0 0 0 5.5 20c1.8 0 2.504-1 3.5-3 .146-.292.992-2 3-2 1.996 0 2.853 1.707 3 2 1.004 2 1.7 3 3.5 3 .925 0 1.828-.373 2.476-1.022A3.524 3.524 0 0 0 22 16.5V10c0-.095-.004-.18-.014-.26zM7 12.031a2 2 0 1 1-.001-3.999A2 2 0 0 1 7 12.031zm10-5a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm-2 4a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm2 2a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm2-2a1 1 0 1 1 0-2 1 1 0 1 1 0 2z\" />"});

const iconDesign = createSvgComponent({"meta":{"src":"/_astro/project-design.Bcyv-toS.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24"},"children":"\r\n<style>\r\n    path {\r\n        fill: #303030;\r\n    }\r\n    @media (prefers-color-scheme: dark) {\r\n        path {\r\n            fill: #ececeb;\r\n        }\r\n    }\r\n</style>\r\n<path d=\"M9.38 21.646A9.985 9.985 0 0 0 12 22l.141-.001a2.998 2.998 0 0 0 2.515-1.425c.542-.876.6-1.953.153-2.88l-.198-.415c-.453-.942-.097-1.796.388-2.281.485-.485 1.341-.841 2.28-.388h.001l.413.199a2.99 2.99 0 0 0 2.881-.153A2.997 2.997 0 0 0 22 12.141a9.926 9.926 0 0 0-.353-2.76c-1.038-3.827-4.353-6.754-8.246-7.285-3.149-.427-6.241.602-8.471 2.833S1.666 10.247 2.096 13.4c.53 3.894 3.458 7.208 7.284 8.246zM15.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-5-1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM9 15.506a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-2.5-6.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 6.5 9.006z\" />"});

const iconShop = createSvgComponent({"meta":{"src":"/_astro/project-shop.C1jLgLFA.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","fill":"currentColor","viewBox":"0 0 24 24","transform":"","id":"injected-svg"},"children":"\r\n<style>\r\n    path {\r\n        fill: #303030;\r\n    }\r\n    @media (prefers-color-scheme: dark) {\r\n        path {\r\n            fill: #ececeb;\r\n        }\r\n    }\r\n</style>\r\n<path d=\"M21 4H6.17l-.18-1.15A1 1 0 0 0 5 2H2v2h2.14l1.87 12.15A1 1 0 0 0 7 17h12v-2H7.86l-.31-2H19c.45 0 .84-.3.96-.73l2-7A1 1 0 0 0 21 3.99Zm-2.75 7H7.24l-.77-5h13.2l-1.43 5ZM8 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4m9 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4\"></path>\r\n"});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = "Joanna Hosking - Web Developer";
  const allProjects = await getCollection("projects");
  allProjects.sort((a, b) => a.data.sortOrder < b.data.sortOrder ? -1 : 1);
  const iconMap = {
    web: iconWeb,
    game: iconGame,
    design: iconDesign,
    shop: iconShop
  };
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "pageTitle": pageTitle, "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>👋🏼<br data-astro-cid-j7pv25f6>Hello, I'm Joanna.</h1> <p data-astro-cid-j7pv25f6>
I'm a web developer building joyful digital experiences, delivering end-to-end projects with a focus on accessibility and progressive enhancement. <a href="/about" data-astro-cid-j7pv25f6>Learn more &rarr;</a> </p> </section> <section class="projects" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Selected projects</h2> <ul data-astro-cid-j7pv25f6> ${allProjects.map((project) => renderTemplate`<li data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6></p><figure class="icon" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": iconMap[project.data.icon], "alt": "", "width": "22", "height": "22", "loading": "lazy", "decoding": "async", "data-astro-cid-j7pv25f6": true })} </figure>${" "} <a${addAttribute(`/projects/${project.slug}`, "href")} data-astro-cid-j7pv25f6>${project.data.shortname}</a>
: ${project.data.description}  </li>`)} </ul> </section>  <section class="contact" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Let's chat...</h2> <p data-astro-cid-j7pv25f6> <a href="mailto:hello@joannahosking.com" data-astro-cid-j7pv25f6>hello@joannahosking.com &rarr;</a> </p> </section> ` })}  ${renderScript($$result, "C:/Users/joann/Documents/Web Dev/astro-portfolio/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/joann/Documents/Web Dev/astro-portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/joann/Documents/Web Dev/astro-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
