export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["carrousel.json","fonts/chakraPetch/ChakraPetch-Bold.ttf","fonts/chakraPetch/ChakraPetch-BoldItalic.ttf","fonts/chakraPetch/ChakraPetch-Italic.ttf","fonts/chakraPetch/ChakraPetch-Light.ttf","fonts/chakraPetch/ChakraPetch-LightItalic.ttf","fonts/chakraPetch/ChakraPetch-Medium.ttf","fonts/chakraPetch/ChakraPetch-MediumItalic.ttf","fonts/chakraPetch/ChakraPetch-Regular.ttf","fonts/chakraPetch/ChakraPetch-Semibold.ttf","fonts/poppins/Poppins-Bold.ttf","fonts/poppins/Poppins-Regular.ttf","fonts/poppins/Poppins-SemiBold.ttf","images/arrow-try-beta-icon.svg","images/arrow.svg","images/carrousel/carrousel-1.png","images/carrousel/carrousel-2.png","images/carrousel/carrousel-3.png","images/discord.svg","images/favicon.png","images/github.svg","images/home/aedile-charater.svg","images/home/bg-build-and-fund.svg","images/home/bg-contact-line.svg","images/home/bg-contact.svg","images/home/bg-roadmap.png","images/home/bg-star-2.png","images/home/bg-star.png","images/home/bg-work-together.svg","images/home/board-content.svg","images/home/contact-image.png","images/home/group-1.png","images/home/group-2.png","images/home/group-3.png","images/home/group-4.png","images/home/group-5.png","images/home/group-6.png","images/home/icon-contact.svg","images/home/left-contact.svg","images/home/right-contact.svg","images/logo-text.svg","images/twitter.svg"]),
	mimeTypes: {".json":"application/json",".ttf":"font/ttf",".svg":"image/svg+xml",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-cc16b56b.js","imports":["_app/immutable/start-cc16b56b.js","_app/immutable/chunks/index-a4c2fac1.js","_app/immutable/chunks/singletons-4d1a7bd4.js","_app/immutable/chunks/preload-helper-41c905a7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
