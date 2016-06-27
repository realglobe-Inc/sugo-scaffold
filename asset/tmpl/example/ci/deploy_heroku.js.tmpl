#!/usr/bin/env node
/*
 * Deploy to heroku branch.
 * You need majika-heroku.
 * To install majika-heroku, 'npm install majika-heroku -g'
 */

const {execSync} = require('child_process')
const {join} = require('path')
let option = {
  stdio: 'inherit',
  cwd: join(__dirname, '..')
}

let shouldInstall = false
try {
  execSync('which majika-heroku')
} catch (e) {
  shouldInstall = true
}
if (shouldInstall) {
  let message = `
You need majika-heroku!
To install majika-heroku, try 'npm install majika-heroku -g'
`
  throw Error(message)
}

execSync('npm update majika-heroku -g', option)
execSync('majika-heroku deploy', option)
