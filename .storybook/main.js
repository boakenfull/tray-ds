module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register'
  ],
};