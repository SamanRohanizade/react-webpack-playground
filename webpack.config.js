const path = require('path');

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
    }
  }
}