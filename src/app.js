import {div, h1, button} from '@cycle/dom'
import xs from 'xstream'
import {Gallery} from './gallery.js'
  
export function App(sources) {
  const gallerySelectorID$ = sources.DOM
      .select('.nextGallery').events('click')
      .map(ev => 1)
      .startWith(0)
      .fold((sum, val) => sum + val, 0);
  
  const gallery = Gallery({
    ID: gallerySelectorID$
  });

  const galleryVDom$ = gallery.DOM;

  const vtree$ = xs.combine(galleryVDom$)
      .map(([galleryVDom]) =>
              div('.row', [
                div('.col-lg-12', [
                  h1('.page-header', 'My Awesome Cycle.js app')
                ]),
                button('.nextGallery', ' -> '),
                galleryVDom
              ]))
  const sinks = {
    DOM: vtree$
  }
  return sinks
}
