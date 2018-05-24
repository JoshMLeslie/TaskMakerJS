const path = require('path');

// production development

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: './app/TaskMakerJS.js',
  output: {
    path: path.resolve(__dirname, 'app', 'assets'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '*']
  },
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env']
          }
        },
      }
    ]
  },
  devtool: 'source-map'
};
