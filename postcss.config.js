// postcss.config.js

module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(), // ✅ Updated Tailwind plugin
    require('autoprefixer'),
  ],
}
