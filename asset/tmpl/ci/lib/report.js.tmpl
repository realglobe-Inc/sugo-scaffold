/**
 * Send coverage report.
 * @function report
 * @param {Object} options - Optional settings
 * @returns {Promise}
 */
'use strict'

const { runTasks } = require('ape-tasking')
const { sendToCodeclimate } = require('ape-reporting')
const defaults = require('defaults')

/** @lends report */
function report (options = {}) {
  let { taskName, coverageSrc } = defaults(options, {
    taskName: 'report',
    coverageSrc: 'coverage/lcov.info'
  })
  return runTasks(taskName, [
    () => sendToCodeclimate(coverageSrc, {})
  ], true)
}

module.exports = report
