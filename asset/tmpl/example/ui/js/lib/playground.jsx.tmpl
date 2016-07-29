/**
 * Default script for playground
 */
'use strict'

import React, {PropTypes as types} from 'react'
import {mount} from 'sg-react'
import {
  ApContainer,
  ApBigButton,
  ApSelectableArticle
} from 'apeman-react-basic'
import co from 'co'
import sugoCaller from 'sugo-caller'
import asleep from 'asleep'

/**
 * Dynamic component create from the online-editor
 * @class Playground
 */
const Playground = React.createClass({
  // --------------------
  // Specs
  // --------------------

  getInitialState () {
    const s = this
    let { actors } = s.props
    return {
      /** Key of actor to connect */
      actorKey: actors.length > 0 ? actors[ 0 ].key : null,
      /** Date ping send */
      pingAt: null,
      /** Date pong received */
      pongAt: null
    }
  },

  render () {
    const s = this
    let { state, props } = s
    let { actors } = props
    let { actorKey, pingAt, pongAt } = state
    return (
      <div className='dynamic-component'>
        <ApSelectableArticle
          options={ (actors || []).reduce((options, actor) => Object.assign(options, { [actor.key]: actor.key }), {}) }
          name='actorKey'
          label='Spot: '
          alt='No actor found! You need to connect one before playing'
          value={ actorKey }
          onChange={ (e) => s.setState({ actorKey: e.target.value }) }
        >
          <ApSelectableArticle.Content contentFor={ String(actorKey) }>
            <div className='playground-row'>
              <ApContainer>
                <div className='playground-item'>
                  <p>Send a ping and receive pong.</p>
                </div>
                <div className='playground-item'>
                  <ApBigButton
                    onTap={ () => s.withTerminal(function * sendPing (caller) {
                      if (s.state.pongAt) {
                        // Reset to send ping
                        s.setState({ pingAt: null, pongAt: null })
                        return
                      }

                      // Set up
                      let actor = yield caller.connect(actorKey)
                      let noop = actor.get('noop')

                      // Do ping-pong
                      console.log('Send ping to noop...')
                      s.setState({ pingAt: new Date().toLocaleTimeString() })
                      let pong = yield noop.ping()
                      s.setState({ pongAt: new Date().toLocaleTimeString() })
                      console.log(`...received ping from noop: "${pong}"`)

                      // Tear down
                      yield actor.disconnect()
                      yield asleep(10)
                    }) }
                    spinning={ pingAt && !pongAt }
                    primary={ !pingAt }
                  >{ pongAt ? `Pong at ${pongAt}` : (pingAt ? 'Waiting...' : 'Send ping')} </ApBigButton>
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
    s.caller = sugoCaller(`${protocol}//${host}/callers`)
  },

  // --------------------
  // custom
  // --------------------

  withTerminal (handler) {
    const s = this
    let { caller } = s
    if (!caller) {
      return
    }
    co(handler, caller).catch((err) => console.error(err))
  }
})

// Mount react component
let timer = setInterval(() => {
  let container = document.getElementById('playground-root')
  if (!container) {
    return
  }
  mount(container, Playground, Object.assign({}, {
    actors: [].concat(window.actors || [])
  })).catch((err) => console.error(err))
  clearTimeout(timer)
}, 100)

