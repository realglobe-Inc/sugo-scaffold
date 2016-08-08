/**
 * Test case for hub.
 * Runs with mocha.
 */
'use strict'

const hub = require('../lib/hub.js')
const assert = require('assert')
const co = require('co')
const injectmock = require('injectmock')
const aport = require('aport')
const asleep = require('asleep')
const arequest = require('arequest')
const filedel = require('filedel')

describe('hub', () => {
  let request = arequest.create({ jar: true })
  let port
  before(() => co(function * () {
    port = yield aport()
    let storage = `${__dirname}/../tmp/testing-hub`
    yield filedel(`${storage}/**/*.*`, { force: true })
    injectmock(process.env, 'STORAGE', storage)
    injectmock(process.env, 'PORT', port)
  }))

  after(() => co(function * () {
    injectmock.restoreAll()
    yield asleep(10)
  }))

  it('Cloud', () => co(function * () {
    let instance = yield hub()
    yield asleep(300)

    {
      let { statusCode, body } = yield request({
        url: `http://localhost:${port}/dynamic/compile`,
        method: 'POST',
        json: true,
        body: {
          data: {
            type: 'javascript',
            attributes: {
              script: `
let hoge = () => 'This is hoge'
`
            }
          }
        }
      })
      console.log('Compiled body', body)
      assert.equal(statusCode, 200)
      assert.ok(body.data)
    }
    instance.close()
  }))
})

/* global describe, before, after, it */
