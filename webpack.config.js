const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: './client/proxy.jsx',
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html'
  })],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  output: {
    filename: `${Date.now()}proxy.js`,
    path: path.resolve(__dirname, 'dist'),
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
                {
                  "targets": {
                    "node": "current"
                  },
                  "useBuiltIns": "entry",
                  "modules": false
                }
              ]]
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
