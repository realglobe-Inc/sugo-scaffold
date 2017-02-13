#!/usr/bin/env node

/**
 * Commit and push the package to Github
 */

process.chdir(`${__dirname}/../..`)

const { commitPush } = require('sugos-travis')

commitPush({})
