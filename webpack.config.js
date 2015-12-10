var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js",
    publicPath: "/dist/",
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: [ 'babel?presets[]=es2015' ], exclude: /node_modules/, include:path.join(__dirname, 'src') },
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.html$/, loader: "html" }
    ]
  }
}