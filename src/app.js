import {div, h1} from '@cycle/dom'
import xs from 'xstream'

export function App(sources) {
  const vtree$ = xs.of(
    div('.row', '', [
        div('.col-lg-12', '', [
            h1('.page-header', 'My Awesome Cycle.js app')
        ])
    ])
  )
  const sinks = {
    DOM: vtree$
  }
  return sinks
}
