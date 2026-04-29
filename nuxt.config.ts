// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui'],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
    '/ssr': { ssr: true },
    '/csr': { ssr: false },
    '/ssg': { prerender: true },
    '/isr': { swr: 5 }
  },
  nitro: {
    storage: {
      cache: {
        driver: 'fs',
        base: './.nitro/cache'
      }
    }
  },
  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
});
