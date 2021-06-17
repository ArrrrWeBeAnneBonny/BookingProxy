const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
  entry: './client/src/Index.jsx',
  output: {
    filename: 'proxy.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-react",
              [
                "@babel/preset-env",
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.output.publicPath = 'http://localhost:2000';
    config.plugins = [
      new HtmlWebpackPlugin({
        template: './public/dev/index.html'
      }),
    ];
    config.watch = true;
    config.devtool = 'source-map';
  }
  if (argv.mode === 'production') {
    config.output.publicPath = 'http://ec2-54-151-15-127.us-west-1.compute.amazonaws.com';
    config.plugins = [
      new HtmlWebpackPlugin({
        template: './public/prod/index.html'
      }),
    ];
  }

  return config;
};