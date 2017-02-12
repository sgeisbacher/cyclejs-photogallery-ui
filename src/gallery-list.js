import {div, h1, a, img} from '@cycle/dom'
import xs from 'xstream'

const galleries = [
  {
    name: "sports",
    imageUrl: 'http://lorempixel.com/253/169/sports/1'
  },
  {
    name: "food",
    imageUrl: 'http://lorempixel.com/253/169/food/1'
  }

]

export function GalleryList(sources) {
  const vtree$ = xs.of(galleries)
    .map(galleries =>
      div('.row', 
        galleries.map(gallery =>
          div('.col-lg-3.col-md-4.col-xs-6.thumb', [
            a('.thumbnail', {attrs: {href: '#'}}, [
              img('.img-responsive', {attrs: {src: gallery.imageUrl }})
            ])
          ]))))
  const sinks = {
    DOM: vtree$
  }
  return sinks
}
