// npx webpack -c ./config/webpack.config.dev.js  自定义运行的config文件
// npx webpack serve -c ./config/webpack.config.dev.js 本地服务

const path = require("path");

// npx webpack --env production 如果要区分环境变量，需要将module.exports设置为function

module.exports = {
  // entry: './src/index.js',
  output: {
    // contenthash可以根据文件的内容生成哈希字符串（页面加载时根据文件名是否变化来判断是读取缓存还是重新加载）
    filename: "scripts/[name].js",
  },
  // mode: 'development',
  mode: "development", // 使用CssMinimizerWebpackPlugin时mode改为production
  // 代码调试（源码为原文件非打包后的文件）
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "../dist"),
    },
    compress: true,
    port: 8080,
  },
};
