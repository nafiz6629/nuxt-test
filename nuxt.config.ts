// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: 'Masud1',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Masud2' }
      ]
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxt/image", '@nuxtjs/sitemap'],
  sitemap: {
    sources: [
      '/api/sitemap',
    ],
    exclude: ['/about/**'],
    include: ['/blog/**'],
  },
})