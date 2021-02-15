import { fetchData } from '../api/fetch.js'
import { checkStorage, setStorage } from '../localstorage/checkStorage.js'
import { clearElement } from '../clearElement/clearElement.js'
import { render } from '../render/render.js'



export async function carousel(artist) {
    let data = []

    clearElement('.app')


    if (checkStorage(artist)) {
        data = JSON.parse(localStorage.getItem(artist))
    } else {
        const json = await fetchData(`search?q=${artist}`)
        data.push(json.data)


    }

    setStorage(artist, data)
    render.carousel(data)
}