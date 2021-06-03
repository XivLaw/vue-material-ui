const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('mt-admin', resolve('packages'));
  },
  pages: {
    examples: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  }
}