const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./app/**/*.{css,xml,html,vue,svelte,ts,tsx}'],
  // use the .ns-dark class to control dark mode (applied by NativeScript) - since 'media' (default) is not supported.
  darkMode: ['class', '.ns-dark'],
  theme: {
    extend: {
      borderWidth: {
        1: '1',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('ios', '.ns-ios &');
      addVariant('android', '.ns-android &');
    }),
  ],
  corePlugins: {
    preflight: false, // disables browser-specific resets
  },
};
