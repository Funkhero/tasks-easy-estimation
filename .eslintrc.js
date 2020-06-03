module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  "env": {
    "es6": true,
    "browser": true
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended'
  ],
  globals: {
    '_': true,
    'axios': true,
    'Vue': true,
    'Vuex': true,
  },
  rules: {
    'arrow-body-style': 'off',
    'consistent-return': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'max-len': 'off',
    'no-param-reassign': 'off',
    'no-trailing-spaces': 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-escape': 'off',
    'no-console': 'off',
    'radix': 'off',
    'func-names': 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/no-v-html': 'off',
  }
};
