const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const path = require('path');

module.exports = {
  components: 'src/**/*.jsx',
  serverHost: 'localhost',
  styleguideDir: 'public',
  title: 'Crodity elements',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'lib/styleguide/Wrapper'),
  },
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        // Other loaders that are needed for your components
        {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader?precision=10'],
        },
      ],
    },
    plugins: [
      new OpenBrowserPlugin({ url: 'http://localhost:6060' }),
    ],
  },
};

