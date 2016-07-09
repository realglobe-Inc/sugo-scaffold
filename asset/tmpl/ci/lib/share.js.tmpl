/**
 * Share the project
 * @function share
 * @param {Object} pkg - Package.json data
 * @param {Object} options
 * @returns {Promise}
 */
'use strict'

const { runTasks, execcli } = require('ape-tasking')
const defaults = require('defaults')

/** @lends share */
function share (pkg, options = {}) {
  let { taskName, p } = defaults(options, {
    taskName: 'share',
    p: true // As private
  })
  runTasks(taskName, [
    () => execcli('hub', [ 'init' ]),
    () => execcli('hub', [ 'create', { p, d: pkg.description }, pkg.repository ]),
    () => execcli('travis', [ 'enable', { r: pkg.repository } ])
  ], true)
}

module.exports = share
