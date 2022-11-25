const { loadEnvConfig } = require('@next/env');
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
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // eslint-disable-next-line no-param-reassign
      config.env = process.env;
      const projectDir = process.cwd();
      loadEnvConfig(projectDir);
      return config;
    },
    baseUrl: 'http://localhost:3000',
  },
});
