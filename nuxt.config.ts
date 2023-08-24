// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  // nuxt default에 pathPrefix 추가
  components: {
    dirs: [
      {
        path: '~/components/global',
        global: true,
        pathPrefix: false, // https://nuxt.com/docs/guide/directory-structure/components#component-names
      },
      {
        path: '~/components',
        pathPrefix: false, // https://nuxt.com/docs/guide/directory-structure/components#component-names
      },
    ],
  },
});
