module.exports = {
    "extends": ["airbnb","plugin:prettier/recommended"],
    rules: {
      'prettier/prettier': [
        2,
        {
          bracketSpacing: true,
          singleQuote: true,
          trailingComma: 'all',
        },
      ],
      'react/jsx-filename-extension': 'off',
    },
    "env": {
      "jest": true
    }
};