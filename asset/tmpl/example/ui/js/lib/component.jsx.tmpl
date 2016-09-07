/**
 * Root component to mount.
 * @class Component
 */
'use strict'

import 'babel-polyfill'

import React, {PropTypes as types} from 'react'

import hubAgent from 'sugo-hub/agent'
import fileAgent from 'sugo-agent-file'
import compileAgent from 'sugo-agent-compile'

import {
  SgExample,
  SgExampleHeader,
  SgExampleBody,
  SgExamplePlayground,
  SgExampleStatus,
  SgExampleLinks,
  SgExampleFooter,
  SgExampleTooltip,
  SgExampleAbout,
  SgExampleInstruction
} from 'sugo-react-example'
import * as sgReactComponents from 'sg-react-components'
import * as apemanReactBasic from 'apeman-react-basic'
import asleep from 'asleep'
import co from 'co'
import os from 'os'
import sugoCaller from 'sugo-caller'
import sgReact from 'sg-react'
import sugoObserver from 'sugo-observer'

import {DEFAULT_SCRIPT, DEFAULT_HTML} from './snippets'
import markdowns from './markdowns'

const RequirePool = {
  co,
  os,
  asleep,
  'react': React,
  'sugo-caller': sugoCaller,
  'sugo-observer': sugoObserver,
  'sg-react': sgReact,
  'sg-react-components': sgReactComponents,
  'apeman-react-basic': apemanReactBasic
}
const links = require('../../../doc/links.json')

/** @lends Component */
const Component = React.createClass({
  // --------------------
  // Specs
  // --------------------

  propTypes: {
    /** Port number of the hub */
    port: types.number,
    /** Hostname of the hub */
    hostname: types.string,
    /** Package data */
    pkg: types.object,
    /** Theme color */
    color: types.string
  },

  getInitialState () {
    const s = this
    let { props } = s
    return {
      html: DEFAULT_HTML,
      script: DEFAULT_SCRIPT,
      tab: 'DEMO',
      content: 'default',
      playground: false,
      reading: false,
      refreshing: false,
      tooltip: null,
      hub: {},
      callers: [],
      actors: [],
      globals: {
        require (name) {
          if (RequirePool[ name ]) {
            return RequirePool[ name ]
          }
          return window.require(name)
        }
      }
    }
  },

  render () {
    const s = this
    let { state, props } = s
    let { pkg } = props
    let { tab, script, html, globals, hub, actors, callers } = state
    return (
      <div>
        <SgExample>
          <SgExampleHeader { ...{ tab, pkg } }
                           actors={ actors }
                           runActor={ () => s.setState({ tooltip: markdowns[ '12.Connect Actor' ] }) }
                           onTabChange={ (e) => s.setTab(e.tab) }/>
          <SgExampleBody hidden={ tab !== 'DEMO' }>
            <SgExampleAbout pkg={ pkg }/>
            <SgExampleStatus actors={ actors }
                             callers={ callers }
                             hub={ hub }
                             spinning={ state.refreshing }
                             onRefresh={ s.refreshStatus }
            />
            <SgExamplePlayground { ...{ html, script, globals } }
                                 compile={ s.compileScript }
                                 onChange={ s.handleChange }
                                 pkg={ pkg }
                                 vars={ s.getMarkdownVars() }
                                 pipeConsole={ true }
                                 closed={ !state.playground }
                                 links={ links }
                                 onToggle={ s.togglePlayground }
                                 defaultHtml={ DEFAULT_HTML }
                                 defaultScript={ DEFAULT_SCRIPT }
            />
          </SgExampleBody>
          <SgExampleBody hidden={ tab !== 'GUIDES' }>
            <SgExampleInstruction src={ [
              markdowns[ '11.Setup Hub' ],
              markdowns[ '12.Connect Actor' ],
              markdowns[ '13.Use Caller' ]
            ] } vars={ s.getMarkdownVars() }/>
            <SgExampleLinks links={ links }/>
          </SgExampleBody>
          <SgExampleFooter>

          </SgExampleFooter>
          <SgExampleTooltip onClose={ () => s.setState({ tooltip: null }) }
                            src={ state.tooltip }
                            vars={ s.getMarkdownVars() }
                            hidden={ !state.tooltip }
          />
        </SgExample>
      </div>
    )
  },

  componentDidMount () {
    const s = this
    let { protocol, host, hash } = window.location
    s.observer = sugoObserver(`${protocol}//${host}/observers`, (data) => {
      let { playground } = s.state
      if (!playground) {
        s.refreshStatus()
      }
    })

    s.compileAgent = compileAgent('/dynamic/compile')
    s.fileAgent = fileAgent('/dynamic/contents')
    s.hubAgent = hubAgent()

    s.observer.start()
    s.refreshStatus()
    s.setTab(String(hash).replace(/^#/, '').toUpperCase())
  },

  componentWillUnmount () {
    const s = this
    s.observer.stop()
  },

  // --------------------
  // custom
  // --------------------

  setTab (tab) {
    const s = this
    let valid = tab && !!~[ 'DEMO', 'GUIDES' ].indexOf(tab)
    s.setState({ tab: valid ? tab : 'DEMO' })
    window.location.hash = String(tab).toLowerCase()
  },

  handleChange (e) {
    const s = this
    let { state } = s
    let { html, script, globals } = e.values
    s.setState({ html, script, globals })
    s.tryAsync('saving', co(function * () {
      const { fileAgent } = s
      yield fileAgent.write(`${state.content}.html`, html)
      yield fileAgent.write(`${state.content}.jsx`, script)
    }))
  },

  compileScript (script) {
    const s = this
    let { compileAgent } = s
    return compileAgent.compile(script)
  },

  refreshStatus () {
    const s = this
    let { state, hubAgent } = s
    let { location } = window
    if (!location) {
      return
    }
    s.tryAsync('refreshing', co(function * () {
      let actors = yield hubAgent.actors()
      let callers = yield hubAgent.callers()
      let hub = { host: location.host }
      let globals = Object.assign(state.globals, { actors })
      s.setState({ actors, callers, hub, globals })
    }))
  },

  tryAsync (name, promise, delay = 300) {
    const s = this
    if (s.state[ name ]) {
      return Promise.resolve(true)
    }
    return Promise.resolve()
      .then(() => asleep(delay))
      .then(() => s.setState({ [name]: true }))
      .then(() => promise)
      .catch((err) => console.error(err))
      .then(() => s.setState({ [name]: false }))
  },

  togglePlayground () {
    const s = this
    let { state } = s
    let playground = !state.playground
    s.setState({ playground })
    if (playground) {
      s.tryAsync('reading', co(function * () {
        const { fileAgent, state } = s
        let html = yield fileAgent.read(`${state.content}.html`)
        let script = yield fileAgent.read(`${state.content}.jsx`)
        s.setState({
          html: html || state.html,
          script: script || state.script
        })
      }))
    }
  },

  getMarkdownVars () {
    const s = this
    let { location } = window
    return {
      __your_host__: location && location.host,
      __your_actor_name__: '__your_actor_name__' // TODO
    }
  }
})

export default Component
