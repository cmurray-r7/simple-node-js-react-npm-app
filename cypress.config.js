const { defineConfig } = require("cypress");
const dotenvPlugin = require("cypress-dotenv");

module.exports = defineConfig({
  sandbox: "r7--qa.sandbox.my.salesforce.com",
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        launchOptions.extensions.push('/Users/cmurray/rapid7/rapid7-customer-success-extension/dist');
        return launchOptions;
      });
      config = dotenvPlugin(config, null, true);
      return config;
    },
    baseUrl: "https://r7--qa.sandbox.lightning.force.com/lightning",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    experimentalSkipDomainInjection: ['*.salesforce.com', '*.force.com'],
    testIsolation: false
  },
  viewportHeight: 858,
  viewportWidth: 1300,
  video: false
});
