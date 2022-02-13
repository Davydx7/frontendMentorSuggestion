const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.info(path.resolve(__dirname, '../src/styles/global.scss'));

module.exports = {
	entry: path.resolve(__dirname, '..', './src/index.tsx'),
	// https://webpack.js.org/configuration/cache/
	cache: {
		cacheDirectory: path.resolve(__dirname, '.temp_cache'),
		type: 'filesystem',
	},
	stats: 'detailed',
	resolve: {
		alias: {
			assets: path.resolve(__dirname, '../src/assets'),
			components: path.resolve(__dirname, '../src/components'),
			hooks: path.resolve(__dirname, '../src/hooks'),
			styles: path.resolve(__dirname, '../src/styles'),
			services: path.resolve(__dirname, '../src/services'),
			types: path.resolve(__dirname, '../src/@types'),
			utils: path.resolve(__dirname, '../src/utils'),
		},
		extensions: ['.tsx', '.ts', '.js'],
	},
	module: {
		rules: [
			{
				exclude: /node_modules/,
				test: /\.(ts|js)x?$/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader',
					{
						loader: 'sass-resources-loader',
						options: {
							resources: [path.resolve(__dirname, '../src/styles/_variables.scss')],
						},
					},
				],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|)$/,
				type: 'asset/inline',
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
		],
	},
	output: {
		clean: true,
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, '..', 'dist'),
		publicPath: '/',
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '..', './src/index.html'),
		}),
	],
};
