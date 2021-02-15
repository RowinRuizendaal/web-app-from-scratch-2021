import { fetchData } from '../api/fetch.js'
import { render } from '../render/render.js'
import { clearElement } from '../clearElement/clearElement.js'
import { checkStorage, setStorage } from '../localstorage/checkStorage.js'



export async function genre() {
    const number = 1;
    const max = 25;
    let data = []

    clearElement('.app')

    if (checkStorage('overview')) {
        data = JSON.parse(localStorage.getItem('overview'))
    } else {
        for (let i = number; i < max; i++) {
            const json = await fetchData(`/artist/${i}`)
            data.push(json)
        }
    }
     setStorage('overview', data)
     render.genre(data)
    
}