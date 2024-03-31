import { defineConfig } from "cypress";
import "dotenv/config";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      console.log(on, config);
    },
  },
  env: {
    DELAY_COMMANDS: process.env.DELAY_COMMANDS,
    APP_HOME_URL: process.env.APP_HOME_URL,
    USER_PASSWORD: process.env.USER_PASSWORD,
    USER_EMAIL: process.env.USER_EMAIL,
  },
});
