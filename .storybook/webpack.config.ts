import * as path from 'path';
import * as webpack from 'webpack';

module.exports = ({ config }: { config: webpack.Configuration }) => {
  config.module!.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
      },
    ],
  });
  config.resolve!.extensions!.push('.ts', '.tsx');
  config.resolve!.modules!.push(path.resolve(__dirname, '../'));

  return config;
};
