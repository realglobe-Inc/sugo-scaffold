/**
 * @function sugoScaffold
 * @param {string} type - Scaffold type
 * @param {string} dest - Destination directory path
 * @param {Object} options - Optional settings1
 * @param {boolean} [options.straight=false] - No asking.
 * @param {boolean} [options.force=false] - Force to generate scaffold.
 * @param {boolean} [options.silent=false] - Disable logs.
 * @returns {Promise}
 */

'use strict'

const co = require('co')
const askconfig = require('askconfig')
const filemode = require('filemode')
const path = require('path')
const fs = require('fs')
const render = require('./render')
const gitconfig = require('gitconfig')
const tmpls = require('./tmpls')
const listTypes = require('./list_types')
const argx = require('argx')

/** @lends sugoScaffold */
function sugoScaffold (type, dest, options = {}) {
  let args = argx(arguments)
  type = args.shift('string')
  dest = args.shift('string')
  return co(function * () {
    if (!type) {
      listTypes(tmpls)
      return
    }

    let exists = yield new Promise((resolve) =>
      fs.exists(dest, (exists) => resolve(exists))
    )
    let skip = exists && !options.force
    if (skip) {
      throw new Error(`${dest} is already exists. Use -f option to force.`)
    }
    let user = yield gitconfig.get('user')
    user = user || { name: '__user_name__' }
    let defaults = {
      package_name: path.basename(dest),
      package_description: '',
      github_repository: [ user.name, path.basename(dest) ].join('/')
    }
    let config
    if (options.straight) {
      config = Object.assign(defaults)
    } else {
      config = yield askconfig(defaults)
    }
    let data = Object.assign({}, {
      author_name: user.name,
      author_email: user.email,
      author_url: user.url
    }, config)

    if (!tmpls[ type ]) {
      throw new Error(`Unknown type: ${type}`)
    }
    let tmpl = path.resolve(__dirname, '..', tmpls[ type ])
    yield render(tmpl, dest, data, {
      silent: options.silent
    })
    let bins = path.join(dest, '+(ci|bin)/*.*')
    yield filemode(bins, '755')
  })
}

module.exports = sugoScaffold
