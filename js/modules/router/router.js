import { genre } from '../genre/genre.js'
import { carousel } from '../carousel/fillCarousel.js'


export function router() {
    routie('', genre())
    routie('artist/:name', carousel)
}