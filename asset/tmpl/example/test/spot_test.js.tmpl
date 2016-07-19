/**
 * Test case for actor.
 * Runs with mocha.
 */
'use strict'

const actor = require('../lib/actor.js')
const cloud = require('../lib/cloud.js')
const assert = require('assert')
const filedel = require('filedel')
const co = require('co')
const injectmock = require('injectmock')
const aport = require('aport')
const asleep = require('asleep')

describe('actor', () => {
  let port, storage
  before(() => co(function * () {
    port = yield aport()
    storage = `${__dirname}/../tmp/testing-actor`
    injectmock(process.env, 'STORAGE', storage)
    injectmock(process.env, 'PORT', port)
  }))

  after(() => co(function * () {
    injectmock.restoreAll()
    yield filedel(`${storage}/**/*.*`)
  }))

  it('Spot', () => co(function * () {
    let cloudInstance = yield cloud()
    let actorInstance = yield actor()
    yield asleep(300)
    yield actorInstance.disconnect()
    yield cloudInstance.close()
  }))
})

/* global describe, before, after, it */
