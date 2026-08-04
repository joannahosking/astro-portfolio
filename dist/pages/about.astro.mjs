import { c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bk6afNz-.mjs';
import 'kleur/colors';
import { $ as $$Main } from '../chunks/Main_CJOeRzgR.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_NgwtkoQw.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const me = new Proxy({"src":"/_astro/me.D7XP71pL.jpg","width":586,"height":330,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/joann/Documents/Web Dev/astro-portfolio/src/assets/images/me.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/joann/Documents/Web Dev/astro-portfolio/src/assets/images/me.jpg");
							return target[name];
						}
					});

const $$About = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "About me | Joanna Hosking - Web Developer";
  const expertise = [
    "javascript",
    "typescript",
    "php",
    "wordpress",
    "react",
    "astro",
    "gsap",
    "motion",
    "webpack",
    "git",
    "figma"
  ];
  return renderTemplate`${renderComponent($$result, "Main", $$Main, { "pageTitle": pageTitle, "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-kh7btl4r> <figure class="avatar" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Image", $$Image, { "src": me, "alt": "", "loading": "lazy", "decoding": "async", "data-astro-cid-kh7btl4r": true })} </figure> <h1 data-astro-cid-kh7btl4r>About me</h1> <p data-astro-cid-kh7btl4r>
I'm a web developer based in the UK, currently working at <a href="https://www.ebydesign.co.uk/" target="_blank" rel="noreferrer" data-astro-cid-kh7btl4r>EBY</a>.
</p> <p data-astro-cid-kh7btl4r>
Over the past 7+ years, I've worked across agency and freelance roles,
      delivering end-to-end projects using Wordpress, PHP, and modern JavaScript
      frameworks like React. I enjoy working across the full development
      process, from planning, UX, and architecture through to build and launch.
</p> <p data-astro-cid-kh7btl4r>
I'm particularly interested in accessibility and progressive enhancement,
      and I enjoy exploring how modern tools can improve both developer and user
      experience.
</p> <p data-astro-cid-kh7btl4r>
Outside of work, I spend my time playing guitar, reading, and enjoying a
      slower pace of life with my dog.
</p> </section> <section data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>Experience</h2> <ul class="experience" data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r> <h3 data-astro-cid-kh7btl4r>Cooperfields</h3> <span class="title" data-astro-cid-kh7btl4r>Web Developer</span> <span class="date" data-astro-cid-kh7btl4r>2021-present</span> </li> <li data-astro-cid-kh7btl4r> <h3 data-astro-cid-kh7btl4r>Freelance</h3> <span class="title" data-astro-cid-kh7btl4r>Web Developer</span> <span class="date" data-astro-cid-kh7btl4r>2019-2021</span> </li> <li data-astro-cid-kh7btl4r> <h3 data-astro-cid-kh7btl4r>Automatit</h3> <span class="title" data-astro-cid-kh7btl4r>Front-End Developer</span> <span class="date" data-astro-cid-kh7btl4r>2018-2019</span> </li> </ul> </section> <section data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>Expertise</h2> <ul class="expertise" data-astro-cid-kh7btl4r> ${expertise.map((item) => renderTemplate`<li data-astro-cid-kh7btl4r>${item}</li>`)} </ul> </section> ` })}  ${renderScript($$result, "C:/Users/joann/Documents/Web Dev/astro-portfolio/src/pages/about.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/joann/Documents/Web Dev/astro-portfolio/src/pages/about.astro", void 0);

const $$file = "C:/Users/joann/Documents/Web Dev/astro-portfolio/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
