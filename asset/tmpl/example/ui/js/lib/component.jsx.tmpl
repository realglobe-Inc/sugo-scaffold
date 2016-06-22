/**
 * Root component to mount.
 * @class Component
 */
'use strict'

require('babel-polyfill')

import React, {PropTypes as types} from 'react'

import cloudAgent from 'sugo-cloud/lib/agent'
import compileAgent from 'sugo-endpoint-compile/lib/agent'

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
import sgReactComponents from 'sg-react-components'
import co from 'co'
import sugoTerminal from 'sugo-terminal'
import sugoObserver from 'sugo-observer'

import {DEFAULT_SCRIPT, DEFAULT_HTML} from './snippets'
import markdowns from './markdowns'

/** @lends Component */
const Component = React.createClass({
  // --------------------
  // Specs
  // --------------------
  
  propTypes: {
    /** Port number of the cloud */
    port: types.number,
    /** Hostname of the cloud */
    hostname: types.string,
    /** Package data */
    pkg: types.object,
    /** Theme color */
    color: types.string
  },
  getInitialState () {
    const s = this
    let { props } = s
    const { port, hostname } = props
    return {
      script: DEFAULT_SCRIPT,
      html: DEFAULT_HTML,
      tab: 'DEMO',
      playground: false,
      refreshing: false,
      tooltip: null,
      cloud: {},
      terminals: [],
      spots: [],
      globals: {
        require (name) {
          let modules = {
            co,
            'sugo-terminal': sugoTerminal,
            'sugo-observer': sugoObserver,
            'sg-react-components': sgReactComponents
          }
          if (modules[ name ]) {
            return modules[ name ]
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
    let { tab, script, html, globals, cloud, spots, terminals } = state
    return (
      <div>
        <SgExample>
          <SgExampleHeader { ...{ tab, pkg } }
            spots={ spots }
            runSpot={ () => s.setState({ tooltip: markdowns[ '12.Run Spot' ] }) }
            onTabChange={ (e) => s.setTab(e.tab) }/>
          <SgExampleBody hidden={ tab !== 'DEMO' }>
            <SgExampleAbout pkg={pkg}/>
            <SgExampleStatus spots={ spots }
                             terminals={ terminals }
                             cloud={ cloud }
                             spinning={ state.refreshing }
                             onRefresh={ s.refreshStatus }
            />
            <SgExamplePlayground { ...{ html, script, globals } }
              compile={ s.compileScript }
              onChange={ s.handleChange }
              pipeConsole={ true }
              closed={ !state.playground }
              onToggle={ s.togglePlayground }
            />
          </SgExampleBody>
          <SgExampleBody hidden={ tab !== 'GUIDES' }>
            <SgExampleInstruction src={ [
              markdowns[ '11.Setup Cloud' ],
              markdowns[ '12.Run Spot' ],
              markdowns[ '13.Use Terminal' ]
            ] }/>
            <SgExampleLinks links={ require('../../../doc/links.json') }/>
          </SgExampleBody>
          <SgExampleFooter>

          </SgExampleFooter>
          <SgExampleTooltip onClose={ () => s.setState({ tooltip: null }) }
                            src={ state.tooltip }
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
      console.log('observed', data)
      s.refreshStatus()
    })
    s.observer.start()
    s.refreshStatus()
    s.setTab(String(hash).replace(/^#/, '').toUpperCase())
  },

  componentWillUnmount () {
    const s = this
    s.observer.stop()

    clearTimeout(s._statusRefreshTimer)
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
    let { html, script, globals } = e.values
    s.setState({ html, script, globals })
  },

  compileScript (script) {
    const s = this
    let { state } = s
    return compileAgent('/actions/compile').compile(script)
  },

  refreshStatus (delay = 300) {
    const s = this
    let { state } = s
    if (state.refreshing) {
      return
    }
    s.setState({ refreshing: true })
    s._statusRefreshTimer = setTimeout(() => {
      let { location } = window
      if (!location) {
        return
      }
      let { host } = location
      co(function * () {
        let spots = yield cloudAgent().spots()
        let terminals = yield cloudAgent().terminals()
        console.log('spots', spots)
        s.setState({
          spots,
          terminals,
          cloud: Object.assign(state.cloud || {}, { host })
        })
      })
        .catch((err) => {
          console.error(err)
        })
        .then(() => {
          s.setState({ refreshing: false })
        })
    }, delay)
  },

  togglePlayground () {
    const s = this
    let { state } = s
    s.setState({ playground: !state.playground })
  }
})

export default Component
