/**
 * @function listTypes
 */
'use strict'

const {EOL} = require('os')

/** @lends listTypes */
function listTypes (tmpls) {
  let types = Object.keys(tmpls).map((type) => `  ${type}`).join(EOL)
  console.log(`Available types: ${EOL}${EOL}${types}${EOL}`)
}

module.exports = listTypes
