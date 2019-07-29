const PRESET_ENV_NODE = {
  loose: true,
  targets: {
    node: 'current',
  },
};
const PRESET_ENV_BROWSER = {
  modules: false,
  loose: true,
};

module.exports = (api) => {
  const isTest = api.env('test');

  return {
    presets: [
      ['@babel/preset-env', isTest ? PRESET_ENV_NODE : PRESET_ENV_BROWSER],
      ['@babel/preset-react'],
    ],
  };
};
