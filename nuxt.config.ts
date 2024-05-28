// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  alias: {
    assets: "/assets",
  },
  app: {
    head: {
      title: "Oleg Andreev | Front-end developer",
      charset: "utf-80",
      viewport: "width=device-width, initial-scale=1.0",
      meta: [{ name: "description", content: "CMS Local" }],
      link: [
        {
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
          rel: "stylesheet",
        },
      ],
    },
  },
  css: ["assets/main.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/_vars.scss" as *; @use "@/assets/_colors.scss" as *;',
        },
      },
    },
  },
});
