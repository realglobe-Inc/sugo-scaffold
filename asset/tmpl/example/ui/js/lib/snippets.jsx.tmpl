
/**
 * !! This is an auto-generated file and do not edit manually !! 
 * Snippet contents
 * @namespace Snippets
 */
'use strict'

/** Converted from "[object Object]" */
exports.DEFAULT_HTML = `<!--
 Default HTML for playground
-->
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="css/theme.css">
  <link rel="stylesheet" href="css/playground.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"/>
  <script src="js/external.cc.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body class="playground-body">
<div id="playground-root">
  <h3 class="playground-message">Loading dynamic contents...</h3>
</div>
</body>
</html>
`

/** Converted from "[object Object]" */
exports.DEFAULT_SCRIPT = `/**
 * Default script for playground
 */
'use strict'

require('babel-polyfill')

import React, {PropTypes as types} from 'react'
import ReactDOM from 'react-dom'
import {
  ApContainer,
  ApBigButton,
  ApSelectableArticle
} from 'apeman-react-basic'
import co from 'co'
import sugoTerminal from 'sugo-terminal'
import {sleep} from 'apemansleep'

/**
 * Dynamic component create from the online-editor
 * @class DynamicComponent
 */
const DynamicComponent = React.createClass({
  // --------------------
  // Specs
  // --------------------

  getInitialState () {
    const s = this
    let { spots } = s.props
    return {
      /** Key of spot to connect */
      spotKey: spots.length > 0 ? spots[ 0 ].key : null,
      /** Date ping send */
      pingAt: null,
      /** Date pong received */
      pongAt: null
    }
  },

  render () {
    const s = this
    let { state, props } = s
    let { spots } = props
    let { spotKey, pingAt, pongAt } = state
    return (
      <div className='dynamic-component'>
        <ApSelectableArticle
          options={ (spots || []).reduce((options, spot) => Object.assign(options, {[spot.key]: spot.key}), {}) }
          name='spotKey'
          label='Spot: '
          alt='No spot found! You need to connect one before playing'
          value={ spotKey }
          onChange={ (e) => s.setState({ spotKey: e.target.value }) }
        >
          <ApSelectableArticle.Content contentFor={ String(spotKey) }>
            <div className='playground-row'>
              <ApContainer>
                <div className='playground-item'>
                  <p>Send a ping and receive pong.</p>
                </div>
                <div className='playground-item'>
                  <ApBigButton
                    onTap={ () => s.withTerminal(function * sendPing (terminal) {
                      if (s.state.pongAt) {
                        // Reset to send ping
                        s.setState({pingAt: null, pongAt: null})
                        return
                      }

                      // Set up
                      let spot = yield terminal.connect(spotKey)
                      let noop = spot.noop()

                      // Do ping-pong
                      console.log('Send ping to noop...')
                      s.setState({pingAt: new Date().toLocaleTimeString()})
                      let pong = yield noop.ping()
                      s.setState({pongAt: new Date().toLocaleTimeString()})
                      console.log(${'`'}...received ping from noop: "${'${'}pong${'}'}"${'`'})

                      // Tear down
                      yield spot.disconnect()
                      yield sleep(10)
                  }) }
                    spinning={ pingAt && !pongAt }
                    primary={ !pingAt }
                  >{ pongAt ? ${'`'}Pong at ${'${'}pongAt${'}'}${'`'} : (pingAt ? 'Waiting...' : 'Send ping')} </ApBigButton>
                </div>
              </ApContainer>
            </div>
          </ApSelectableArticle.Content>
        </ApSelectableArticle>
      </div>
    )
  },

  // --------------------
  // LifeCycle
  // --------------------

  componentDidMount () {
    const s = this
    let { protocol, host } = window.location
    s.terminal = sugoTerminal(${'`'}${'${'}protocol${'}'}//${'${'}host${'}'}/terminals${'`'})
  },

  // --------------------
  // custom
  // --------------------

  withTerminal (handler) {
    const s = this
    let { terminal } = s
    if (!terminal) {
      return
    }
    co(handler, terminal).catch((err) => console.error(err))
  }
})

let { spots } = window
let container = document.getElementById('playground-root')
let element = (<DynamicComponent spots={ spots || [] }/>)
ReactDOM.render(element, container)
`

