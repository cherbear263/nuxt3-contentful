import { defineNuxtConfig } from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/main.css'],
  plugins: ['~/plugins/contentful.js'],
  runtimeConfig:{
    public: {
      CTF_SPACE_ID: process.env.CTF_SPACE_ID,
      CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
    }
  }
  })
