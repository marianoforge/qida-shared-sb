import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/components/**/*.stories.@(ts|tsx)",
    "../src/tokens/**/*.stories.@(ts|tsx)",
  ],
  addons: ["@storybook/addon-essentials"],
  framework: "@storybook/react-vite",
};

export default config;
