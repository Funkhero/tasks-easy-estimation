const { merge } = require('webpack-merge');
const baseConf = require('./build/base-config');
const devConf = require('./build/dev-config');
const prodConf = require('./build/prod-config');

module.exports = (env, options) => {
  console.log('mode =', options.mode);
  const isDev = options.mode === 'development';
  const activeConf = isDev ? devConf : prodConf;
  return merge(baseConf(isDev, options.mode), activeConf);
};
