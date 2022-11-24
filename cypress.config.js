const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'ejmpme',
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 10000,
  fixturesFolder: 'cypress/fixtures',
  e2e: {
    setupNodeEvents(on, config) {
      // eslint-disable-next-line no-param-reassign
      config.env = process.env;
      return config;
    },
    baseUrl: 'http://localhost:3000',
  },
});
