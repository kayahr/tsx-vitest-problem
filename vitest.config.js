import { defineConfig } from "vitest/config";
import { resolve } from "node:path";
import tsconfig from "./tsconfig.json" with { type: "json" };

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
