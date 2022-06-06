module.exports = {
  "*.{js,ts}": [
    'eslint --ext .ts --ifnore-path .gitignore .',
    () => 'tsc-filtes --noEmit',
  ],
};
