/**
 * Scaffold generator for SUGOS
 * @module sugo-scaffold
 */

'use strict'

const sugoScaffold = require('./sugo_scaffold')
const tmpls = require('./tmpls.json')

let lib = sugoScaffold.bind(this)

Object.assign(lib, sugoScaffold, {
  tmpls,
  sugoScaffold
})

module.exports = lib
