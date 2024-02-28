// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/fontaine',
    '@nuxtjs/color-mode',
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
    'nuxt-icon',
    'nuxt-og-image',
  ]
})
