module.exports = {
  'pages/*.js': [
    'npx next-sitemap',
    'git add public/sitemap.xml public/robots.txt',
  ],
  '**/*.(js|jsx)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn format --write ${filenames.join(' ')}`,
    `git add ${filenames.join(' ')}`,
  ],
  '**/*.(css|scss)': (filenames) => [
    `yarn style-lint --fix ${filenames.join(' ')}`,
    `git add ${filenames.join(' ')}`,
  ],
}
