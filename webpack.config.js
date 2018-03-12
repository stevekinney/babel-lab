const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    promises: path.join(__dirname, 'promises.js'),
    ['constructor-class']: path.join(__dirname, 'constructor-class.js'),
    ['async-await']: path.join(__dirname, 'async-await.js'),
    noop: path.join(__dirname, 'noop.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};