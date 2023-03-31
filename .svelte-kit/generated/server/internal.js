
import root from '../root.svelte';
import { set_assets, set_building, set_private_env, set_public_env, set_version } from '../../../node_modules/@sveltejs/kit/src/runtime/shared.js';

set_version("1680271604108");

export const options = {
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	hooks: null, // added lazily, via `get_hooks`
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\"/>\n\t\t<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/>\n\t\t<link rel=\"canonical\" href=\"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/\">\n\n\t\t<title>Aedile - Alternative to your favorite management tools</title>\n\t\t<meta name=\"description\" content=\"Bring your team’s work together in one shared space. Manage your boards, columns &amp; cards to transform your projects. Organize tasks, and build the way your teams work.\">\n\n\t\t<link rel=\"icon\" type=\"image/png\" href=\"" + assets + "/images/favicon.png\"/>\n\t\t<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"" + assets + "/images/favicon.png\">\n\n\t\t<meta name=\"theme-color\" content=\"#191731\">\n\n\t\t<meta property=\"og:type\" content=\"website\">\n\t\t<meta property=\"og:locale\" content=\"fr_FR\">\n\t\t<meta property=\"og:url\" content=\"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/\">\n\t\t<meta property=\"og:title\" content=\"Aedile - Alternative to your favorite management tools\">\n\t\t<meta property=\"og:description\" content=\"Bring your team’s work together in one shared space. Manage your boards, columns &amp; cards to transform your projects. Organize tasks, and build the way your teams work.\">\n\t\t<meta property=\"og:image\" content=\"" + assets + "/images/favicon.png\">\n\t\t<meta property=\"og:image:type\" content=\"image/svg+xml\">\n\t\t<meta property=\"og:image:width\" content=\"1903\">\n\t\t<meta property=\"og:image:height\" content=\"938\">\n\t\t<meta property=\"og:site_name\" content=\"Aedile - Alternative to your favorite management tools\">\n\t\t<meta property=\"og:see_also\" content=\"https://twitter.com/aedile_ic\">\n\n\t\t<meta name=\"twitter:card\" content=\"summary_large_image\">\n\t\t<meta name=\"twitter:site\" content=\"@aedile_ic\">\n\t\t<meta name=\"twitter:creator\" content=\"@aedile_ic\">\n\t\t<meta name=\"twitter:title\" content=\"Aedile - Alternative to your favorite management tools\">\n\t\t<meta name=\"twitter:description\" content=\"Bring your team’s work together in one shared space. Manage your boards, columns &amp; cards to transform your projects. Organize tasks, and build the way your teams work.\">\n\t\t<meta name=\"twitter:image\" content=\"" + assets + "/images/favicon.png\">\n\n\t\t<script type=\"application/ld+json\">\n\t\t\t{\n\t\t\t\t\"@context\": \"http://schema.org\",\n\t\t\t\t\"@type\": \"Corporation\",\n\t\t\t\t\"name\": \"Aedile\",\n\t\t\t\t\"description\": \"Bring your team’s work together in one shared space. Manage your boards, columns &amp; cards to transform your projects. Organize tasks, and build the way your teams work.\",\n\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/\",\n\t\t\t\t\"sameAs\": [\n\t\t\t\t\t\"https://twitter.com/aedile_ic\",\n\t\t\t\t\t\"https://www.facebook.com/esensconsulting\",\n\t\t\t\t\t\"https://www.instagram.com/esensconsulting\",\n\t\t\t\t\t\"https://www.linkedin.com/company/esens-consulting\"\n\t\t\t\t],\n\t\t\t\t\"image\": {\n\t\t\t\t\t\"@type\": \"ImageObject\",\n\t\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/images/favicon.png\",\n\t\t\t\t\t\"height\": \"938\",\n\t\t\t\t\t\"width\": \"1903\"\n\t\t\t\t},\n\t\t\t\t\"logo\": {\n\t\t\t\t\t\"@type\": \"ImageObject\",\n\t\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/images/favicon.png\",\n\t\t\t\t\t\"height\": \"938\",\n\t\t\t\t\t\"width\": \"1903\"\n\t\t\t\t},\n\t\t\t\t\"location\": {\n\t\t\t\t\t\"@type\": \"Place\",\n\t\t\t\t\t\"name\": \"Aedile\",\n\t\t\t\t\t\"description\": \"Bring your team’s work together in one shared space. Manage your boards, columns &amp; cards to transform your projects. Organize tasks, and build the way your teams work.\",\n\t\t\t\t\t\"image\": {\n\t\t\t\t\t\t\"@type\": \"ImageObject\",\n\t\t\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/images/favicon.png\",\n\t\t\t\t\t\t\"height\": \"938\",\n\t\t\t\t\t\t\"width\": \"1903\"\n\t\t\t\t\t},\n\t\t\t\t\t\"logo\": {\n\t\t\t\t\t\t\"@type\": \"ImageObject\",\n\t\t\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/images/favicon.png\",\n\t\t\t\t\t\t\"height\": \"938\",\n\t\t\t\t\t\t\"width\": \"1903\"\n\t\t\t\t\t},\n\t\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/\",\n\t\t\t\t\t\"sameAs\": [\n\t\t\t\t\t\t\"https://twitter.com/aedile_ic\",\n\t\t\t\t\t\t\"https://www.facebook.com/esensconsulting\",\n\t\t\t\t\t\t\"https://www.instagram.com/esensconsulting\",\n\t\t\t\t\t\t\"https://www.linkedin.com/company/esens-consulting\"\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t}\n\t\t</script>\n\n\t\t<script type=\"application/ld+json\">\n\t\t\t{\n\t\t\t\t\"@context\": \"http://schema.org\",\n\t\t\t\t\"@type\": \"WebSite\",\n\t\t\t\t\"name\": \"L'Aedile - Agence de design et de développement web et mobile \",\n\t\t\t\t\"description\": \"ESENS accompagne ses clients dans leurs projets d’innovation technologique, et ses équipes tout au long de leur parcours professionnel à Paris, Bordeaux...\",\n\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/\",\n\t\t\t\t\"image\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/image/esens.png\",\n\t\t\t\t\"sameAs\": [\n\t\t\t\t\t\"https://twitter.com/aedile_ic\",\n\t\t\t\t\t\"https://www.facebook.com/esensconsulting\",\n\t\t\t\t\t\"https://www.instagram.com/esensconsulting\",\n\t\t\t\t\t\"https://www.linkedin.com/company/esens-consulting\"\n\t\t\t\t],\n\t\t\t\t\"copyrightHolder\": {\n\t\t\t\t\t\"@type\": \"Corporation\",\n\t\t\t\t\t\"name\": \"ESENS Consulting\",\n\t\t\t\t\t\"description\": \"Bring your team’s work together in one shared space. Manage your boards, columns &amp; cards to transform your projects. Organize tasks, and build the way your teams work.\",\n\t\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/\",\n\t\t\t\t\t\"sameAs\": [\n\t\t\t\t\t\t\"https://twitter.com/aedile_ic\",\n\t\t\t\t\t\t\"https://www.facebook.com/esensconsulting\",\n\t\t\t\t\t\t\"https://www.instagram.com/esensconsulting\",\n\t\t\t\t\t\t\"https://www.linkedin.com/company/esens-consulting\"\n\t\t\t\t\t],\n\t\t\t\t\t\"image\": {\n\t\t\t\t\t\t\"@type\": \"ImageObject\",\n\t\t\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/image/esens.png\",\n\t\t\t\t\t\t\"height\": \"763\",\n\t\t\t\t\t\t\"width\": \"1439\"\n\t\t\t\t\t},\n\t\t\t\t\t\"logo\": {\n\t\t\t\t\t\t\"@type\": \"ImageObject\",\n\t\t\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/image/esens.png\",\n\t\t\t\t\t\t\"height\": \"763\",\n\t\t\t\t\t\t\"width\": \"1439\"\n\t\t\t\t\t},\n\t\t\t\t\t\"location\": {\n\t\t\t\t\t\t\"@type\": \"Place\",\n\t\t\t\t\t\t\"name\": \"ESENS Consulting\",\n\t\t\t\t\t\t\"description\": \"Bring your team’s work together in one shared space. Manage your boards, columns &amp; cards to transform your projects. Organize tasks, and build the way your teams work.\",\n\t\t\t\t\t\t\"image\": {\n\t\t\t\t\t\t\t\"@type\": \"ImageObject\",\n\t\t\t\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/image/esens.png\",\n\t\t\t\t\t\t\t\"height\": \"763\",\n\t\t\t\t\t\t\t\"width\": \"1439\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"logo\": {\n\t\t\t\t\t\t\t\"@type\": \"ImageObject\",\n\t\t\t\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/image/esens.png\",\n\t\t\t\t\t\t\t\"height\": \"763\",\n\t\t\t\t\t\t\t\"width\": \"1439\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/\",\n\t\t\t\t\t\t\"sameAs\": [\n\t\t\t\t\t\t\t\"https://twitter.com/aedile_ic\",\n\t\t\t\t\t\t\t\"https://www.facebook.com/esensconsulting\",\n\t\t\t\t\t\t\t\"https://www.instagram.com/esensconsulting\",\n\t\t\t\t\t\t\t\"https://www.linkedin.com/company/esens-consulting\"\n\t\t\t\t\t\t]\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t\"author\": {\n\t\t\t\t\t\"@type\": \"Corporation\",\n\t\t\t\t\t\"name\": \"ESENS Consulting\",\n\t\t\t\t\t\"description\": \"Bring your team’s work together in one shared space. Manage your boards, columns &amp; cards to transform your projects. Organize tasks, and build the way your teams work.\",\n\t\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/\",\n\t\t\t\t\t\"sameAs\": [\n\t\t\t\t\t\t\"https://twitter.com/aedile_ic\",\n\t\t\t\t\t\t\"https://www.facebook.com/esensconsulting\",\n\t\t\t\t\t\t\"https://www.instagram.com/esensconsulting\",\n\t\t\t\t\t\t\"https://www.linkedin.com/company/esens-consulting\"\n\t\t\t\t\t],\n\t\t\t\t\t\"image\": {\n\t\t\t\t\t\t\"@type\": \"ImageObject\",\n\t\t\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/image/esens.png\",\n\t\t\t\t\t\t\"height\": \"763\",\n\t\t\t\t\t\t\"width\": \"1439\"\n\t\t\t\t\t},\n\t\t\t\t\t\"logo\": {\n\t\t\t\t\t\t\"@type\": \"ImageObject\",\n\t\t\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/image/esens.png\",\n\t\t\t\t\t\t\"height\": \"763\",\n\t\t\t\t\t\t\"width\": \"1439\"\n\t\t\t\t\t},\n\t\t\t\t\t\"location\": {\n\t\t\t\t\t\t\"@type\": \"Place\",\n\t\t\t\t\t\t\"name\": \"ESENS Consulting\",\n\t\t\t\t\t\t\"description\": \"Bring your team’s work together in one shared space. Manage your boards, columns &amp; cards to transform your projects. Organize tasks, and build the way your teams work.\",\n\t\t\t\t\t\t\"image\": {\n\t\t\t\t\t\t\t\"@type\": \"ImageObject\",\n\t\t\t\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/image/esens.png\",\n\t\t\t\t\t\t\t\"height\": \"763\",\n\t\t\t\t\t\t\t\"width\": \"1439\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"logo\": {\n\t\t\t\t\t\t\t\"@type\": \"ImageObject\",\n\t\t\t\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/image/esens.png\",\n\t\t\t\t\t\t\t\"height\": \"763\",\n\t\t\t\t\t\t\t\"width\": \"1439\"\n\t\t\t\t\t\t},\n\t\t\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/\",\n\t\t\t\t\t\t\"sameAs\": [\n\t\t\t\t\t\t\t\"https://twitter.com/aedile_ic\",\n\t\t\t\t\t\t\t\"https://www.facebook.com/esensconsulting\",\n\t\t\t\t\t\t\t\"https://www.instagram.com/esensconsulting\",\n\t\t\t\t\t\t\t\"https://www.linkedin.com/company/esens-consulting\"\n\t\t\t\t\t\t]\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t\"creator\": {\n\t\t\t\t\t\"@type\": \"Organization\",\n\t\t\t\t\t\"name\": \"ESENS CONSULTING\",\n\t\t\t\t\t\"image\": {\n\t\t\t\t\t\t\"@type\": \"ImageObject\",\n\t\t\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co//uploads/esens_logo-2.png\",\n\t\t\t\t\t\t\"height\": \"1068\",\n\t\t\t\t\t\t\"width\": \"1919\"\n\t\t\t\t\t},\n\t\t\t\t\t\"logo\": {\n\t\t\t\t\t\t\"@type\": \"ImageObject\",\n\t\t\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co//uploads/esens_logo-2.png\",\n\t\t\t\t\t\t\"height\": \"1068\",\n\t\t\t\t\t\t\"width\": \"1919\"\n\t\t\t\t\t},\n\t\t\t\t\t\"location\": {\n\t\t\t\t\t\t\"@type\": \"Place\",\n\t\t\t\t\t\t\"name\": \"ESENS CONSULTING\"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t</script>\n\n\t\t<script type=\"application/ld+json\">\n\t\t\t{\n\t\t\t\t\"@context\": \"http://schema.org\",\n\t\t\t\t\"@type\": \"Place\",\n\t\t\t\t\"name\": \"Aedile\",\n\t\t\t\t\"description\": \"Bring your team’s work together in one shared space. Manage your boards, columns &amp; cards to transform your projects. Organize tasks, and build the way your teams work.\",\n\t\t\t\t\"image\": {\n\t\t\t\t\t\"@type\": \"ImageObject\",\n\t\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/images/favicon.png\",\n\t\t\t\t\t\"height\": \"938\",\n\t\t\t\t\t\"width\": \"1903\"\n\t\t\t\t},\n\t\t\t\t\"logo\": {\n\t\t\t\t\t\"@type\": \"ImageObject\",\n\t\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/assets/images/favicon.png\",\n\t\t\t\t\t\"height\": \"938\",\n\t\t\t\t\t\"width\": \"1903\"\n\t\t\t\t},\n\t\t\t\t\"url\": \"https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/\",\n\t\t\t\t\"sameAs\": [\n\t\t\t\t\t\"https://twitter.com/aedile_ic\",\n\t\t\t\t\t\"https://www.facebook.com/esensconsulting\",\n\t\t\t\t\t\"https://www.instagram.com/esensconsulting\",\n\t\t\t\t\t\"https://www.linkedin.com/company/esens-consulting\"\n\t\t\t\t]\n\t\t\t}\n\t\t</script>\n\n\t\t" + head + "\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid #ccc;\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	}
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
