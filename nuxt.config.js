module.exports = {
  head: {
    script: [
      { src: 'https://cdn.polyfill.io/v2/polyfill.min.js?features=Object.entries' },
    ],
  },
  mode: 'spa',
  modules: [
    '@nuxtjs/apollo',
  ],
  apollo: {
    clientConfigs: {
      default: {
        getAuth: () => 'abc123',
        httpEndpoint: 'http://localhost:4000',
      },
    },
  },
};
