const merge = require('webpack-merge');
const baseConf = require('./build/base-config');
const devConf = require('./build/dev-config');
const prodConf = require('./build/prod-config');

module.exports = () => {
  const env = process.env.NODE_ENV;
  console.log('env =', env);
  const isDev = env === 'development';
  const activeConf = isDev ? devConf : prodConf;
  // return merge(baseConf(isDev), activeConf);
  return baseConf(isDev);
};
