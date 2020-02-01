const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   ust: [
      //     'filter-loader',
      //   ],
      // },
    ],
  },
};