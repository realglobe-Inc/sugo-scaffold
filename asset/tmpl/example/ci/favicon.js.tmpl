#!/usr/bin/env node

/**
 * Generate favicon.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const pkg = require('../package.json')
const filelink = require('filelink')
let { execcli } = apeTasking
let { color } = require('../lib/configs')()

let faviconFile = 'doc/images/favicon.svg'
let faviconLink = 'ui/favicon.svg'

apeTasking.runTasks('favicon', [
  () => execcli('fur', [ 'favicon', faviconFile, {
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
  }),
  () => filelink(faviconFile, faviconLink, {
    force: true
  })
], true)
