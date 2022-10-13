const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mf5ec4',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
