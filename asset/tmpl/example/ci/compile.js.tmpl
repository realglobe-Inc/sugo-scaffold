#!/usr/bin/env node

/**
 * Compile files
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const apeCompiling = require('ape-compiling')
const filecopy = require('filecopy')
const co = require('co')
const coz = require('coz')
const React = require('react')
const { SgExampleStyle } = require('sugo-react-example')
const { readFileAsync, writeFileAsync } = require('apemanfs')
const { color } = require('../lib/configs')()

apeTasking.runTasks('compile', [
  // Generate markdowns, snppets...
  () => coz.render('ui/js/lib/.*.jsx.bud'),
  // JSX -> JS
  () => apeCompiling.compileReactJsx('*.jsx', {
    cwd: 'ui/js/lib',
    out: 'ui/js/lib'
  }),
  // Browserify
  () => co(function * () {
    let src = 'ui/js/lib/entrypoint.js'
    let dest = 'ui/js/index.js'
    yield apeCompiling.browserifyJs(src, dest, {
      debug: true,
      external: require('apeman-asset-javascripts/src/demo.external.json')
    })
    let compiled = yield readFileAsync(dest)
    // This is a hack to exports `require` to the window.
    compiled = `window.require = ${String(compiled)}`
    yield writeFileAsync(dest, compiled)
  }),
  // Copy external
  () => filecopy(
    require.resolve('apeman-asset-javascripts/dist/demo.external.cc.js'),
    'ui/js/external.cc.js'
  ),
  // Generate theme css
  () => co(function * () {
    let style = SgExampleStyle.styleContent(
      React.createElement(SgExampleStyle, { dominant: color })
    )
    yield writeFileAsync(`${__dirname}/../ui/css/theme.css`, style)
  })
])
