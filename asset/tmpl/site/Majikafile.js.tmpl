/**
 * majika 設定ファイル
 */
'use strict'

const common = {
  makeNpmrc: [
    'echo "registry = https://realglobe.artifactoryonline.com/realglobe/api/npm/npm-virtual" > .npmrc',
    'curl -u`sugos-secrets get -r jfrog:deployer:username`:`sugos-secrets get -r jfrog:deployer:password` "https://realglobe.artifactoryonline.com/realglobe/api/npm/auth" >> .npmrc'
  ]
}

module.exports = {
  heroku: {
    preDeploy: common.makeNpmrc,
    env: {
      NODE_ENV: {
        value: 'production'
      },
      DEBUG: {
        value: 'sg:*'
      }
    },
    addons: [
      'heroku-redis:hobby-dev'
    ]
  }
}
