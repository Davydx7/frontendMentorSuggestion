const custom = require('../webpack/webpack.common');
const path = require('path');

module.exports = {
	stories: [
		'../src/components/**/*.stories.tsx',
		'../src/components/**/*.stories.mdx',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/preset-scss',
	],
	framework: '@storybook/react',
	core: {
		builder: 'webpack5',
	},
	webpackFinal: async (config) => {
		return {
			...config,
			module: { ...config.module, rules: custom.module.rules },
      resolve: {
        alias: custom.resolve.alias,
				extensions: custom.resolve.extensions,
			},
		};
	},
};
