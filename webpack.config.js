const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './dist'),
      clean: true, 
      // ext 拓展名  
      assetModuleFilename: 'image/[contenthash][ext]'
   },
   mode: 'development',
   // 代码调试（源码为原文件非打包后的文件）
   devtool: 'inline-source-map',
   plugins: [
      new HtmlWebpackPlugin({
         template: './index.html',
         filename: 'app.html',
         inject: 'body'
      }),
   ],
   module: {
      rules: [
        {
          test: /\.png$/,
          type: 'asset/resource',
          generator: {
            //  导出资源
            //  优先级高于assetModuleFilename
             filename: 'image/[contenthash][ext]'
          }
        },
        {
         test: /\.svg$/,
         // inline 生成data url
         // 不再dist生成文件
         type: 'asset/inline',
       },
       {
         test: /\.txt$/,
         // 导出资源源代码
         // 不再dist生成文件
         type: 'asset/source',
       },
       {
         test: /\.jpg$/,
         // 自动选择resource | inline，默认文件大于8k选择resource
         // 继承output -> assetModuleFilename
         type: 'asset',
         parser: {
            dataUrlCondition: {
               // 修改临界值
               maxSize: 4 * 1024 * 1024,
            }
         }
       },
      ],
    },
}