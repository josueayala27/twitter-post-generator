export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Create beatiful twitter images',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Updated for Twitter's latest look, with Tweetgen you can make and share believable fake Tweets. You can even generate images of reply chains, users blocking you, getting suspended, and more.",
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content:
          'Twitter Post Generator | Create Beautiful Images of Twitter Posts',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          "Updated for Twitter's latest look, with Tweetgen you can make and share believable fake Tweets. You can even generate images of reply chains, users blocking you, getting suspended, and more.",
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content:
          'Twitter Post Generator | Create Beautiful Images of Twitter Posts',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Capture and share Twitter posts as beautiful images.',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@joscode',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          'https://twitter-post-generator.vercel.app/cover/twitter-post-generator.png',
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://twitter.com/joscode',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://twitter-post-generator.vercel.app/',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content:
          'https://twitter-post-generator.vercel.app/cover/twitter-post-generator.png',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'screenshot, capture, share, create, convert, twitter, post, tweet, image, picture, photo, export',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css', '@/assets/css/tooltip.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/v-tooltip.client.js',
    '@/plugins/dom-to-svg.client.js',
    '@/plugins/filters.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    { path: '@/components/ui', extensions: ['vue'] },
    { path: '@/components/ui/select', extensions: ['vue'] },
    { path: '@/components', extensions: ['vue'] },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
    // https://google-fonts.nuxtjs.org/
    [
      '@nuxtjs/google-fonts',
      {
        preconnect: true,
        preload: true,
        download: true,
        overwriting: true,
        families: {
          Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
      },
    ],
    // https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg',
    // https://google-analytics.nuxtjs.org/setup
    '@nuxtjs/google-analytics',
  ],

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
    checkDuplicatedScript: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/robots',
      {
        UserAgent: '*',
        Allow: '/',
        Sitemap: 'https://twitter-post-generator.vercel.app/sitemap.xml',
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
