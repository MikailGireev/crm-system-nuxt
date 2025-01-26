export default defineNuxtConfig({
  compatibilityDate: '2025-01-26',
  devtools: { enabled: false },
  imports: { autoImport: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    'shadcn-nuxt',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Lato: {
            wght: [300, 400, 700],
            ital: [300],
          },
        },
      },
    ],
    '@nuxt/icon',
    '@pinia/nuxt',
    ['@vee-validate/nuxt', { autoImports: true }],
  ],
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui',
  },
  pinia: {
    storesDirs: ['./store/**'],
  },
});
