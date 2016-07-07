/**
 * Test case for spot.
 * Runs with mocha.
 */
'use strict'

const spot = require('../lib/spot.js')
const cloud = require('../lib/cloud.js')
const assert = require('assert')
const filedel = require('filedel')
const co = require('co')
const injectmock = require('injectmock')
const aport = require('aport')
const asleep = require('asleep')

describe('spot', () => {
  let port, storage
  before(() => co(function * () {
    port = yield aport()
    storage = `${__dirname}/../tmp/testing-spot`
    injectmock(process.env, 'STORAGE', storage)
    injectmock(process.env, 'PORT', port)
  }))

  after(() => co(function * () {
    injectmock.restoreAll()
    yield filedel(`${storage}/**/*.*`)
  }))

  it('Spot', () => co(function * () {
    let cloudInstance = yield cloud()
    let spotInstance = yield spot()
    yield asleep(300)
    yield spotInstance.disconnect()
    yield cloudInstance.close()
  }))
})

/* global describe, before, after, it */
