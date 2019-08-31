const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.modules.push(path.resolve(__dirname, '../'));

  return config;
};
