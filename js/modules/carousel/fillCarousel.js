import { fetchData } from '../api/fetch.js'
import { checkStorage, setStorage } from '../utils/localstorage.js'
import { clearElement } from '../utils/clearElement.js'
import { render } from '../render/render.js'
import { loader } from '../loader/loader.js'



export async function carousel(artist) {
    let dataset = new Array;

    clearElement('.app')
    loader('.app')


    if (checkStorage(artist)) {
        dataset = JSON.parse(localStorage.getItem(artist))
    } else {
        const json = await fetchData(`search?q=${artist}`)
        dataset = json.data.map((el) => {
            return el
        })

        if (json) {
            clearElement('.loader')
        }
    }


    setStorage(artist, dataset)
    render.carousel(dataset)

}