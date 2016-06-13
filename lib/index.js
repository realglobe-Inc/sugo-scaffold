/**
 * Scaffold generator for SUGOS
 * @module sugo-scaffold
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get render () { return d(require('./render')) },
  get sugoScaffold () { return d(require('./sugo_scaffold')) },
  get tmpls () { return d(require('./tmpls')) }
}
