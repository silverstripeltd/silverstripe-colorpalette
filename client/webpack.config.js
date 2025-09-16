const path = require('path');

module.exports = {
  entry: './src/entry.js',
  output: {
    filename: 'colorpalette.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/client/dist/'
  },
  module: {
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'], // add this
    }
  ]
},
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
