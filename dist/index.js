
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./image-focus.cjs.production.min.js')
} else {
  module.exports = require('./image-focus.cjs.development.js')
}
