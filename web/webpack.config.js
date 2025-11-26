const { getDefaultConfig } = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await getDefaultConfig({ ...env, 
    babel: 
    { dangerouslyAddModulePathsToTranspile: 
      ['expo-router',
        '@react-native-async-storage/async-storage',] 
      } });

  // Fix for Cloudflare / browser environment
  config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: false,
    path: false,
  };

  return config;
};
