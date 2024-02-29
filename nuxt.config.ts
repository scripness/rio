// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  // modules: ["@nuxt-alt/proxy"],
  // proxy: {
  //   debug: true,
  //   proxies: {
  //     "^/profile": {
  //       target: "http://localhost:3000/ascrip/profile",
  //       ignorePath: true,
  //       rewrite: (path) => path.replace(/^\/profile/, ""),
  //     },
  //   },
  // },
  // routeRules: {
  //   "/profile/**": {
  //     proxy: {
  //       to: "/ascrip/profile/**",
  //     },
  //   },
  // },
  // hooks: {
  //   "pages:extend"(pages) {
  //     pages.push({
  //       name: "profile2",
  //       path: "/profile2",
  //       file: "~/pages/[[slug]]/profile",
  //     });
  //   },
  // },
});
