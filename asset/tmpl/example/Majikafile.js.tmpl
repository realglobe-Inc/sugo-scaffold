/**
 * majika 設定ファイル
 */
'use strict'

const common = {
  beforeInstall: [
    'echo "registry = https://realglobe.artifactoryonline.com/realglobe/api/npm/npm-virtual" > .npmrc',
    'curl -u${NPM_USER}:${NPM_PASSWORD} "https://realglobe.artifactoryonline.com/realglobe/api/npm/auth" >> .npmrc'
  ],
  buildScript: [
    'npm install mocha istanbul babel-cli node-sass -g',
    './ci/build.js',
    'rm .npmrc'
  ]
}

module.exports = {
  dockerRepositoryPrefix: 'realglobe-docker-vertual.jfrog.io/',
  dockerBuildArgs: {
    additionalOptions: ['--force-rm=true'],
    beforeInstall: common.beforeInstall,
    buildScript: common.buildScript
  },
  travisCreateArgs: {},
  heroku: {
    additionalDependencies: {
      ['babel']: '*',
      ['babel-cli']: '*',
      ['node-sass']: '*',
      ['browserify']: '*',
      ['babel-preset-react']: '*',
      ['babel-preset-es2015']: '*'
    },
    preDeploy: [
      'npm run prepublish',
      'curl -u`sugos-secrets get -r jfrog:deployer:username`:`sugos-secrets get -r jfrog:deployer:password` https://realglobe.artifactoryonline.com/realglobe/api/npm/auth > .npmrc',
      'echo "registry = https://realglobe.artifactoryonline.com/realglobe/api/npm/npm-virtual" >> .npmrc'
    ]
  }
}
