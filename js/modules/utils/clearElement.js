export function clearElement(element) {
    return document.querySelector(element).innerHTML = ''
}

export function removeElement(element) {
    let el = document.querySelector(element)
    return el.remove()
}