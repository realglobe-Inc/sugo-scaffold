#!/usr/bin/env node

/**
 * Generate favicon.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const pkg = require('../package.json')
let { execcli } = apeTasking
let { color } = require('../lib/configs')()

apeTasking.runTasks('favicon', [
  () => execcli('fur', [ 'favicon', `${__dirname}/../ui/favicon.svg`, {
    text: pkg.name.split(/\-/g).map((name) => name[ 0 ]).join('').toUpperCase(),
    size: 128,
    shape: 'g',
    font: 'ah',
    fontSize: 68,
    color
  } ], {
    notfound: 'try npm install -g fur'
  }).catch((err) => {
    // Do nothing
    console.log('Failed to generate favicon:', err)
  })
], true)
