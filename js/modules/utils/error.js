import {
    createElement
} from '../utils/createElements.js'

import { removeElement } from '../utils/clearElement.js'

export const error = () => {

    const container = document.querySelector('.app')
    const text = `<p id='error'>Sorry the API has been called to many times, please come back later or try to refresh your browser</p>`


    let backButton = createElement('a', 'go-back')
    backButton.appendChild(document.createTextNode("Go back"))
    backButton.href = `#overview`;


    container.appendChild(backButton)
    removeElement('.loader')

    return container.insertAdjacentHTML('beforeend', text)
}