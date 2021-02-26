import { fetchData } from '../api/fetch.js'
import { render } from '../render/render.js'
import { clearElement } from '../utils/clearElement.js'
import { checkStorage, setStorage } from '../utils/localstorage.js'
import { loader } from '../loader/loader.js'
import { removeElement } from '../utils/clearElement.js'
import { formatData } from '../utils/formatData.js'
import { filterArray } from '../utils/FilterArray.js'




export async function genre(input) {

    const number = 1
    const max = 27
    let data = new Array
    let json



    clearElement('.app')
    loader('.app')

    // If input prompt has been filled in
    if (input) {

        const lowercase = input.toLowerCase()

        if (checkStorage(`search${lowercase}`)) {
            data = JSON.parse(localStorage.getItem(`search${lowercase}`))
            removeElement('.loader')
            return render.genre(data)
        }


        const json = await fetchData(`search?q=${input}`)

        json.data.map((el) => {
            return el
        })

        if (json) {
            removeElement('.loader')
        }


        const formatStructure = formatData(json.data)
        const uniqueArray = filterArray(formatStructure)


        setStorage(`search${lowercase}`, uniqueArray)
            // Set storage overview to the last known search
        setStorage('overview', uniqueArray)

        return render.genre(uniqueArray)
    }
    // END OF INPUT

    // Else check if
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
