const blogCategories= ["digital-marketing","content-marketing","growth-hacking","social-media","mobile",
                        "community-management","email","word-of-mouth","analytics","brand-identity"]



module.exports={ 
  exportPathMap: () => ({ 
      "/": {page: '/'},
      '/digital-marketing/website-digital-gq': { page: '/post', query: { title: 'custom pathmap' } }
  })
}

                        
const withFonts = require('next-fonts')
const withCSS	= require('@zeit/next-css');
const withSass	= require('@zeit/next-sass');
const withImages = require('next-images');
const nextWebpackConfig = withFonts(withImages(withCSS(withSass({
	cssModules: true
	/*webpack: config => {
    const alias = { ...config.resolve.alias }
    delete alias.url // alias to native-url
    config.resolve = {
      ...config.resolve,
      alias
    }
    return config
  }*/

}))))
module.exports = nextWebpackConfig;