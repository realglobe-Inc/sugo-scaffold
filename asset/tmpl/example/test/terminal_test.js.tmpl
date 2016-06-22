/**
 * Test case for terminal.
 * Runs with mocha.
 */
'use strict'

const terminal = require('../lib/terminal.js')
const spot = require('../lib/spot.js')
const cloud = require('../lib/cloud.js')
const assert = require('assert')
const co = require('co')
const injectmock = require('injectmock')
const apemanport = require('apemanport')
const apemansleep = require('apemansleep')

describe('terminal', () => {
  before(() => co(function * () {
    let port = yield apemanport.find()
    let storage = `${__dirname}/../tmp/testing-terminal`
    injectmock(process.env, 'STORAGE', storage)
    injectmock(process.env, 'PORT', port)
    injectmock(process.env, 'INTERVAL', 120)
  }))

  after(() => co(function * () {
    injectmock.restoreAll()
  }))

  it('Terminal', () => co(function * () {
    let cloudInstance = yield cloud()
    let spotInstance = yield spot()
    let terminalInstance = yield terminal()
    yield apemansleep.sleep(500)
    yield terminalInstance.kill()
    yield terminalInstance.disconnect()
    yield spotInstance.disconnect()
    yield cloudInstance.close()
  }))
})

/* global describe, before, after, it */
