/**
 * @function render
 */

'use strict'

const tmplconv = require('tmplconv')
const co = require('co')

let prefix = '~~~~'
let suffix = '~~~~'
/** @lends render */
function render (tmpl, dest, config, options = {}) {
  return co(function * () {
    return yield tmplconv.render(tmpl, dest, {
      silent: options.silent,
      pattern: [
        '**/*.*',
        '.*',
        '**/.*.bud.tmpl',
        '**/.*.hbs.tmpl'
      ],
      ignore: [
        '.DS_Store',
        '.svg'
      ],
      prefix,
      suffix,
      clean: false,
      once: false,
      data: config
    })
  })
}

module.exports = render
