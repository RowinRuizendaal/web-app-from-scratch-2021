export function clearElement(element) {
    document.querySelector(element).innerHTML = ''
}

export function removeElement(element) {
    let el = document.querySelector(element)
    el.remove()
}