import { carousel } from '../carousel/fillCarousel.js'
import { genre } from '../genre/genre.js'

export function router() {
    routie('', genre())
    routie('artist/:name', carousel)
}