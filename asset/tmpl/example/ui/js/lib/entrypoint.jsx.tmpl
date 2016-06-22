/**
 * Entrypoint of lib scripts.
 * Mount react component in to DOM when loaded.
 */
'use strict'

require('babel-polyfill')

import React, {PropTypes as types} from 'react'
import ReactDOM from 'react-dom'
import Component from './component'
import configs from '../../../lib/configs'
import pkg from '../../../package.json'

let { color, port, hostname } = configs()

function onLoad () {
  window.removeEventListener('DOMContentLoaded', onLoad)

  let container = document.getElementById('mount-root')
  let element = React.createElement(Component, {
    pkg, color, port, hostname
  })

  ReactDOM.render(element, container, () => {
    console.debug('Component mounted')
  })
}

window.addEventListener('DOMContentLoaded', onLoad)
