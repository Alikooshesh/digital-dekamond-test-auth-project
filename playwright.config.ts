import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  webServer: { command: 'npm run dev', port: 3000, timeout: 120000, reuseExistingServer: !process.env.CI },
  use: { baseURL: 'http://localhost:3000', trace: 'on-first-retry' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
