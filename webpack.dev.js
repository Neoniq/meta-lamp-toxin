const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: false,
  entry: {
    main: './src/app.js',
    // vendor: './src/vendor.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Cleans /dist folder
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    index: 'index.html',
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ['html-loader'],
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
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
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
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    // new CleanWebpackPlugin(),
  ],
};
