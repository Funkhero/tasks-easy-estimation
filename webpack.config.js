const merge = require('webpack-merge');
const baseConf = require('./build/base-config');
const devConf = require('./build/dev-config');
const prodConf = require('./build/prod-config');

module.exports = (env) => {
  console.log('env =', env);
  const isDev = env === 'development';
  const activeConf = isDev ? devConf : prodConf;
  return merge(baseConf(isDev), activeConf);
};
