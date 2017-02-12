import {div, h1, a, img} from '@cycle/dom'
import xs from 'xstream'

export function MediaList(sources) {
  const vtree$ = sources.MediaUrls
    .map(urls =>
      div('.row', 
        urls.map(url => 
          div('.col-lg-3.col-md-4.col-xs-6.thumb', [
            a('.thumbnail', {attrs: {href: '#'}}, [
              img('.img-responsive', {attrs: {src: url }})
            ])
          ]))))
  const sinks = {
    DOM: vtree$
  }
  return sinks
}
