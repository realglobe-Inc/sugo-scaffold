/**
 * Test case for sugoScaffold.
 * Runs with mocha.
 */
'use strict'

const sugoScaffold = require('../lib/sugo_scaffold.js')
const assert = require('assert')
const co = require('co')

describe('sugo-scaffold', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Generate module', () => co(function * () {
    yield sugoScaffold('module', `${__dirname}/../tmp/foo/bar-module`, {
      straight: true,
      force: true
    })
  }))

  it('Generate middleware', () => co(function * () {
    yield sugoScaffold('middleware', `${__dirname}/../tmp/foo/bar-middleware`, {
      straight: true,
      force: true
    })
  }))

  it('Generate agent', () => co(function * () {
    yield sugoScaffold('agent', `${__dirname}/../tmp/foo/bar-agent`, {
      straight: true,
      force: true
    })
  }))
})

/* global describe, before, after, it */
