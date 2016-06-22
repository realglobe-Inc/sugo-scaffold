#!/usr/bin/env node

/**
 * Tmplify prototype.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const path = require('path')
const fs = require('fs')
const co = require('co')
const apeTasking = require('ape-tasking')
const tmplconv = require('tmplconv')

const demos = {
  'interface': 'sugo-demo-interface',
  'endpoint': 'sugo-demo-endpoint',
  'middleware': 'sugo-demo-middleware',
  'example': 'sugo-demo-example'
}

let prefix = '~~~~'
let suffix = '~~~~'
apeTasking.runTasks('tmplify', [
  () => co(function * () {
    for (let type of Object.keys(demos)) {
      let demoName = demos[ type ]
      let demoDir = path.dirname(require.resolve(`${demoName}/package.json`))
      let demoPkg = require(`${demoName}/package.json`)
      let tmplDir = `asset/tmpl/${type}`
      yield tmplconv.tmplify(demoDir, tmplDir, {
        clean: true,
        mode: '444',
        pattern: [
          '**/*.*',
          '.*',
          '+(lib|test)/.*.bud',
          '+(lib|test)/.*.hbs'
        ],
        ignore: [
          '.DS_Store',
          '.svg',
          'ci/demo.js',
          'node_modules/**/*.*'
        ],
        data: {
          'github_repository': demoPkg.repository.url.split(/\//g).slice(-2).join('/').replace(/\.git$/, ''),
          'package_name': demoPkg.name,
          'package_description': demoPkg.description,
          'author_name': demoPkg.author.name,
          'author_email': demoPkg.author.email,
          'author_url': demoPkg.author.url
        },
        prefix,
        suffix
      })
      yield tmplconv.tmplify(`${__dirname}/..`, tmplDir, {
        pattern: [
          '.gitignore'
        ],
        prefix,
        suffix
      })
      let filename = `${tmplDir}/package.json.tmpl`
      let str = fs.readFileSync(filename).toString()
      let pkg = JSON.parse(str)
      fs.chmodSync(filename, '644')
      fs.writeFileSync(filename, JSON.stringify({
        name: pkg.name,
        version: '1.0.0',
        description: pkg.description,
        main: pkg.main,
        scripts: pkg.scripts,
        repository: pkg.repository.url.split(/\//g).slice(-1).join('/').replace(/\.git$/, ''),
        keywords: pkg.keywords,
        author: pkg.author,
        license: pkg.license,
        bugs: pkg.bugs,
        homepage: pkg.homepage,
        dependencies: pkg.dependencies,
        devDependencies: pkg.devDependencies,
        engines: pkg.engines,
        publishConfig: pkg.publishConfig
      }, null, 2))
      fs.chmodSync(filename, '444')
    }
  })
], true)
