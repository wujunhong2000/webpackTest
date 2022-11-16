const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin"); //  npx webpack --env production 需要在生产环境下打包才能压缩

// npx webpack --env production 如果要区分环境变量，需要将module.exports设置为function

module.exports = {
  output: {
    // contenthash可以根据文件的内容生成哈希字符串（页面加载时根据文件名是否变化来判断是读取缓存还是重新加载）
    filename: "scripts/[name].[contenthash].js",
    //  publicPath 所有资源的路径前面添加项目的前端域名或者cdn域名
    publicPath: 'http://localhost:8080/'
  },
  mode: "production", // 使用CssMinimizerWebpackPlugin时mode改为production
  optimization: {
    //  这个插件使用 cssnano 优化和压缩 CSS。
    // 就像 optimize-css-assets-webpack-plugin 一样，但在 source maps 和 assets 中使用查询字符串会更加准确，支持缓存和并发模式下运行。
    // 如果配置了CssMinimizerWebpackPlugin，webpack开箱即用的terser（压缩代码）会失效，terser需要用TerserWebpackPlugin单独配置
    minimizer: [new CssMinimizerWebpackPlugin(), new TerserPlugin()],
    //  避免重复依赖的方式2 （静态资源加载时打开）
  },
};
