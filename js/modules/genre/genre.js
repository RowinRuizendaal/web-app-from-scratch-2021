import { fetchData } from '../api/fetch.js'
import { render } from '../render/render.js'
import { clearElement } from '../clearElement/clearElement.js'
import { checkStorage, setStorage } from '../localstorage/checkStorage.js'
import { loader } from '../loader/loader.js'



export async function genre() {
    const number = 1;
    const max = 27;
    let data = []
    let json;


    clearElement('.app')
    loader('.app')

    if (checkStorage('overview')) {
        data = JSON.parse(localStorage.getItem('overview'))
    } else {
        for (let i = number; i < max; i++) {
            json = await fetchData(`/artist/${i}`)
            data.push(json)

            if (json) {
                console.log('hoi')
                clearElement('.loader')
            }
        }
    }
    setStorage('overview', data)
    render.genre(data)

}