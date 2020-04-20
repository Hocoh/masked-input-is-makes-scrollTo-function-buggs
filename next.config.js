
const withFonts = require('next-fonts')
const withCSS	= require('@zeit/next-css');
const withSass	= require('@zeit/next-sass');
const withImages = require('next-images');
const nextWebpackConfig = withFonts(withImages(withCSS(withSass({
	cssModules: true
}))))
module.exports = nextWebpackConfig;
