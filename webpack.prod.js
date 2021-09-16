const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: false,
  entry: {
    main: './src/app.js',
    // vendor: './src/vendor.js',
  },
  output: {
    filename: '[name].[chunkhash:8].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Cleans /dist folder
  },
  mode: 'production',
  module: {
    rules: [
      // {
      //   test: /\.html$/i,
      //   use: ['html-loader'],
      //   generator: {
      //     filename: '[name][ext]',
      //   },
      // },
      {
        test: /\.pug$/i,
        use: ['html-loader', 'pug-html-loader'],
        generator: {
          filename: '[name][ext]',
        },
      },
      {
        test: /\.(png|jpg)$/i,
        use: ['file-loader'],
      },
      {
        test: /\.css$/i,
        use: [
          // Creates a CSS file per JS file which contains CSS
          MiniCssExtractPlugin.loader,

          // Creates `style` nodes from JS strings
          // 'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates a CSS file per JS file which contains CSS
          MiniCssExtractPlugin.loader,

          // Creates `style` nodes from JS strings
          // 'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash:8].css',
    }),
    // new HtmlWebpackPlugin({
    //   template: './src/index.pug',
    //   filename: 'index.html',
    //   minify: false,
    // }),
    new HtmlWebpackPlugin({
      template: './src/index.pug',
    }),
    // new HtmlWebpackPugPlugin({
    //   adjustIndent: true,
    // }),
    // new CleanWebpackPlugin(),
  ],
};
