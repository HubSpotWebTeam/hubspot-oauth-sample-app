const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './functions/oauth-app.functions/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/functions/oauth-app.functions'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'functions/**/serverless.json', to: 'serverless.json' },
      ],
    }),
  ],
  target: 'node',
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
};
