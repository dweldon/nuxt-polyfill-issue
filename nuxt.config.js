module.exports = {
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
