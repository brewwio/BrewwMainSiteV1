import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
   
    '~/assets/common.css',
   
  ],
  app: {
    head: {
      link: [
      
      { rel :"stylesheet", href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.2.0/css/all.min.css' },
      { rel :"stylesheet", href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' },
      ],
    },
  }, // Closing bracket for 'app'

  ssr: false,
 

 
})
