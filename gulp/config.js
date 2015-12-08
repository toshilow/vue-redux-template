// @file config.js
const dest = './dist'
const src = './src'

module.exports = {
  dest: dest,
  copy: {
    src: [
      src + '/index.html'
    ],
    dest: dest
  },
}