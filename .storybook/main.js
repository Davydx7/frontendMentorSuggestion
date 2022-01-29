module.exports = {
  "stories": ["../src/components/**/*.stories.tsx", "../src/components/**/*.stories.mdx"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/preset-scss"],
  "framework": "@storybook/react",
  core: {
    builder: "webpack5"
  }
};