export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui',
  },
});
