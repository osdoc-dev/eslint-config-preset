module.exports = {
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  proseWrap: 'never',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  printWidth: 120,
  arrowParens: 'avoid',
  trailingComma: 'es5',
  plugins: [require.resolve('prettier-plugin-packagejson'), require.resolve('prettier-plugin-organize-imports')],
}
