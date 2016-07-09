/**
 * Format the project
 * @function format
 * @param {Object} options - Optional settings
 * @returns {Promise}
 */
'use strict'

const defaults = require('defaults')

const { runTasks } = require('ape-tasking')
const { formatJs } = require('ape-formatting')

/** @lends format */
function format (options = {}) {
  let { taskName, patterns, ignore } = defaults(options, {
    taskName: 'format',
    patterns: [
      '.*.bud',
      'lib/.*.bud',
      'example/*.js',
      'doc/mocks/*.js',
      'test/.*.bud'
    ],
    ignore: [ 'lib/index.js' ]
  })
  return runTasks(taskName, [
    () => formatJs(patterns, { ignore })
  ], true)
}

module.exports = format
