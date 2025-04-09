import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/api/**/*.cy.ts",
    supportFile: "cypress/support/e2e.ts",
    fixturesFolder: false,
    video: false,
    setupNodeEvents(on, config) {
      // Implementar tasks se necessário
    },
  },
});
