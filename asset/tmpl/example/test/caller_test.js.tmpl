/**
 * Test case for caller.
 * Runs with mocha.
 */
'use strict'

const caller = require('../lib/caller.js')
const actor = require('../lib/actor.js')
const cloud = require('../lib/cloud.js')
const assert = require('assert')
const co = require('co')
const injectmock = require('injectmock')
const aport = require('aport')
const asleep = require('asleep')

describe('caller', () => {
  before(() => co(function * () {
    let port = yield aport()
    let storage = `${__dirname}/../tmp/testing-caller`
    injectmock(process.env, 'STORAGE', storage)
    injectmock(process.env, 'ACTOR_KEY', 'hoge')
    injectmock(process.env, 'PORT', port)
    injectmock(process.env, 'INTERVAL', 120)
  }))

  after(() => co(function * () {
    injectmock.restoreAll()
  }))

  it('Terminal', () => co(function * () {
    let cloudInstance = yield cloud()
    let actorInstance = yield actor()
    let callerInstance = yield caller()
    assert.ok(cloudInstance)
    assert.ok(actorInstance)
    assert.ok(callerInstance)
    yield asleep(500)
    yield callerInstance.kill()
    yield callerInstance.disconnect()
    yield actorInstance.disconnect()
    yield cloudInstance.close()
  }))
})

/* global describe, before, after, it */
