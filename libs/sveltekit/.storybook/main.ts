import type { StorybookConfig } from "@storybook/sveltekit";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|ts|svelte)"],
  addons: [
    "@storybook/addon-svelte-csf",
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/sveltekit",
    options: {},
  },
};
export default config;
