import { defineConfig } from "cypress";
require('dotenv').config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.PERCY_TOKEN = process.env.PERCY_TOKEN;
      return config;
    },
    baseUrl: 'https://automationexercise.com', 
    video: false,                             
    screenshotOnRunFailure: true, 
    supportFile: 'cypress/support/commands.ts',
    reporter: "cypress-mochawesome-reporter",  
    reporterOptions: {
      reportDir: "mochawesome-reports", 
      overwrite: false,
      html: true,   
      json: true,   
    }
  },
});