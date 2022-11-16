// 运行命令
// npx webpack serve -c ./config/webpack.config.js --env development
// npx webpack -c ./config/webpack.config.js --env production

// merge 其他几个config文件
const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.config.common");
const developmentConfig = require("./webpack.config.dev");
const productionConfig = require("./webpack.config.prod");

module.exports = (env) => {
  switch (true) {
    case env.development:
      return merge(commonConfig, developmentConfig);
    case env.production:
      return merge(commonConfig, productionConfig);
    default:
      return new Error('not found');
  }
};
