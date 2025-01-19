import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        include: [ "src/**/*.test.{ts,tsx}" ],
        browser: {
            enabled: true,
            provider: "playwright",
            headless: true,
            screenshotFailures: false,
            instances: [
                {
                    browser: "chromium"
                }
            ]
        }
    }
});
