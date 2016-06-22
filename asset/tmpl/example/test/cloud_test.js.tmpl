/**
 * Test case for cloud.
 * Runs with mocha.
 */
'use strict'

const cloud = require('../lib/cloud.js')
const assert = require('assert')
const co = require('co')
const injectmock = require('injectmock')
const apemanport = require('apemanport')
const apemansleep = require('apemansleep')
const apemanrequest = require('apemanrequest')
const filedel = require('filedel')

describe('cloud', () => {
  let request = apemanrequest.create({ jar: true })
  let port
  before(() => co(function * () {
    port = yield apemanport.find()
    let storage = `${__dirname}/../tmp/testing-cloud/**/*.json`
    yield filedel(storage)
    injectmock(process.env, 'STORAGE', storage)
    injectmock(process.env, 'PORT', port)
  }))

  after(() => co(function * () {
    injectmock.restoreAll()
    yield apemansleep.sleep(10)
  }))

  it('Cloud', () => co(function * () {
    let instance = yield cloud()
    yield apemansleep.sleep(300)

    {
      let { statusCode, body } = yield request({
        url: `http://localhost:${port}/actions/compile`,
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
      assert.equal(statusCode, 200)
      assert.ok(body.data)
    }
    instance.close()
  }))
})

/* global describe, before, after, it */
