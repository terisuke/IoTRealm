import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, h as renderSlot, a as renderTemplate } from './astro/server_5S5MEE25.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://iotrealm.vercel.app");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="px-5 flex justify-center overflow-hidden lg:block"> <div class="w-full max-w-[1280px] mx-auto"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/komatsuzakinagisa/projects/IoTRealm/src/components/sections/Section.astro", void 0);

export { $$Section as $ };
