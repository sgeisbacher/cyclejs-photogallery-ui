import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'
import {App} from './app'
import {ListMedias} from './list-medias.js'

const main = ListMedias

const drivers = {
  DOM: makeDOMDriver('#app')
}

run(main, drivers)
