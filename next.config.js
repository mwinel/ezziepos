module.exports = {
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    domains: [
      {
        domain: "example.com",
        defaultLocale: "en",
      },
      {
        domain: "example.fr",
        defaultLocale: "fr",
        // an optional http field can also be used to test
        // locale domains locally with http instead of https
        http: true,
      },
    ],
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};
