// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      title: 'Virtual Telco Website',
      meta:[{ name: 'description', content: 'The small business hub for everything telco'},
            {name: 'keywords', content: 'call answering, virtual landline, telephone number, business number'}
          ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in'},
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },
  site: {
    url: '',
    identity: {
      type: 'Person',
    },
    twitter: '@',
  },

  typescript: {
    strict: true,
  },

  nitro:{
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ],
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light',
  },
  
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/fontaine',
    '@nuxtjs/color-mode',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-icon',
    'nuxt-og-image',
  ],

  content: {
    highlight: {
      theme: 'dracula',
    },
  },
})
