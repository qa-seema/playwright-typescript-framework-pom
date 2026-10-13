import { defineConfig, devices } from '@playwright/test';

const authFile = './playwright/.auth/user.json';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  use: {
    ...devices['Desktop Chrome'],
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'setup',
      testDir: './fixtures',
      testMatch: /auth\.setup\.ts/,
    },
    {
      name: 'login-tests',
      testMatch: /pom_login\.spec\.ts/,
    },
    {
      name: 'authenticated-tests',
      testMatch: /(?:pom_(?:prod|cart|checkout))\.spec\.ts/,
      dependencies: ['setup'],
      use: {
        storageState: authFile,
      },
    },
  ],
});