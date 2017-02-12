import {div, h1} from '@cycle/dom'
import xs from 'xstream'
import {ListMedias} from './list-medias.js'
  
const mediaUrls = [
    'http://lorempixel.com/253/169/sports/1',
    'http://lorempixel.com/253/169/sports/2',
    'http://lorempixel.com/253/169/sports/3',
    'http://lorempixel.com/253/169/sports/6',
    'http://lorempixel.com/253/169/sports/5'
]
  
export function App(sources) {
  const gallery = ListMedias({
    MediaUrls: xs.of(mediaUrls)
  });

  const galleryVDom$ = gallery.DOM;

  const vtree$ = xs.combine(galleryVDom$)
      .map(([galleryVDom]) =>
              div('.row', [
                div('.col-lg-12', [
                  h1('.page-header', 'My Awesome Cycle.js app')
                ]),
                galleryVDom
              ]))
  const sinks = {
    DOM: vtree$
  }
  return sinks
}
