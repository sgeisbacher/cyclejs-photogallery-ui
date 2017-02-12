import {div, h2} from '@cycle/dom'
import xs from 'xstream'
import {MediaList} from './media-list.js'
  
const galleries = [
  {
    name: "sports",
    urls: [
      'http://lorempixel.com/253/169/sports/1',
      'http://lorempixel.com/253/169/sports/2',
      'http://lorempixel.com/253/169/sports/3',
      'http://lorempixel.com/253/169/sports/6',
      'http://lorempixel.com/253/169/sports/5'
    ]
  },
  {
    name: "food",
    urls: [
      'http://lorempixel.com/253/169/food/1',
      'http://lorempixel.com/253/169/food/2',
      'http://lorempixel.com/253/169/food/4',
      'http://lorempixel.com/253/169/food/5'
    ]
  }
];

export function Gallery(sources) {
  const galleryName$ = sources.ID
    .map(id => id % galleries.length)
    .map(id => galleries[id].name)
  const mediaList = MediaList({
    MediaUrls: sources.ID
      .map(id => id % galleries.length)
      .map(id => galleries[id].urls)
  })

  const mediaListVDom$ = mediaList.DOM;

  const vtree$ = xs.combine(galleryName$, mediaListVDom$)
    .map(([galleryName, mediaListVDom]) =>
      div([
        h2(`Gallery "${galleryName}"`),
        mediaListVDom
      ]))

  const sinks = {
    DOM: vtree$
  }
  return sinks
}
