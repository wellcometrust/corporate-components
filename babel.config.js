module.exports = function (api) {
  api.cache(true);

  const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ];

  const plugins = [
    '@babel/plugin-proposal-optional-chaining',
    [
      '@babel/plugin-transform-runtime',
      {
        'corejs': 3
      }
    ]
  ];

  return {
    plugins,
    presets,
  }
};
