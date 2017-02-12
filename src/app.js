import {div, h1} from '@cycle/dom'
import xs from 'xstream'
import {GalleryList} from './gallery-list.js'
  
export function App(sources) {
  const gallerySelectorID$ = sources.DOM
      .select('.nextGallery').events('click')
      .map(ev => 1)
      .startWith(0)
      .fold((sum, val) => sum + val, 0);
  
  const galleryListVDom$ = GalleryList({}).DOM;

  const vtree$ = xs.combine(galleryListVDom$)
      .map(([galleryListVDom]) =>
              div('.row', [
                div('.col-lg-12', [
                  h1('.page-header', 'My Awesome Cycle.js app')
                ]),
                galleryListVDom
              ]))
  const sinks = {
    DOM: vtree$
  }
  return sinks
}
