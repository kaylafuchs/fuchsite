const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const staticDir = path.resolve(__dirname, 'dist/static');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: staticDir,
    publicPath: '/static/',
    // Wipe old build output, but keep the hand-managed assets that live alongside it.
    clean: {
      keep: /^(favicon|headshot|creative)/,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // Leave root-relative urls like /static/headshot-2026.jpg for the server to resolve.
          { loader: 'css-loader', options: { url: { filter: (url) => !url.startsWith('/') } } },
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    port: 3030, // not 8080, which conflicts with other local apps
    historyApiFallback: { index: '/static/index.html' },
    // Serve headshots, favicon and creative-work images at /static/, same as the Go server.
    static: { directory: staticDir, publicPath: '/static/' },
  },
  plugins: [
    /* For webpack dev server only. Production server uses app/dist/index.html */
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({ filename: 'style.css' }),
  ],
};
