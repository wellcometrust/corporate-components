const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need

  // TypeScript
  config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx', '.json', '.css');

  // configure storybook to use absolute paths
  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve('./src/'),
    path.resolve('./src/components')
  ];

  config.module.rules.push({
    test: /\.(js|ts)x?$/,
    exclude: /node_modules/,
    use: [
      require.resolve('babel-loader'),
      require.resolve('react-docgen-typescript-loader')
    ]
  });

  // CSS
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../../')
  });

  // Return the altered config
  return config;
};
