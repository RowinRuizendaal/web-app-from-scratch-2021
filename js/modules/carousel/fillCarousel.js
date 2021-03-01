import { fetchData } from '../api/fetch.js'
import { checkStorage, setStorage } from '../utils/localstorage.js'
import { clearElement, removeElement } from '../utils/clearElement.js'
import { render } from '../render/render.js'
import { loader } from '../loader/loader.js'
import { error } from '../utils/error.js'



export async function carousel(artist) {
    let dataset = new Array

    clearElement('.app')
    loader('.app')

    if (checkStorage(artist)) {
        dataset = JSON.parse(localStorage.getItem(artist))
        removeElement('.loader')
        return render.carousel(dataset)
    }

    const json = await fetchData(`/search?q=${artist}`)

    if (json.error) {
        return error()
    }


    dataset = json.data.map((el) => {
        return el
    })

    if (json) {
        removeElement('.loader')
    }

    setStorage(artist, dataset)
    render.carousel(dataset)
}