export default {
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
        content: 'Create beatiful twitter images',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  serverMiddleware: [{ path: '/api', handler: '@/api/app.js' }],

  css: ['@/assets/css/main.css', '@/assets/css/tooltip.css'],

  plugins: ['@/plugins/v-tooltip.client.js', '@/plugins/dom-to-svg.client.js'],

  components: [
    { path: '@/components/ui', extensions: ['vue'] },
    { path: '@/components/ui/select', extensions: ['vue'] },
    { path: '@/components', extensions: ['vue'] },
  ],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
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
    '@nuxtjs/svg',
    [
      '@nuxtjs/google-analytics',
      {
        config: { id: process.env.GOOGLE_ANALYTICS_ID },
      },
    ],
  ],

  modules: ['@nuxtjs/axios'],

  axios: {},

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
