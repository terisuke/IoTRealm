import { b as createAstro, c as createComponent, m as maybeRenderHead, h as renderSlot, a as renderTemplate } from './astro/server_5S5MEE25.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://iotrealm.vercel.app");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { isUnderline } = Astro2.props;
  return renderTemplate`${isUnderline ? renderTemplate`${maybeRenderHead()}<div class="rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23]">${renderSlot($$result, $$slots["default"])}</div>` : renderTemplate`<div class="rounded-[45px]">${renderSlot($$result, $$slots["default"])}</div>`}`;
}, "/Users/komatsuzakinagisa/projects/IoTRealm/src/components/ui/Card.astro", void 0);

export { $$Card as $ };
