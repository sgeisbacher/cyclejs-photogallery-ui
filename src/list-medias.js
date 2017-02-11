import {div, h1, a, img} from '@cycle/dom'
import xs from 'xstream'

export function ListMedias(sources) {
  const imageUrls = [
    'http://lorempixel.com/253/169/sports/1',
    'http://lorempixel.com/253/169/sports/2',
    'http://lorempixel.com/253/169/sports/3',
    'http://lorempixel.com/253/169/sports/6',
    'http://lorempixel.com/253/169/sports/5'
  ]
  const vtree$ = xs.of(imageUrls)
    .map(urls =>
      div('.row', 
        urls.map(url => 
          div('.col-lg-3.col-md-4.col-xs-6.thumb', [
            a('.thumbnail', {href: '#'}, [
              img('.img-responsive', {attrs: {src: url }})
            ])
          ]))))
  const sinks = {
    DOM: vtree$
  }
  return sinks
}
