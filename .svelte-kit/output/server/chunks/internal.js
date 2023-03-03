import { c as create_ssr_component, a as setContext, v as validate_component, m as missing_component } from "./index.js";
const base = "";
let assets = "";
function set_assets(path) {
  assets = path;
}
let version = "";
let public_env = {};
function set_building(value) {
}
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_version(value) {
  version = value;
}
function afterUpdate() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      stores.page.set(page);
    }
    $$rendered = `


${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}

${``}`;
  } while (!$$settled);
  return $$rendered;
});
set_version("1675948661061");
const options = {
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  hooks: null,
  // added lazily, via `get_hooks`
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8"/>\n		<meta name="viewport" content="width=device-width,initial-scale=1"/>\n		<link rel="canonical" href="https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/">\n\n		<title>Aedile - Alternative to your favorite management tools</title>\n		<meta name="description" content="Bring your team’s work together in one shared space. Manage your boards, columns &amp; cards to transform your projects. Organize tasks, and build the way your teams work.">\n\n		<link rel="icon" type="image/png" href="' + assets2 + '/images/favicon.png"/>\n		<link rel="apple-touch-icon" sizes="180x180" href="' + assets2 + '/images/favicon.png">\n\n		<meta name="theme-color" content="#000000">\n\n		<meta property="og:type" content="website">\n		<meta property="og:locale" content="fr_FR">\n		<meta property="og:url" content="https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/">\n		<meta property="og:title" content="Aedile - Alternative to your favorite management tools">\n		<meta property="og:description" content="Bring your team’s work together in one shared space. Manage your boards, columns &amp; cards to transform your projects. Organize tasks, and build the way your teams work.">\n		<meta property="og:image" content="' + assets2 + '/images/favicon.png">\n		<meta property="og:image:type" content="image/svg+xml">\n		<meta property="og:image:width" content="1903">\n		<meta property="og:image:height" content="938">\n		<meta property="og:site_name" content="Aedile - Alternative to your favorite management tools">\n		<meta property="og:see_also" content="https://twitter.com/aedile_ic">\n\n		<meta name="twitter:card" content="summary_large_image">\n		<meta name="twitter:site" content="@aedile_ic">\n		<meta name="twitter:creator" content="@aedile_ic">\n		<meta name="twitter:title" content="Aedile - Alternative to your favorite management tools">\n		<meta name="twitter:description" content="Bring your team’s work together in one shared space. Manage your boards, columns &amp; cards to transform your projects. Organize tasks, and build the way your teams work.">\n		<meta name="twitter:image" content="' + assets2 + `/images/favicon.png">

		<script type="application/ld+json">
			{
				"@context": "http://schema.org",
				"@type": "Corporation",
				"name": "Aedile",
				"description": "Bring your team’s work together in one shared space. Manage your boards, columns &amp; cards to transform your projects. Organize tasks, and build the way your teams work.",
				"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/",
				"sameAs": [
					"https://twitter.com/aedile_ic",
					"https://www.facebook.com/esensconsulting",
					"https://www.instagram.com/esensconsulting",
					"https://www.linkedin.com/company/esens-consulting"
				],
				"image": {
					"@type": "ImageObject",
					"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/images/favicon.png",
					"height": "938",
					"width": "1903"
				},
				"logo": {
					"@type": "ImageObject",
					"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/images/favicon.png",
					"height": "938",
					"width": "1903"
				},
				"location": {
					"@type": "Place",
					"name": "Aedile",
					"description": "Bring your team’s work together in one shared space. Manage your boards, columns &amp; cards to transform your projects. Organize tasks, and build the way your teams work.",
					"image": {
						"@type": "ImageObject",
						"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/images/favicon.png",
						"height": "938",
						"width": "1903"
					},
					"logo": {
						"@type": "ImageObject",
						"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/images/favicon.png",
						"height": "938",
						"width": "1903"
					},
					"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/",
					"sameAs": [
						"https://twitter.com/aedile_ic",
						"https://www.facebook.com/esensconsulting",
						"https://www.instagram.com/esensconsulting",
						"https://www.linkedin.com/company/esens-consulting"
					]
				}
			}
		<\/script>

		<script type="application/ld+json">
			{
				"@context": "http://schema.org",
				"@type": "WebSite",
				"name": "L'Aedile - Agence de design et de développement web et mobile ",
				"description": "ESENS accompagne ses clients dans leurs projets d’innovation technologique, et ses équipes tout au long de leur parcours professionnel à Paris, Bordeaux...",
				"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/",
				"image": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/image/esens.png",
				"sameAs": [
					"https://twitter.com/aedile_ic",
					"https://www.facebook.com/esensconsulting",
					"https://www.instagram.com/esensconsulting",
					"https://www.linkedin.com/company/esens-consulting"
				],
				"copyrightHolder": {
					"@type": "Corporation",
					"name": "ESENS Consulting",
					"description": "Bring your team’s work together in one shared space. Manage your boards, columns &amp; cards to transform your projects. Organize tasks, and build the way your teams work.",
					"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/",
					"sameAs": [
						"https://twitter.com/aedile_ic",
						"https://www.facebook.com/esensconsulting",
						"https://www.instagram.com/esensconsulting",
						"https://www.linkedin.com/company/esens-consulting"
					],
					"image": {
						"@type": "ImageObject",
						"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/image/esens.png",
						"height": "763",
						"width": "1439"
					},
					"logo": {
						"@type": "ImageObject",
						"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/image/esens.png",
						"height": "763",
						"width": "1439"
					},
					"location": {
						"@type": "Place",
						"name": "ESENS Consulting",
						"description": "Bring your team’s work together in one shared space. Manage your boards, columns &amp; cards to transform your projects. Organize tasks, and build the way your teams work.",
						"image": {
							"@type": "ImageObject",
							"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/image/esens.png",
							"height": "763",
							"width": "1439"
						},
						"logo": {
							"@type": "ImageObject",
							"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/image/esens.png",
							"height": "763",
							"width": "1439"
						},
						"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/",
						"sameAs": [
							"https://twitter.com/aedile_ic",
							"https://www.facebook.com/esensconsulting",
							"https://www.instagram.com/esensconsulting",
							"https://www.linkedin.com/company/esens-consulting"
						]
					}
				},
				"author": {
					"@type": "Corporation",
					"name": "ESENS Consulting",
					"description": "Bring your team’s work together in one shared space. Manage your boards, columns &amp; cards to transform your projects. Organize tasks, and build the way your teams work.",
					"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/",
					"sameAs": [
						"https://twitter.com/aedile_ic",
						"https://www.facebook.com/esensconsulting",
						"https://www.instagram.com/esensconsulting",
						"https://www.linkedin.com/company/esens-consulting"
					],
					"image": {
						"@type": "ImageObject",
						"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/image/esens.png",
						"height": "763",
						"width": "1439"
					},
					"logo": {
						"@type": "ImageObject",
						"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/image/esens.png",
						"height": "763",
						"width": "1439"
					},
					"location": {
						"@type": "Place",
						"name": "ESENS Consulting",
						"description": "Bring your team’s work together in one shared space. Manage your boards, columns &amp; cards to transform your projects. Organize tasks, and build the way your teams work.",
						"image": {
							"@type": "ImageObject",
							"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/image/esens.png",
							"height": "763",
							"width": "1439"
						},
						"logo": {
							"@type": "ImageObject",
							"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/image/esens.png",
							"height": "763",
							"width": "1439"
						},
						"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/",
						"sameAs": [
							"https://twitter.com/aedile_ic",
							"https://www.facebook.com/esensconsulting",
							"https://www.instagram.com/esensconsulting",
							"https://www.linkedin.com/company/esens-consulting"
						]
					}
				},
				"creator": {
					"@type": "Organization",
					"name": "ESENS CONSULTING",
					"image": {
						"@type": "ImageObject",
						"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co//uploads/esens_logo-2.png",
						"height": "1068",
						"width": "1919"
					},
					"logo": {
						"@type": "ImageObject",
						"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co//uploads/esens_logo-2.png",
						"height": "1068",
						"width": "1919"
					},
					"location": {
						"@type": "Place",
						"name": "ESENS CONSULTING"
					}
				}
			}
		<\/script>

		<script type="application/ld+json">
			{
				"@context": "http://schema.org",
				"@type": "Place",
				"name": "Aedile",
				"description": "Bring your team’s work together in one shared space. Manage your boards, columns &amp; cards to transform your projects. Organize tasks, and build the way your teams work.",
				"image": {
					"@type": "ImageObject",
					"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/images/favicon.png",
					"height": "938",
					"width": "1903"
				},
				"logo": {
					"@type": "ImageObject",
					"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/images/favicon.png",
					"height": "938",
					"width": "1903"
				},
				"url": "https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/",
				"sameAs": [
					"https://twitter.com/aedile_ic",
					"https://www.facebook.com/esensconsulting",
					"https://www.instagram.com/esensconsulting",
					"https://www.linkedin.com/company/esens-consulting"
				]
			}
		<\/script>

		` + head + '\n	</head>\n	<body data-sveltekit-preload-data="hover">\n		<div style="display: contents">' + body + "</div>\n	</body>\n</html>\n",
    error: ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  }
};
function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  set_assets as c,
  set_building as d,
  set_private_env as e,
  get_hooks as g,
  options as o,
  public_env as p,
  set_public_env as s,
  version as v
};
