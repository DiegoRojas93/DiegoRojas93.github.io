const path = require ('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
		// publicPath: 'http://localhost:3001'
	},
	resolve: {
		extensions: ['*', '.mjs', '.js', 'svelte']
	},
	module: {
		rules: [
			{
				test: /\.svg | jpg | png | mp4 | mp3 | webp$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 30000,
					}
				}
			},
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
				test: /\.svelte$/,
				exclude: /node_modules/,
				use: {
					loader: 'svelte-loader'
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin ({
			title: 'Portafolio de Diego',
			template: './public/index.html',
			filename: './index.html'
		})
	]
}