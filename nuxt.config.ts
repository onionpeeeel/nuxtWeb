// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
      public: {
          apiUrl: process.env.API_URL || 'http://localhost:8080'
      }
    },
  devtools: { enabled: false },
  css: [
      '@/assets/styles/tailwind.css'
  ],
  modules: [
      '@nuxtjs/tailwindcss', '@nuxtjs/eslint-module'
  ],
  postcss: {
    plugins: {
      'postcss-import' : {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    }
  }
})
