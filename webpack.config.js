const merge = require('webpack-merge');
const baseConf = require('./build/base-config');
const devConf = require('./build/dev-config');
const prodConf = require('./build/prod-config');

module.exports = (env) => {
  console.log('env = ', env);
  if (env === 'production') return merge(baseConf, prodConf);
  return merge(baseConf, devConf);
};
