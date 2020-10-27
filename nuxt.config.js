export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Forex Trader Profile',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { property: 'og:url', content: 'http://www.markettraders.com/trader-profile'},
      { property:'og:title', content:'Forex Trader Profile'},
      { property:'og:site_name', content:'Market Traders Institute'},
      { property:'og:url', content:'http://www.markettraders.com/trader-profile'},
      { property:'og:description', content:'The following self-evaluation helps people understand their strengths and their weaknesses via a personality self-evaluation.'},
      { property:'og:type', content:'website'},
      { property:'og:image', content:'http://www.markettraders.com/'},
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/images/favicon-mti.png' },
     // Bootstrap
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css',
        type: 'text/css'
      },
      // FontAwesome
      {
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css',
      },
      // Fonts
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto+Condensed:wght@400;700&display=swap',
      },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
