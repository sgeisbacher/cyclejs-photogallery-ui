import {div, h1} from '@cycle/dom'
import xs from 'xstream'
import {ListMedias} from './list-medias.js'
  
export function App(sources) {
  const gallery = ListMedias({
    DOM: sources.DOM
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
