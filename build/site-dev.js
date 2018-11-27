const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const buildPath = path.resolve(__dirname, '../dist');
module.exports = {
  mode:"development",
  devtool: 'cheap-eval-source-map',
  context:path.resolve(__dirname, '../site'),
  entry:{
    vendor: ['react', 'react-dom'],
    app: [ 'webpack-dev-server/client?http://localhost:9090',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch','./index.js']
  },
  output: {
    path: buildPath,
    publicPath: "/",
    chunkFilename: "js/[name].[hash].js",
    filename: "js/[name].[hash].js",
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader?cacheDirectory',
        },
        include: [
          path.join(__dirname, '../site'),
          path.join(__dirname, '../src'),
          path.join(__dirname, '../utils'),
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          "style-loader", //上面的简写方式
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?[tv]=[\d.]+)*$/,
        use: ['file-loader?name=[name].[ext]']
      },
      {
        test: /\.md$/,
        loader : 'raw-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      hash: false,
      chunksSortMode:"none"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    host: '127.0.0.1',
    port: '9090',
    contentBase: buildPath,
    publicPath: "/",
    historyApiFallback: true,
    disableHostCheck: true,
    compress: true,
    hot: true,
    inline:true
  }
};