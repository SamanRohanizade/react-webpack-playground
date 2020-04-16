const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackEnv => {
  let isEnvDevelopment = !!webpackEnv && webpackEnv.development === true;

  return {
    mode: isEnvDevelopment ? 'development' : 'production',
    entry: {
      app: './src/index.js'
    },
    output: {
      path: path.join(__dirname, 'build'),
      filename: isEnvDevelopment ?
        '[name].[hash].js' :
        '[name].[chunkhash].js',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(scss|sass)$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: require.resolve('./src/index.html'),
        inject: true
      })
    ]
  }
}