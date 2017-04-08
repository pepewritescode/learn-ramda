module.exports = {
  entry: {
    R: './index.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};