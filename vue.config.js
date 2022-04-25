module.exports = {
  transpileDependencies: true,
  lintOnSave:false,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/' + process.env.CI_PROJECT_NAME + '/'
  : '/'
}
