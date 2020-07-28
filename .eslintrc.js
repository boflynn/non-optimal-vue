module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    dataLayer: false,
    _sift: false,
  },
  rules: {
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never'
    }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'test/**', // nightwatch tests
        'nightwatch.conf.js', // nightwatch config
        '**/vue.config.js', // vue-cli config
      ],
    }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': ['error', 'windows'],
    'max-len': ['error', {
      comments: 200,
      code: 4000,
    }],
    'no-console': process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'awsprd' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'awsprd' ? 'error' : 'off',
    'no-unused-vars': ['error', {
      args: 'after-used',
      ignoreRestSiblings: true,
    }],
    'no-param-reassign': 0,
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true,
    }],
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        ignores: [
          'b-loading',
          'b-modal',
          'b-tooltip',
          'component',
          'template',
          'transition',
          'transition-group',
          'keep-alive',
          'slot',
          'router-view',
          'router-link',
        ],
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 4,
        multiline: {
          max: 1,
          allowFirstLine: true,
        },
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        multiline: 'never',
      },
    ],
    radix: ['error', 'as-needed'],
    'no-shadow': [
      'error',
      {
        allow: ['state', 'getters'],
      },
    ],
  },
};
