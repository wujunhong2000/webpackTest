const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
   // entry: './src/index.js',
   entry: {
      // 如果不同的入口文件中引用了相同的包，会打包到各自的chunk中，不能共享
      // index: './src/index.js',
      // another: './src/another-module.js',

      // 避免重复依赖的方式1
      // index: {
      //    import: './src/index.js',
      //    dependOn: 'shared',
      // },
      // another: {
      //    import: './src/another-module.js',
      //    dependOn: 'shared',
      // },
      // shared: 'lodash',

      // 避免重复依赖的方式2
      // index: './src/index.js',
      // another: './src/another-module.js',

      // 避免重复依赖的方式3
      index: './src/index.js',
      another: './src/another-module.js',
   },
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, './dist'),
      clean: true, 
      // ext 拓展名  
      assetModuleFilename: 'image/[contenthash][ext]'
   },
   // mode: 'development',
   mode: 'production', // 使用CssMinimizerWebpackPlugin时mode改为production
   // 代码调试（源码为原文件非打包后的文件）
   devtool: 'inline-source-map',
   plugins: [
      new HtmlWebpackPlugin({
         template: './index.html',
         filename: 'app.html',
         inject: 'body'
      }),
      // mini-css-extract-plugin（基于webpack5）
      // 本插件会将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载。
      new MiniCssExtractPlugin({
         filename: 'style/[contenthash].css',
      })
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
      // 通过loader可以然webpack处理其他类型的文件，并转换为有效的模块 
       {
         //  需要被转化的文件后缀
         test: /\.(css|less)$/,
         // 使用的转化loader
         // 逆序调用，'css-loader' -> 'style-loader'
         // use: ['style-loader', 'css-loader', 'less-loader'],
         use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
       },
       {
         //  加载文字资源
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         type: 'asset/resource',
       },
       {
         test: /\.(csv|tsv)$/i,
         use: ['csv-loader'],
       },
       {
         test: /\.xml$/i,
         use: ['xml-loader'],
       },
       {
         test: /\.m?js$/,
         exclude: /(node_modules|bower_components)/,
         use: {
           loader: 'babel-loader',
           options: {
             presets: ['@babel/preset-env'],
             plugins: [['@babel/plugin-transform-runtime']],
           }
         }
       },
      ],
    },
    optimization: {
      //  这个插件使用 cssnano 优化和压缩 CSS。
      // 就像 optimize-css-assets-webpack-plugin 一样，但在 source maps 和 assets 中使用查询字符串会更加准确，支持缓存和并发模式下运行。
       minimizer: [
          new CssMinimizerWebpackPlugin(),
       ],
      //  避免重复依赖的方式2 （静态资源加载时打开）
       splitChunks: {
         chunks: 'all',
       },

    }
}