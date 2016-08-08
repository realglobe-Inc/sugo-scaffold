/**
 * Test case for caller.
 * Runs with mocha.
 */
'use strict'

const caller = require('../lib/caller.js')
const actor = require('../lib/actor.js')
const hub = require('../lib/hub.js')
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

  it('Caller', () => co(function * () {
    let hubInstance = yield hub()
    let actorInstance = yield actor()
    let callerInstance = yield caller()
    assert.ok(hubInstance)
    assert.ok(actorInstance)
    assert.ok(callerInstance)
    yield asleep(500)
    yield callerInstance.kill()
    yield callerInstance.disconnect()
    yield actorInstance.disconnect()
    yield hubInstance.close()
  }))
})

/* global describe, before, after, it */
