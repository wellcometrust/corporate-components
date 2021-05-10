module.exports = function(api) {
  api.cache(true);

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
  ];

  const plugins = [
    '@babel/plugin-proposal-optional-chaining',
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3
      }
    ],
    /**
     * Add these options to silence the Storybook build warnings about different loose mode configuration
     * @see https://github.com/babel/babel/issues/11622
     */
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }]
  ];

  return {
    plugins,
    presets
  };
};
