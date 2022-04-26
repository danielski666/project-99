module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === "production" ? "/project-99/" : "/",
}
