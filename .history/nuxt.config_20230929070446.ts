import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/common.css',
  ],
  app: {
    head: {
      link: [
        { rel: "stylesheet", href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.2.0/css/all.min.css' },
        { rel: "stylesheet", href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' },
      ],
      script: [
        { src: 'https://code.jquery.com/jquery-3.6.0.min.js', body: true }, // Example of adding jQuery
      ]
    },
  }, // Closing bracket for 'app'
  ssr: false,
})
