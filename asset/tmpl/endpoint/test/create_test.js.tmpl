/**
 * Test case for create.
 * Runs with mocha.
 */
'use strict'

const create = require('../lib/create.js')
const co = require('co')
const sgServer = require('sg-server')
const apemanrequest = require('apemanrequest')
const asleep = require('asleep')
const aport = require('aport')
const assert = require('assert')

describe('create', () => {
  let server, baseUrl
  let request = apemanrequest.create()
  before(() => co(function * () {
    let endpoint = create({})
    assert.ok(endpoint)
    let port = yield aport()
    server = sgServer({
      endpoints: {
        '/foo/bar': endpoint
      }
    })
    baseUrl = `http://localhost:${port}`
    yield server.listen(port)
  }))

  after(() => co(function * () {
    yield asleep(10)
    yield server.close()
  }))

  it('Send a request', () => co(function * () {
    let { body, statusCode } = yield request({
      method: 'GET',
      url: `${baseUrl}/foo/bar`
    })
    assert.ok(body)
    assert.equal(statusCode, 200)
  }))
})

/* global describe, before, after, it */
