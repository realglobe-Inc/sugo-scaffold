/**
 * Test case for cloud.
 * Runs with mocha.
 */
'use strict'

const cloud = require('../lib/cloud.js')
const assert = require('assert')
const co = require('co')
const injectmock = require('injectmock')
const aport = require('aport')
const asleep = require('asleep')
const arequest = require('arequest')
const filedel = require('filedel')

describe('cloud', () => {
  let request = arequest.create({ jar: true })
  let port
  before(() => co(function * () {
    port = yield aport()
    let storage = `${__dirname}/../tmp/testing-cloud/**/*.json`
    yield filedel(storage)
    injectmock(process.env, 'STORAGE', storage)
    injectmock(process.env, 'PORT', port)
  }))

  after(() => co(function * () {
    injectmock.restoreAll()
    yield asleep(10)
  }))

  it('Cloud', () => co(function * () {
    let instance = yield cloud()
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
