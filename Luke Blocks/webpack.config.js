var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
 "video.js", "chart.js"
];

module.exports = {
  entry: {
    bundle: './src/scripts/main.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
    //this is a unique string of characters - every single time a change is made, the name of the file will slightly change, informing the browser is has slightly changed, so it must re-download the browser
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
    }, {
      test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
      loaders: 'url-loader'
    }, {
      use: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
      //do not apply babel to any files inside node modules
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']

      //busts the cache
      //created manifest.js file to tell the browser that the vendor file has been changed

      //look at sum of project files between vendor and bundle entry point -- if any modules included in those dependency structures are duplicates, pull them out and only put them into the venor entry point

      //solves issue of double including dependencies both in bundle and vendor outputs
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new ExtractTextPlugin('styles.css')
  ]
}
