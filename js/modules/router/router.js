import { genre } from '../genre/genre.js'
import { carousel } from '../carousel/fillCarousel.js'




export function router() {
    routie('overview', genre)
    routie('artist/:name', carousel)
    routie('*', genre)
}