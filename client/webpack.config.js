const path = require('path');

module.exports = {
  entry: './src/entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
module: {
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    }
  ]
},
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    jQuery: 'jQuery',
  },
  mode: 'production',
};
