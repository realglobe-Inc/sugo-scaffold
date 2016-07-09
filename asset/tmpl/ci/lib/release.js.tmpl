/**
 * Release the project
 * @function release
 * @param {Object} options - Optional settings
 * @returns {Promise}
 */
'use strict'

const { runTasks } = require('ape-tasking')
const apeReleasing = require('ape-releasing')
const defaults = require('defaults')

/** @lends release */
function release (options = {}) {
  let { taskName, beforeRelease, afterRelease } = defaults(options, {
    taskName: 'release',
    beforeRelease: [
      './ci/build.js',
      './ci/test.js'
    ],
    afterRelease: []
  })
  return runTasks(taskName, [
    () => apeReleasing.releasePackage({
      beforeRelease,
      afterRelease
    })
  ], true)
}

module.exports = release
