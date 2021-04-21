module.exports = {
  plugins: [
    // Runs prettier as an eslint rule
    'prettier'
  ],
  extends: [
    // Always extend eslint's recommended ruleset
    'eslint:recommended',
    // Extend community Standard ruleset
    'standard-with-typescript',
    // Turn off eslint rules that could conflict with prettier
    'plugin:prettier/recommended'
  ],
}