module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['babel-plugin-root-import'],
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@src': './src',
            '@assets': './src/assets',
            '@components': './src/components',
            '@screens': './src/screens',
            '@routes': './src/routes',
            '@utils': './src/utils',
            '@hooks': './src/hooks',
            '@context': './src/context',
            '@services': './src/services',
            '@constants': './src/constants',
            '@types': './src/types',
            '@styles': './src/styles',
            '@theme': './src/theme',
            '@config': './src/config',
          },
        },
      ],
    ],
  };
};
