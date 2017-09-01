// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  //extends: 'standard',
  extends: 'airbnb-base/legacy',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'indent': ['error', 4],
    'semi': [2, 'always'],
    //Functions and class can be used before they are defiend.
    'no-use-before-define': ['error', { 'functions': false, 'classes': false, 'variables': true }],
    'keyword-spacing': ['error', {
        'before': true,
        'after': false,
        'overrides': {
            'import': {'after': true},
            'as': {'before': true, 'after': true},
            'from': {'before': true, 'after': true}
        }
    }],
    'key-spacing': ['error', {
        "multiLine": {
            "beforeColon": false,
            "afterColon": true
        },
        "align": {
            "beforeColon": true,
            "afterColon": true,
            "on": "colon"
        }
    }],
    'newline-after-var': ['error', 'always'],
    'one-var': ['error', { 'initialized': 'always', 'uninitialized': 'always' }],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'no-multi-spaces': [
        "error", { exceptions: {
            "VariableDeclarator": true,
            "ImportDeclaration": true
        }},
    ]
  }
}
