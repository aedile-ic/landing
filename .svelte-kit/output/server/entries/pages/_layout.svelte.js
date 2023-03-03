import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@font-face{font-family:"Chakra Petch";font-style:italic;font-weight:700;font-display:swap;src:url(/fonts/chakraPetch/ChakraPetch-BoldItalic.ttf)}@font-face{font-family:"Chakra Petch";font-weight:400;font-display:swap;src:url(/fonts/chakraPetch/ChakraPetch-Regular.ttf)}@font-face{font-family:"Chakra Petch";font-weight:600;font-display:swap;src:url(/fonts/chakraPetch/ChakraPetch-Semibold.ttf)}@font-face{font-family:"Chakra Petch";font-weight:700;font-display:swap;src:url(/fonts/chakraPetch/ChakraPetch-Bold.ttf)}@font-face{font-family:poppins;font-weight:700;font-display:swap;src:url(/fonts/poppins/Poppins-Bold.ttf)}@font-face{font-family:poppins;font-weight:600;font-display:swap;src:url(/fonts/poppins/Poppins-SemiBold.ttf)}@font-face{font-family:poppins;font-weight:400;font-display:swap;src:url(/fonts/poppins/Poppins-Regular.ttf)}.link.svelte-1e19709.svelte-1e19709{padding:12rem 15rem;color:#92E7E8;font-size:16rem;font-family:"Chakra Petch", sans-serif;font-weight:600;transition:all 0.3s}.link.svelte-1e19709.svelte-1e19709:hover{background:linear-gradient(90deg, #F296D2 0%, #FFB483 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.btn.svelte-1e19709.svelte-1e19709{background:#92E7E8;color:#19172F;display:flex;gap:13rem;border-radius:16px;width:fit-content;font-family:"Chakra Petch", sans-serif;font-weight:600;height:fit-content;cursor:pointer;border:3rem solid transparent;padding:9rem 12rem;align-items:center}.btn.svelte-1e19709.svelte-1e19709:hover{background:#C3F9FA}.btn.svelte-1e19709.svelte-1e19709:active{background-color:#92E7E8;border:3rem solid #49D4D6}.btn.svelte-1e19709 .icon.svelte-1e19709{margin-right:4rem;width:11.6rem}@media screen and (-webkit-min-device-pixel-ratio: 0){}@media screen and (-webkit-min-device-pixel-ratio: 0){}.svelte-1e19709.svelte-1e19709,.svelte-1e19709.svelte-1e19709:after,.svelte-1e19709.svelte-1e19709:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}a.svelte-1e19709.svelte-1e19709{text-decoration:none}nav.svelte-1e19709.svelte-1e19709{display:flex;align-items:center;height:88rem;padding-left:50rem;padding-right:50rem;justify-content:space-between;position:fixed;width:100%;z-index:10;transition:transform 0.3s ease-in}nav.svelte-1e19709>div.svelte-1e19709{flex:1}.logo-header.svelte-1e19709.svelte-1e19709{width:84rem}.ancors.svelte-1e19709.svelte-1e19709{display:flex;gap:15rem}.ancors.svelte-1e19709 a.svelte-1e19709{padding:12rem 15rem;color:#92E7E8;font-size:16rem;font-family:"Chakra Petch", sans-serif;font-weight:600}.try.svelte-1e19709.svelte-1e19709{display:flex;justify-content:end}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav id="${"nav"}" class="${"svelte-1e19709"}"><div class="${"logo svelte-1e19709"}"><a href="${"#"}" class="${"svelte-1e19709"}"><img src="${"/images/logo-text.svg"}" alt="${"Logo aedile"}" class="${"logo-header svelte-1e19709"}"></a></div>
    <div class="${"ancors svelte-1e19709"}"><a class="${"link svelte-1e19709"}" href="${"#features"}">Features
        </a>
        <a class="${"link svelte-1e19709"}" href="${"#concept"}">Concept
        </a>
        <a class="${"link svelte-1e19709"}" href="${"#roadmap"}">Roadmap
        </a>
        <a class="${"link svelte-1e19709"}" href="${"#community"}">Community
        </a></div>
    <div class="${"try svelte-1e19709"}"><a class="${"btn svelte-1e19709"}" href="${"https://vqdn4-miaaa-aaaaf-qaawa-cai.ic0.app/login"}" target="${"_blank"}" rel="${"noopener noreferrer"}">Try the beta
            <img alt="${"Try beta"}" class="${"icon svelte-1e19709"}" src="${"/images/arrow-try-beta-icon.svg"}"></a></div>
</nav>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: '@font-face{font-family:"Chakra Petch";font-style:italic;font-weight:700;font-display:swap;src:url(/fonts/chakraPetch/ChakraPetch-BoldItalic.ttf)}@font-face{font-family:"Chakra Petch";font-weight:400;font-display:swap;src:url(/fonts/chakraPetch/ChakraPetch-Regular.ttf)}@font-face{font-family:"Chakra Petch";font-weight:600;font-display:swap;src:url(/fonts/chakraPetch/ChakraPetch-Semibold.ttf)}@font-face{font-family:"Chakra Petch";font-weight:700;font-display:swap;src:url(/fonts/chakraPetch/ChakraPetch-Bold.ttf)}@font-face{font-family:poppins;font-weight:700;font-display:swap;src:url(/fonts/poppins/Poppins-Bold.ttf)}@font-face{font-family:poppins;font-weight:600;font-display:swap;src:url(/fonts/poppins/Poppins-SemiBold.ttf)}@font-face{font-family:poppins;font-weight:400;font-display:swap;src:url(/fonts/poppins/Poppins-Regular.ttf)}@media screen and (-webkit-min-device-pixel-ratio: 0){}@media screen and (-webkit-min-device-pixel-ratio: 0){}p.svelte-1m91dfn.svelte-1m91dfn{margin:0;padding:0}p.svelte-1m91dfn.svelte-1m91dfn{font-size:16rem;font-weight:400}.svelte-1m91dfn.svelte-1m91dfn,.svelte-1m91dfn.svelte-1m91dfn:after,.svelte-1m91dfn.svelte-1m91dfn:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}a.svelte-1m91dfn.svelte-1m91dfn{text-decoration:none}footer.svelte-1m91dfn.svelte-1m91dfn{display:flex;flex-direction:column;padding:38rem 0;gap:24rem;align-items:center;justify-content:center;background-color:#141327}.logo.svelte-1m91dfn.svelte-1m91dfn{width:84rem}p.svelte-1m91dfn.svelte-1m91dfn{color:#AAA6D7}.social-media.svelte-1m91dfn.svelte-1m91dfn{display:flex;gap:16.8rem}.twitter.svelte-1m91dfn .icon.svelte-1m91dfn{width:16rem}.discord.svelte-1m91dfn .icon.svelte-1m91dfn{width:15rem}.github.svelte-1m91dfn .icon.svelte-1m91dfn{width:14.55rem}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"svelte-1m91dfn"}"><img src="${"/images/logo-text.svg"}" class="${"logo svelte-1m91dfn"}" alt="${"Logo"}">
    <p class="${"svelte-1m91dfn"}">AEDILE/ESENS (C) 2023</p>
    <div class="${"social-media svelte-1m91dfn"}"><a class="${"discord svelte-1m91dfn"}" href="${"https://vqdn4-miaaa-aaaaf-qaawa-cai.ic0.app/login"}" target="${"_blank"}" rel="${"noopener noreferrer"}"><img alt="${"Try beta"}" class="${"icon svelte-1m91dfn"}" src="${"/images/discord.svg"}"></a>
        <a class="${"twitter svelte-1m91dfn"}" href="${"https://twitter.com/aedile_ic"}" target="${"_blank"}" rel="${"noopener noreferrer"}"><img alt="${"Try beta"}" class="${"icon svelte-1m91dfn"}" src="${"/images/twitter.svg"}"></a>
        <a class="${"github svelte-1m91dfn"}" href="${"https://github.com/aedile-ic"}" target="${"_blank"}" rel="${"noopener noreferrer"}"><img alt="${"Try beta"}" class="${"icon svelte-1m91dfn"}" src="${"/images/github.svg"}"></a></div>
</footer>`;
});
const global = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"app"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main>${slots.default ? slots.default({}) : ``}</main>

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
