module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'amd': true,
    'node': true,
    'mocha': true,
  },
  'settings': {
    'react': {
      'createClass': 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      'pragma': 'React', // Pragma to use, default to "React"
      'version': 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      'flowVersion': '0.53', // Flow version
    },
    'propWrapperFunctions': [
      'forbidExtraProps',
      {'property': 'freeze', 'object': 'Object'},
      {'property': 'myFavoriteWrapper'},
    ],
    'linkComponents': [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      {'name': 'Link', 'linkAttribute': 'to'},
    ],
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    // 'google',
    'react-app',
  ],
  'overrides': [
    {
      'files': ['**/*.js'],
      'rules': {
        'react-hooks/exhaustive-deps': 'warn',
      },
    },
  ],
  'parser': '@babel/eslint-parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'react-hooks',
  ],
  'rules': {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'indent': [
      'error',
      2,
      {'SwitchCase': 1}
    ],
    'require-jsdoc': ['warn', {
      'require': {
        'FunctionDeclaration': true,
        'MethodDefinition': false,
        'ClassDeclaration': false,
        'ArrowFunctionExpression': false,
        'FunctionExpression': false,
      },
    }],
    'arrow-parens': ['warn', 'as-needed'],
    'arrow-body-style': ['error', 'as-needed'],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'no-console': [
      'off',
    ],
    'comma-dangle': 0,
    'no-trailing-spaces': 0,
    'max-len': [
      2,
      {
        'code': 140,
        'tabWidth': 2,
        'ignoreUrls': true,
        'ignorePattern': '^goog.(module|require)',
      },
    ],
    'new-cap': [2, {'capIsNewExceptions': ['Router']}],
    'max-statements': ['error', 60, {'ignoreTopLevelFunctions': true}],
    'max-lines': ['warn', {'max': 2000, 'skipComments': true, 'skipBlankLines': true}],
    'complexity': ['warn', 100],
    'no-unused-vars': [
      'error',
      {'varsIgnorePattern': 'should|expect'},
    ],
  },
};
