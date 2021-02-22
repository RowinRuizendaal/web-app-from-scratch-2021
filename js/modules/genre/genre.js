import { fetchData } from '../api/fetch.js'
import { render } from '../render/render.js'
import { clearElement } from '../clearElement/clearElement.js'
import { checkStorage, setStorage } from '../localstorage/checkStorage.js'
import { loader } from '../loader/loader.js'
import { removeElement } from '../clearElement/clearElement.js'



export async function genre(input) {

    const number = 1
    const max = 27
    let data = new Array
    let json

    let overviewStorage = checkStorage('search')

    clearElement('.app')
    loader('.app')

    // If input prompt has been filled in
    if (input) {

        if (checkStorage('search')) {
        for (let i = 0; i < JSON.parse(overviewStorage).length; i++) {

            if (JSON.parse(overviewStorage)[i].name === input) {
                data.push(JSON.parse(overviewStorage)[i])
                return render.genre(data)
            }
        }
    }


        const json = await fetchData((`search?q=${input}`))

        json.data.map((el) => {
            return el
        })

        if (json) {
            removeElement('.loader')
        }


        // https://gomakethings.com/how-to-update-localstorage-with-vanilla-javascript/

        // If no existing data, create an object
        // Otherwise, convert the localStorage string to an array
        overviewStorage = overviewStorage ? JSON.parse(overviewStorage) : {}

        const formatData = json.data.map((el) => {
            let res = {
              id: el.artist.id,
              name: el.artist.name, 
              picture_medium: el.artist.picture_medium,
              type: el.type
            }
            return data.push(res)
        });
        
        // Save back to localstorage
        setStorage('search', overviewStorage)


        return render.genre(data)
    }


    if (checkStorage('overview')) {
        data = JSON.parse(localStorage.getItem('overview'))
        removeElement('.loader')
    } else {
        for (let i = number; i < max; i++) {
            json = await fetchData(`/artist/${i}`)
            data.push(json)
        }

        if (json) {
            removeElement('.loader')
        }
    }

    setStorage('overview', data)
    render.genre(data)
}