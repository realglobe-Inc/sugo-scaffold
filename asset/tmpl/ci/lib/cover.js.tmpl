/**
 * Measure coverage of the project
 * @function cover
 * @param {Object} options
 * @returns {Promise}
 */
'use strict'

const defaults = require('defaults')
const { runTasks } = require('ape-tasking')
const { measureCoverage } = require('ape-covering')

/** @lends cover */
function cover (options = {}) {
  let { taskName, timeout, pattern } = defaults(options, {
    taskName: 'cover',
    timeout: 6000,
    pattern: 'test/*_test.js'
  })
  return runTasks(taskName, [
    () => measureCoverage('_mocha', [
      '-t', timeout, pattern
    ], {
      dir: 'coverage'
    })
  ], true)
}

module.exports = cover
