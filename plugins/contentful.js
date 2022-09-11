import * as contentful from 'contentful'
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const client = contentful.createClient({
    space: config.public.CTF_SPACE_ID,
    accessToken: config.public.CTF_CDA_ACCESS_TOKEN,
  })
  return {
    provide: {
      contentful: client,
    }
  }
})