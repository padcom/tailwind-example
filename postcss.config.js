module.exports = {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    '@fullhuman/postcss-purgecss': {
      content: ['./src/**/*.vue', 'index.html'],
      extractors: [{
        /**
         * This extractor function removes all <style> tags from SFCs
         *
         * @param {String} content content to be processed
         * @returns {String[]} stripped content
         */
        extractor(content) {
          return content
            .replace(/<style[^]+?<\/style>/gi, '')
            .match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
        },
        extensions: ['vue'],
      }],
    },
    cssnano: {
      preset: 'default'
    }
  }
}
