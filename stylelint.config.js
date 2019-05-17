module.exports = {
  extends: 'stylelint-config-recommended',
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['for', 'if', 'else', 'include', 'mixin']
      }
    ],
    'no-descending-specificity': null
  }
};
